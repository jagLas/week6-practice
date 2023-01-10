function quicksort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Pick the first value as the pivot
  const pivot = arr[0];

  // Orient the pivot so that...
  let left = [];
  let right = [];
    // every number smaller than the pivot is to the left
    // every number larger (or equal) than the pivot is to the right
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    if (num <= pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  }

  // Recursively sort the left
  left = quicksort(left);
  // Recursively sort the right
  right = quicksort(right);
  // Return the left, pivot and right in sorted order
  return [...left, pivot, ...right];
}


module.exports = [quicksort];
