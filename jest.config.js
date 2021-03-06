var ENV = require('./env')()

module.exports = {
  globals: {
    'PACKAGE': ENV.packageInfo,
    'ts-jest': {
      diagnostics: {
        warnOnly: true
      }
    }
  },
  restoreMocks: true,
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
    'json',
    'vue'
  ],
  testMatch: [
    '**/test/specs/**/*.spec.[jt]s?(x)'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  moduleNameMapper: {
    '^@okta/okta-auth-js$': '<rootDir>/node_modules/@okta/okta-auth-js/dist/okta-auth-js.umd.js'
  },
  testEnvironment: 'jsdom'
}
