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

    const walker = (v, s = 0) => {
        s += v.val

        if (!(v.left || v.right) && s === targetSum) {
            return true
        } else {
            return false
        }

        const a = v.left ? walker(v.left, s) : null,
            b = v.right ? walker(v.right, s) : null

        return a || b
    }

    return walker(root)
}

inputReaderHelper((list) => hasPathSum(TreeFromHeap(list)))
