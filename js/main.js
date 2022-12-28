
// [7kyu] - DESCRIPTION: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


function descendingOrder(n){
    // create array from stringified n
      n = Array.from(String(n))
    // convert str type back to number of each element
      n = n.map(str => Number(str))
    // sort each number in array in descending order
      n = n.sort((a,b) => b-a)
    // rejoin array as number
      n = Number(n.join(''))
    // return n
      return n
}

// --------------------------------------------------------------

//  [7kyu] - DESCRIPTION: Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


var number = function(array){
  // declare new, empty array that can be called inside for loop
  let newArr = []
  // initiliaze for loop at 1 that loops until array's length + 1, this allows i to be printed at initial value of 1
  for(i = 1; i < (array.length+1); i++){
    // push i and element at one less position array[i] to new array, this pairs array[0] with iterator's value of 1
    newArr.push(`${i}: ${array[i-1]}`)
  }

  return newArr
}

// Solution using map method: 

const number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

// --------------------------------------------------------------

