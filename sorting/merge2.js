//merge2.js
//
//

function merge(a, b) {
    let i = 0
    let j = 0
    let r = []
    while(i < a.length && j < b.length) {
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

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    } else {
        let mid = Math.floor(arr.length / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)
        return merge(mergeSort(left), mergeSort(right))
    }
}

test = [8, 3, -1, 4, -5, 0, 0, 3, 7, -2, 0, 7, 9, 2, 6, -6]

console.log(mergeSort(test))

