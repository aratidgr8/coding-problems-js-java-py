//"x" is the node value that we are looking for
//root is the head of the tree
//we will call this function recursively till we reach the value "null", and find the path to node for which value is "x"
const path_to_x = (root, x) => {
    //head is not pointing to any node
    if(root === null) return null

    //head has value as "x"
    if(root.value === x) return root;

    //If none of the above cases are, i.e. head is not pointing to null & head doesn't have value "x"
    //Then we check for the node with value "x" in left & right subtree of root
    let left_path = path_to_x(root.left, x)

    //If node with value "x" exists in left subtree, 
    if(left_path !== null){
        //Add node "root" to the left_path
        left_path.push(root)
        return left_path
    }

    //Only if we do not find the node with value "x" in left subtree
    //We start checking for it in right subtree
    let right_path = path_to_x(root.right, x)
    if(right_path !== null){
        //Add node "root" to the right_path
        right_path.push(root)
        return right_path
    }

    //If it is neither left nor right subtree
    //It means "x" is not in this tree
    return null

}

//root is head of the tree
//j & k are 2 integers for which we want to find lowest common ancestor
//Assumptions: No duplicates
//From this function we are going to return a node i.e. lowest common ancestor of the 2 given nodes
const lca = (root, j, k) => {

    //we will 1st find paths to j & k
    let path_to_j = path_to_x(root, j)
    let path_to_k = path_to_x(root, k)

    //If both or any of integers is not found we return lca as "null"
    if(path_to_j === null || path_to_k === null)
        return null

    //Initialise o/p to null at 1st
    let lca = null
    let j_pop, k_pop;

    //Now we loop through both path to j & k
    while(path_to_j.length && path_to_k.length){
        j_pop = path_to_j.shift()
        k_pop = path_to_k.shift()

        //Store value in lca if they have same value
        if(j.pop === k.pop)
            lca = j.pop
        
        //Once mismatch is found break the loop, as we have found the lca node
        else
            break;
    }
    return lca;
}