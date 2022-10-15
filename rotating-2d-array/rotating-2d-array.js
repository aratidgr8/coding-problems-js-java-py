//Out of place solution, i.e. by creating a new array.
const rotate_sub = (given_array, n) => {

    //Create new same dimension array and pre-fill it with all zeros.
    let new_array = Array(n).fill(0).map(() => Array(n).fill(0))

    /**
     * New row index = old column index
     * New column index = n - 1 - Subtract old row index  
     * n = nos. of rows / columns
     **/
    let new_i = 0
    let new_j = 0
    
    for(i = 0; i < n; i++){
        for(j = 0; j < n; j++){
            new_i = j
            new_j = n - 1 - i
            new_array[new_i][new_j] = given_array[i][j]
        }
    }
    return new_array
}


const given_array = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]

console.log(rotate_sub(given_array, 3))

/**
 * Solving it in place means that your function won't create a new array to solve this problem.  
 * Instead, modify the content of the given array with O(1) extra space.
 */


/**
 * we must divide array into smaller chunks and then rotate elements
 * For even nos of rows & columns, we create chunks of dimension 1/4 of total array size
 * For odd nos of rows & columns, we create chunks of rectangles and leave the center element as it is as it won't move in rotation
 * To create a generalised formula for row/column index, we can do below,
 * 0 <= New row index <= floor(n/2) - 1, Refer to rotating-2d-array.png
 * 0 <= New column index <= ceil(n/2) - 1
 **/

const rotate_sub_inplace = (i, j, n) => {    
    let new_col_index = n - 1 - i
    return [j, new_col_index];
}

const rotate = (given_array, n) => {
    for(let i = 0; i <= Math.floor(n/2) - 1; i++){
        for(let j = 0; j <= Math.ceil(n/2) - 1; j++){
            
            let temp = new Array(4).fill(-1)     

            let current_i = i;
            let current_j = j;
            let newArrayPosition = [];

            for(let k = 0; k < 4; k++){
                temp[k] = given_array[current_i][current_j]
                newArrayPosition = rotate_sub_inplace(current_i, current_j, n)
                current_i = newArrayPosition[0]
                current_j = newArrayPosition[1]    
            }            
            for(let p = 0; p < 4; p++){
                given_array[current_i][current_j] = temp[(p+3)%4]
                newArrayPosition = rotate_sub_inplace(current_i, current_j, n)
                current_i = newArrayPosition[0]
                current_j = newArrayPosition[1]   
            }            
        }
    }
    return given_array;            
}

const given_array_inplace = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]

console.log(rotate(given_array_inplace, 3))