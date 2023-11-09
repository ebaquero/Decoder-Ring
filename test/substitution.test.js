const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe('substitution()', () => {
  it('should encode a message', () => {
    const input = 'thinkful';
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expected = 'jrufscpw';
    const actual = substitution(input, alphabet, true);
    expect(actual).to.equal(expected);
  });

  it('should encode a message with spaces', () => {
    const input = 'you are an excellent spy';
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution(input, alphabet, true);
    expect(actual).to.equal(expected);
  });

  it('should decode a message', () => {
    const input = 'jrufscpw';
    const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
    const expected = 'thinkful';
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });

  it('should decode a message with spaces', () => {
    const input = 'y&ii$r&';
    const alphabet = '$wae&zrdxtfcygvuhbijnokmpl';
    const expected = 'message';
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });

  it('should return false for invalid alphabet length', () => {
    const input = 'thinkful';
    const alphabet = 'short';
    const actual = substitution(input, alphabet, true);
    expect(actual).to.be.false;
  });

  it('should return false for non-unique alphabet characters', () => {
    const input = 'thinkful';
    const alphabet = 'abcabcabcabcabcabcabcabcyz';
    const actual = substitution(input, alphabet, true);
    expect(actual).to.be.false;
  });
});
