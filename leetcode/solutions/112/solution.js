import { inputReaderHelper } from '#lib/input-reader'
import { TreeNode, TreeFromHeap } from '#lib/binary-tree'

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {

    // Recursive solution:
    // Walking forward (id est depth first) accumulate and at the leaf determine if the sum is the target.
    // Return true if there is at least one match.

    // TODO Implement.

    return false
}

inputReaderHelper((list) => hasPathSum(TreeFromHeap(list)))
