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
    let currentNode = this.root;

    while(currentNode) {
      if (currentNode.val === val) {
        return true;
      }

      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      }
    }

    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode === null) {
      return;
    }
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode === null) {
      return;
    }
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);

  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode === null) {
      return;
    }
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
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
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
debugger
bst.postOrderTraversal();

module.exports = { BinarySearchTree, TreeNode };