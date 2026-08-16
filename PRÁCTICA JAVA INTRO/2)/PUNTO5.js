// Función que Modifica un Objeto:
//○ Crea una función llamada actualizarEdad que tome un objeto
//persona y un número nuevaEdad, y actualice la propiedad edad del objeto.

const persona = {
    nombre: "Loana",
    edad: 20
};

function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
    return persona;
}

console.log("Edad sin actualizar:")
console.log(persona);
actualizarEdad(persona, 21);
console.log("Edad actualizada:")
console.log(persona);