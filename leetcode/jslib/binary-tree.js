/**
 * Binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Notes on the "heap to nodes" conversion func:
// 
// The beginning of each level is indexed by:
// size of tree at level-1. L is the level, n is ???
// L(1) => 0 => 1 - 1 => n - 1
// L(2) => 1 => 2 - 1 => n - 1
// L(3) => 3 => 4 - 1 => n - 1
// L(4) => 7 => 8 - 1 => n - 1
// L(5) => 
// ...
// Because indexes in JS are 0-based, the root element and index adjustment cancel out.
//
// The total number of levels is the opposite of the number of nodes at a level, rounded up:
// tl = ceil(log2(n)) // n is size in number of elements.
//
// Example heap: [3, 9, 20, null, null, 15, 7]
// 
/*

S(L) - size at level L (NOT total tree size)
S(1): 1
S(2): S(l-1)2 = (1)2 = 2
S(3): S(l-1)2 = (2)2 = 4
S(4): S(l-1)2 = ((2)2)2
...
S(L): 2^(L-1) // two to the power of one short of the level, gives the number of elements at that level.

T(L) - total size of btree (all nodes counted) based on level
T(1): 1
T(2): T(l-1) + S(l) = 1 + 2^(l-1) = 1 + 2^(2-1) = 1 + 2 = 3
T(3): T(l-1) + S(l) = T(l-2) + S(l-1) + S(l) = 1 + 2^(l-2) + 2^(l-1)
T(4): ... = 1 + 2^(l-3) + 2^(l-2) + 2^(l-1) = 1 + 2^1 + 2^2 + 2^3
...
T(L): 1 + SUM(1, l-1, 2^s) // s is the sum iterator

What would be the general formula? 

TODO How to get number of levels based off of tree size?

*/

/**
 * An array holding a heap.
 * 
 * Null elements are ignored.
 * 
 * @param {array} list
 * @returns {TreeNode|null}
 *   Returns the root node or null if the list is empty.
 */
function TreeFromHeap(list) {
    const size = list.filter(v => v !== null).length

    if (size <= 0) {
        return null
    }

    const levels = Math.ceil(Math.log2(size))
    const root = new TreeNode()
    // A list of all nodes, in no particular order.
    const nodes = []

    console.log(`Converting the heap (n: ${size}, l: ${levels}): `, list)

    root.val = list[0]
    nodes.push(root)

    // Breath-first walk.
    for (let l = 0, i = 0, node = null; i < list.length; l++) {
        const tmp = [],
            end = i + 2 ** l
        // Walks one level. Note the comparison has equals.
        for (; i < end && i < list.length; i++) {
            if (list[i]) {
                tmp.push(list[i])
            }
        }
        console.log(`Level ${l}, elements: `, tmp.join(','))
    }

    return root
}

export { TreeNode, TreeFromHeap }
