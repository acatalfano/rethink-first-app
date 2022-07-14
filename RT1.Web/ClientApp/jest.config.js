// eslint-disable-next-line import/no-unassigned-import
// import('jest-preset-angular/ngcc-jest-processor');

module.exports = {
    clearMocks: false,
    // TODO: better yet, have an override CLI in package.json scripts!
    // set to true for coverage, will slow down tests
    collectCoverage: false,
    coverageDirectory: '<rootDir>/coverage',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],

    // Some options we have for configurations on coverageThreshold settings
    // (used to add "failure" behavior to not meeting certain threshold goals)
    // -- N.B. may want to setup some constant numbers and drop the eslint-disables!
    //
    // /* eslint-disable no-magic-numbers */
    // coverageThreshold: {
    //     global: {
    //         branches: 80,
    //         functions: 80,
    //         lines: 80,
    //         statements: -10
    //     }
    // },
    // /* eslint-enable no-magic-numbers */
    // /* eslint-disable no-magic-numbers */
    // coverageThreshold: {
    //     global: {
    //         branches: 50,
    //         functions: 50,
    //         lines: 50,
    //         statements: 50
    //     },
    //     './src/components/': {
    //         branches: 40,
    //         statements: 40
    //     },
    //     './src/reducers/**/*.js': {
    //         statements: 90
    //     },
    //     './src/api/very-important-module.js': {
    //         branches: 100,
    //         functions: 100,
    //         lines: 100,
    //         statements: 100
    //     }
    // },
    // /* eslint-enable no-magic-numbers */

    // transform: {
    //     '^.+\\.(j|t)sx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
    // },
    // transformIgnorePatterns: [
    //     '<rootDir>/node_modules/(?!lodash-es/.*)'
    // ],
    // transform: {
    //     '^.+\\.(ts|js|mjs|html)$': 'jest-preset-angular'
    // },
    // transformIgnorePatterns: [
    //     'node_modules/(?!@angular|tslib)'
    // ],

    moduleNameMapper: {
        '^lodash-es$': 'lodash',
        // tslib: '<rootDir>../../node_modules/tslib/tslib.es6.js'
    },

    moduleDirectories: ['node_modules', 'src', 'src/app'],
    // modulePathIgnorePatterns: ['<rootDir>/node_modules/.*'],
    // preset: 'jest-preset-angular/presets/defaults-esm',
    preset: 'jest-preset-angular',
    roots: ['.'],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment'
    ],
    testMatch: ['**/?(*.)+(spec).[tj]s?(x)']
};
