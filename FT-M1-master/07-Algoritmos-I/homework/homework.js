"use strict";
// No cambies los nombres de las funciones.

// Factorear el número recibido como parámetro y devolver en un array
// los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
// Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
// Tu código:
function factorear(num) {
    let factores = [];
    factores.push(1);

    for (let divisor = 2; num > 1; divisor++) {
        if (num % divisor === 0) {
            factores.push(divisor);
            num /= divisor;
            divisor--;
        }
    }

    return factores;
}

const resultado = factorear(180);
console.log(resultado);
const resultado2 = factorear(150);
console.log(resultado2);

function bubbleSort(array) {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4, 2, 5, 3, 1]));
console.log(bubbleSort([19, 4, 50, 26, 27, 41, 60, 10]));
// Implementar el método conocido como bubbleSort para ordenar de menor a mayor
// el array recibido como parámetro
// Devolver el array ordenado resultante
// Tu código:

function insertionSort(array) {
    let arr = [...array];
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            j--;
        }
    }
    return arr;
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
}

console.log(insertionSort([4, 2, 5, 3, 1]));

function selectionSort(array) {
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
}

console.log(selectionSort([4, 2, 5, 3, 1]));
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    factorear,
    bubbleSort,
    insertionSort,
    selectionSort,
};
