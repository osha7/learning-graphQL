// console.log('hi');
// import { createApolloServer } from 'meteor/apollo';
// import { makeExecutableSchema } from 'graphql-tools';

// const schema = makeExecutableSchema({typeDefs, resolvers}); // init shcema

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });