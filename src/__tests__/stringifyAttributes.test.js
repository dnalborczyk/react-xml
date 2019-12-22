import stringifyAttributes from '../stringifyAttributes.js'

describe('stringifyAttributes', () => {
  describe('should work with supported property types', () => {
    test.each`
      param                       | expected               | description
      ${{}}                       | ${''}                  | ${'empty'}
      ${{ foo: 1 }}               | ${'foo="1"'}           | ${'number property'}
      ${{ foo: 1n }}              | ${'foo="1"'}           | ${'Object with bigint property'}
      ${{ foo: 'bar' }}           | ${'foo="bar"'}         | ${'string property'}
      ${{ foo: '' }}              | ${'foo=""'}            | ${'empty string property'}
      ${{ foo: null }}            | ${''}                  | ${'null property'}
      ${{ foo: undefined }}       | ${''}                  | ${'undefined property'}
      ${{ foo: '0', bar: 'foo' }} | ${'foo="0" bar="foo"'} | ${'multiple properties'}
    `(`should return '$expected' with $description`, ({ param, expected }) => {
      const result = stringifyAttributes(param)
      expect(result).toEqual(expected)
    })
  })

  describe('should throw with unsupported property types', () => {
    test.each`
      param                         | description
      ${{ foo: [] }}                | ${'Array'}
      ${{ foo: {} }}                | ${'Object'}
      ${{ foo: Promise.resolve() }} | ${'Promise'}
      ${{ foo: Symbol('') }}        | ${'Symbol'}
    `('should throw exception with property type $description', ({ param }) => {
      expect(() => stringifyAttributes(param)).toThrowErrorMatchingSnapshot()
    })
  })
})
