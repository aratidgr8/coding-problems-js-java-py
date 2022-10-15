
//node = current node
//lower = lower limit
//upper = upper limit
const is_bst = (node, lower = null, upper = null) => {
    if(lower !== null && node.value < lower)
        return false
    if(upper !== null && node.value > upper)
        return false;

    let is_left_subtree_bst, is_right_subtree_bst;

    //If left node exists
    if(node.left !== null){
        is_left_subtree_bst = is_bst(nod.left, lower, node.value)
    }
    //If right node exists
    if(is_left_subtree_bst && node.right !== null){
        is_right_subtree_bst = is_bst(node.right, node.value, upper)
    }
    return is_left_subtree_bst && is_right_subtree_bst;
}

