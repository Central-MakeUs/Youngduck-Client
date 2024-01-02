module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'simple-import-sort', 'unused-imports'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
  },
};
