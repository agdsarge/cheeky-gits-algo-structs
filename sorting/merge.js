//merge .js

function merge(sArrA, sArrB) {
    let result = []
    while (!(sArrA.length === 0 || sArrB.length === 0)) {
        sArrA[0] <= sArrB[0] ? result.push(sArrA.shift()) : result.push(sArrB.shift())
    }
    return result.concat(sArrA).concat(sArrB)
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

let test0 = [1]
let test1 = [5, 4, 3, 2, 1]
let test2 = [
    1, 13, 0, 32, 9, 16, 21, 10, -9, -25, -1, 
    34, 23, 3, -22, -2, 19, -19, 39, -21, 0, 
    24, -15, -16, 17
] 

console.log(mSort(test2))



