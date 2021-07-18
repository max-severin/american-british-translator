const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');  
const translator = new Translator();

suite('Unit Tests', () => {
  test('Translate "Mangoes are my favorite fruit." to British English', function (done) {
    const locale = 'american-to-british';
    const text = 'Mangoes are my favorite fruit.';

    const translation = translator.translate(locale, text);
    const expected = 'Mangoes are my favourite fruit.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "I ate yogurt for breakfast." to British English', function (done) {
    const locale = 'american-to-british';
    const text = 'I ate yogurt for breakfast.';
    
    const translation = translator.translate(locale, text);
    const expected = 'I ate yoghurt for breakfast.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "We had a party at my friend\'s condo." to British English', function (done) {
    const locale = 'american-to-british';
    const text = 'We had a party at my friend\'s condo.';
    
    const translation = translator.translate(locale, text);
    const expected = 'We had a party at my friend\'s flat.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "Can you toss this in the trashcan for me?" to British English', function (done) {
    const locale = 'american-to-british';
    const text = 'Can you toss this in the trashcan for me?';
    
    const translation = translator.translate(locale, text);
    const expected = 'Can you toss this in the bin for me?';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "The parking lot was full." to British English', function (done) {
    const locale = 'american-to-british';
    const text = 'The parking lot was full.';
    
    const translation = translator.translate(locale, text);
    const expected = 'The car park was full.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "Like a high tech Rube Goldberg machine." to British English', function (done) {
    const locale = 'american-to-british';
    const text = 'Like a high tech Rube Goldberg machine.';
    
    const translation = translator.translate(locale, text);
    const expected = 'Like a high tech Heath Robinson device.';

    assert.equal(translation, expected);
 
    done();  
  });

  test('Translate "To play hooky means to skip class or work." to British English', function (done) {
    const locale = 'american-to-british';
    const text = 'To play hooky means to skip class or work.';
    
    const translation = translator.translate(locale, text);
    const expected = 'To bunk off means to skip class or work.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "No Mr. Bond, I expect you to die." to British English', function (done) {
    const locale = 'american-to-british';
    const text = 'No Mr. Bond, I expect you to die.';
    
    const translation = translator.translate(locale, text);
    const expected = 'No Mr Bond, I expect you to die.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "Dr. Grosh will see you now." to British English', function (done) {
    const locale = 'american-to-british';
    const text = 'Dr. Grosh will see you now.';
    
    const translation = translator.translate(locale, text);
    const expected = 'Dr Grosh will see you now.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "Lunch is at 12:15 today." to British English', function (done) {
    const locale = 'american-to-british';
    const text = 'Lunch is at 12:15 today.';
    
    const translation = translator.translate(locale, text);
    const expected = 'Lunch is at 12.15 today.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "We watched the footie match for a while." to American English', function (done) {
    const locale = 'british-to-american';
    const text = 'We watched the footie match for a while.';
    
    const translation = translator.translate(locale, text);
    const expected = 'We watched the soccer match for a while.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "Paracetamol takes up to an hour to work." to American English', function (done) {
    const locale = 'british-to-american';
    const text = 'Paracetamol takes up to an hour to work.';
    
    const translation = translator.translate(locale, text);
    const expected = 'Tylenol takes up to an hour to work.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "First, caramelise the onions." to American English', function (done) {
    const locale = 'british-to-american';
    const text = 'First, caramelise the onions.';
    
    const translation = translator.translate(locale, text);
    const expected = 'First, caramelize the onions.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "I spent the bank holiday at the funfair." to American English', function (done) {
    const locale = 'british-to-american';
    const text = 'I spent the bank holiday at the funfair.';
    
    const translation = translator.translate(locale, text);
    const expected = 'I spent the public holiday at the carnival.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "I had a bicky then went to the chippy." to American English', function (done) {
    const locale = 'british-to-american';
    const text = 'I had a bicky then went to the chippy.';
    
    const translation = translator.translate(locale, text);
    const expected = 'I had a cookie then went to the fish-and-chip shop.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "I\'ve just got bits and bobs in my bum bag." to American English', function (done) {
    const locale = 'british-to-american';
    const text = 'I\'ve just got bits and bobs in my bum bag.';
    
    const translation = translator.translate(locale, text);
    const expected = 'I\'ve just got odds and ends in my fanny pack.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "The car boot sale at Boxted Airfield was called off." to American English', function (done) {
    const locale = 'british-to-american';
    const text = 'The car boot sale at Boxted Airfield was called off.';
    
    const translation = translator.translate(locale, text);
    const expected = 'The swap meet at Boxted Airfield was called off.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "Have you met Mrs Kalyani?" to American English', function (done) {
    const locale = 'british-to-american';
    const text = 'Have you met Mrs Kalyani?';
    
    const translation = translator.translate(locale, text);
    const expected = 'Have you met Mrs. Kalyani?';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "Prof Joyner of King\'s College, London." to American English', function (done) {
    const locale = 'british-to-american';
    const text = 'Prof Joyner of King\'s College, London.';
    
    const translation = translator.translate(locale, text);
    const expected = 'Prof. Joyner of King\'s College, London.';

    assert.equal(translation, expected);

    done();
  });

  test('Translate "Tea time is usually around 4 or 4.30." to American English', function (done) {
    const locale = 'british-to-american';
    const text = 'Tea time is usually around 4 or 4.30.';
    
    const translation = translator.translate(locale, text);
    const expected = 'Tea time is usually around 4 or 4:30.';

    assert.equal(translation, expected);

    done();
  });

  test('Highlight translation in "Mangoes are my favorite fruit."', function (done) {
    const locale = 'american-to-british';
    const text = 'Mangoes are my favorite fruit.';
    
    const translation = translator.highlight(locale, text);
    const expected = 'Mangoes are my <span class="highlight">favourite</span> fruit.';

    assert.equal(translation, expected);

    done();
  });

  test('Highlight translation in "I ate yogurt for breakfast."', function (done) {
    const locale = 'american-to-british';
    const text = 'I ate yogurt for breakfast.';
    
    const translation = translator.highlight(locale, text);
    const expected = 'I ate <span class="highlight">yoghurt</span> for breakfast.';

    assert.equal(translation, expected);

    done();
  });

  test('Highlight translation in "We watched the footie match for a while."', function (done) {
    const locale = 'british-to-american';
    const text = 'We watched the footie match for a while.';
    
    const translation = translator.highlight(locale, text);
    const expected = 'We watched the <span class="highlight">soccer</span> match for a while.';

    assert.equal(translation, expected);

    done();
  });

  test('Highlight translation in "Paracetamol takes up to an hour to work."', function (done) {
    const locale = 'british-to-american';
    const text = 'Paracetamol takes up to an hour to work.';
    
    const translation = translator.highlight(locale, text);
    const expected = '<span class="highlight">Tylenol</span> takes up to an hour to work.';

    assert.equal(translation, expected);

    done();
  });

});