import _ from "lodash"

import { print, println } from "#lib/output-writer"

/**
 * val: 1, 2, 3
 * idx: 0, 1, 2
 * 
 * i = 0 (1), j = 2 (3)
 * // left
 * 0, floor(j/2) => 1
 * is i + 1 === j => 0 + 1 === 1 => true
 * return sum: 1 + 2
 * 
 * // right
 * 0 + 1 => 1, 2
 * check checks out
 * returns sum: 2 + 3 !!! PROBLEM - overlap
 * 
 * val: 1, 2, 3, 4 => 10
 * idx: 0, 1, 2, 3
 * 
 * Odd case is where I fail!
 * val: 1, 2, 3, 4, 5 => 10
 * idx: 0, 1, 2, 3, 4
 * 
 * val: 1, 2, 3, 4, 5, 6
 * idx: 0, 1, 2, 3, 4, 5 // on the next subdivision, we get into odd elements case
 * 
 * The clue is in the index's number itself?!
 * Even index indicates odd number of elements.
 * Odd index is even number of elements.
 * Can we use this to change the termination logic?
 * Is the problem only in the termination logic?
 * Parhaps this check should go into the pointers?
 */

let ary = _.range(1, 4)

// Gets ary from parent context.
const recSum = (i, j) => {
    if (i + 1 === j) {
        return ary[i] + ary[j]
    }

    return recSum(i, Math.floor(j / 2))
        + recSum(i + Math.ceil(j / 2), j)
}

console.log(ary, _.sum(ary))

println(recSum(0, ary.length - 1))
