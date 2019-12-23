'use strict' // eslint-disable-line

module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(js|ts)?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
}
