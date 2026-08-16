// Copiar Objetos:
//○ Crea una copia profunda del objeto estudiante utilizando el método
//JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
//original no haya sido alterado.

const estudiante = {
    nombre: "Valentino",
    edad: 20,
    direccion: {
        calle: "San Martín",
        ciudad: "Concepción del Uruguay",
        pais: "Argentina"
    }
};

const copiaEstudiante = JSON.parse(
    JSON.stringify(estudiante)
);
// JSON.stringify(): Convierte el objeto en texto JSON
// JSON.parse(): Convierte ese texto nuevamente en un objeto

copiaEstudiante.nombre = "Pedro";
copiaEstudiante.direccion.ciudad = "Paraná";

console.log("Objeto original:");
console.log(estudiante);

console.log("Copia modificada:");
console.log(copiaEstudiante);