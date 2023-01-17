function getNeighbors(row, col, graph) {
  let i = row;
  let j = col;
  let height = graph.length;
  let width = graph[0].length;

  const neighbors = [];
  // Up
  if (i > 0 && graph[i - 1][j] === 1){
      neighbors.push([i - 1, j]);
  }

  // Down
  if (i < height - 1 && graph[i + 1][j] === 1) {
      neighbors.push([i + 1, j]);
  }
  // Left
  if (j > 0 && graph[i][j - 1] === 1) {
      neighbors.push([i, j - 1]);
  }

  // Right

  if (j < width - 1 && graph[i][j + 1] === 1) {
      neighbors.push([i, j + 1]);
  }

  return neighbors;
}

matrix = [
  [1,1,1,0,0],
  [0,1,1,0,1],
  [0,1,1,0,1],
]
console.log(getNeighbors(1, 1, matrix))


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];