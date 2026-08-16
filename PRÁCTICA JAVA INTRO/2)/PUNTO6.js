// Función Recursiva:
//○ Crea una función recursiva llamada factorial que calcule el factorial
//de un número dado.

function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    return numero * factorial(numero - 1);
}

console.log(`Factorial de un número: ${factorial(5)}`);
console.log(`Factorial de un número: ${factorial(4)}`);