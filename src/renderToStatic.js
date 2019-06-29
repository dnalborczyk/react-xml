// @flow strict

import { type Element } from 'react'
import render from './render.js'

// $FlowFixMe bigint not yet supported by flow as of v0.102
type Primitive = bigint | boolean | number | string

export default function renderToStatic(
  value: Primitive | Element<any>,
): string {
  return render(value, 0)
}
