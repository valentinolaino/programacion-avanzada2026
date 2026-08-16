// Combinar Objetos:
//○ Usa Object.assign para combinar dos objetos, persona1 y persona2,
//en un nuevo objeto. Imprime el resultado.

const persona1 = {
    nombre: "Juan",
    edad: 25
};

const persona2 = {
    ciudad: "Buenos Aires",
    pais: "Argentina"
};

const personaCompleta = Object.assign({}, persona1, persona2); // ese {} representa un objeto vacío donde se copiarán las propiedades.

console.log(personaCompleta);