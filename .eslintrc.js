'use strict'

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
  ],

  plugins: ['prettier', 'react'],

  // http://eslint.org/docs/user-guide/configuring#specifying-parser
  // enables additional future ECMA language features https://github.com/tc39/proposals
  // e.g.:
  // jsx http://facebook.github.io/jsx/
  // flow types https://flowtype.org/
  parser: 'babel-eslint',

  env: {
    // add global jest types
    jest: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    // overwrite
    // require file extensions
    'import/extensions': ['error', 'always', { ignorePackages: true }],

    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
}
