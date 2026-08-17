// Validación de Formularios:
//○ Crea una función llamada validarFormulario que tome un objeto con
//los campos nombre, email y password. La función debe devolver true si todos los campos están presentes y no están vacíos, y false en caso contrario.

function validarFormulario(datos) {
    return datos.nombre !== "" &&
           datos.email !== "" &&
           datos.password !== "";
}

const formulario1 = {
    nombre: "Valentino",
    email: "valentino@email.com",
    password: "123456"
};

const formulario2 = {
    nombre: "",
    email: "valentino@email.com",
    password: "123456"
};

console.log(`Validación de formulario 1: ${validarFormulario(formulario1)}`);
console.log(`Validación de formulario 2: ${validarFormulario(formulario2)}`);
