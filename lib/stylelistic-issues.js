/* eslint-disable max-lines */

module.exports = {
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    camelcase: ['error', {
      properties: 'always'
    }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {
      after: true,
      before: false
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['error', {
      includeCommonJSModuleExports: true
    }],
    'func-names': 'error',
    'func-style': ['error', 'declaration', {
      allowArrowFunctions: true
    }],
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': 'off',
    indent: ['error', 2],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': ['error', {
      afterColon: true,
      beforeColon: false,
      mode: 'strict'
    }],
    'keyword-spacing': ['error', {
      after: true,
      before: true
    }],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': ['error', {
      afterBlockComment: true,
      afterLineComment: true,
      beforeBlockComment: true,
      beforeLineComment: true
    }],
    'lines-around-directive': ['error', {
      after: 'always',
      before: 'always'
    }],
    'max-depth': ['error', 2],
    'max-len': 'off',
    'max-lines': ['error', {
      max: 100,
      skipBlankLines: true,
      skipComments: false
    }],
    'max-nested-callbacks': ['error', 2],
    'max-params': ['error', 4],
    'max-statements': ['error', 10, {
      ignoreTopLevelFunctions: true
    }],
    'max-statements-per-line': ['error', {
      max: 1
    }],
    'multiline-ternary': 'error',
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-after-var': 'error',
    'newline-before-return': 'off',
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 3
    }],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 0
    }],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-restricted-syntax': 'error',
    'no-spaced-func': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', {
      minProperties: 1
    }],
    'object-curly-spacing': ['error', 'never'],
    'one-var': ['error', {
      const: 'never',
      let: 'always',
      var: 'always'
    }],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', {
      avoidEscape: true
    }],
    'require-jsdoc': 'off',
    semi: 'error',
    'semi-spacing': 'error',
    'sort-vars': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', {
      nonwords: false,
      words: true
    }],
    'spaced-comment': 'error',
    'wrap-regex': 'error'
  }
};

/* eslint-enable max-lines */
