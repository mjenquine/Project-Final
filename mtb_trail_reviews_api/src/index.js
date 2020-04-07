const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Review = require('./resolvers/Review')
const Subscription = require('./resolvers/Subscription')


const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Review,
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  }
})

server.start(() => console.log('server is running on http://localhost:4000'))
