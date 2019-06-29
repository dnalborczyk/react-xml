import isPrimitive from '../isPrimitive.js'

describe('isPrimitive', () => {
  test.each`
    param                | expected | description
    ${true}              | ${true}  | ${'Boolean'}
    ${0}                 | ${true}  | ${'Number'}
    ${''}                | ${true}  | ${'String'}
    ${[]}                | ${false} | ${'Array'}
    ${{}}                | ${false} | ${'Object'}
    ${Promise.resolve()} | ${false} | ${'Promise'}
    ${Symbol('')}        | ${false} | ${'Symbol'}
    ${null}              | ${false} | ${'null'}
    ${undefined}         | ${false} | ${'undefined'}
  `(
    'should return $expected when $description is passed',
    ({ param, expected }) => {
      const result = isPrimitive(param)
      expect(result).toEqual(expected)
    },
  )
})
