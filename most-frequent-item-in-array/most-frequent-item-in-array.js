const most_frequent = arr => {
    if(arr.length === 0)
        return "none";

    let max_count = 1;
    let max_item = arr[0];
    const hashMap = {}
    arr.map(item =>{
        hashMap[item] = hashMap[item] + 1 || 1;
        if(hashMap[item] > max_count){
            /**
             * We check & update if required value of max_item, whenever we update hashMap
             * So value max_item at end of the loop is the expected o/p
             **/
            max_count = hashMap[item]
            max_item = item
        }
    })
    
    return max_item;
}

//should return 3
const list = [3,3,1,3,2,1];
console.log(most_frequent(list))

// should return 1
const list1 = [1, 3, 1, 3, 2, 1]
console.log(most_frequent(list1))

// should return 3
const list2 = [3, 3, 1, 3, 2, 1]
console.log(most_frequent(list2))

// should return None
const list3 = []
console.log(most_frequent(list3))

// should return 0
const list4 = [0]
console.log(most_frequent(list4))

// should return -1
const list5 = [0, -1, 10, 10, -1, 10, -1, -1, -1, 1]
console.log(most_frequent(list5))
