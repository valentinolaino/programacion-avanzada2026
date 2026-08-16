// Función que Devuelve Otra Función:
//○ Crea una función llamada crearMultiplicador que tome un número x
//y devuelva una nueva función que multiplique cualquier número por x.

function crearMultiplicador(x) {
    return function(numero) {
        return numero * x;
    };
}

const multiplicarPor2 = crearMultiplicador(2);

console.log(`RESULTADO: ${multiplicarPor2(5)}`);