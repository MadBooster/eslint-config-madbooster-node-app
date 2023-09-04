module.exports = {
  extends: [
    'plugin:promise/recommended',
    'standard',
    'madbooster-common'
  ],
  rules: {
    'promise/no-callback-in-promise': 0, // in express you need to call next()
    'promise/no-nesting': 0,
    
    'n/no-missing-import': 2,
    'n/no-extraneous-import': 2,
    'n/file-extension-in-import': 2,

    'import/no-commonjs': 2,
    'import/extensions': [2, 'ignorePackages'],
    
    'unicorn/prefer-module': 2,
    'unicorn/prefer-node-protocol': 2
  }
}
