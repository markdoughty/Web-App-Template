//Tests for the logic function

const { generateGreeting } = require('../src/logic');

describe('generateGreeting', () => {

  test('returns greeting when name is provided', () => {
    expect(generateGreeting('Alice')).toBe('Hello, Alice!');
  });

  test('handles empty input', () => {
    expect(generateGreeting('')).toBe('Please enter your name.');
  });

  test('handles whitespace input', () => {
    expect(generateGreeting('   ')).toBe('Please enter your name.');
  });

});