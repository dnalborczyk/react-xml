# react-xml

<p>
  <a href="https://www.npmjs.com/package/react-xml">
    <img src="https://img.shields.io/npm/v/react-xml.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.com/dnalborczyk/react-xml">
    <img src="https://img.shields.io/travis/dnalborczyk/react-xml.svg?style=flat-square">
  </a>
  <img src="https://img.shields.io/node/v/react-xml.svg?style=flat-square">
  <a href="https://github.com/facebook/react">
    <img src="https://img.shields.io/npm/dependency-version/react-xml/peer/react.svg?style=flat-square">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
  </a>
  <img src="https://img.shields.io/npm/l/react-xml.svg?style=flat-square">
</p>

### install

```cli
npm i react-xml
```

### usage

```jsx
import react from 'react'
import renderToStaticXML from 'react-xml'

const id = 'E0000001'
const name = 'John Smith'

const element = (
  <emp:employee xmlns:emp="urn:corp:emp">
    <emp:person work:empId={id} xmlns:work="urn:corp:work">
      <emp:name>{name}</emp:name>
    </emp:person>
  </emp:employee>
)

const xml = renderToStaticXML(element)

console.log(xml)

// <emp:employee xmlns:emp="urn:corp:emp">
//   <emp:person work:empId="E0000001" xmlns:work="urn:corp:work">
//     <emp:name>John Smith</emp:name>
//   </emp:person>
// </emp:employee>
```
