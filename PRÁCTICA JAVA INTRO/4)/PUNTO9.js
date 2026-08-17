// Uso de find:
//○ Crea un array de objetos llamados personas donde cada objeto
//tenga nombre y edad. Usa find para encontrar a la primera persona mayor de 30 años.

let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 32 },
    { nombre: "Pedro", edad: 40 },
    { nombre: "Lucía", edad: 28 }
];

let persona = personas.find(persona => persona.edad > 30);

console.log("Primera persona encontrada que es mayor de 30 años:");
console.log(persona);