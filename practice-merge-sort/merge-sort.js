// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if(arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }


  // Divide the array in half
  let left = arr.slice(0, arr.length / 2)
  let right = arr.slice(arr.length / 2)

  // Recursively sort the left half
  left = mergeSort(left);
  // Recursively sort the right half
  right = mergeSort(right);

  // Merge the halves together and return
  return merge(left, right);

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  const merged = [];

  // Point to the first value of each array
  let indexL = 0;
  let indexR = 0;
  // While there are still values in each array...
  while(indexR < arrB.length || indexL < arrA.length) {
    let numL = arrA[indexL];
    let numR = arrB[indexR];

    // Compare the first values of each array
    if (numL < numR || !numR) {
      // Add the smaller value to the return array
      merged.push(numL)
      // Move the pointer to the next value in that array
      indexL++
    } else {
      merged.push(numR);
      indexR++;
    }
  }

  // Return the return array
  return merged;
}

module.exports = [merge, mergeSort];

