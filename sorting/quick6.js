//quick6.js
// here we go again

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function pivot(arr, start=0, end=arr.length + 1) {
    pivotVal = arr[start]
    swapIndex = start
    for (let i = start + 1; i < arr.length; i++)
        if (arr[i] < pivotVal) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    swap(arr, start, swapIndex)
    return swapIndex
}

function quickSort(arr, left=0, right=arr.length - 1) {
    if (left < right) {
        let pivIdx = pivot(arr, left, right)
        quickSort(arr, left, pivIdx - 1)
        quickSort(arr, pivIdx + 1, right)
    }

    return arr
}

let test = [5, 4, -6, 3, -7, 2, -3, 1, 0, 0, 9, 8, 2, 1]
console.log(quickSort(test))

function merge(a, b) { // a and b are sorted arrays
    let i = 0
    let j = 0
    let r = []
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            r.push(a[i])
            i++
        } else {
            r.push(b[j])
            j++
        }
    }
    r.push(...a.slice(i))
    r.push(...b.slice(j))

    return r
}

function mSort(arr) {
    if (arr.length < 2) {
        return arr
    } else {
        let mid = Math.floor(arr.length / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)
        return merge(mSort(left), mSort(right))
    }
}

let test2 = [5, 4, -6, 3, -7, 2, -3, 1, 0, 0, 9, 8, 2, 1]
console.log(mSort(test2))


