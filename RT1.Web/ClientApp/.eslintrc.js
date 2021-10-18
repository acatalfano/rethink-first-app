module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true
    },
    plugins: ['eslint-comments', 'import', 'prefer-arrow', 'prettier'],
    overrides: [
        {
            files: ['*.js'],
            extends: ['./eslint-configs/eslintrc-js']
        },
        {
            files: ['*.component.html'],
            extends: ['plugin:@angular-eslint/template/recommended']
        },
        {
            files: ['*.component.html'],
            excludedFiles: ['*inline-template-*.component.html'],
            extends: ['plugin:prettier/recommended'],
            rules: {
                'prettier/prettier': ['warn', { parser: 'angular' }]
            }
        },
        {
            files: ['setup-jest.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: `${__dirname}/tsconfig.json`
            }
        },
        {
            files: ['*.ts'],
            excludedFiles: ['*.spec.ts', '*-spec.ts', 'setup-jest.ts'],
            extends: ['./eslint-configs/eslintrc-ts'],
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: `${__dirname}/tsconfig.json`
            },
            rules: {
                // TODO: revisit why this is misbehaving
                'import/no-unused-modules': 'off',
                'rxjs/finnish': 'off'
            }
        },
        {
            files: ['**/*.js'],
            rules: {
                'lines-around-comment': 'off'
            }
        },
        {
            files: ['*.spec.ts', '*-spec.ts'],
            excludedFiles: ['**/e2e/**/*.spec.ts', '**/e2e/**/*-spec.ts'],
            extends: ['./eslint-configs/eslintrc-spec-ts'],
            rules: {
                'import/no-unused-modules': 'off'
            }
        },
        {
            files: [
                './src/polyfills.ts',
                './src/environments/environment.ts',
                './src/environments/environment.prod.ts'
            ],
            rules: {
                'import/no-unused-modules': 'off',
                'import/no-unassigned-import': 'off'
            }
        },
        {
            files: ['**/*.module.ts'],
            rules: {
                '@typescript-eslint/promise-function-async': 'off'
            }
        },
        {
            files: ['**/*.ts'],
            rules: {
                'prettier/prettier': 'warn'
            }
        }
    ]
};
