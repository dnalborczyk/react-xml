import renderToStatic from './renderToStatic.js'

const XML_DECLARATION = '<?xml version="1.0" encoding="UTF-8"?>'

export default function renderToStaticXML(value) {
  const staticMarkup = renderToStatic(value)

  return `${XML_DECLARATION}${staticMarkup}`
}
