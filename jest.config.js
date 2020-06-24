const { defaults } = require('jest-config');

module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  testRegex: "./spec/.*\\.(spec).(ts|tsx)$"
};
