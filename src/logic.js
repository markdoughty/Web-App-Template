//Testable logic separated from UI logic

function generateGreeting(name) {
  if (!name || name.trim() === '') {
    return 'Please enter your name.';
  }
  return `Hello, ${name}!`;
}

// Export for testing
if (typeof module !== 'undefined') {
  module.exports = { generateGreeting };
}