// Búsqueda de Usuarios:
//○ Crea una función llamada buscarUsuarioPorEmail que tome un array
//de usuarios y un email como parámetros, y devuelva el usuario que
//coincida con el email proporcionado. Usa el método find para implementarlo.

const usuarios = [
    {
        name: "Leanne Graham",
        email: "Sincere@april.biz"
    },
    {
        name: "Ervin Howell",
        email: "Shanna@melissa.tv"
    },
    {
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net"
    }
];

function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email); //recorre el array y busca el primer usuario cuyo email sea igual al email que pasaste
}

console.log(
    buscarUsuarioPorEmail(usuarios, "Sincere@april.biz")
);