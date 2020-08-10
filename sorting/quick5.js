//quick5.js
//

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]] 
}

function pivot(arr, start=0, end = arr.length + 1) {
    let pivotVal = arr[start]
    let swapCount = start
    for(let i = start + 1; i < arr.length; i++) {
        if (arr[i] < pivotVal) {
            swapCount++
            swap(arr, swapCount, i)
        }
    }
    swap(arr, start, swapCount)
    return swapCount
}

function qSort(arr, left=0, right=arr.length - 1) {
    if (left < right) {
        pivotIndex = pivot(arr, left, right)
        qSort(arr, left, pivotIndex -1)
        qSort(arr, pivotIndex + 1, right)
    }
    return arr
}

let test = [9, 3, -5, 0, 1, 7, 3, 3, 5, -7, 2, -9, 0, 12]
console.log(qSort(test))
