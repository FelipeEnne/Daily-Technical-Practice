const isValidBST = (root) => {
    if(!root) return true
    
    return checkBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

const checkBST = (root, min, max) => {
    if(!root) return true
    
    if(root.val <= min || root.val >= max) {
        return false
    }
    
    return checkBST(root.left, min, root.val) && checkBST(root.right, root.val, max)
}
