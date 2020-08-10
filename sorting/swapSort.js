// swapSort.js
//
// if you're in an interview and completely forget quadratic sorting algos
// don't panic!
//

function swapSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
                console.log(arr)
            }
        }
    }
    return arr
}

let test = [5,4,2,3,1, 0, -1]

console.log(swapSort(test))

