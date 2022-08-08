// This week’s question:
// Given a list, swap every two adjacent nodes. Something to think about: How would your code change if this were a linked list, versus an array?

// ARRAY VERSION

function swapPairsArray(arr) {
    // handle empty
    if (arr.length === 0) console.log('empty array:', arr)
    // handle full
    let newArr = []
    //handle even number of elements
    if (arr.length % 2 === 0) {
        for (let i = 0, x = 0; i < arr.length - 2; i++, x += 2) {
            newArr.push(arr[x + 1])
            newArr.push(arr[x])
        }
        return newArr
    }

    //handle odd number of elements
    else if (arr.length % 2 !== 0) {
        let lastEl = arr.pop()
        let newArr = []
        for (let i = 0, x = 0; i < arr.length - 2; i++, x += 2) {
            newArr.push(arr[x + 1])
            newArr.push(arr[x])
        }
        newArr.push(lastEl)
        return newArr
    }
}

swapPairsArray([1, 2, 3, 4, 5])
// > [2,1,4,3]

// > swapPairs([])
// > []

// LINKED LIST VERSION -- TO BE IMPLEMENTED

function swapPairsLinkedList(list) {}

const listInstance = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null,
                },
            },
        },
    },
}
swapPairsLinkedList(listInstance)
// > [2,1,4,3]

// > swapPairs([])
// > []
