/**
 * Write a function that takes two strings and returns True if they are one away from each other.
 * They are one away from each other if a single operation (changing a character, deleting a character or adding a character) will change one of the strings to the other.
 * Examples:
 * "abcde" and "abcd" are one away (deleting a character).
 * "a" and "a" are one away (changing the only character 'a' to the equivalent character 'a').
 * "abc" and "bcc" are NOT one away. (They are two operations away.)
 **/

 const is_one_away = (s1, s2) => {

    //if only 1 character strings
    if(s1.length === 1 && s2.length === 1){
        return true
    }
    //If same length strings
    if(s1.length === s2.length){
       return is_one_away_same_length(s1, s2)
    }
    //If lengths differ by just 1 character
    if(Math.abs(s1.length - s2.length) === 1){
        if(s1.length > s2.length){
           return is_one_away_diff_length(s1, s2)
        }
        else{
           return is_one_away_diff_length(s2, s1)
        }
    }
    //If lengths differ by more than 1 character
    if(Math.abs(s1.length - s2.length) > 1){
        return false
    }
    return false

}

const is_one_away_same_length = (s1, s2) => {
    let diff = 0;
    for(i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            diff++;
        }
        if(diff > 1)
            return false
    }
    return true;
}

const is_one_away_diff_length = (s1, s2) => {
    let i = 0
    let diff = 0

    //Assuming s1 is larger than s2    
    while(i < s2.length){
        /**
         * When we have strings like, "abcde", "abde"
         * On reaching i = 2 we find a mismatch
         * So we increment diff by 1 & keep value of i as it is for next iteration
         * In if condition then we check if next character of larger string matches with the one in smaller string
         * if they are same we continue with the loop till end of smaller string,
         * if not we increment diff again and break the loop & return false as more than 1 mismatch character is found.
         **/         
        if(s1[i+diff] === s2[i]) i++; 
        else diff++;
        if(diff > 1)
            return false
    }    
    return true
}


// should return True
console.log(is_one_away("abcde", "abcd"))  

// should return True
console.log(is_one_away("abde", "abcde"))

// should return True
console.log(is_one_away("a", "a"))

// should return True
console.log(is_one_away("abcdef", "abqdef"))

// should return True
console.log(is_one_away("abcdef", "abccef"))

// should return True
console.log(is_one_away("abcdef", "abcde"))

// should return False
console.log(is_one_away("aaa", "abc"))

// should return False
console.log(is_one_away("abcde", "abc"))  

// should return False
console.log(is_one_away("abc", "abcde"))

// should return False
console.log(is_one_away("abc", "bcc"))
