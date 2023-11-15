"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const myBinaryST = new BinarySearchTree(20);
BinarySearchTree.prototype.insert = function (value) {
    let subTree = new BinarySearchTree(value);
    if (value < this.value) {
        if (!this.left) {
            this.left = subTree;
            return subTree;
        } else {
            this.left.insert(value);
        }
    } else if (!this.right) {
        this.right = subTree;
        return subTree;
    } else {
        this.right.insert(value);
    }
};

BinarySearchTree.prototype.size = function () {
    if (!this.left && !this.right) {
        return 1;
    } else if (!this.left) {
        return 1 + this.right.size();
    } else if (!this.right) {
        return 1 + this.left.size();
    } else {
        return 1 + this.left.size() + this.right.size();
    }

    return 0;
};

BinarySearchTree.prototype.contains = function (value) {
    if (value === this.value) {
        return true;
    } else if (value < this.value) {
        if (!this.left) {
            return false;
        } else {
            return this.left.contains(value);
        }
    } else if (value > this.value) {
        if (!this.right) {
            return false;
        } else {
            return this.right.contains(value);
        }
    }

    return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (
    cb,
    order = "in-order"
) {
    if (order === "in-order") {
        if (this.left) {
            this.left.depthFirstForEach(cb, order);
        }
        cb(this.value);
        if (this.right) {
            this.right.depthFirstForEach(cb, order);
        }
        return this;
    } else if (order === "pre-order") {
        cb(this.value);
        if (this.left) {
            this.left.depthFirstForEach(cb, order);
        }
        if (this.right) {
            this.right.depthFirstForEach(cb, order);
        }
        return this;
    } else if (order === "post-order") {
        if (this.left) {
            this.left.depthFirstForEach(cb, order);
        }
        if (this.right) {
            this.right.depthFirstForEach(cb, order);
        }
        cb(this.value);
        return this;
    }

    return this;
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb) {
    let queue = [this];
    while (queue.length > 0) {
        let node = queue.shift();
        cb(node.value);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }

    return this;
};

myBinaryST.insert(7);
myBinaryST.insert(6);
myBinaryST.insert(9);
myBinaryST.insert(25);
myBinaryST.insert(38);
myBinaryST.insert(33);
myBinaryST.insert(42);
myBinaryST.insert(11);
myBinaryST.insert(15);
myBinaryST.insert(16);
//console.log(myBinaryST);
//console.log(myBinaryST.size());
//console.log(myBinaryST.contains(42));
//console.log(myBinaryST.contains(41));
//console.log(myBinaryST.depthFirstForEach((value) => console.log(value)));
//myBinaryST.depthFirstForEach((value, inOrder) => console.log(value));
//myBinaryST.depthFirstForEach((value, preOrder) => console.log(value));
//myBinaryST.depthFirstForEach((value, postOrder) => console.log(value));
//console.log(myBinaryST.breadthFirstForEach((value) => console.log(value)));

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    BinarySearchTree,
};
