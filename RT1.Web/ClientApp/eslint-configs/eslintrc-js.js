'use strict';

module.exports = {
    parser: '@babel/eslint-parser',
    extends: ['./eslintrc-shared-ts-and-js'],
    rules: {
        'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
        'default-param-last': 'error',
        'dot-notation': ['error', { allowKeywords: false }],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'no-invalid-this': 'error',
        'no-loop-func': 'error',
        'no-loss-of-precision': 'error',
        'no-magic-numbers': [
            'error',
            { ignore: [0, 1], ignoreArrayIndexes: true, enforceConst: true, detectObjects: true }
        ],
        'no-shadow': ['error', { hoist: 'all', builtinGlobals: true }],
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
        'no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrors: 'all' }],
        'no-use-before-define': ['error', { variables: true }],
        'no-useless-constructor': 'error',
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: false
            }
        ],
        'require-await': 'error',
        'no-return-await': 'error',
        'import/no-unused-modules': ['error', { unusedExports: true }],
        'import/unambiguous': 'off'
    }
};
