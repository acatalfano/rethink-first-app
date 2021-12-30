//TODO: vvv that fixed the "can't load ngcc" error (maybe?) (plus commenting the line out in setup-jest.ts)
//              ....but why????
require('jest-preset-angular/ngcc-jest-processor');

module.exports = {
    bail: 1,
    clearMocks: false,
    collectCoverage: false,
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    globals: {
        'ts-jest': {
            tsconfig: '<rootDir>/tsconfig.spec.json',
            isolatedModules: true,
            stringifyContentPathRegex: '\\.html$',
            astTransformers: ['jest-preset-angular/InlineHtmlStripStylesTransformer.js']
        }
    },
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: [
        // 'html',
        'js',
        'json',
        'ts',
        'mjs'
    ],
    modulePathIgnorePatterns: ['<rootDir>/node_modules/.*'],
    preset: 'jest-preset-angular',
    roots: ['src'],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment'
    ],
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(spec).[tj]s?(x)'],
    transform: {
        // '^.+\\.(ts|html)$': 'ts-jest',
        //'().+\\.ts$': 'babel-jest'
        // '^.+\\.js$': 'babel-jest',
    },
    // transformIgnorePatterns: ['/node_modules/(?!.*\\.mjs$)']
    // transformIgnorePatterns: ['/node_modules/(?!@ngrx)']
};
