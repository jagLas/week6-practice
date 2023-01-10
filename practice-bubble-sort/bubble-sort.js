function bubbleSort(arr) {

  let swapMade = false;

  // Iterate through the array
  for (let i = 0; i < arr.length - 1; i++){

    // If the current value is greater than its neighbor to the right  
    if (arr[i] > arr[i + 1]) {
      // Swap those values
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      swapMade = true;

       // Do not move this console.log
       console.log(arr.join(","));
    }
  }

  // Otherwise, repeat from the beginning

  if (swapMade) {
    return bubbleSort(arr);
    // If you get to the end of the array and no swaps have occurred, return
  } else {
    return arr;
  }

}

bubbleSort([2,4,6,8,1,3,5,7,9])

module.exports = bubbleSort;