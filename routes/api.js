'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { locale, text } = req.body;

      if (text === '') {
        res.status(200).json({
          error: 'No text to translate'
        });
      }

      if (!text || !locale) {
        res.status(200).json({
          error: 'Required field(s) missing'
        });
      }

      if (!translator.validateLocale(locale)) {
        res.status(200).json({
          error: 'Invalid value for locale field'
        });
      }

      const translation = translator.highlight(locale, text);

      if (text === translation) {
        res.status(200).json({
          text,
          translation: 'Everything looks good to me!',
        });
      }

      res.status(200).json({
        text,
        translation,
      });
    });
};
