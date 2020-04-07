function newReviewSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.review({ mutation_in: ['CREATED'] }).node()
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
