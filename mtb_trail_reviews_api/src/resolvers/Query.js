async function feed(parent, args, context) {
  const where = args.filter
    ? {
        OR: [
          { trailName_contains: args.filter },
          { trailCondition_contains: args.filter },
        ],
      }
    : {}

  const reviews = await context.prisma.reviews({
    where
  })
  return reviews
}

module.exports = {
  feed,
}
