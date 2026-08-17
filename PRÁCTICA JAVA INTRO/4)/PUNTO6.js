// Uso de reduce:
//○ Crea una función llamada sumarElementos que tome un array de
//números y devuelva la suma de todos los elementos del array usando reduce.

function sumarElementos(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

let numeros = [10, 20, 30, 40];

console.log("Array original:");
console.log(numeros);
console.log(`Resultado de sumar todos los elementos del array: ${sumarElementos(numeros)}`);