
// 7kyu - DESCRIPTION: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

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

