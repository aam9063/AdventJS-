/*
En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: 
las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una 
función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, 
eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los 
caracteres en el orden correcto.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

/ Paso a paso:
/ 1. Invertimos el anidado -> sa(ualcatn)s
/ 2. Invertimos el que queda -> santaclaus
Notas:

Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, 
no necesitas validarlos.
En el mensaje final no deben quedar paréntesis.
El nivel máximo de anidamiento es 2.
*/

function decode(message) {
    let stack = []; // Array para almacenar los mensajes
    let result = ''; // Variable para almacenar el mensaje

    for (let i = 0; i < message.length; i++) { // Recorremos el mensaje
        if (message[i] === '(') { // Si encontramos un '('
            stack.push(result); // Guardamos el mensaje en el stack
            result = ''; // Limpiamos el mensaje
        } else if (message[i] === ')') { // Si encontramos un ')'
            result = stack.pop() + result.split('').reverse().join(''); // Invertimos el mensaje y lo concatenamos con el mensaje anterior
        } else { // Si no encontramos '(' o ')'
            result += message[i]; // Agregamos el caracter al mensaje
        }
    }

    return result; // Retornamos el mensaje
}

const a = decode('hola (odnum)');
console.log(a); // hola mundo