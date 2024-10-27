const text = 'You must learn javascript!'
const wordsArray = text.split(' ');

console.log('---One parametr---');
wordsArray.forEach(function (value) {
  console.log('value: ', value);
})

console.log('---Two parametrs---');
wordsArray.forEach(function (item, index) {
  console.log(`${index}: ${item}`);
})

console.log('---Three parametrs---');
wordsArray.forEach(function (item, index, arr) {
  console.log(`${index}: ${item} ${arr}`)
  arr.length = 0
})
