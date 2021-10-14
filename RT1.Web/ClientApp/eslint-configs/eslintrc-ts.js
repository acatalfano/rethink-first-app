'use strict';

/* eslint-disable no-magic-numbers */
module.exports = {
    plugins: ['@angular-eslint', 'jsdoc'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
            modules: true
        }
    },
    extends: [
        './eslintrc-shared-ts-and-js',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@angular-eslint/recommended',
        'plugin:import/typescript'
    ],
    rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array' }],
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    '{}': {
                        message: 'Avoid using the `{}` type. Use `object` instead',
                        fixWith: 'object'
                    },
                    Object: {
                        message: 'Avoid using the `Object` type. Did you mean `object`?',
                        fixWith: 'object'
                    },
                    Function: {
                        message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
                    },
                    // eslint-disable-next-line id-blacklist
                    Boolean: {
                        message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
                        fixWith: 'boolean'
                    },
                    // eslint-disable-next-line id-blacklist
                    Number: {
                        message: 'Avoid using the `Number` type. Did you mean `number`?',
                        fixWith: 'number'
                    },
                    // eslint-disable-next-line id-blacklist
                    String: {
                        message: 'Avoid using the `String` type. Did you mean `string`?',
                        fixWith: 'string'
                    },
                    Symbol: {
                        message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
                        fixWith: 'symbol'
                    }
                }
            }
        ],
        '@typescript-eslint/class-literal-property-style': 'error',
        '@typescript-eslint/consistent-type-definitions': 'error',
        // '@typescript-eslint/consistent-type-imports': 'error',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }
        ],
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                overrides: {
                    constructors: 'no-public',
                    parameterProperties: 'off'
                }
            }
        ],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'signature',
                    'public-static-field',
                    'public-decorated-field',
                    'public-instance-field',
                    'public-abstract-field',
                    'protected-static-field',
                    'protected-decorated-field',
                    'protected-instance-field',
                    'protected-abstract-field',
                    'private-static-field',
                    'private-decorated-field',
                    'private-instance-field',
                    'private-abstract-field',
                    'constructor',
                    'public-static-method',
                    'public-decorated-method',
                    'public-instance-method',
                    'public-abstract-method',
                    'protected-static-method',
                    'protected-decorated-method',
                    'protected-instance-method',
                    'protected-abstract-method',
                    'private-static-method',
                    'private-decorated-method',
                    'private-instance-method',
                    'private-abstract-method'
                ]
            }
        ],
        '@typescript-eslint/naming-convention': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-dupe-class-members': 'error',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/no-implicit-any-catch': 'error',
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': ['error', { capIsConstructor: false }],
        '@typescript-eslint/no-invalid-void-type': 'error',
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'error',
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': [
            'error',
            {
                ignore: [0, 1],
                ignoreArrayIndexes: true,
                enforceConst: true,
                detectObjects: true,
                ignoreEnums: true,
                ignoreReadonlyClassProperties: true
            }
        ],
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/strict-boolean-expressions': [
            'error',
            {
                allowString: false,
                allowNumber: false,
                allowNullableObject: false,
                allowNullableBoolean: false,
                allowNullableString: false,
                allowNullableNumber: false,
                allowAny: false
            }
        ],
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-shadow': [
            'error',
            {
                hoist: 'all',
                builtinGlobals: true,
                ignoreTypeValueShadow: false,
                ignoreFunctionTypeParameterNameValueShadow: false
            }
        ],
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
            'error',
            { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrors: 'all' }],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                variables: true,
                typedefs: false,
                ignoreTypeReferences: false
            }
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        quotes: 'off',
        '@typescript-eslint/quotes': [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: false
            }
        ],
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/require-array-sort-compare': ['error', { ignoreStringArrays: true }],
        '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
        '@typescript-eslint/restrict-template-expressions': [
            'error',
            { allowNumber: true, allowBoolean: true, allowAny: false, allowNullish: false }
        ],
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/triple-slash-reference': [
            'error',
            {
                path: 'always',
                types: 'prefer-import',
                lib: 'always'
            }
        ],
        '@typescript-eslint/unified-signatures': 'error'
    },
    settings: {
        jsdoc: {
            mode: 'typescript'
        }
    }
};
/* eslint-enable no-magic-numbers */
