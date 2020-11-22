module.exports = {
  moduleFileExtensions: ["js", "html"],
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.html$': 'html-loader-jest'
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  testMatch: [
    '<rootDir>/tests/*.spec.js'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};