// @flow strict

export default function isPrimitive(value: mixed): boolean {
  switch (typeof value) {
    // $FlowFixMe bigint not yet supported by flow as of v0.102
    case 'bigint':
    case 'boolean':
    case 'number':
    case 'string':
      return true

    default:
      return false
  }
}
