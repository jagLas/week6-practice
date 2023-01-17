const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
    const queue = [];
    queue.push(start);
    const visited = new Set([start]);

    while(queue.length) {
        const currentNode = queue.shift();
        if (currentNode === end) {
            return true;
        }

        const neighbors = adjList[currentNode];
        neighbors.forEach(node => {
            if (!visited.has(node)) {
                queue.push(node);
                visited.add(node);
            }
        });
    }

    return false;
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false