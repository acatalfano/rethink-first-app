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
        // TODO: include 'html' and it sees "TestBed" as undefined
        //          exclude and it can't import from lodash-es b/c "unexpected token 'export'"
        //                                          ^^ from inside lodash-es/lodash.js at export { default as add } from './add.js'
        // 'html',
        'js',
        'json',
        'ts',
        // 'mjs'
    ],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        '^app/(.*)$': '<rootDir>/src/app/$1',
        '^assets/(.*)$': '<rootDir>/src/assets/$1',
        '^environments/(.*)$': '<rootDir>/src/environments/$1',
    },
    // modulePathIgnorePatterns: ['<rootDir>/node_modules/.*'],
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
        '^.+\\.(ts|js|html)$': 'jest-preset-angular',
    },
    // transformIgnorePatterns: ['/node_modules/(?!.*\\.mjs$)']
    // transformIgnorePatterns: ['/node_modules/(?!@ngrx)']
    // transformIgnorePatterns: ['node_modules/(?!@angular|@ngx-translate)']
    transformIgnorePatterns: ['node_modules/.*/(?!.*\.mjs)']
    // transformIgnorePatterns: ['/node_modules/(?!lodash-es)']
    // include this ^^^^^ (or the ngrx one) and get "cannot use import statement outside a module"
};
