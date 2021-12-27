'use strict';

module.exports = {
    plugins: ['import'],
    extends: ['plugin:import/recommended'],
    rules: {
        'import/extensions': 'warn',
        'import/first': 'warn',
        'import/max-dependencies': [
            'error',
            {
                // eslint-disable-next-line no-magic-numbers
                max: 15,
                ignoreTypeImports: true
            }
        ],
        'import/newline-after-import': 'warn',
        'import/no-absolute-path': 'error',
        'import/no-cycle': [
            'error',
            {
                // eslint-disable-next-line no-magic-numbers
                maxDepth: 10,
                ignoreExternal: true
            }
        ],
        'import/no-default-export': 'error',
        'import/no-deprecated': 'warn',
        'import/no-dynamic-require': 'warn',
        'import/no-extraneous-dependencies': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-nodejs-modules': 'error',
        // TODO: vvvvvvvvvvvvvvv       figure out typescript project references and enable if it makes sense to do so...
        // 'import/no-relative-parent-imports': 'error',
        'import/no-self-import': 'error',
        'import/no-unassigned-import': ['error', { allow: ['jest-preset-angular', 'zone.js/dist/zone'] }],
        'import/no-unused-modules': [
            'warn',
            {
                missingExports: true,
                unusedExports: true,
                ignoreExports: ['**/*eslintrc*', '**/*.js', '**/setup-jest.ts', '**/main.ts']
            }
        ],
        'import/no-useless-path-segments': [
            'warn',
            {
                noUselessIndex: true
            }
        ],
        'import/no-webpack-loader-syntax': 'error',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '@angular/**',
                        group: 'external',
                        position: 'before'
                    },
                    {
                        pattern: 'rxjs/**',
                        group: 'external',
                        position: 'before'
                    }
                ],
                pathGroupsExcludedImportTypes: ['type'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            }
        ],
        'import/unambiguous': 'error'
    },
    settings: {
        'import/resolver': {
            typescript: {}
        }
    }
};
