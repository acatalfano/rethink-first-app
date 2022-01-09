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
        // TODO: including 'html' causes issues (even in the test_app version!!)
        //      (why??? it makes NO SENSE!)
        'js',
        'json',
        'ts',
        'mjs'
        // TODO: double-check, I think jest-preset-angular takes care of moduleFileExtensions!
    ],
    modulePathIgnorePatterns: ['<rootDir>/node_modules/.*'],
    preset: 'jest-preset-angular',
    roots: ['src'],
    setupFilesAfterEnv: ['./setup-jest.ts'],
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment'
    ],
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(spec).[tj]s?(x)'],
    // testPathIgnorePatterns: ['<rootDir>/node_modules'],
    transform: {
        // TODO: figure out why jest and NG 12 clash here
        // '().+\\.ts$': 'babel-jest',
        // '^.+\\.(ts|html)$': 'ts-jest'
    } //,
    // transformIgnorePatterns: ['/node_modules/(?!)']
};
