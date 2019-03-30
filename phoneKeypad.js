/* Summary : Number to possible key strings conversion */
/* For example
  Input - 23
  Output - ad, ae, af, bd, be, bf, cd, ce, cf
*/

let keyMap = {
  '0': [],
  '1': [],
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

// Main function to get the possible combination based on input
function getPossibleCombination(num) {
  let possibleCombination = [];
  
  // Error Handling
  if (isNaN(num) || Number(num) < 0) {
    console.info("We do support valid postive numbers only !!");
    return [];
  }
  
  // Convert number to string to do string operations on it
  const numToString = String(num);
  
  // Loop through each digit from input number
  for(let digit of numToString) {
    digitToLetters(digit,possibleCombination);
  }
  
  return possibleCombination;
}



function digitToLetters(digit, possibleCombination) {
  // Get the key to letter mapping
  const letters = keyMap[digit];
  let combCount = possibleCombination.length;
  
  // Ignore empty collection like 0/1 mapping 
  if(!letters.length)
    return;
  
  // First time just copy the letters
  if(combCount === 0) {
    for(const letter of letters){
      possibleCombination.push(letter);
    }
  // Second time combine the older letters with new  
  } else {
    while(combCount > 0){
      const firstItem = possibleCombination.shift();

      for(const letter of letters){
        possibleCombination.push(firstItem+letter);
      }
      combCount--;
    }
  }
}

// TEST
console.info(getPossibleCombination(23));