function isFive(num) {
  return typeof num === 'number' && num === 5;
}

function isOdd(number) {
  if (typeof number !== 'number') throw new Error ('not a number!');
  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  let newArr = [];
  for (let i = min; i <= max; i += step) {
    newArr.push(i);
  }
  return newArr;
}


module.exports = { isFive, isOdd, myRange };
