const common_elements = (arr1, arr2) => {
    let p1 = 0
    let p2 = 0
    let result = []
    while(p1 < arr1.length && p2 < arr2.length){
        /**
         * Loop through all the elements in the 2 arrays 
         * Set one pointer on each array
         * If mataching elements are found, increment both the pointers
         * if element in 1st array > element in 2nd array, increment pointer p2 & vice-versa
         * For eg: when we are at index 1, arr1[1] = 3 & arr2[1] = 2, so arr1[1] > arr2[1], 
         * So we go to next element in arr2[2] & compare it arr1[1]. So on and so forth.
         **/
        if(arr1[p1] === arr2[p2]){
            result.push(arr1[p1])
            p1++, p2++;
        }
        else if(arr1[p1] > arr2[p2]){
            p2++
        }
        else{
            p1++
        }
    }
    return result;
}

//should return [1, 4, 9]
const list_a1 = [1, 3, 4, 6, 7, 9]
const list_a2 = [1, 2, 4, 5, 9, 10]
console.log(common_elements(list_a1, list_a2))

//should return [1, 2, 9, 10, 12]
const list_b1 = [1, 2, 9, 10, 11, 12]
const list_b2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15]
console.log(common_elements(list_b1, list_b2))

//should return []
const list_c1 = [0, 1, 2, 3, 4, 5]
const list_c2 = [6, 7, 8, 9, 10, 11]
console.log(common_elements(list_c1, list_c2)) 