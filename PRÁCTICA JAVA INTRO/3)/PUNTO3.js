// Autenticación Simulada:
//○ Crea una función llamada autenticarUsuario que tome un objeto
//credenciales con usuario y contraseña, y verifique si coinciden con
//un usuario predefinido. La función debe devolver true si la
//autenticación es exitosa y false en caso contrario.

function autenticarUsuario(credenciales) {
    const usuarioPredefinido = {
        usuario: "admin",
        password: "1234"
    };

    if (credenciales.usuario === usuarioPredefinido.usuario && credenciales.password === usuarioPredefinido.password) {
        return true;
    }

    return false;
}

const credenciales1 = {
    usuario: "admin",
    password: "1234"
};

const credenciales2 = {
    usuario: "admin",
    password: "123456"
};

console.log(`Autenticación 1: ${autenticarUsuario(credenciales1)}`);
console.log(`Autenticación 2: ${autenticarUsuario(credenciales2)}`);

