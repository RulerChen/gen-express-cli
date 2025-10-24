export default {
  testEnvironment: 'node',
  
  transform: {},
  
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^#src/(.*)\\.js$': '<rootDir>/src/$1',
  },

  coverageProvider: 'v8',
  coverageDirectory: 'coverage',

  clearMocks: true,
};
