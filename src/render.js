import * as ReactIs from 'react-is'
import isPrimitive from './isPrimitive.js'
import stringifyAttributes from './stringifyAttributes.js'

const { isArray } = Array
const { isElement } = ReactIs

const INDENTATION = 2

export default function render(value, indent) {
  const indentation = ' '.repeat(indent)

  // for null and undefined we just return an empty string
  if (value == null) {
    return ''
  }

  if (isPrimitive(value)) {
    return `\n${indentation}${String(value)}`
  }

  // at this point we excluded null, undefined and any primitives
  // so if it's not a react element, we throw
  if (!isElement(value)) {
    throw new Error(
      `Unsupported type: ${typeof value}. Only bigint, boolean, number and string are supported.`,
    )
  }

  let { props } = value
  const { type } = value

  // element or function component?
  let name

  if (typeof type === 'function') {
    const element = type(props)
    ;({ type: name, props } = element)
  } else {
    name = type
  }

  // children -> elements, everything else are attributes
  const { children, ...rest } = props
  const attributes = stringifyAttributes(rest)

  const str = [indent === 0 ? '' : `\n`]

  str.push(
    `${indentation}<${String(name)}${
      attributes.length === 0 ? '' : ' '
    }${attributes}>`,
  )

  const strChildren = isArray(children)
    ? children.map((item) => render(item, indent + INDENTATION))
    : [render(children, indent + INDENTATION)]

  str.push(...strChildren)

  // if we have children, we also have a new line
  // except for empty string
  if (strChildren[0] !== '') {
    str.push(`\n${indentation}`)
  }

  str.push(`</${name}>`)

  return str.join('')
}
