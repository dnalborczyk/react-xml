'use strict' // eslint-disable-line

const { satisfies } = require('semver')

const testPathIgnorePatterns = []

// bigint is supported with node.js v10.4.0
const canTest = satisfies(process.version, '>=10.4.0')

if (!canTest) {
  testPathIgnorePatterns.push('bigint')
}

module.exports = {
  testPathIgnorePatterns,
}
