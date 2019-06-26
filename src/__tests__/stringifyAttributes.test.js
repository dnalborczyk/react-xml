import stringifyAttributes from '../stringifyAttributes.js'

describe('stringifyAttributes tests', () => {
  describe('should work with supported property types', () => {
    test.each`
      param                       | expected               | type
      ${{}}                       | ${''}                  | ${'empty Object'}
      ${{ foo: 1 }}               | ${'foo="1"'}           | ${'Object with number property'}
      ${{ foo: 'bar' }}           | ${'foo="bar"'}         | ${'Object with string property'}
      ${{ foo: '' }}              | ${'foo=""'}            | ${'Object with empty string property'}
      ${{ foo: null }}            | ${''}                  | ${'Object with null property'}
      ${{ foo: undefined }}       | ${''}                  | ${'Object with undefined property'}
      ${{ foo: '0', bar: 'foo' }} | ${'foo="0" bar="foo"'} | ${'Object with multiple properties'}
    `('should return $expected when $type is passed', ({ param, expected }) => {
      const result = stringifyAttributes(param)
      expect(result).toEqual(expected)
    })
  })

  describe('should throw with unsupported property types', () => {
    test.each`
      param                         | type
      ${{ foo: [] }}                | ${'Array'}
      ${{ foo: {} }}                | ${'Object'}
      ${{ foo: Promise.resolve() }} | ${'Promise'}
      ${{ foo: Symbol('') }}        | ${'Symbol'}
    `('should throw exception with property type $type', ({ param }) => {
      expect(() => stringifyAttributes(param)).toThrowErrorMatchingSnapshot()
    })
  })
})
