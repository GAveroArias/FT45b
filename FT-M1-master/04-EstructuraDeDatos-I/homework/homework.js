"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/
// 4! = 4 * 3 * 2 * 1
// n! = n * (n-1) * (n-2) *... *1
// (n-1)! = (n-1) * (n-2) * ... * 1
// n! = n * (n-1)!

function nFactorial(n, a) {
    if (n == 0) {
        return a;
    } else {
        return nFactorial(n - 1, a * n);
    }
}
console.log(nFactorial(4, 1));
console.log(nFactorial(5, 1));
console.log(nFactorial(6, 1));
//
//
//
//
//
//
//
function nFibonacci(n) {
    if (n < 2) return n;
    return nFibonacci(n - 2) + nFibonacci(n - 1);
}

console.log(nFibonacci(1));
console.log(nFibonacci(2));
console.log(nFibonacci(3));
console.log(nFibonacci(4));
console.log(nFibonacci(5));
console.log(nFibonacci(7));
console.log(nFibonacci(9));

// n1 = 0
// n2 = 1
// n ---> posicion, no es un numero. Como usar n como posicion para calcular el valor de la secuencia?
// n3 = n1 + n2 --> 1
// n4 = n2 + n3 --> 1 + 1 --> 2
// n5 = n3 + n4 --> 1 + 1 --> 3
// 0 1 1 2 3 5 8 13 21 ...

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
    this.array = [];
    this.enqueue = function (elemento) {
        return this.array.push(elemento);
    };
    this.dequeue = function (elemento) {
        return this.array.push();
    };

    this.size = function (elemento) {
        return this.array.length;
    };
}

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
    Queue,
    nFactorial,
    nFibonacci,
};
