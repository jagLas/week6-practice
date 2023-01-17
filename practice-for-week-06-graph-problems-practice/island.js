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
  const visited = new Set();

  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];

  // Put the stringified starting node in visited
  visited.add([row, col].toString());

  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    const currentNode = stack.pop();

    // DO THE THING (increment size by 1)
    size++;

    // Then push all the UNVISITED neighbors on top of the stack and mark them as visited
    const neighbors = getNeighbors(currentNode[0], currentNode[1], graph);
    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor.toString())){
        stack.push(neighbor);
        visited.add(neighbor.toString());
      }
    })
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  }

  return size;
}

module.exports = [getNeighbors, islandSize];