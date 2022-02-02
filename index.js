module.exports = {
  extends: [
    'plugin:promise/recommended',
    'standard',
    'madbooster-common'
  ],
  rules: {
    'promise/no-callback-in-promise': 0, // in express you need to call next()
    'promise/no-nesting': 0
  }
}
