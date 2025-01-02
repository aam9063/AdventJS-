/*
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación 
de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia 
modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que 
se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia 
entre las secuencias, devuelve una cadena vacía.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''

A tener en cuenta:

Siempre habrá un paso de diferencia o ninguno.
La modificación puede ocurrir en cualquier lugar de la cadena.
La secuencia original puede estar vacía
*/

function findNaughtyStep(original, modified) {
    const len = Math.max(original.length, modified.length); // Obtenemos la longitud máxima de las cadenas

    for (let i = 0; i < len; i++) { // Recorremos la longitud máxima
        if (original[i] !== modified[i]) { // Si los pasos son diferentes
            return original.length > modified.length ? original[i] : modified[i]; // Devolvemos el paso que ha sido añadido o eliminado
        }
    }

    return ''; // Si no hay ninguna diferencia, devolvemos una cadena vacía
}

const original = 'abcd';
const modified = 'abcde';
console.log(findNaughtyStep(original, modified)); // 'e'

const original2 = 'stepfor';
const modified2 = 'stepor';
console.log(findNaughtyStep(original2, modified2)); // 'f'
