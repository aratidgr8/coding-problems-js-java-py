/**
 * Implement a function that turns revealed cells into -2 given a location the user wants to click.
 * For simplicity, only reveal cells that have 0 in them.  
 * If the user clicks on any other type of cell (for example, -1 / bomb or 1, 2, or 3), just ignore the click and return the original field.  
 * If a user clicks 0, reveal all other 0's that are connected to it.
 *  Examples:  
 
    *---- 1----*  
    Given field:
        [[0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, -1, 1, 0]]
    Click location: 
        (2, 2: row index = 2, column index = 2)
    Resulting field:
        [[0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, -1, 1, 0]] (same as the given field)
 
    *---- 2 ----* 
    Given field:
        [[-1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, -1]]
    Click location: 
        (1, 3: row index = 1, column index = 3)
    Resulting field:
        [[-1, 1, -2, -2],
        [1, 1, -2, -2],
        [-2, -2, 1, 1],
        [-2, -2, 1, -1]]


* Your function should take:
    field: The given field as a 2D array
    num_rows / numRows: The number of rows in the given field
    num_cols / numCols: The number of columns in the given field
    given_i / givenI: The row index of the cell the user wants to click
    given_j / givenJ: The column index of the cell the user wants to click

**/

/**
 *  we need to implement DFS / BFS algo to find all the related nodes of clicked node and change their value to -2
 * If we use DFS, then we have to either go snack pattern or spiral pattern to search for all zero cells
 * In case all cells of field are zero. 
 * Then worst case Auxilary Space Complexity for DFS is O(n*m)
 * Also Time Complexity is O(n*m) for DFS
 * In case we use BFS search, Auxilary Space Complexity will be O(2(n+m))
 * And Time Complexity is same as that for DFS, as in both the cases we will have to traverse entire array.
 * For more details on this, check minesweeper-clicked.png
 * So we will go by BFS algo
 */

 const click = (field, num_rows, num_cols, given_i, given_j) => {

    let to_check = [];
    
    if(field[given_i][given_j] === 0){
        field[given_i][given_j] = -2;
        to_check.push([given_i, given_j]);
    }
    else{
        return field;
    }

    /**
     * Loop through all 9 cells adjoining clicked cell (including the clicked cell itself), 
     * Change all zeros found to -2
     * Add index of each zero cell iniside `to_check` array 
     * Loop continues till we finish all the items in `to_check` array i.e. we finish updating all zero cells to -2
     * Once done, return updated field
     */
    while(to_check.length){  
        let clickedRowIndex = to_check[0][0];
        let clickedColIndex = to_check[0][1];        
        to_check.shift()
        for(let i = clickedRowIndex-1; i <= clickedRowIndex+1; i++){
            for(let j = clickedColIndex-1; j <= clickedColIndex+1; j++){
                if(i >= 0 && i < num_rows && j >= 0 && j < num_cols && field[i][j] === 0){
                    field[i][j] = -2;
                    to_check.unshift([i, j])
                }    
            }
        }
    }
    return field;
 }

field1 = [  [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 1, -1, 1, 0]
         ]

console.log(click(field1, 3, 5, 2, 2)) 
/**  
 * should return:[
                    [0, 0, 0, 0, 0],
                    [0, 1, 1, 1, 0],
                    [0, 1, -1, 1, 0]
                 ]
**/

console.log(click(field1, 3, 5, 1, 4))
/**  
 * should return:[
                    [-2, -2, -2, -2, -2],
                    [-2, 1, 1, 1, -2],
                    [-2, 1, -1, 1, -2]
                 ]
**/

field2 = [[-1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 1, 1],
          [0, 0, 1, -1]]

console.log(click(field2, 4, 4, 0, 1)) 
/**  
 * should return:[
                    [-1, 1, 0, 0],
                    [1, 1, 0, 0],
                    [0, 0, 1, 1],
                    [0, 0, 1, -1]
                 ]
**/

click(field2, 4, 4, 1, 3) 
/** 
 * should return:[
                    [-1, 1, -2, -2],
                    [1, 1, -2, -2],
                    [-2, -2, 1, 1],
                    [-2, -2, 1, -1]
                 ]
**/ 