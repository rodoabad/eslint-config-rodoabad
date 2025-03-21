module.exports = {
  rules: {
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false
    }],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', {
      after: true,
      before: true
    }],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', {
      after: false,
      before: true
    }],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'off',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: true
    }],
    'prefer-const': 'error',
    'prefer-reflect': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }],
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', {
      after: true,
      before: false
    }]
  }
};
