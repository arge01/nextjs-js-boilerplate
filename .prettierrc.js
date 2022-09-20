module.exports = {
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
};
