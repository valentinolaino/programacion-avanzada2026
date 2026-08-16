// Anidación de Objetos:
//○ Crea un objeto llamado estudiante con propiedades nombre, edad y
//direccion. direccion debe ser otro objeto con propiedades calle, ciudad y pais. Imprime la dirección completa del estudiante.

const estudiante = {
    nombre: "Valentino",
    edad: 20,
    direccion: {
        calle: "San Martín",
        ciudad: "Concepción del Uruguay",
        pais: "Argentina"
    }
};

console.log(`Dirección completa del estudiante ${estudiante.nombre}: ${estudiante.direccion.calle}, ${estudiante.direccion.ciudad}, ${estudiante.direccion.pais}`);