import assert from 'assert'

import _ from "lodash"

import { print, println } from "#lib/output-writer"

let rangeBottom = 1
let rangeTop = 4

let args = process.argv.slice(2)

if (args.length >= 2 && !isNaN(parseInt(args[0])) && !isNaN(parseInt(args[1]))) {
    rangeBottom = parseInt(args[0])
    rangeTop = parseInt(args[1])
} else if (args[0] !== undefined && !isNaN(parseInt(args[0]))) {
    rangeTop = parseInt(args[0])
}

if (rangeBottom >= rangeTop) {
    rangeTop = rangeBottom + 1
}

println(`Generate an array with range: ${rangeBottom}..${rangeTop}`)

let ary = _.range(rangeBottom, rangeTop + 1)

// Gets ary from parent context.
const recSum = (i, j) => {
    let sum = 0

/*    println(`descend in sub ary {${i}, ${j}}`)*/

    assert(i > j === false, `Invalid range: ${i} > ${j}`)
    
    if (i + 1 === j) {
        sum = ary[i] + ary[j]
        // DP?
        ary[i] = 0
        ary[j] = 0
    } else {
        // Why was it so hard to do the index math?
        sum = recSum(i, i + Math.floor((j - i) / 2))
            + recSum(i + Math.ceil((j - i) / 2), j)
    }

/*    print(`sub ary {${i}, ${j}}: `)
    for (let k = i; k <= j; k++) {
        print(ary[k] + ', ')
    }
    println(`sum: ${sum}`)*/

    // The sum is still wrong, because of the overlap.
    return sum
}

console.log(ary)

const expected = _.sum(ary)
const actual = recSum(0, ary.length - 1)

assert(expected === actual, `Invalid sum calculated: ${expected} != ${actual}`)

println(`Sum of all elements is: ${actual}`)

