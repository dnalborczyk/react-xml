import isPrimitive from './isPrimitive'

const { entries } = Object

export default function stringifyAttributes(obj: any): string {
  return entries(obj)
    .filter(([, value]) => value != null)
    .map(([key, value]) => {
      if (isPrimitive(value)) {
        return `${key}="${String(value)}"`
      }

      throw new Error(
        `Unsupported type: ${typeof value}. Only bigint, boolean, number and string are supported.`,
      )
    })
    .join(' ')
}
