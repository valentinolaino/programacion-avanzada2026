// Generación de Token de Autenticación:
//○ Crea una función llamada generarToken que tome un objeto usuario
//y devuelva un token JWT simulado como una cadena. Puedes usar
//una función como btoa (Base64) para simular la generación del token.

const usuario = {
    id: 1,
    nombre: "Marcos",
    email: "marcos@email.com"
};

function generarToken(usuario) {
    const datos = JSON.stringify(usuario);
    const token = btoa(datos) // btoa codifica ese texto en Base64;

    return token;
}

console.log(generarToken(usuario));