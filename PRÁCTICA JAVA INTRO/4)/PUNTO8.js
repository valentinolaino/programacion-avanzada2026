// Uso de every:
//○ Crea un array de números llamado numeros y usa every para verificar
//si todos los números son positivos.

let numeros = [2, 4, -8, 10];

let resultado = numeros.every(numero => numero > 0);

console.log(`¿Son todos los números positivos? ${resultado}`);