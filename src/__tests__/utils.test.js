import { isPrimitive } from '../utils.js'

describe('utils tests', () => {
  describe('isPrimitive tests', () => {
    test.each`
      param                | expected | type
      ${true}              | ${true}  | ${'Boolean'}
      ${0}                 | ${true}  | ${'Number'}
      ${''}                | ${true}  | ${'String'}
      ${[]}                | ${false} | ${'Array'}
      ${{}}                | ${false} | ${'Object'}
      ${Promise.resolve()} | ${false} | ${'Promise'}
      ${Symbol('')}        | ${false} | ${'Symbol'}
      ${null}              | ${false} | ${'null'}
      ${undefined}         | ${false} | ${'undefined'}
    `('should return $expected when $type is passed', ({ param, expected }) => {
      const result = isPrimitive(param)
      expect(result).toEqual(expected)
    })
  })
})
