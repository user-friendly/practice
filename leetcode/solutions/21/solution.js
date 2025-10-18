import { inputReaderHelper } from '#lib/input-reader'

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // Special where one of the lists is empty.
    if (!list1) {
        return list2
    }
    if (!list2) {
        return list1
    }

    let root = 0, head = null

    // Initial loop is special, but does it have to be?
    if (list1.val <= list2.val) {
        head = list1
        // Update first list's head.
        list1 = list1.next
    } else {
        head = list2
        // Update first 
        list2 = list2.next
    }
    root = head
    if (head.next === null) {
        if (list1) {
            head.next = list1
        } else if (list2) {
            head.next = list2
        }
        head = null
    }

    while (head) {
        if (list1.val <= list2.val) {
            head.next = list1
            head = list1
            list1 = list1.next
        } else {
            head.next = list2
            head = list2
            list2 = list2.next
        }

        if (head.next === null) {
            if (list1) {
                head.next = list1
            } else if (list2) {
                head.next = list2
            }
            head = null
        }
    }

    return root
}

/**
 * List from array.
 * 
 * @param {Array} list An array of integers.
 * @returns
 */
const makeListFromArray = function (list) {
    let root = null,
        head = null,
        n = null

    if (list.length > 0) {

        root = new ListNode(list.shift())
        head = root

        while (n = list.shift()) {
            head.next = new ListNode(n)
            head = head.next
        }
    }

    return root
}

/**
 * Array from list.
 * 
 * @param {any} head
 * @returns
 */
const makeArrayFromList = function (head) {
    const list = []
    if (head && head.val !== undefined) {
        list.push(head.val)
        while (head = head.next) {
            list.push(head.val)
        }
    }
    return list
}

inputReaderHelper((...args) => {
    const newListRoot = mergeTwoLists(
        makeListFromArray(args[0]),
        makeListFromArray(args[1]),
    )
    return makeArrayFromList(newListRoot)
})

