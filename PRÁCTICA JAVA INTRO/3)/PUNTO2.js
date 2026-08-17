// Procesamiento de Datos de una API:
//○ Usando la función obtenerUsuarios, crea otra función llamada
//imprimirNombresDeUsuarios que filtre y muestre solo los nombres de los usuarios.

async function obtenerUsuarios() { 
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");  

    const usuarios = await respuesta.json(); 
    //console.log(usuarios);
    return usuarios;

}

async function imprimirNombresDeUsuarios() {
    const usuarios = await obtenerUsuarios();

    const nombres = usuarios.map(usuario => usuario.name); // map() recorre cada elemento del array y crea un nuevo array.

    console.log(nombres);
}

imprimirNombresDeUsuarios();