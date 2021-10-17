/* eslint-disable no-magic-numbers */
'use strict';

module.exports = {
    plugins: ['eslint-comments', 'jest', 'prettier', 'jsdoc', 'prefer-arrow', 'optimize-regex'],
    extends: [
        'eslint:recommended',
        './eslintrc-import',
        'plugin:eslint-comments/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    reportUnusedDisableDirectives: true,
    rules: {
        'eslint-comments/no-unused-disable': 'error',
        'optimize-regex/optimize-regex': 'warn',
        'block-scoped-var': 'error',
        camelcase: 'error',
        complexity: 'error',
        'consistent-return': 'error',
        'consistent-this': 'error',
        curly: ['error', 'all'],
        'default-case': 'error',
        'default-case-last': 'error',
        eqeqeq: ['error', 'smart'],
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'error',
        'id-blacklist': [
            'error',
            'any',
            'Number',
            'number',
            'String',
            'string',
            'Boolean',
            'boolean',
            'Undefined',
            'undefined'
        ],
        'id-match': 'error',
        'lines-around-comment': [
            'warn',
            {
                beforeBlockComment: true,
                beforeLineComment: true,
                allowClassStart: true,
                allowArrayStart: true
            }
        ],
        'max-len': [
            'error',
            {
                code: 120,
                tabWidth: 4,
                ignoreUrls: true,
                ignoreTrailingComments: true
            }
        ],
        'no-alert': 'error',
        'max-classes-per-file': 'error',
        'max-statements-per-line': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-confusing-arrow': ['error', { allowParens: false }],
        'no-console': ['error', { allow: ['error'] }],
        'no-constructor-return': 'error',
        'no-continue': 'error',
        'no-debugger': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty': 'off',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-floating-decimal': 'error',
        'no-func-assign': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-labels': 'error',
        'no-label-var': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-negated-condition': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-new-object': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-promise-executor-return': 'error',
        'no-proto': 'error',
        'no-restricted-properties': ['error'],
        'no-restricted-syntax': ['error', 'SequenceExpression'],
        'no-return-assign': ['error', 'always'],
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-underscore-dangle': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-labels': 'error',
        'no-useless-backreference': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
        'no-useless-concat': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'object-shorthand': ['error', 'always', { avoidQuotes: true, avoidExplicitReturnArrows: true }],
        'one-var': ['error', 'never'],
        'operator-assignment': 'error',
        'prefer-const': 'error',
        // 'prefer-destructuring': [
        //     'error',
        //     {
        //         VariableDeclarator: {
        //             array: true,
        //             object: true
        //         },
        //         AssignmentExpression: {
        //             array: false,
        //             object: false
        //         }
        //     },
        //     { enforceForRenamedProperties: true }
        // ],
        'prefer-numeric-literals': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
        radix: ['error', 'as-needed'],
        'require-atomic-updates': 'error',
        'require-await': 'error',
        'require-unicode-regexp': 'error',
        'spaced-comment': [
            'warn',
            'always',
            {
                markers: ['/']
            }
        ],
        'symbol-description': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'off',
        'vars-on-top': 'error',
        'wrap-iife': ['error', 'inside'],
        yoda: 'error'
    }
};
/* eslint-enable no-magic-numbers */
