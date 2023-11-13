function sumarConFor() {
    var total = 0;
    for (var i = 1; i <= 5; i++) {
        total = total + i;
    }
    return total;
}
console.log(sumarConFor()); // 15
//
//
//
function sumarConRecursion(num) {
    // caso de corte
    if (num === 5) return 5;
    // aplicamos recursion
    var res = num + sumarConRecursion(num + 1);
    return res;
}
console.log(sumarConRecursion(1));
//
//
// Creamos una funcion que si tenga utilidad. Esta va a recibir el numero hasta el cual yo quiero sumar

function sumarConRecursion(num) {
    // caso de corte
    if (num === 1) return 1;
    // aplicamos recursion
    var res = num + sumarConRecursion(num - 1);
    // si el nro es 8 + 7 + 6 ... + 1
    return res;
}
console.log(sumarConRecursion(8));
//
//
//
//
function sumarConRecursion(num) {
    // caso de corte
    // num = 8, 7
    if (num === 1) return 1;
    //aplicamos recursion
    var nuevoNumero = num - 1;
    var recursion = sumarConRecursion(nuevoNumero);
    var res = num + recursion;
    //        8 + 7 + 6 ... + 1
    return res;
}
console.log(sumarConRecursion(8));

//
//
//
//
//
//
//
//                                                    ¡Estructura de datos!
//
// ARRAYS:

var arr = [1, 2, 3, false, "hola", { a: "hola" }];
//
//
var res = arr.pop(); // eliminamos el ultimo elemento --> retorna ese elemento. Hace 1 solo proceso
var res2 = arr.push(4); // agregamos al final --> la longitud del nuevo array. Hace 1 solo proceso
var res3 = arr.unshift(0); // agregamos un elemento al inicio --> devuelve el elemento. Hace 1 solo proceso
var res4 = arr.shift(); // elimina el primer elemento --> devuelve la longitud del nuevo array. Hace 1 solo proceso
arr.indexOf(false); // Recorre el arreglo haciendo la busqueda
//
//
//
// SET:
//
// Set() nos devuelve un objeto con los valores no repetidos. Tiene distintos métodos.
// Es una clase. Dentro de esta estructura no se pueden repetir elementos.
//
var conjunto = new Set(arr);
console.log(conjunto.add(10));
console.log(conjunto.delete(10));
console.log(conjunto.entries());
console.log(conjunto.has(10));
console.log(conjunto.keys(0));
conjunto.forEach(function (el) {
    console.log(el);
});
//
//
//
// STACK:
// Siguen la estructura LIFO (last in, first out) lo ultimo en ingresar a la pila, es lo primero en irse.
// Tienen 2 operaciones: push() y pop(), porque solo se pueden agregar y eliminar elementos en un orden definido.
// [ "platoRojo", "platoVerde"] --> vamos a ingresar "platoAmarillo"
//        0            1
//  Last in --> "platoAmarillo" --> push --> unshift
//  First out --> "platoAmarillo" --> pop --> shift
//
var arr2 = ["plato2", "plato1"];
arr2.push("plato3");
arr2.push("plato4"); // Para lavarlos
arr2.pop("plato4"); // el pop cuando se aplica a un array vacio, da undefined.

function Stack(array) {
    this.arr = array;
}

Stack.prototype.add = function (elem) {
    return this.arr.push(elem);
};

Stack.prototype.remove = function (elem) {
    return this.arr.pop();
};

Stack.prototype.size = function (elem) {
    return this.arr.length;
};

var stack1 = new Stack([]);
console.log(stack1);
console.log(stack1.add(1));
console.log(stack1.add(4));
console.log(stack1.remove(4));
console.log(stack1.size());
//
//
//
//
// QUEUE
//
// FIFO: First in, first out
// First in --> Push --> Unshift
// First out --> Pop --> Shift
var fila = ["Jaime", "Ivana", "Alejo", "Jodannys"];
console.log(fila.shift());
console.log(fila.shift());
console.log(fila.shift());
console.log(fila.shift());
console.log(fila.push());
