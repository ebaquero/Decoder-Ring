// Write your tests here!
const { expect } = require('chai');
const {caesar} = require('../src/caesar'); 

describe('caesar()', () => {
  it('should encode a message by shifting the letters', () => {
    const input = 'hello';
    const shift = 3;
    const expected = 'khoor';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });

  it('should decode a message by shifting the letters in the opposite direction', () => {
    const input = 'khoor';
    const shift = 3;
    const expected = 'hello';
    const actual = caesar(input, shift, false);
    expect(actual).to.equal(expected);
  });

  it('should leave spaces and other symbols as is', () => {
    const input = 'hello, world!';
    const shift = 3;
    const expected = 'khoor, zruog!';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });

  it('should ignore capital letters', () => {
    const input = 'Hello';
    const shift = 3;
    const expected = 'khoor';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });

  it('should appropriately handle letters at the end of the alphabet', () => {
    const input = 'xyz';
    const shift = 3;
    const expected = 'abc';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });

  it('should allow for a negative shift that shifts to the left', () => {
    const input = 'abc';
    const shift = -3;
    const expected = 'xyz';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });

  it('should return false for an invalid shift value', () => {
    const input = 'hello';
    const shift = 30; // Invalid shift value
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
});
