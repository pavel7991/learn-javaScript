const arr = [1, -1, 2, -2, 4]

const arr2 = [-1, 2, 3, 4, 5]
const isPositive = (n) => n > 0

console.log(arr2.every(isPositive));

console.log(arr.every(isPositive)) // все элементы удовлетворяют условию
console.log(arr.some(isPositive)) // хотя бы один элемент удовлетворяет условию