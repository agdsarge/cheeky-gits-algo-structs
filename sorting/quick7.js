// quick 7.js

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]] 
}

function pivot(arr, start=0, end=arr.length + 1) {
    let pivotValue = arr[start]
    let swapIndex = start
    for (i = start+1; i < arr.length; i++) {
        if (arr[i] < pivotValue) {
            swapIndex++
            swap(arr, i, swapIndex)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

function qSort(arr, left=0, right=arr.length - 1) {
    if (left < right) {
        let pVal = pivot(arr, left, right)
        qSort(arr, left, pVal - 1)
        qSort(arr, pVal + 1, right)
    }
    return arr
}

let test0 = [9, 4, 0, -2, 3, -7, 1, 9, 2]
console.log(qSort(test0))


