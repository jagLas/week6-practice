const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
    if (rootNode === null) {
        return;
    }

    if (rootNode.left === null) {
        return rootNode.val;
    }
    
    return findMinBST(rootNode.left);
}

function findMaxBST (rootNode) {
  // Your code here
  if (rootNode === null) {
    return;
  }

  if (rootNode.right === null) {
    return rootNode.val;
  }

  return findMaxBST(rootNode.right);
}

function findMinBT (rootNode) {
  //return undefined if node is null
  if (!rootNode) {
    return;
  }

  let currentMin = rootNode.val;

  //find min values for left and right branches
  let leftMin = findMinBT(rootNode.left);
  let rightMin = findMinBT(rootNode.right);

  if (leftMin < currentMin && leftMin !== undefined) {
    currentMin = leftMin;
  }

  if (rightMin < currentMin && rightMin !== undefined) {
    currentMin = rightMin;
  }

  return currentMin;
}

function findMaxBT (rootNode) {
  //return undefined if node is null
  if (!rootNode) {
    return;
  }

  let currentMax = rootNode.val;

  //find min values for left and right branches
  let leftMax = findMaxBT(rootNode.left);
  let rightMax = findMaxBT(rootNode.right);

  if (leftMax > currentMax && leftMax !== undefined) {
    currentMax = leftMax;
  }

  if (rightMax > currentMax && rightMax !== undefined) {
    currentMax = rightMax;
  }

  return currentMax;
}

function getHeight (rootNode) {
  //return -1 if node does not exist
  if (!rootNode) {
    return -1;
  }

  //return 0 if node has no children
  if (!rootNode.left && !rootNode.right) {
    return 0;
  }

  //find heights of left and right branch
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);

  //add 1 to current height and add the highest of left and right
  let currentHeight = 1;
  if (leftHeight > rightHeight) {
    currentHeight += leftHeight;
  } else {
    currentHeight += rightHeight;
  }

  return currentHeight;
}

function balancedTree (rootNode) {
  //get heights of left and right branches
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);

  //if the heights are off by more than 1, tree is unbalanced
  const differenceInHeight = Math.abs(rightHeight - leftHeight);
  if (differenceInHeight > 1) {
    return false;
  }

  //base case: if both heights are -1, you are at end of the branch. Return true
  if (leftHeight === rightHeight && leftHeight === -1) {
    return true;
  }

  //if left or right branch is -1 height, check the remaining branch for balance.
  if (leftHeight === -1) {
    return balancedTree(rootNode.right)
  } else if (rightHeight === -1) {
    return balancedTree(rootNode.left)
  }

  //otherwise, check if both sub branches are balanced
  return balancedTree(rootNode.left) && balancedTree(rootNode.right);
}

function countNodes (rootNode) {
    //return 0 if node does not exist
    if (!rootNode) {
      return 0;
    }
  
    //return 1 if node has no children
    if (!rootNode.left && !rootNode.right) {
      return 1;
    }
  
    //find node counts of left and right branch
    const leftNodeCount = countNodes(rootNode.left);
    const rightNodeCount = countNodes(rootNode.right);
  
    //add 1 to current NodeCount and add the left and right counts
    let currentNodeCount = 1 + leftNodeCount + rightNodeCount;
  
    return currentNodeCount;
}

function getParentNode (rootNode, target) {
  //return undefined if tree is empty
  if (!rootNode) {
    return undefined;
  }

  //return null if currentNode 
  if (rootNode.val === target) {
    return null;
  }

  const leftEval = getParentNode(rootNode.left, target);
  const rightEval = getParentNode(rootNode.right, target)

  //if either of the children point to the value, return the currentNode's value
  if (leftEval === null || rightEval === null) {
    return rootNode;
  }

  //otherwise return result of checking left and right branch
  return leftEval || rightEval;

}

function inOrderPredecessor (rootNode, target) {
  
  let parentNode = getParentNode(rootNode, target);
  let targetNode;

  //finds the target node based off of the parentNode
  if (parentNode === null) {
    targetNode = rootNode;
  } else if (parentNode.left === null) {
    targetNode = parentNode.right;
  } else if (parentNode.left.val === target) {
    targetNode = parentNode.left;
  } else {
    targetNode = parentNode.right;
  }

  //if left branch of target is null, checks if it is first in order. If not, returns parent
  if (targetNode.left === null) {

    //checks if it exists on the left most branch
    let testNode = rootNode;
    while (testNode.left) {
      if (testNode.left === targetNode) {
        return null;
      }
      testNode = testNode.left;
    }
    
    //returns null if parent node is null, otherwise, return's it's value.
    if(parentNode === null) {
      return null;
    }

    return parentNode.val;
  }

  //otherwise, traverses left, then iteratively traverse right until null is found
  targetNode = targetNode.left;
  while (targetNode.right) {
    targetNode = targetNode.right;
  }

  return targetNode.val;
}

function searchBT(rootNode, target) {
  //if rootNode is null, target wasn't found, return null
  if (rootNode === null) {
    return undefined;
  }

  if (rootNode.val === target) {
    return rootNode;
  }

  //check left and right branch for target
  const leftSearch = searchBT(rootNode.left, target);
  const rightSearch = searchBT(rootNode.right, target);

  //if found in either, return that node
  if (leftSearch) {
    return leftSearch;
  } else if (rightSearch) {
    return rightSearch;
  }

  //otherwise
  return undefined;
}

function deleteNodeBST(rootNode, target) {
  debugger
  // Do a traversal to find the node. Keep track of the parent
  let targetNode = searchBT(rootNode, target);
  let targetParent = getParentNode(rootNode, target);

  // Undefined if the target cannot be found
  if (targetNode === undefined) {
    return undefined;
  }

  // Set target based on parent

  // Case 0: Zero children and no parent:
  if (!targetNode.left && !targetNode.left && !targetParent) {
    return null;
  }
  //   return null

  // Case 1: Zero children:
  if (!targetNode.left && !targetNode.right) {
    //   Set the parent that points to it to null
    if (targetParent.left === targetNode) {
      targetParent.left = null;
    } else {
      targetParent.right = null;
    }
    
  }

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

bstRoot = new TreeNode(4);
bstRoot.left = new TreeNode(2);
bstRoot.left.left = new TreeNode(1);
bstRoot.left.right = new TreeNode(3);
bstRoot.right = new TreeNode(6);
bstRoot.right.left = new TreeNode(5);
bstRoot.right.right = new TreeNode(7);

console.log(searchBT(bstRoot, 8));

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}