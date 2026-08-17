// Uso de some:
//○ Crea un array de números llamado numeros y usa some para verificar si algún número es mayor que 10.

let numeros = [4, 7, 1, 2];

let resultado = numeros.some(numero => numero > 10);

console.log(`¿Existe un número en el array que sea mayor a 10? ${resultado}`);