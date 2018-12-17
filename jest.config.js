module.exports = {
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest'
  },
  testMatch: ['**/__tests__/**/(*.)+(spec|test).js?(x)']
};
