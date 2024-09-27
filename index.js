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

    'import/no-commonjs': 2,
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'ignorePackages',
        jsx: 'ignorePackages',
        mis: 'ignorePackages',
        cjs: 'ignorePackages',
        ts: 'never',
        tsx: 'never',
        mts: 'never',
        cts: 'never'
      }
    ],
    'n/file-extension-in-import': 0, // handled by import/extensions

    'unicorn/prefer-module': 2,
    'unicorn/prefer-node-protocol': 2
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      }
    },
    n: {
      tryExtensions: ['.js', '.ts', '.d.ts'],
      typescriptExtensionMap: [
        ['', '.js'],
        ['.js', '.js'],
        ['.ts', '.js'],
        ['.ts', '.ts'],
        ['.cts', '.cjs'],
        ['.mts', '.mjs'],
        ['.tsx', '.jsx']
      ]
    }
  }
}
