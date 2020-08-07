function insertSort(arr) {
        for (let i = 1; i < arr.length; i++) { // begin at the second element
                if (arr[i] >= arr[i - 1]) { // if el is greater than the sorted array, it is correct
                        continue
                } else {
                        let q = arr[i]
                        for (let j = 0; j <= i - 1; j++) { // this is the sorted left portion
                                if (q <= arr[j]) {          
                                        arr.splice(i, 1)
                                        arr.splice(j, 0, q)
                                        break
                                }
                        }
                }
        }
        return arr
}


let x = [1, 3, 5, 2, 4, 6, 2, 1, 0, -4, 10, 235, 3, 4, 0]


console.log(insertSort(x))
