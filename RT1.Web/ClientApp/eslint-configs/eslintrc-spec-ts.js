/* eslint-disable no-magic-numbers */
'use strict';

module.exports = {
    env: {
        browser: false,
        jest: true
    },
    plugins: ['jest', 'jest-formatting'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        project: 'tsconfig.spec.json',
        jest: true,
        'jest/globals': true
    },
    extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-formatting/recommended',
        './eslintrc-shared-ts-and-js'
    ],
    rules: {
        'jest/consistent-test-it': 'warn',
        'jest/expect-expect': ['warn', { assertFunctionNames: ['expect', '*.expect', 'expect*'] }],
        'jest/max-nested-describe': 'warn',
        'jest/no-conditional-expect': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/no-if': 'warn',
        'jest/no-large-snapshots': 'warn',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-called-with': 'warn',
        'jest/prefer-expect-assertions': 'warn',
        'jest/prefer-expect-resolves': 'warn',
        'jest/prefer-hooks-on-top': 'warn',
        'jest/prefer-lowercase-title': ['warn', { ignore: ['describe'] }],
        'jest/prefer-todo': 'warn',
        'jest/require-to-throw-message': 'warn',
        'jest/require-top-level-describe': 'error',
        'jest/valid-title': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }
        ]
    }
};
/* eslint-enable no-magic-numbers */
