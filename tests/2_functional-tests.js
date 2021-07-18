const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

  suite("POST request to /api/translate", function () {   

    test("Translation with text and locale fields", function (done) {
      const data = {
        locale: 'american-to-british',
        text: 'Mangoes are my favorite fruit.',
      };
      const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';

      chai
        .request(server)
        .post('/api/translate')
        .send(data)
        .end(function (err, res) {
          assert.equal(res.status, 200);  

          assert.property(res.body, 'text');
          assert.equal(res.body.text, data.text);

          assert.property(res.body, 'translation');
          assert.equal(res.body.translation, expected);

          done();
        });
    });

    test("Translation with text and invalid locale field", function (done) {
      const data = {
        locale: 'invalid-locale-field',
        text: 'Mangoes are my favorite fruit.',
      };
      const error = 'Invalid value for locale field';

      chai
        .request(server)
        .post('/api/translate')
        .send(data)
        .end(function (err, res) {
          assert.equal(res.status, 200);  

          assert.property(res.body, 'error');
          assert.equal(res.body.error, error);

          done();
        });
    });

    test("Translation with missing text field", function (done) {
      const data = {
        locale: 'american-to-british',
      };
      const error = 'Required field(s) missing';

      chai
        .request(server)
        .post('/api/translate')
        .send(data)
        .end(function (err, res) {
          assert.equal(res.status, 200);  

          assert.property(res.body, 'error');
          assert.equal(res.body.error, error);

          done();
        });
    });

    test("Translation with missing locale field", function (done) {
      const data = {
        text: 'Mangoes are my favorite fruit.',
      };
      const error = 'Required field(s) missing';

      chai
        .request(server)
        .post('/api/translate')
        .send(data)
        .end(function (err, res) {
          assert.equal(res.status, 200);  

          assert.property(res.body, 'error');
          assert.equal(res.body.error, error);

          done();
        });
    });

    test("Translation with empty text", function (done) {
      const data = {
        locale: 'american-to-british',
        text: '',
      };
      const error = 'No text to translate';

      chai
        .request(server)
        .post('/api/translate')
        .send(data)
        .end(function (err, res) {
          assert.equal(res.status, 200);  

          assert.property(res.body, 'error');
          assert.equal(res.body.error, error);

          done();
        });
    });

    test("Translation with text that needs no translation", function (done) {
      const data = {
        locale: 'british-to-american',
        text: 'Mangoes are my favorite fruit.',
      };
      const expected = 'Everything looks good to me!';

      chai
        .request(server)
        .post('/api/translate')
        .send(data)
        .end(function (err, res) {
          assert.equal(res.status, 200);  

          assert.property(res.body, 'text');
          assert.equal(res.body.text, data.text);

          assert.property(res.body, 'translation');
          assert.equal(res.body.translation, expected);

          done();
        });
    });

  });

});
