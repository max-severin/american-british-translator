const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  translate(locale, text) {
    console.log(locale, text);

    return null;
  }

  highlight(locale, text) {
    console.log(locale, text);

    return null;
  }
}

module.exports = Translator;