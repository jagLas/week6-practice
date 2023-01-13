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
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

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