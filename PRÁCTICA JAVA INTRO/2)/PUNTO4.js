// Función que Devuelve un Objeto:
//○ Crea una función llamada crearPersona que tome nombre y edad
//como parámetros y devuelva un objeto con esas propiedades.

function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad
    };
}

const persona1 = crearPersona("Tobias", 20);
const persona2 = crearPersona("Luna", 43);
console.log(persona1);
console.log(persona2);