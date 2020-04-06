const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {

  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createReview({
        trailName: args.trailName,
        trailCondition: args.trailCondition,
      })
    },
  },
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
