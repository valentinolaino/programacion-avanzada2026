// Uso de filter:
//○ Crea una función llamada filtrarMayoresDe que tome un array de
//números y un valor de referencia, y devuelva un nuevo array solo con
//los números mayores que ese valor. Usa filter.

function filtrarMayoresDe(numeros, referencia) {
    return numeros.filter(numero => numero > referencia);
}

let numeros = [5, 12, 8, 20, 3, 15];

let resultado = filtrarMayoresDe(numeros, 10);

console.log("Array original:");
console.log(numeros);
console.log("Array con los números mayores a 10:");
console.log(resultado);