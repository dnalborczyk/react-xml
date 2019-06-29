import isPrimitive from '../isPrimitive.js'

// NOTE: bigint tests can be merged with utils.test.js file once
// node.js v8.x support drops
describe('isPrimitive', () => {
  test.each`
    param | expected | description
    ${1n} | ${true}  | ${'BigInt'}
  `(
    'should return $expected when $description is passed',
    ({ param, expected }) => {
      const result = isPrimitive(param)
      expect(result).toEqual(expected)
    },
  )
})
