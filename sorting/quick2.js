//quick2.js
//


function quickSort(arr, left=0, right=arr.length -1) {

    function pivot(arr, start=0, end=arr.length+1) {
        
        function swap(arr, i, j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        
        pivot = arr[start]
        swapIndex = start
        for(let i = start + 1; i < arr.length; i++) {
            if(pivot > arr[i]) {
                swapIndex++
                swap(arr, i, swapIndex)
            }
        }
        swap(arr, swapIndex, start)
        return swapIndex
    }

    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

let test = [2, 4, 5, 1, -9, 3, 13, 5, 9, -8, 0, 2, -5, 4, -8, 62, 12, 13, 0]

console.log(quickSort(test))
