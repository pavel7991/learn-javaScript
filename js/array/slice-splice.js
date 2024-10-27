const text = 'You must learn javascript. It\'s very cool!'
const wordsArray = text.split(' ');

console.log('Array.slice(1, 3): ', wordsArray.slice(1, 3));
console.log('Array.slice(2): ', wordsArray.slice(2));
console.log('Array.slice(): (for copy array)', wordsArray.slice());



console.log('Array.splice(0, 3', wordsArray.splice(0, 3));
console.log('wordsArray: ', wordsArray);
