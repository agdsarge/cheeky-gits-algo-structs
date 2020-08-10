// quick1.js
//

let test = [5, 2, 1, 8, 4, 7, 6, 3]

let test0 = [6, 5, 4, 3, 2, 1, 0]
let test1 = [0, 1, 2, 3, 4, 5, 6]
let test2 = [-1, 10, -2, -4, 7, 9, 13, 3, 8, -2, 7, 1, 99]
let test3 = [1]
let test4 = [2, 1]

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}


function pivot(arr, start=0, end=arr.length+1) {
    let pivot = arr[start] // a value
    let swapIndex = start

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex   //an integer! 
}

function quickSort(arr, left=0, right=arr.length-1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        // left side
        quickSort(arr, left, pivotIndex-1)
        // right side
        quickSort(arr, pivotIndex+1, right)
    }
    return arr
}
console.log(test2)
quickSort(test2)
console.log(test2)
