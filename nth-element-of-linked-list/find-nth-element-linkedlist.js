const nth_from_last = (n, head) => {

    //Initialise 2 pointers at start of linkedlist
    let left = head;
    let right = head;

    //Move right pointer to right by "n" number of positions, where "n" is the node index that we are searching for.
    for(let i = 0; i < n; i++){

        //In case the node that we are looking for is outside of linkedlist 
        //We return "null" immediately once right pointer points to null.
        //Also if linkedlist is empty, head is null
        if(right === null){
            return null
        }
        //moving right pointer to the node next to itself
        right = right.child
    }

    //Now keep moving both the pointers towards right
    //Till the time, right pointer points to null
    while(right !== null){
        right = right.child;
        left = left.child
    }
    //Once right pointer finally points to null
    //Return the node where left pointer is pointing, that is the desired o/p
    //It is at the "n" th node from end of the linkedlist
    return left;
}