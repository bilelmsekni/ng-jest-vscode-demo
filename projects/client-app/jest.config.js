module.exports = {
  roots: ['<rootDir>/projects/client-app/src'],
  setupFiles: ['<rootDir>/projects/client-app/jest.helpers.js'],
  modulePaths: ['<rootDir>/dist'],
  moduleNameMapper: {
    '@client-app/(.*)': '<rootDir>/projects/client-app/src/$1'
  },
  testMatch: ['**/client-app/**/*.spec.ts']
};
