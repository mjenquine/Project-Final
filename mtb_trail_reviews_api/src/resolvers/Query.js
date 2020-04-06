function feed(parent, args, context, info) {
  return context.prisma.reviews()
}

module.exports = {
  feed,
}
