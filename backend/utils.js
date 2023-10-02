export function getAuthor () {
  const author = {
    name: process.env.NAME,
    lastname: process.env.LAST_NAME
  }

  return author
}

export function countDecimals (number) {
  if (Math.floor(number) === number) return 0

  return number.toString().split('.')[1].length || 0
}
