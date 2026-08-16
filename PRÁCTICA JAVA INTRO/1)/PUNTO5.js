// Actualización de Propiedades:
//○ Modifica el valor de la propiedad precio del objeto producto y luego
//imprime el objeto completo para verificar el cambio.

const producto = {
    nombre: "Teclado",
    precio: 25000,
    disponible: true
};

producto.precio = 30000;
console.log(producto);