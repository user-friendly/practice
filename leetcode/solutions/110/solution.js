import { inputReaderHelper } from '#lib/input-reader'
import { TreeNode, TreeFromHeap, TreeWalkBreathFirst } from '#lib/binary-tree'

var getDepth = function (node, depth = 0) {
    depth++

    const
        a = node.left ? getDepth(node.left, depth) : depth,
        b = node.right ? getDepth(node.right, depth) : depth

    return a > b ? a : b
}

var getMinDepth = function (node, depth = 0) {
    depth++

    const
        a = node.left ? getDepth(node.left, depth) : depth,
        b = node.right ? getDepth(node.right, depth) : depth

    return a > b ? b : a
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    // TreeWalkBreathFirst(root, (n, d) => console.log(`Node val: ${n.val}, parent: ${n.parent?.val}, depth: ${d}.`))

    if (!root) {
        return true
    }

    const max = getDepth(root)
    const min = getMinDepth(root)

    return max - min > 1 ? false : true;
}

inputReaderHelper((list) => isBalanced(TreeFromHeap(list)))
