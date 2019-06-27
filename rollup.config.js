import babel from 'rollup-plugin-babel'
import flowEntry from 'rollup-plugin-flow-entry'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'

const input = 'src/index.js'
const preferConst = true

export default [
  {
    input,
    output: {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      preferConst,
    },
    plugins: [babel(), flowEntry(), sizeSnapshot()],
  },
  {
    input,
    output: {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      preferConst,
    },
    plugins: [babel(), flowEntry(), sizeSnapshot()],
  },
]
