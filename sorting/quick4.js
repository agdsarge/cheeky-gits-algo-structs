//quick4.js


function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function pivot(arr, start=0, end=arr.length + 1) {
    pivotVal = arr[start]
    swapCount = start
    for (i = start + 1; i < arr.length; i++) {
        if (arr[i] < pivotVal) {
            swapCount++
            swap(arr, swapCount, i)
        }
    }
    swap(arr, start, swapCount)
    return swapCount
}

function quickSort(arr, left=0, right = arr.length - 1) {
    if (left < right) {
        let pivotPoint = pivot(arr, left, right)
        quickSort(arr, left, pivotPoint - 1)
        quickSort(arr, pivotPoint + 1, right)
    }
    return arr
}


let test1 = [6, 5, 4, 3, -1, 2, 1, 0, 5, 4, -4, 3, 0]
let test2 = [6, 5, 4, 3, -1, 2, 1, 0, 5, 4, -4, 3, 0]
console.log(quickSort(test1))

