// Métodos en Objetos:
//○ Añade un método llamado descripción al objeto libro que devuelva una cadena describiendo el título y el autor del libro. Invoca este
//método e imprime el resultado.

const libro = {
    titulo: "El señor de los anillos",
    autor: "J. R. R. Tolkien",
    añoDePublicacion: 1954,

    descripcion: function() {
        return "El libro " + this.titulo + " fue escrito por " + this.autor;
    }
};

console.log(libro.descripcion());