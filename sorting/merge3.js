//merge3.js


const merge = (a, b) => {
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

const mSort = (arr) => {
    if (arr.length < 2) {
        return arr
    } else {
        let mid = Math.floor(arr.length / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)
        return merge(mSort(left), mSort(right))
    }
}

let test = [9, 4, 7, 2, 7, 0, -4, 6, -2, 4, 1, 0, -3, 8]

console.log(mSort(test))

