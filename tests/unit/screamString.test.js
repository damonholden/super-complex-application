import { screamString } from "../../frontend/src/util/screamString"

describe('screamString', () => {
  test('should return an uppercase string with an exclamation point', () => {
    expect(screamString('hello')).toBe('HELLO!');
  });

  test('should return an error message if an empty string is provided', () => {
    expect(screamString('')).toBe('please provide a string');
  });

  test('should return an error message if it receives anything other than a single string', () => {
    expect(screamString(123)).toBe('please provide a string');
    expect(screamString({})).toBe('please provide a string');
    expect(screamString([])).toBe('please provide a string');
    expect(screamString(true)).toBe('please provide a string');
    expect(screamString(null)).toBe('please provide a string');
    expect(screamString(undefined)).toBe('please provide a string');
  });
});
