// Consumo de Datos desde una API:
//○ Crea una función llamada obtenerUsuarios que haga una petición
//HTTP a la API https://jsonplaceholder.typicode.com/users usando
//fetch. Luego, imprime en la consola la lista de usuarios obtenida.

async function obtenerUsuarios() { // async se coloca en una función cuando vamos a realizar operaciones asíncronas y queremos utilizar await.
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");  //fetch es una función que permite hacer una petición HTTP.

    const usuarios = await respuesta.json(); // await espera a que termine una operación asíncrona

    console.log(usuarios);
}

obtenerUsuarios();