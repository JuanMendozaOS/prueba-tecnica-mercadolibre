export function getAuthor () {
  const author = {
    name: process.env.NAME,
    lastname: process.env.LAST_NAME
  }

  return author
}

export function countDecimals (number, decimalSeparator) {
  if (Math.floor(number) === number) return 0

  return number.toString().split(decimalSeparator)[1].length || 0
}
