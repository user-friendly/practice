import { inputReaderHelper } from '#lib/input-reader'
import { TreeNode, TreeFromHeap } from '#lib/binary-tree'

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) {
        return true
    }

    const checkBalance = (node) => {
        if (!node) {
            return 0
        }

        const a = checkBalance(node.left),
            b = checkBalance(node.right)

        if (a === false || b === false || Math.abs(a - b) > 1) {
            return false
        }

        return 1 + (a > b ? a : b)
    }

    return checkBalance(root) === false ? false : true
}

inputReaderHelper((list) => isBalanced(TreeFromHeap(list)))
