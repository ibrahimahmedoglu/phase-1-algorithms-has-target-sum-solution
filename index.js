function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of this function is O(n), where n is the size of the input array.
*/

/* 
  Add your pseudocode here
  1. Initialize an empty Set called seenNumbers.
  2. Iterate through each number in the array.
     - Calculate the complement by subtracting the current number from the target.
     - Check if the complement exists in the seenNumbers Set using the .has() method.
       - If it exists, return true.
     - Add the current number to the seenNumbers Set using the .add() method.
  3. If the loop completes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
  The solution uses a Set to keep track of the numbers seen so far. It iterates through the array and for each number, it calculates the complement (the difference between the target and the current number). If the complement is found in the Set, it means there is a pair that adds up to the target, and the function returns true. If no pair is found after iterating through the entire array, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
