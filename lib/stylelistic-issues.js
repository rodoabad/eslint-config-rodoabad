/* eslint-disable max-lines */

module.exports = {
    rules: {
        'array-bracket-spacing': [
            2,
            'never'
        ],
        'block-spacing': [
            2,
            'always'
        ],
        'brace-style': [
            2,
            '1tbs'
        ],
        camelcase: [
            2,
            {
                properties: 'always'
            }
        ],
        'comma-spacing': [
            2,
            {
                after: true,
                before: false
            }
        ],
        'comma-style': [
            2,
            'last'
        ],
        'computed-property-spacing': [
            2,
            'never'
        ],
        'consistent-this': [
            2,
            'self'
        ],
        'eol-last': 2,
        'func-names': 2,
        'func-style': [
            2,
            'declaration',
            {
                allowArrowFunctions: true
            }
        ],
        'id-blacklist': [
            2
        ],
        'id-match': 0,
        indent: [
            2,
            4
        ],
        'jsx-quotes': [
            2,
            'prefer-single'
        ],
        'key-spacing': [
            2,
            {
                afterColon: true,
                beforeColon: false,
                mode: 'strict'
            }
        ],
        'keyword-spacing': [
            2,
            {
                after: true,
                before: true
            }
        ],
        'linebreak-style': [
            2,
            'unix'
        ],
        'lines-around-comment': [
            2,
            {
                afterBlockComment: true,
                afterLineComment: true,
                beforeBlockComment: true,
                beforeLineComment: true
            }
        ],
        'max-depth': [
            2,
            2
        ],
        'max-len': 0,
        'max-lines': [
            2,
            {
                max: 100,
                skipBlankLines: true,
                skipComments: false
            }
        ],
        'max-nested-callbacks': [
            2,
            2
        ],
        'max-params': [
            2,
            4
        ],
        'max-statements': [
            2,
            10,
            {
                ignoreTopLevelFunctions: true
            }
        ],
        'max-statements-per-line': [
            2,
            {
                max: 1
            }
        ],
        'multiline-ternary': 2,
        'new-cap': 2,
        'new-parens': 2,
        'newline-after-var': 2,
        'newline-before-return': 0,
        'newline-per-chained-call': [
            2,
            {
                ignoreChainWithDepth: 3
            }
        ],
        'no-array-constructor': 2,
        'no-bitwise': 2,
        'no-continue': 2,
        'no-inline-comments': 2,
        'no-lonely-if': 2,
        'no-mixed-operators': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [
            2,
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 1
            }
        ],
        'no-negated-condition': 2,
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-plusplus': 2,
        'no-restricted-syntax': 2,
        'no-spaced-func': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 2,
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'object-curly-newline': [
            2,
            {
                minProperties: 1
            }
        ],
        'object-curly-spacing': [
            2,
            'never'
        ],
        'one-var': [
            2,
            {
                const: 'never',
                let: 'always',
                var: 'always'
            }
        ],
        'one-var-declaration-per-line': [
            2,
            'always'
        ],
        'operator-assignment': [
            2,
            'always'
        ],
        'operator-linebreak': [
            2,
            'after'
        ],
        'padded-blocks': [
            2,
            'always'
        ],
        'quote-props': [
            2,
            'as-needed'
        ],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true
            }
        ],
        'require-jsdoc': 0,
        semi: 2,
        'semi-spacing': 2,
        'sort-vars': 2,
        'space-before-blocks': [
            2,
            'always'
        ],
        'space-before-function-paren': [
            2,
            'never'
        ],
        'space-in-parens': [
            2,
            'never'
        ],
        'space-infix-ops': 2,
        'space-unary-ops': [
            2,
            {
                nonwords: false,
                words: true
            }
        ],
        'spaced-comment': 2,
        'wrap-regex': 2
    }
};

/* eslint-enable max-lines */
