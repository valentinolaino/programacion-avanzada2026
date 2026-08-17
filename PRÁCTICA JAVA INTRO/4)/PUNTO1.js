// Agregar y Eliminar Elementos:
//○ Crea un array frutas con los valores ["manzana", "banana", "pera"]. Usa
//push para agregar una fruta al final, y pop para eliminar la última fruta.

let frutas = ["manzana", "banana", "pera"];

frutas.push("naranja");
console.log(frutas);

let frutaEliminada = frutas.pop();
console.log(`Fruta eliminada: ${frutaEliminada}`);
console.log(frutas);
