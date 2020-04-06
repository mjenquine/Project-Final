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

let reviews = [{
  id: 'review-1',
  trailName: "Hoyt Park",
  trailCondition: "Muddy in the low spots. Badly in need of sun"
}]

const resolvers = {
  Query: {
    info: () => 'Trail condition reviews',
    feed: () => reviews,
  },

  Review: {
    id: (parent) => parent.id,
    trailName: (parent) => parent.trailName,
    trailCondition: (parent) => parent.trailCondition,
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log('server is running on http://localhost:4000'))
