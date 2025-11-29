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
 * @param {int} target // LeetCode's target is a TreeNode.
 * @return {int}
 */
var findNodeByVal = function (node, target) {

    // TODO Maybe a while loop one.

    if (node) {
        // LC variant
        // if (node.val === target.val) {
        if (node.val === target) {
            // LC variant
            // return node
            return node.val
        }

        return findNodeByVal(node.left, target) || findNodeByVal(node.right, target)
    }

    return null
}

inputReaderHelper((list, val) => findNodeByVal(TreeFromHeap(list), val))
