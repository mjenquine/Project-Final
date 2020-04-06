const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
type Query {
  info: String!
  feed: [Review!]!
}

type Review {
  id: ID!
  trailName: String!
  trailCondition: String!
}
`

const resolvers = {
  Query: {
    info: () => 'Trail condition reviews'
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log('server is running on http://localhost:4000'))
