module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'warn',
    'no-alert': 'error',
    'no-console': 'off',
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'warn',
    'no-unused-expressions': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'error',
  },
};
