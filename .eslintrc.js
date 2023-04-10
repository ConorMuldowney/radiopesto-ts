// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020, // could 2020 or 11. I think it is easier to use the year instead of a version number here.
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    // disable the rule for all files
    // vscode might pop-up a notification: There are multiple formatter for 'Javascript' files. I selected Prettier as default.
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off',

    // react hook rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'prettier/prettier': ['error', {
      'endOfLine':'auto'
     }],
  },
  /*
  // there is the option to apply to specific files only. 
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['off'],
      },
    },
  ],
  */
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};