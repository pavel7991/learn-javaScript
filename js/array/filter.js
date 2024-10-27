const arr = [1, -1, 5, 3, -10, 25]

const positiveArr = arr.filter((n) => n > 0)
console.log('positiveArr: ', positiveArr)

const negativeArr = arr.filter((n) => n < 0)
console.log('negativeArr: ', negativeArr)