module.exports = {
    testEnvironment: "jsdom",
    verbose: true,
    preset: "ts-jest/presets/js-with-ts",
    moduleNameMapper: {
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/tools/tests-mocks/jestMockHelper.js",
      "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
      "^@src/(.*)$": "<rootDir>/src/$1",
    },
    globals: {
      "ts-jest": {
        diagnostics: false,
        tsConfig: "tsconfig.json",
      },
    },
    // setupFilesAfterEnv: ["<rootDir>setupTests.js"],
    collectCoverage: true,
    coverageReporters: ["json", "html", "lcov", "text"],
    moduleDirectories: ["node_modules", "src"],
    moduleFileExtensions: ["ts", "tsx", "js", "json", "scss"],
    transform: {
      "^.+\\.(tsx|ts)?$": "ts-jest",
      "^.+\\.(jsx|js)?$": "babel-jest",
    },
    collectCoverageFrom: ["src/**/*.{js,ts,tsx}"],
  };