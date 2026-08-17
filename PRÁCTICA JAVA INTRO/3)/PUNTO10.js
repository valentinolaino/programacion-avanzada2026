// Actualización de Información del Usuario:
//○ Crea una función llamada actualizarUsuario que tome un objeto
//usuario y una lista de cambios a aplicar. La función debe retornar el
//usuario con las propiedades actualizadas.

const usuario = {
    nombre: "Juan",
    email: "juan@email.com",
    edad: 20
};

const cambios = {
    email: "nuevo@email.com",
    edad: 21
};

function actualizarUsuario(usuario, cambios) {
    return {
        ...usuario, // copia las propiedades del usuario
        ...cambios // copia las propiedades de cambios
    };
}

console.log("Usuario original:");
console.log(usuario);

console.log("Datos actualizados:");
console.log(actualizarUsuario(usuario, cambios));