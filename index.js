module.exports = {
  plugins: [
    'lodash',
    'lodash-fp',
    'you-dont-need-lodash-underscore'
  ],
  extends: [
    'plugin:promise/recommended',
    'standard',
    'plugin:lodash/recommended',
    'plugin:lodash-fp/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible-warn'
  ],
  rules: {
    'arrow-parens': [1, 'as-needed'],
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
        overrides: {
          if: {
            after: false
          },
          for: {
            after: false
          },
          while: {
            after: false
          },
          switch: {
            after: false
          },
          catch: {
            after: false
          }
        }
      }
    ],
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '^__',
        argsIgnorePattern: '^__',
        caughtErrorsIgnorePattern: '^__',
        // from extended configs
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],

    'promise/no-callback-in-promise': 0, // in express you need to call next()
    'promise/no-nesting': 0,

    'lodash/import-scope': [1, 'method'],
    'lodash/prefer-lodash-method': 0,

    'lodash-fp/no-extraneous-args': 0,
    'lodash-fp/prefer-get': 0,
    'lodash-fp/use-fp': 0,

    'you-dont-need-lodash-underscore/is-function': 0,
    'you-dont-need-lodash-underscore/is-string': 0
  }
}
