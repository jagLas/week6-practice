function pancakeSort(arr) {
    
    if(isSorted(arr)) {
        return arr;
    }

    let k = pancakeSelect(arr);
    arr = pancakeFlip(arr, k);
    arr = pancakeFlip(arr, arr.length);
    return pancakeSort(arr.slice(0, arr.length - 1)).concat(arr.slice(arr.length - 1));
}

function isSorted (arr) {
    if (arr.length <= 1) {
        return true;
    }
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}

function pancakeSelect(arr) {

    let copy = arr.slice();
    let k;
    copy.reduce((accum, value, index) => {
        if (accum > value) {
            return accum;
        } else {
            k = index;
            return value;
        }
    })

    return k + 1;
}

function pancakeFlip(arr, k) {
    return arr.slice(0, k).reverse().concat(arr.slice(k))
}


const arr1 = [3,2,4,1]
debugger
console.log(pancakeSort(arr1, 2))
const arr2 = [1,2,3]