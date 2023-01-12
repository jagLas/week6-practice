// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here

    if (this.root === null) {
      this.root = new TreeNode(val);;
      return;
    }

    if(val < currentNode.val) {
      if(currentNode.left === null) {
        currentNode.left = new TreeNode(val);
        return;
      }

      this.insert(val, currentNode.left);
    } 

    if (val >= currentNode.val) {
      if (currentNode.right === null) {
        currentNode.right = new TreeNode(val);
        return;
      }

      this.insert(val, currentNode.right);
    }
  }

  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
debugger
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
console.log(bst);

module.exports = { BinarySearchTree, TreeNode };