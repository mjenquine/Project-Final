const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
  Query: {
    info: () => 'Trail condition reviews',
    feed: (root, args, context, info) => {
      return context.prisma.reviews()
    },
  },

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
  context: { prisma },
})

server.start(() => console.log('server is running on http://localhost:4000'))
