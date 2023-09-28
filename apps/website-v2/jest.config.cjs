/** @type {(overrideConfig: import('jest').Config) => Promise<import('jest').Config>} */
const createConfig = require('@tuloki/jest/jest.nextjs.cjs');

module.exports = createConfig({
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^#core/(.*)$': '<rootDir>/../../packages/core/$1',
  },
});
