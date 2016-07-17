module.exports = {
    rules: {
        'callback-return': 2,
        'global-require': 2,
        'handle-callback-err': [
            2,
            'err'
        ],
        'no-mixed-requires': [
            2,
            {
                allowCall: false,
                grouping: true
            }
        ],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-env': 2,
        'no-process-exit': 2,
        'no-restricted-modules': 2,
        'no-sync': 2
    }
};
