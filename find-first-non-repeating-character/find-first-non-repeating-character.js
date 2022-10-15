const non_repeating = given_string => {
    const given_array = given_string.split('')
    const hashMap = {};
    let result;

    given_array.map(char => {
        hashMap[char] = hashMap[char] + 1 || 1;        
    })
    
    for(c in hashMap){  
        /**
         * We need to find the 1st character whose count value in hashMap is 1 
         **/
        if(hashMap[c] === 1){
            result = c
            break;
        }
        else
            result = "None"
        
    }
    return result;
}
    



// should return 'c'
console.log(non_repeating("abcab")) 

// should return None
console.log(non_repeating("abab"))

//# should return 'c'
console.log(non_repeating("aabbbc"))

// should return 'd'
console.log(non_repeating("aabbdbc"))