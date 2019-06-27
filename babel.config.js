'use strict' // eslint-disable-line

const plugins = [
  '@babel/plugin-syntax-bigint',
  '@babel/plugin-transform-flow-strip-types',
  '@babel/plugin-transform-modules-commonjs',
  ['@babel/plugin-transform-react-jsx', { throwIfNamespace: false }],
]

module.exports = {
  plugins,
}
