module.exports = {
  setupFiles: [
    "<rootDir>/setupTests.ts"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    "<rootDir>/src/**/*.(spec|test).(ts|tsx|js)"
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/moduleStub.js'
  }
};
