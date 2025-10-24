import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',

  testEnvironment: 'node',

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^#src/(.*)\\.js$': '<rootDir>/src/$1',
  },

  extensionsToTreatAsEsm: ['.ts'],

  transform: {
    '^.+\\.m?[tj]sx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },

  coverageProvider: 'v8',
  coverageDirectory: 'coverage',

  clearMocks: true,
};

export default jestConfig;
