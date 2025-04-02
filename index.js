import { defineConfig } from 'eslint/config'
import madboosterCommon from 'eslint-config-madbooster-common'
import { plugins } from 'neostandard'

export default defineConfig(
  [
    plugins.promise.configs['flat/recommended'],
    madboosterCommon(true),
    {
      rules: {
        'promise/no-callback-in-promise': 0, // in express you need to call next()
        'promise/no-nesting': 0,

        'import-x/extensions': [2, 'ignorePackages', {
          js: 'ignorePackages',
          jsx: 'ignorePackages',
          mis: 'ignorePackages',
          cjs: 'ignorePackages',
          ts: 'never',
          tsx: 'never',
          mts: 'never',
          cts: 'never',
        }],

        'unicorn/prefer-module': 2,
        'unicorn/prefer-node-protocol': 2,
      },
    }])
