const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
} = require('./identify');

const tokenize = (input) => {
  const tokens = [];  // getting an array of tokens
  let cursor = 0; // pointer to the current character

  while (cursor < input.length) {
    const character = input[cursor];
    if (isParenthesis(character)) {
      tokens.push({
        type: 'Parenthesis',
        value: character,
      })
      cursor++;
      continue;
    }

    if (isWhitespace(character)) {
      cursor++;
      continue;
    }
  }

  return tokens;
};

module.exports = { tokenize };
