// quick3.js

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

const pivot = (arr, start=0, end=arr.length + 1) => {
    pivotVal = arr[start]
    swapCount = start
    for(let i = start + 1; i < arr.length; i++) {
        if (arr[i] < pivotVal) {
            swapCount++
            swap(arr, swapCount, i)
        }
    }
    swap(arr, start, swapCount)
    return swapCount
}

const quickSort = (arr, left=0, right=arr.length - 1) => {
    if (left < right) {
        let pivotPoint = pivot(arr, left, right)
        quickSort(arr, left, pivotPoint - 1)
        quickSort(arr, pivotPoint + 1, right)
    }
    return arr
}

test = [-20, 33, -1, 48, 0, 6, 47, -27, 60, -21, 21, -7, 25, -4, 4, 57]

console.log(quickSort(test))
