/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-strict'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    extraFileExtensions: ['.astro']
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { 'ignoreArrowShorthand': true }
    ],
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { 'checksVoidReturn': false }
    ],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        'allowTaggedTemplates': true,
        'allowTernary': true
      }
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'arrow-body-style': ['warn', 'as-needed'],
    'camelcase': 'warn',
    'default-param-last': 'off',
    'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
    'func-style': ['warn'],
    'max-statements-per-line': ['warn', { 'max': 1 }],
    'no-console': 'warn',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-function': 'warn',
    'no-invalid-this': 'error',
    'no-loop-func': 'error',
    'no-new-func': 'error',
    'no-return-await': 'warn',
    'no-script-url': 'error',
    'no-self-compare': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-throw-literal': 'error',
    'no-undefined': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-return': 'warn',
    'no-useless-rename': 'warn',
    'no-unreachable-loop': 'error',
    'no-var': 'error',
    'operator-assignment': ['warn', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'yoda': ['error', 'never', { 'exceptRange': false }]
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'prettier/prettier': 'warn',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
        '@typescript-eslint/consistent-type-exports': 'warn',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          { 'ignoreArrowShorthand': true }
        ],
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-misused-promises': [
          'error',
          { 'checksVoidReturn': false }
        ],
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            'allowTaggedTemplates': true,
            'allowTernary': true
          }
        ],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        'arrow-body-style': ['warn', 'as-needed'],
        'astro/semi': ['error', 'always'],
        'astro/no-set-text-directive': 'warn',
        'astro/prefer-class-list-directive': 'warn',
        'astro/prefer-object-class-list': 'warn',
        'astro/prefer-split-class-list': 'warn',
        'camelcase': 'warn',
        'default-param-last': 'off',
        'eqeqeq': ['warn', 'always', { 'null': 'ignore' }],
        'func-style': ['warn'],
        'max-statements-per-line': ['warn', { 'max': 1 }],
        'no-console': 'warn',
        'no-constructor-return': 'error',
        'no-duplicate-imports': 'error',
        'no-empty-function': 'warn',
        'no-invalid-this': 'error',
        'no-loop-func': 'error',
        'no-new-func': 'error',
        'no-return-await': 'warn',
        'no-script-url': 'error',
        'no-self-compare': 'warn',
        'no-template-curly-in-string': 'warn',
        'no-throw-literal': 'error',
        'no-undefined': 'warn',
        'no-unneeded-ternary': 'warn',
        'no-unused-expressions': 'off',
        'no-use-before-define': 'off',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-return': 'warn',
        'no-useless-rename': 'warn',
        'no-unreachable-loop': 'error',
        'no-var': 'error',
        'operator-assignment': ['warn', 'always'],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'yoda': ['error', 'never', { 'exceptRange': false }]
      }
    }
  ]
};
