const possibleErrors = require('./possible-errors').rules;
const bestPractices = require('./best-practices').rules;
const strict = require('./strict').rules;
const variables = require('./variables').rules;
const nodeAndCommon = require('./node-and-common').rules;
const stylisticIssues = require('./stylelistic-issues').rules;
const es6 = require('./es6').rules;
const react = require('./react').rules;

const rules = {
    rules: Object.assign(
        {},
        possibleErrors,
        bestPractices,
        strict,
        variables,
        nodeAndCommon,
        stylisticIssues,
        es6,
        react
    )
};

module.exports = rules;
