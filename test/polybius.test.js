const { expect } = require('chai');
const { polybius } = require('../src/polybius'); 

describe('Polybius Square Cipher', () => {
  describe('Encoding', () => {
    it('should encode a message by translating each letter to number pairs', () => {
      const input = 'hello';
      const expected = '3251131343';
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });

    it('should translate both "i" and "j" to 42', () => {
      const input = 'ij';
      const expected = '4242';
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });

    it('should leave spaces as is', () => {
      const input = 'hello world';
      const expected = '3251131343 2543241341';
      const actual = polybius(input);
      expect(actual).to.equal(expected);
    });
  });

  describe('Decoding', () => {
    it('should decode a message by translating each pair of numbers into a letter', () => {
      const input = '3251131343';
      const expected = 'hello';
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });

    it('should leave spaces as is', () => {
      const input = '3251131343 2543241341';
      const expected = 'hello world';
      const actual = polybius(input, false);
      expect(actual).to.equal(expected);
    });
  });

  describe('Edge Cases', () => {
    it('should return false for an uneven number of characters in decoding', () => {
      const input = '3251131343 254324134';
      const actual = polybius(input, false);
      expect(actual).to.be.false;
    });
  });
});
