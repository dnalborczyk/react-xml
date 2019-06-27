'use strict' // eslint-disable-line

const { NODE_ENV } = process.env

// jest sets NODE_ENV to 'test' by default
const isTest = NODE_ENV === 'test'

const plugins = [
  '@babel/plugin-syntax-bigint',
  '@babel/plugin-transform-flow-strip-types',
  ['@babel/plugin-transform-react-jsx', { throwIfNamespace: false }],
]

if (isTest) {
  plugins.push('@babel/plugin-transform-modules-commonjs')
}

module.exports = {
  plugins,
}
