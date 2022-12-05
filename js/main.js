
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

// [7kyu] - DESCRIPTION - After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  // Your solution here
  let cost = 0
  if (d > 2 && d < 7){
    cost = (d * 40) - 20
    return cost

  }else if(d >= 7){
    cost = (d * 40) - 50
    return cost

  }else{
    cost = d * 40
    return cost

  }
   
}

// --------------------------------------------------------------

// [8kyu] - DESCRIPTION - Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  if(name[0] === 'R' || name[0] === 'r'){
    return name + " plays banjo" 
  }else{
    return name + " does not play banjo"
  }
}


// --------------------------------------------------------------

// [8kyu] - DESCRIPTION - Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
  return words.join(' ');
};