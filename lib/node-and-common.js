module.exports = {
  rules: {
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': ['error', 'err'],
    'no-mixed-requires': ['error', {
      allowCall: false,
      grouping: true
    }],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-restricted-modules': 'error',
    'no-sync': 'error'
  }
};
