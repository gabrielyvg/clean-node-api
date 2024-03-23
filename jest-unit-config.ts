// roda apenas os testes unitarios

import config from './jest.config'
config.testMatch = ['**/*.spec.ts']
module.exports = config
