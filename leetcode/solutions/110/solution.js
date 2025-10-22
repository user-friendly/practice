import { inputReaderHelper } from '#lib/input-reader'
import { TreeNode, TreeFromHeap, TreeWalkBreathFirst } from '#lib/binary-tree'

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    // TreeWalkBreathFirst(root, (n, d) => console.log(`Node val: ${n.val}, parent: ${n.parent?.val}, depth: ${d}.`))

    return false;
}

inputReaderHelper((list) => isBalanced(TreeFromHeap(list)))
