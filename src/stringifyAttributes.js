import { isPrimitive } from './utils.js'

const { entries } = Object

export default function stringifyAttributes(obj) {
  return entries(obj)
    .filter(([, value]) => value != null)
    .map(([key, value]) => {
      if (isPrimitive(value)) {
        return `${key}="${value}"`
      }

      throw new Error(
        `Unsupported type: ${typeof value}. Only bigint, boolean, number and string are supported.`,
      )
    })
    .join(' ')
}
