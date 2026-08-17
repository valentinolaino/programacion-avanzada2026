// Transformación de Datos:
//○ Crea una función llamada mapearUsuarios que tome un array de
//usuarios obtenidos de la API y devuelva un nuevo array con solo las
//propiedades nombre y email de cada usuario.

async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await respuesta.json();

    return usuarios;
}

function mapearUsuarios(usuarios) {
    return usuarios.map(usuario => {
        return {
            nombre: usuario.name,
            email: usuario.email
        };
    });
}

async function ejecutar() {
    const usuarios = await obtenerUsuarios();

    const usuariosMapeados = mapearUsuarios(usuarios);

    console.log(usuariosMapeados);
}

ejecutar();