/*
En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y 
un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es 
escribir una función que, dada una lista de regalos y los materiales disponibles, 
devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para 
fabricarlo.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
/ 'tren' SÍ porque sus letras están en 'tronesa'
/ 'oso' SÍ porque sus letras están en 'tronesa'
/ 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []
*/

function manufacture(gifts, materials) { 
    let result = []; // Array para guardar los regalos que se pueden fabricar
    for (let i = 0; i < gifts.length; i++) { // Recorremos la lista de regalos
        let gift = gifts[i]; // Guardamos el regalo actual
        let canManufacture = true; // Variable para saber si se puede fabricar el regalo
        for (let j = 0; j < gift.length; j++) { // Recorremos las letras del regalo
            if (!materials.includes(gift[j])) { // Si la letra no está en los materiales
                canManufacture = false; // No se puede fabricar el regalo
                break; // Salimos
            }
        }

        if (canManufacture) { // Si se puede fabricar el regalo
            result.push(gift); // Lo agregamos al array de regalos que se pueden fabricar
        }
    }

    return result;
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

console.log(manufacture(gifts2, materials2)) // ["puzzle"]