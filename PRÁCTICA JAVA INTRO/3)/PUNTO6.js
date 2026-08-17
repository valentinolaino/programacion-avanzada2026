// Paginación de Datos:
//○ Crea una función llamada obtenerPagina que tome un array de
//datos y un número de página. La función debe devolver los
//elementos correspondientes a esa página, asumiendo que cada página tiene 5 elementos.

const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function obtenerPagina(datos, pagina) {
    const elementosPorPagina = 5;
    const inicio = (pagina - 1) * elementosPorPagina; //calcula desde qué posición empezar
    const fin = inicio + elementosPorPagina;

    return datos.slice(inicio, fin); //slice() devuelve una parte del array sin modificar el array original
}

console.log(`Elementos de la página de 1: ${obtenerPagina(datos, 1)}`);
console.log(`Elementos de la página de 2: ${obtenerPagina(datos, 2)}`);
console.log(`Elementos de la página de 3: ${obtenerPagina(datos, 3)}`);