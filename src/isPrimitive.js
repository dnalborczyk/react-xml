export default function isPrimitive(value) {
  return (
    typeof value === 'bigint' ||
    typeof value === 'boolean' ||
    typeof value === 'number' ||
    typeof value === 'string'
  )
}
