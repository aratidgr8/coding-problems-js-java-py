/**
 * Implement a function that assigns correct numbers in a field of Minesweeper, which is represented as a 2 dimensional array.
 * Example: The size of the field is 3x4, and there are bombs at the positions [0, 0] (row index = 0, column index = 0) and [0, 1] (row index = 0, column index = 1).
 * Then, the resulting field should be:[[-1, -1, 1, 0],[2, 2, 1, 0],[0, 0, 0, 0]]
 * Your function should return the resulting 2D array after taking the following three arguments:
 * bombs: A list of bomb locations.  Given as an array of arrays.  Example: [[0, 0], [0, 1]] ([row index = 0, column index = 0], [row index = 0, column index = 1].  Assume that there are no duplicates.
 * num_rows: The number of rows in the resulting field.
 * num_columns: The number of columns in the resulting field.
 * In the resulting field:
 * -1 represents that there is a bomb in that location.
 * 1, 2, 3... etc. represents that there are 1, 2, 3... etc. bombs in the surrounding cells (including diagonally adjacent cells).
 * 0 represents that there are no bombs in the surrounding cells.
 *  
 **/

const mine_sweeper = (bombs, num_rows, num_columns) => {

    /**
     * Initialize a 2D array and set all elements to zero
     */
    let field = Array(num_rows). fill(0). map(() => Array(num_columns).fill(0))

    /**
     * Run for loop for bomb array 
     * Set the selected location element to -1
     */
    bombs.map(bomb => {
        let row_i = [bomb[0]]
        let col_i = [bomb[1]]
        field[row_i][col_i] = -1;
        /**
         * Run double for loops over all 9 cells for every bomb cell
         * [
         *  top-left,       top,        top-right, 
         *  left,           bomb,       right,
         *  bottom-left,    bottom,     bottom -right
         * ]                           
        **/
        for(let i = row_i - 1; i <= row_i + 1; i++){
            for(let j = col_i - 1; j <= col_i + 1; j++){
                /**
                 * Ignore cells outside of array
                 * Ignore cells with value -1
                 **/
                if(i >= 0 && i < num_rows && j >= 0 && j < num_columns && field[i][j] !== -1){
                    /**
                     * For rest of the cells increment value by 1
                     **/
                    field[i][j] += 1
                }
            }
        }
    })     
    return field
}

 console.log(mine_sweeper([[0, 2], [2, 0]], 3, 3))
 /**
  * should return:
    [
        [0, 1, -1],
        [1, 2, 1],
        [-1, 1, 0]
    ]
 **/
 
 
console.log(mine_sweeper([[0, 0], [0, 1], [1, 2]], 3, 4))
/**
 *  should return:
    [
        [-1, -1, 2, 1],
        [2, 3, -1, 1],
        [0, 1, 1, 1]
    ]
 **/ 

 
console.log(mine_sweeper([[1, 1], [1, 2], [2, 2], [4, 3]], 5, 5)) 
 /**
  * should return:
    [
        [1, 2, 2, 1, 0],
        [1, -1, -1, 2, 0],
        [1, 3, -1, 2, 0],
        [0, 1, 2, 2, 1],
        [0, 0, 1, -1, 1]
    ]
 **/
 