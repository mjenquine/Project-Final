function newReviewSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.review({ mutation_in: ['Created']}).node()
}

const newReview = {
  subscribe: newReviewSubscribe,
  resolve: payload => {
    return payload
  },
}

module.exports = {
  newReview,
}
