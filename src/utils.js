// eslint-disable-next-line import/prefer-default-export
export function isPrimitive(value) {
  switch (typeof value) {
    case 'bigint':
    case 'boolean':
    case 'number':
    case 'string':
      return true

    default:
      return false
  }
}
