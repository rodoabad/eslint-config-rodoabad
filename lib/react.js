/* eslint-disable max-lines */
module.exports = {
  rules: {
    'react/boolean-prop-naming': [
      'error', {
        rule: '^is[A-Z]([A-Za-z0-9]?)+'
      }
    ],
    'react/button-has-type': [
      'error',
      {
        button: true,
        reset: true,
        submit: true
      }
    ],
    'react/default-props-match-prop-types': [
      'error', {
        allowRequiredDefaults: true
      }
    ],
    'react/destructuring-assignment': [
      'error',
      'always'
    ],
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': [
      'error',
      {
        forbid: [
          'id'
        ]
      }
    ],
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': [
      'error',
      'always'
    ],
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': [
      'error',
      {
        nonEmpty: 'tag-aligned',
        selfClosing: 'tag-aligned'
      }
    ],
    'react/jsx-curly-spacing': [
      'error',
      'never'
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never'
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.js'
        ]
      }
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline'
    ],
    'react/jsx-handler-names': [
      'error', {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on'
      }],
    'react/jsx-indent': [
      'error',
      2
    ],
    'react/jsx-indent-props': [
      'error',
      2
    ],
    'react/jsx-key': 'error',
    'react/jsx-max-depth': [
      'error',
      {
        max: 5
      }
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1
      }
    ],
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        allowFunctions: false,
        ignoreRefs: false

      }
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'never',
        beforeClosing: 'never',
        beforeSelfClosing: 'never',
        closingSlash: 'never'
      }
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': [
      'error',
      {
        ignorePureComponents: true
      }
    ],
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': [
      'error',
      {
        forbidDefaultForRequired: true
      }
    ],
    'react/require-optimization': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error'
  }
};
