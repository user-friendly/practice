import { inputReaderHelper } from '#lib/input-reader'
import { TreeNode, TreeFromHeap, TreeWalkBreathFirst } from '#lib/binary-tree'

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    TreeWalkBreathFirst(root, (n, l) => console.log(`Node val: ${n.val}, level: ${l}.`))
    return false;
}

inputReaderHelper((list) => isBalanced(TreeFromHeap(list)))
