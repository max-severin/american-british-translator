const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  flipObject (data) {
    const newObj = {};

    for (const prop in data) {
      if(data.hasOwnProperty(prop)) {
        newObj[data[prop]] = prop;
      }
    }

    return newObj;
  }

  validateLocale(locale) {
    const possibleLocales = [ 'american-to-british', 'british-to-american' ];

    return possibleLocales.includes(locale);
  }

  replaceOneWord (wordOriginal, wordProcessed, dictionary, wrapper) {
    let wordTranslated = dictionary[wordProcessed];

    if (wrapper) {
      return wordOriginal.toLowerCase().replace(
        wordProcessed, 
        '<span class="highlight">'
        + (wordOriginal[0] == wordOriginal[0].toLowerCase() 
          ? wordTranslated
          : wordTranslated[0].toUpperCase() + wordTranslated.slice(1))
        + '</span>'
      );
    } else {
      return wordOriginal.toLowerCase().replace(
        wordProcessed, 
        wordOriginal[0] == wordOriginal[0].toLowerCase() 
          ? wordTranslated
          : wordTranslated[0].toUpperCase() + wordTranslated.slice(1)
      );
    }    
  }

  replaceMultyWord (text, wrapper, ...dictionaries) {
    for (let dictionary of dictionaries) {
      const dictionaryFiltered = Object.keys(dictionary)
        .filter(key => key.includes(' '))
        .reduce((obj, key) => {
          obj[key] = dictionary[key];

          return obj;
      }, {});

      for (const [word, translation] of Object.entries(dictionaryFiltered)) {

        const wordRegExp = new RegExp(`${word}\\W`, "gi");

        if (wordRegExp.test(text)) {
          const wordIndex = text.toLowerCase().indexOf(word);

          if (wrapper) {
            text = text.replace(
              new RegExp(word, 'gi'), 
              '<span class="highlight">'
              + (text[wordIndex] == text[wordIndex].toLowerCase() 
                ? translation 
                : translation[0].toUpperCase() + translation.slice(1))
              + '</span>'
            );
          } else {
            text = text.replace(
              new RegExp(word, 'gi'), 
              text[wordIndex] == text[wordIndex].toLowerCase() 
                ? translation 
                : translation[0].toUpperCase() + translation.slice(1)
            );
          }
        }        
      }
    }

    for (let dictionary of dictionaries) {
      text = text.split(' ').map((word) => {
        let wordProcessed = word.toLowerCase();

        if (dictionary[wordProcessed]) {
          return this.replaceOneWord(word, wordProcessed, dictionary, wrapper);
        }

        wordProcessed = word.replace(/\W/, '');

        if (dictionary[wordProcessed]) {
          return this.replaceOneWord(word, wordProcessed, dictionary, wrapper);
        }

        return word;
      }).join(' ');
    }

    return text;
  }

  translate (locale, text, wrapper = false) {
    let translation = '';

    if (locale === 'american-to-british') {
      const timeRegExp = /(\d{1,2}):(\d{2})/;

      translation = this.replaceMultyWord(text, wrapper, americanOnly, americanToBritishTitles, americanToBritishSpelling);

      if (timeRegExp.test(text)) {
        if (wrapper) {
          translation = translation.replace(timeRegExp, '<span class="highlight">$1.$2</span>');
        } else {
          translation = translation.replace(timeRegExp, '$1.$2');
        }
      }

    }

    if (locale === 'british-to-american') {
      const timeRegExp = /(\d{1,2}).(\d{2})/;
      const britishToAmericanTitles = this.flipObject(americanToBritishTitles);
      const britishToAmericanSpelling = this.flipObject(americanToBritishSpelling);

      translation = this.replaceMultyWord(text, wrapper, britishOnly, britishToAmericanTitles, britishToAmericanSpelling);

      if (timeRegExp.test(text)) {
        if (wrapper) {
          translation = translation.replace(timeRegExp, '<span class="highlight">$1:$2</span>');
        } else {
          translation = translation.replace(timeRegExp, '$1:$2');
        }
      }
    }

    return translation;
  }

  highlight(locale, text) {
    return this.translate(locale, text, true);
  }
}

module.exports = Translator;