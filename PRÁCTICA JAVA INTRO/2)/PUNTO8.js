// Función que Usa Otra Función:
//○ Crea una función llamada procesarArray que tome un array y una
//función como parámetros, y aplique la función a cada elemento del
//array. Usa una función como parámetro para multiplicar cada número por 2.

function duplicar(numero) {
    return numero * 2;
}

function procesarArray(array, funcion) {
    const resultado = [];

    for (let i = 0; i < array.length; i++) {
        resultado.push(funcion(array[i]));
    }

    return resultado;
}

const numeros = [1, 2, 3, 4];
const resultado = procesarArray(numeros, duplicar);
console.log(resultado);