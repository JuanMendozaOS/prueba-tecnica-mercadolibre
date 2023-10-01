export function getAuthor () {
  const author = {
    name: process.env.NAME,
    lastname: process.env.LAST_NAME
  }

  return author
}
