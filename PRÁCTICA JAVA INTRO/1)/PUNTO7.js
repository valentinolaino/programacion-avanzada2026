// Eliminación de Propiedades:
//○ Elimina la propiedad disponible del objeto producto. Imprime el
//objeto antes y después de eliminar la propiedad.

const producto = {
    nombre: "Teclado",
    precio: 25000,
    disponible: true
};

console.log("Antes de eliminar la disponibilidad del producto:");
console.log(producto);

delete producto.disponible;

console.log("Despuésde eliminar la disponibilidad del producto:");
console.log(producto);