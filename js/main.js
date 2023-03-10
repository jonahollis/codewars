
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

// const number = function(array) {
//   return array.map(function (line, index) {
//     return (index + 1) + ": " + line;
//   });
// }

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

// [8kyu] - DESCRIPTION - Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  s = s.split(' ')
  s.reduce((a,b) => {
    return a.length <= b.length ? a : b
  })
}

// --------------------------------------------------------------

// [8kyu] - DESCRIPTION - DNA to RNA Conversion - Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function dnaToRna(dna) {
  //Parameter: str, combination of 'GCAT'
  //Return: return string
  //Example: 'GCAT' >> 'GCAU'
  //Psuedocode: take string, replace all instances of str 'T' with 'U'
  dna = dna.replaceAll('T','U')
  return dna
}

// --------------------------------------------------------------

// [7kyu] - DESCRIPTION - Remove anchor from URL - Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
  // split url into two array items at the '#' key
  url = url.split('#')
  // return the first item in the array, or the url up until the '#' was previously
  return url[0]
}

// --------------------------------------------------------------

// [7kyu] - DESCRIPTION - Categorize New Member - The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


function openOrSenior(data){
  // [P]arameters - array with array objects of information container member's age and handicap
  // [R]eturns - returns a string of either 'Open' or 'Senior' depending on array composition ('Senior' defined as age >= 55 & handicap > 7)
  // [E]xample - input: [[18, 20]] output: 'Open'
  // [P]seudo Code: 
  // take in array
  // create conditional based on array data pairs, age and handicap - handle negative numbers for handicap
  // return str entry based on conditional result to new array
  // return new array
  
  let results = []
  
    data.forEach(([a,b]) => {
    if(a >= 55 && b > 7){
      //console.log('Senior')
      results.push('Senior')
    }else{
      //console.log('Open')
      results.push('Open')
    }

  
  })
  
  return results
}

// --------------------------------------------------------------

// [8kyu] - DESCRIPTION - Sum Arrays - Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.


function sum (arr) {
  // [P]arameters - array of integers
  // [R]eturns - single interger of sum of array
  // [E]xample - input:  [1, 2] output: 3
  // [P]seudo Code: return argument with summation of array items using built-in JS .reduce method called on argument
  
  
  return arr.reduce((a, b) => a + b, 0)
};

// --------------------------------------------------------------

// [7kyu] - DESCRIPTION - A square of squares - You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain??? Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// [P]arameters - integer
// [R]eturns - returns true if integer is perfect square, false if not
// [E]xample - input:  4 output: true
// [P]seudo Code: 


// var isSquared = (n) => Math.sqrt(n) * Math.sqrt(n) === n && Math.sqrt(n) % 1 === 0 ? true : false

var squared = (n) => Math.sqrt(n) % 1 === 0 ? true : false


// --------------------------------------------------------------

// [7kyu] - DESCRIPTION - Anagram Detection - An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// [P]arameters - two strings, a test and control
// [R]eturns - true if test string is an anagram of original string
// [E]xample - input:  output: 
// [P]seudo Code: 


var isAnagram = function(test, original) {
  test = test.toLowerCase().split('').sort().toString()
  original = original.toLowerCase().split('').sort().toString()
  if(test === original){
    return true
  }else{
    return false
  }
};

// --------------------------------------------------------------

// [7kyu] - DESCRIPTION - Isograms - An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// [P]arameters - one string
// [R]eturns - true if str is isogram, false if not
// [E]xample - input:  'less' output: false
// [P]seudo Code: 


function isIsogram(str){
  // remove case as a factor
  str = str.toLowerCase()
  // return true if string is empty
  if(str === ''){
    return true
  }else{
    // convert string into array
    let arr = str.split('')
    // filter array of any duplicates
    const toFindDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
    // assign variable to duplicates found
    const duplicateItems = toFindDuplicates(arr);
    // if duplicates array contains any items, then test str is not an isogram
    if(duplicateItems.length > 0){
      return false
    }else{
      return true
    }
  }

} 


// --------------------------------------------------------------

// [8kyu] - DESCRIPTION - Square(n) Sum - Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 

// [P]arameters - array of numbers
// [R]eturns - sum of square of each number in array
// [E]xample - input:  [1,2,3] output: 9
// [P]seudo Code: 

function squareSum(numbers){
  // square each number in array
  numbers = numbers.map(x => Math.pow(x,2))
  // sum total of array items
  numbers = numbers.reduceRight((acc, cur) => acc + cur, 0)
  return numbers
}


// --------------------------------------------------------------

// [7kyu] - DESCRIPTION - In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// For example, filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// [P]arameters - takes array of numbers and strings
// [R]eturns - returns new array with strings removed
// [E]xample - 
// [P]seudo Code: 


function filter_list(l) {
  l = l.filter(item => typeof item === 'number')
  return l
}


// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
