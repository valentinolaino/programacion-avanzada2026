// Envío de Datos a una API:
//○ Crea una función llamada enviarDatos que tome un objeto data y
//haga una petición POST a la API
//https://jsonplaceholder.typicode.com/posts. La función debe imprimir la respuesta de la API.

async function enviarDatos(data) {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: { //indicamos que estamos enviando información en formato JSON
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) //body contiene los datos que enviamos y JSON.stringify() convierte un objeto JavaScript
        }
    );

    const resultado = await respuesta.json();

    console.log(resultado);
}

const nuevoPost = {
    title: "Mi publicación",
    body: "Contenido de prueba",
    userId: 1
};

enviarDatos(nuevoPost);