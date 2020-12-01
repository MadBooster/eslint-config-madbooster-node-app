module.exports = {
  extends: [
    "plugin:promise/recommended",
    "standard"
  ],
  rules: {
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "keyword-spacing": [
      "error",
      {
        "after": true,
        "before": true,
        "overrides": {
          "if": {
            "after": false
          },
          "for": {
            "after": false
          },
          "while": {
            "after": false
          },
          "switch": {
            "after": false
          },
          "catch": {
            "after": false
          }
        }
      }
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "generator-star-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "^__",
        "argsIgnorePattern": "^__",
        "caughtErrorsIgnorePattern": "^__"
      }
    ],
    "arrow-parens": [1, "as-needed"],
    "promise/no-nesting": 0,
    "promise/no-callback-in-promise": 0 //in express you need to call next()
  }
}