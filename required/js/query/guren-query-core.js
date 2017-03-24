var content = "";
function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree (data) {
    var node = new Node(data);
    this._root = node;
}

//这是一个递归recurse且立即调用immediately-invkoing函数
Tree.prototype.traverseDF = function(callback) {
    (function recurse(currentNode) {
        //step2-循环迭代每一个孩子
        for(var i = 0,length = currentNode.children.length;i<length;i++) {
            //step3
            recurse(currentNode,children[i]);
        }
        //step4回调函数，调用callback在traverseDF(callback)的调用过程中传递. 
        callback(currentNode);
        //step1-理解调用一棵树的根节点
    })(this._root)
}


