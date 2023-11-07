"use strict";

function BinarioADecimal(num) {
    var numeroDecimal = parseInt(num, 2);
    return numeroDecimal;
}

function DecimalABinario(num) {
    if (num === 0) {
        return "0";
    }
    var binario = "";
    while (num > 0) {
        binario = (num % 2) + binario;
        num = ~~(num / 2);
    }
    return binario;
}

module.exports = {
    BinarioADecimal,
    DecimalABinario,
};
