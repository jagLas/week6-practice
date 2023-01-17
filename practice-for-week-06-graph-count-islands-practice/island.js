function getNeighbors(row, col, matrix) {
  //define properties of matrix and neighbors
  let height = matrix.length;
  let width = matrix[0].length;
  const neighbors = [];

  //offset the check to start up 1 left 1
  row--;
  col--;

  //iterate a square of three
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      //make sure the node checked doesn't exceed the bounds of the matrix
      if (col + j >= 0 && row + i >= 0 && col + j < width && row + i < height) {
        //check the value at the node
        const val = matrix[row + i][col + j];
        //if the value is one and not the center node
        if (val === 1 && !(j === 1 && i === 1)) {
          //push to neighbors
          neighbors.push([row + i, col + j]);
        }
      }

    }
  }

  //return neighbors;
  return neighbors;
}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  // Initialize count to 0
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited, 
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];