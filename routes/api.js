'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { locale, text } = req.body;
      const translation = translator.translate(locale, text);

      res.status(200).json(translator.translate(translation));
    });
};
