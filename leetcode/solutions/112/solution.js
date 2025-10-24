import { inputReaderHelper } from '#lib/input-reader'
import { TreeNode, TreeFromHeap } from '#lib/binary-tree'

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // No verts? No good.
    if (!root) {
        return false
    }
    // No children?
    if (!(root.left || root.right)) {
        // Easy-peasy.
        return root.val === targetSum
    }

    // Recursive solution:
    // Walking forward (id est depth first) accumulate and at the leaf determine if the sum is the target.
    // Return true if there is at least one match.

    /**
     * Rec walker.
     * 
     * @param {TreeNode} v
     *      BTree vertex.
     * @param {int} ts
     *      Target sum.
     * @param {int} s
     *      Accumulated sum so far down the path.
     * @returns
     *      True if a path exists equal to the target sum, false otherwise.
     */
    const walker = (v, ts, s = 0) => {
        s += v.val

        // Leaf vert check.
        if (!(v.left || v.right)) {
            return s === ts
        }

        return (v.left ? walker(v.left, ts, s) : false)
            || (v.right ? walker(v.right, ts, s) : false)
    }

    return walker(root, targetSum)
}

inputReaderHelper((list, targetSum) => hasPathSum(TreeFromHeap(list), targetSum))
