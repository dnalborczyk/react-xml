import babel from 'rollup-plugin-babel'
import flowEntry from 'rollup-plugin-flow-entry'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'

const options = {
  // external dependencies:
  // if we don't specify, rollup gives an 'unresolved' warning
  external: [
    // 3rd party
    'react-is',
  ],
  input: 'src/index.js',
}

const preferConst = true

export default [
  {
    ...options,
    output: {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      preferConst,
    },
    plugins: [babel(), flowEntry(), sizeSnapshot()],
  },
  {
    ...options,
    output: {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      preferConst,
    },
    plugins: [babel(), flowEntry(), sizeSnapshot()],
  },
]
