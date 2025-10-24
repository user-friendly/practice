import { inputReaderHelper } from '#lib/input-reader'
import { TreeNode, TreeFromHeap } from '#lib/binary-tree'

// Recursive solution:
// Walking forward (id est depth first) accumulate and at the leaf determine if the sum is the target.
// Return true if there is at least one match.

/**
 * Rec walker.
 * 
 * @param {TreeNode} n
 *      BTree node.
 * @param {int} ts
 *      Target sum.
 * @param {int} s
 *      Accumulated sum so far down the path.
 * @returns {boolean}
 *      True if a path exists equal to the target sum, false otherwise.
 */
var hasPathSum = function (n, ts, s = 0) {
    // No verts? No good.
    if (!n) {
        return false
    }

    s += n.val

    // Leaf vert check.
    if (!(n.left || n.right)) {
        return s === ts
    }

    return (n.left ? hasPathSum(n.left, ts, s) : false)
        || (n.right ? hasPathSum(n.right, ts, s) : false)
}

inputReaderHelper((list, targetSum) => hasPathSum(TreeFromHeap(list), targetSum))
