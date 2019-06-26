import stringifyAttributes from '../stringifyAttributes.js'

// NOTE: bigint tests can be merged with stringifyAttributes.test.js once
// node.js v8.x support drops
describe('stringifyAttributes tests', () => {
  describe('should work with supported property types', () => {
    test.each`
      param          | expected     | type
      ${{ foo: 1n }} | ${'foo="1"'} | ${'Object with bigint property'}
    `('should return $expected when $type is passed', ({ param, expected }) => {
      const result = stringifyAttributes(param)
      expect(result).toEqual(expected)
    })
  })
})
