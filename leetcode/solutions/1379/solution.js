import { inputReaderHelper } from '#lib/input-reader'
import { TreeNode, TreeFromHeap } from '#lib/binary-tree'

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {int} target
 * @return {int}
 */
var findNodeByVal = function (node, target) {

    // TODO Implement using loops.
/*    const stack = []
    let current = node
    while (0 < stack.length) {
        if (!(current.left || current.right)) {
            if ()
        }
    }*/

    if (!node) {
        return null
    }

    if (node.val === target) {
        return node
    }

    if (node.left || node.right) {
        return findNodeByVal(node.left) || findNodeByVal(node.right)
    }

    return null
}

inputReaderHelper((list, val) => findNodeByVal(TreeFromHeap(list), val))
