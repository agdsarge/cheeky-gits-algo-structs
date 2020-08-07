// bubble.js

// i think these are technically a selection sort.
// instead of holding the least value in a variable, we're continually swapping
// 
function swapSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

function swapReverse(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] > arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}


function steeleBubble(arr) {
    let noSwap
    for (let i = arr.length - 1; i > 0; i--) {
        noSwap = true
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                noSwap = false
            }
        }
        if (noSwap) {
            break
        }
    }
    return arr
}



let test1 = [6, 5, 4, 3, 2, 1, 0]
let test2 = [123, 42, 5, 3, 9, 99, 54, 34, 56, 1, 0, -13, 27, 39, 42]
let test3 = [1, 2, 3, 4, 5]

//console.log(swapReverse(test2))

//console.log(steeleBubble(test1))
//console.log(steeleBubble(test2))
//console.log(steeleBubble(test3))
//
//
//swapSort(test1)
