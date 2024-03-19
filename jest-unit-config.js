/* eslint-disable @typescript-eslint/no-var-requires */
// roda apenas os testes unitarios
const config = require('./jest.config')
config.testMatch = ['**/*.spec.ts']
module.exports = config
