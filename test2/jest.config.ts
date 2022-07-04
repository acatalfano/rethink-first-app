require('jest-preset-angular/ngcc-jest-processor');

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(spec).[tj]s?(x)'],
    transform: {
        // '^.+\\.(ts|html)$': 'ts-jest',
        //'().+\\.ts$': 'babel-jest'
        // '^.+\\.js$': 'babel-jest',
        '^.+\\.(ts|js|html)$': 'jest-preset-angular',
    },
    transformIgnorePatterns: ['node_modules/.*/(?!.*\.mjs)']
}
