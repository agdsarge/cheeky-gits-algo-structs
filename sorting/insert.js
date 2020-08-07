//insert.js

function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] <= arr[i]) {
            continue
        } else {
            let q = arr[i]                  // store the value in a variable
            let j = (i - 1)                 // consider index to left
            while(arr[j] > q && j >= 0) {   // while the index to the left is greater than the value
                arr[j+1] = arr[j]           // move array elements to the right
                j -= 1                      // decrement j and repeat
            }
            arr[j+1] = q                    //we have to use j not i!
        }
    }
    return arr
}

let test0 = [0]
let test1 = [5, 4, 3, 2, 1]
let test2 = [-9, -7, 8, 12, 20, 16, 0, 19, -10, -8, 14, -2, 3, 9, -1, 7, 18, 0]

console.log(insertSort(test0))
console.log(insertSort(test1))
console.log(insertSort(test2))
