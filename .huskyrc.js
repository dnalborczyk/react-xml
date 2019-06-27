'use strict'

module.exports = {
  hooks: {
    'pre-commit': 'npm run lint  && npm run flow',
    'pre-push': 'npm run lint  && npm run flow && npm test',
  },
}
