// Uso de map:
//○ Crea una función llamada elevarAlCuadrado que tome un array de
//números y devuelva un nuevo array con cada número elevado al
//cuadrado. Usa map para implementar la función.

function elevarAlCuadrado(numeros) {
    return numeros.map(numero => numero * numero);
}

let numeros = [1, 2, 3, 4];

let resultado = elevarAlCuadrado(numeros);


console.log(`Array original:`);
console.log(numeros);
console.log(`Array elevado al cuadrado:`);
console.log(resultado);