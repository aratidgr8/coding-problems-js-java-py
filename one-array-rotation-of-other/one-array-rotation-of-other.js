const is_rotation = (arr1, arr2) => {
    if(arr1.length !== arr2.length)
        return false;

    let keyarr2 = -1;

    /**
     * when we have 2 arrays like [1, 2, 3, 4, 5, 6, 7] & [4, 5, 6, 7, 1, 2, 3]
     * we will first find the index in arr2, where first element of array1 is placed
     * In above case arr1[0] element is same as arr[4]
    **/
     keyarr2 = arr2.indexOf(arr1[0])
    
    /**  
     * No matching element is found. 
     * That means these strings do not have same elements hence cannot be rotation of each other.
    **/ 
    if(keyarr2 === -1)
        return false;
    
    for(let i = 0; i < arr1.length; i++){
        /**
         * Now to check all elements & their order in both the arrays
         * we do, (4 + 0)%7 = 4 
         * which is same arr1[0] === arr2[4], so on we continue with comparision
         **/
        let j = (keyarr2 + i) % arr1.length
        if(arr1[i] != arr2[j])
            return false;
    }
    return true;
    
}


 
 const list1 = [1, 2, 3, 4, 5, 6, 7]

 // should return False.
 const list2a = [4, 5, 6, 7, 8, 1, 2, 3]
 console.log(is_rotation(list1, list2a))
 
 // should return True.
 const list2b = [4, 5, 6, 7, 1, 2, 3];
 console.log(is_rotation(list1, list2b))
 
 // should return False.
 const list2c = [4, 5, 6, 9, 1, 2, 3]
 console.log(is_rotation(list1, list2c))
 
 // should return False.
 const list2d = [4, 6, 5, 7, 1, 2, 3]
 console.log(is_rotation(list1, list2d))
 
 // should return False.
 const list2e = [4, 5, 6, 7, 0, 2, 3]
 console.log(is_rotation(list1, list2e))
 
 // should return True.
 const list2f = [1, 2, 3, 4, 5, 6, 7]
 console.log(is_rotation(list1, list2f))
 
 // should return True.
 const list2g = [7, 1, 2, 3, 4, 5, 6]
 console.log(is_rotation(list1, list2g)) 