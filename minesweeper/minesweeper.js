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
        let row_i = bomb[0]
        let col_i = bomb[1]
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
 