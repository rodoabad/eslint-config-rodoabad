/* eslint-disable max-lines */
module.exports = {
  rules: {
    'react/boolean-prop-naming': ['error', {
      rule: '^is[A-Z]([A-Za-z0-9]?)+'
    }],
    'react/button-has-type': ['error', {
      button: true,
      reset: true,
      submit: true
    }],
    'react/default-props-match-prop-types': ['error', {
      allowRequiredDefaults: true
    }],
    'react/destructuring-assignment': ['error', 'always'],
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': ['error', {
      forbid: ['id']
    }],
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }],
    'react/hook-use-state': 'error',
    'react/iframe-missing-sandbox': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': ['error', {
      nonEmpty: 'tag-aligned',
      selfClosing: 'tag-aligned'
    }],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-curly-newline': ['error', {
      multiline: 'consistent',
      singleline: 'consistent'
    }],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js']
    }],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on'
    }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': ['error', {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
      warnOnDuplicates: true
    }],
    'react/jsx-max-depth': ['error', {
      max: 5
    }],
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1
    }],
    'react/jsx-newline': ['error', {
      prevent: false
    }],
    'react/jsx-no-bind': ['error', {
      allowArrowFunctions: true,
      allowBind: false,
      allowFunctions: false,
      ignoreRefs: false
    }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': ['error', {
      ignoreCase: false
    }],
    'react/jsx-no-leaked-render': ['error', {
      validStrategies: ['coerce', 'ternary']
    }],
    'react/jsx-no-literals': 'error',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': ['error', {
      allowReferrer: false,
      enforceDynamicLinks: 'always',
      forms: true,
      links: true,
      warnOnSpreadAttributes: true
    }],
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': ['error', {
      allowExpressions: true
    }],
    'react/jsx-one-expression-per-line': ['error', {
      allow: 'single-child'
    }],
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: false,
      allowLeadingUnderscore: false,
      allowNamespace: false
    }],
    'react/jsx-props-no-spreading': ['error', {
      custom: 'enforce',
      explicitSpread: 'enforce',
      html: 'enforce'
    }],
    'react/jsx-sort-props': ['error', {
      callbacksLast: true,
      ignoreCase: false,
      noSortAlphabetically: false,
      reservedFirst: true,
      shorthandFirst: false,
      shorthandLast: false
    }],
    'react/jsx-tag-spacing': ['error', {
      afterOpening: 'never',
      beforeClosing: 'never',
      beforeSelfClosing: 'never',
      closingSlash: 'never'
    }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': ['error', {
      arrow: 'parens-new-line',
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      return: 'parens-new-line'
    }],
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', {
      ignoreStateless: true
    }],
    'react/no-namespace': 'error',
    'react/no-object-type-as-default-prop': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'error',
    'react/no-string-refs': ['error', {
      noTemplateLiterals: true
    }],
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': ['error', {
      checkAliases: true
    }],
    'react/no-unstable-nested-components': ['error', {
      allowAsProps: false
    }],
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-prop-types': ['error', {
      customValidators: [],
      skipShapeProps: true
    }],
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-exact-props': 'error',
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': ['error', {
      ignorePureComponents: true
    }],
    'react/prop-types': ['error', {
      customValidators: [],
      ignore: [],
      skipUndeclared: false
    }],
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': ['error', {
      forbidDefaultForRequired: true
    }],
    'react/require-optimization': ['error', {
      allowDecorators: []
    }],
    'react/require-render-return': 'error',
    'react/self-closing-comp': ['error', {
      component: true,
      html: true
    }],
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ]
    }],
    'react/sort-prop-types': ['error', {
      callbacksLast: true,
      ignoreCase: false,
      requiredFirst: true,
      sortShapeProp: true
    }],
    'react/state-in-constructor': ['error', 'always'],
    'react/static-property-placement': ['error', 'static public field'],
    'react/style-prop-object': ['error', {
      allow: []
    }],
    'react/void-dom-elements-no-children': 'error'
  }
};
/* eslint-enable max-lines */
