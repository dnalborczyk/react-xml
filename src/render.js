// @flow strict

import * as ReactIs from 'react-is'
import { type Element } from 'react'
import isPrimitive from './isPrimitive.js'
import stringifyAttributes from './stringifyAttributes.js'

const { isArray } = Array
const { isElement } = ReactIs

const INDENTATION = 2

// $FlowFixMe bigint not yet supported by flow as of v0.102
type Primitive = bigint | boolean | number | string

export default function render(
  value: Primitive | Element<any>,
  indent: number,
): string {
  const indentation = ' '.repeat(indent)

  // for null and undefined we just return an empty string
  if (value == null) {
    return ''
  }

  if (isPrimitive(value)) {
    return `\n${indentation}${String(value)}`
  }

  // at this point we excluded null, undefined and any primitives
  // so if it's not an react element, we throw
  if (!isElement(value)) {
    throw new Error(
      `Unsupported type: ${typeof value}. Only bigint, boolean, number and string are supported.`,
    )
  }

  const { props, type } = value

  // element or function component?
  const name = typeof type === 'function' ? type(props).type : type

  // children -> elements, everything else are attributes
  const { children, ...rest } = props || {}
  const attributes = stringifyAttributes(rest)

  const str = [indent === 0 ? '' : `\n`]

  str.push(
    `${indentation}<${String(name)}${
      attributes.length === 0 ? '' : ' '
    }${attributes}>`,
  )

  let strChildren

  if (!isArray(children)) {
    strChildren = [render(children, indent + INDENTATION)]
    // the array could be empty if it was a value for the jsx element
  } else if (children.length > 0) {
    strChildren = children.map((item) => render(item, indent + INDENTATION))
  }

  if (strChildren) {
    str.push(...strChildren)
    // if we have children, we also have a new line
    // except for empty string
    if (strChildren[0] !== '') {
      str.push(`\n${indentation}`)
    }
  }

  str.push(`</${name}>`)

  return str.join('')
}
