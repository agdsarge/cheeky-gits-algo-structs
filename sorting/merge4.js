//merge4.js
//

function merge(a, b) {
    let i = 0
    let j = 0
    let r = []
    while(i < a.length && j < b.length) {
        if(a[i] < b[j]) {
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
        let left = mSort(arr.slice(0, mid))
        let right = mSort(arr.slice(mid))
        return merge(left, right)
    }
}






