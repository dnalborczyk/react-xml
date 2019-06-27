export default function isPrimitive(value) {
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
