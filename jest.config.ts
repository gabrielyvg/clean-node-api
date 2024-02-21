import type { Config } from 'jest'

const config: Config = {
  collectCoverageFrom: ['<rooDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config
