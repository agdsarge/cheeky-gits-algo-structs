//colt's merge algo
//
//


function merge(a, b) {
    let result = []
    let i = 0
    let j = 0
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            result.push(a[i])
            i++
        } else {
            result.push(b[j])
            j++
        }
    }
    
    if (i < a.length) {
        result = result.concat(a.slice(i))
    } else if (j < b.length) {
        result = result.concat(b.slice(j))
    }

    return result
}

function mSort(arr) {
    if (arr.length < 2) {
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge(mSort(left), mSort(right))

}

// console.log(mSort([3,1,4,-2, 7, 8, 19, 42, -32, 99, 63, 42, 0, -9, 8, 45]))
