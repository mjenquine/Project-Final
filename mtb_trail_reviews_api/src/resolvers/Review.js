function postedBy(parent, args, context) {
  return context.prisma.review({ id: parent.id }).postedBy()
}

module.exports = {
  postedBy,
}
