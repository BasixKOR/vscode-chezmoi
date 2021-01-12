module.exports = {
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  'extends': ['eslint:recommended', 'plugin:prettier/recommended', 'prettier/standard', 'prettier/unicorn'],
  rules: {
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/semi': 'warn',
    curly: 'warn',
    eqeqeq: 'warn',
    'no-throw-literal': 'warn',
    semi: 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': ['error', 'unix'],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'quote-props': ['error', 'as-needed', { keywords: true, unnecessary: true, numbers: true }],
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: true,
      },
    ],
  },
  overrides: [{ files: ['**/*.test.ts'], env: { mocha: true } }],
};
