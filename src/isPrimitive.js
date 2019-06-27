// @flow strict

export default function isPrimitive(value: mixed): boolean %checks {
  return (
    // $FlowFixMe bigint not yet supported by flow as of v0.102
    typeof value === 'bigint' ||
    typeof value === 'boolean' ||
    typeof value === 'number' ||
    typeof value === 'string'
  )
}
