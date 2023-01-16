/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function(p, q) {
    if (!p && q) {
        return false;
    } else if (p && !q) {
        return false;
    } else if (!p && !q) {
        return true;
    }

    if (p.val !== q.val) {
    return false;
    }

    if (!isSameTree(p.left, q.left)) {
        return false;
    } else {
        return isSameTree(p.right, q.right)
    }
};

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
}

const p1 = new TreeNode(1);
p1.left = new TreeNode(2);

const q1 = new TreeNode(1);
q1.right = new TreeNode(2);

debugger
console.log(isSameTree(p1, q1))

