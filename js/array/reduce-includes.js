const arr = [1, 2, 3, 4, 5]

const res = arr.reduce((prev, curr) => prev + curr, 0)
console.log('res: ', res);

console.log(arr.indexOf(3)) // вернет 2
console.log(arr.lastIndexOf(33)) // вернет -1

console.log(arr.includes(3)) // вернет true
console.log(arr.includes(33)) // вернет false
