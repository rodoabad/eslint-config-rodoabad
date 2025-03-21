const possibleErrors = require('./possible-errors').rules;
const bestPractices = require('./best-practices').rules;
const strict = require('./strict').rules;
const variables = require('./variables').rules;
const nodeAndCommon = require('./node-and-common').rules;
const stylisticIssues = require('./stylelistic-issues').rules;
const es6 = require('./es6').rules;
const react = require('./react').rules;
const sorting = require('./sorting').rules;

const rules = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    mocha: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'sorting'
  ],
  rules: Object.assign(
    {},
    possibleErrors,
    bestPractices,
    strict,
    variables,
    nodeAndCommon,
    stylisticIssues,
    es6,
    react,
    sorting
  ),
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
};

module.exports = rules;
