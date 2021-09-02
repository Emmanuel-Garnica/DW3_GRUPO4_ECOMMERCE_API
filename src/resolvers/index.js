const accountResolver = require('./account_resolver');
const transactionResolver = require('./transaction_resolver');
const usersResolver = require('./users_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(accountResolver, transactionResolver, usersResolver);

module.exports = resolvers;