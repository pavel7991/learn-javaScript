let weekDays = new Array(7)
weekDays = weekDays.concat('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')


weekDays.firstDay = 'Monday'
console.log('weekDays: ', weekDays);
console.log(weekDays.length)

// for (let day in weekDays) console.log(weekDays[day]);

console.log('Array.isArray(weekDays) = ', Array.isArray(weekDays))
console.log('join(" || "): ', weekDays.join(' || '))
console.log('reverse(): ', weekDays.reverse())
console.log('sort(): ', weekDays.sort())

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


numberArr.sort()
console.log('numberArr: ', numberArr);

// const compareNumberic = (a, b) => {
//   if (a > b) return -1
//   if (a < b) return 1
// }

const compareNumberic = (a, b) => b - a

numberArr.sort(compareNumberic)
console.log('numberArr: ', numberArr);


