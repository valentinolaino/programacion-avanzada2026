// Métodos Getters y Setters:
// ○ Añade un getter y un setter al objeto libro para la propiedad
// añoDePublicacion. Usa el setter para actualizar el año de publicación
// y luego usa el getter para leerlo.

// Un getter permite obtener o leer una propiedad mediante un método especial.
// Un setter permite modificar o establecer el valor de una propiedad mediante un método especial.

const libro = {
    titulo: "El señor de los anillos",
    autor: "J. R. R. Tolkien",
    _añoDePublicacion: 1954,

    get añoDePublicacion() {
        return this._añoDePublicacion;
    },

    set añoDePublicacion(nuevoAño) {
        this._añoDePublicacion = nuevoAño;
    }
};

libro.añoDePublicacion = 1955; //setter

console.log(`Año actualizado: ${libro.añoDePublicacion}`); //getter