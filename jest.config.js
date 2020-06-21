const { defaults } = require('jest-config');

module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testRegex: "./spec/.*\\.(spec).(ts|tsx)$",
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  }
};
