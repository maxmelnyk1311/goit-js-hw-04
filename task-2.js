'use strict';

function makeArray(firstArray, secondArray, maxLength) {
  let arr = [];
  for (let i = 0; i <= firstArray.length - 1; i++) {
    if (!secondArray.includes(firstArray[i])) {
      arr.push(firstArray[i]);
        }   
    }
    
    for (let i = 0; i <= secondArray.length - 1; i++) {
        if (!firstArray.includes(secondArray[i])) {
            arr.push(secondArray[i]);
        }
    }
    return arr.slice(0, maxLength);
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []