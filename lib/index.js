const babel = require('./babel').rules;
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
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'babel',
    'react',
    'sorting'
  ],
  rules: Object.assign(
    {},
    babel,
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
      version: '16.0'
    }
  }
};

module.exports = rules;
