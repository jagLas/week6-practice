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
    // initialize a queue with the root node
    const queue = new Array(this.root);

    // while the queue is not empty
    while (queue.length > 0) {
      // print and remove first node in queue
      const node = queue.shift();
      console.log(node.val);

      // if the node has a left node
      if (node.left) {
        // push the left node on the back of the queue
        queue.push(node.left)
      }

      // if the node has a right node
      if (node.right) {
        // push the right node on the back of the queue
        queue.push(node.right);
      }

    };
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    // initialize a stack with the root node
    const stack = [this.root];

    // while the stack is not empty
    while (stack.length > 0) {
      // print and remove first node in stack
      const node = stack.shift

      // if the node has a left node
        // push the left node on the back of the stack
      // if the node has a right node
        // push the right node on the back of the stack
    }
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
// console.log(
// bst.breadthFirstTraversal());

module.exports = { BinarySearchTree, TreeNode };