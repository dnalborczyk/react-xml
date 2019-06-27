import isPrimitive from '../isPrimitive.js'

// NOTE: bigint tests can be merged with utils.test.js file once
// node.js v8.x support drops
describe('utils tests', () => {
  describe('isPrimitive tests', () => {
    test.each`
      param | expected | type
      ${1n} | ${true}  | ${'BigInt'}
    `('should return $expected when $type is passed', ({ param, expected }) => {
      const result = isPrimitive(param)
      expect(result).toEqual(expected)
    })
  })
})
