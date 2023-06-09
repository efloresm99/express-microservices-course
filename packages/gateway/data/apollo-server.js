const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');
 
const server = new ApolloServer({ typeDefs, resolvers });


module.exports = server;