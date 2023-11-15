"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const miArrayQuick = quickSort([5, 1, 4, 2, 8]);
console.log(miArrayQuick);

function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    //okey probemos ahora
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    const merge = (left, right) => {
        const merged = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                merged.push(left[leftIndex]);
                leftIndex++;
            } else {
                merged.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return merged
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
    };

    return merge(mergeSort(left), mergeSort(right));
}

const miArray = mergeSort([7, 12, 1, 22, 31, 10]);
console.log(miArray);

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    quickSort,
    mergeSort,
};
