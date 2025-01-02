/*
En el Polo Norte todavía usan fotocopiadoras de papel. Los elfos las usan para copiar las cartas que los 
niños envían a Santa y así poder enviarlas a todos los departamentos de regalos.

Sin embargo ya son muy viejas y no funcionan muy bien. Cada vez que hacen una copia, la calidad de la 
copia disminuye ligeramente, un fenómeno conocido como pérdida generacional.

Necesitas detectar si una carta es una copia de otra. Las cartas son muy largas y no puedes leerlas, 
pero puedes compararlas con un algoritmo.

Existe una gran probabilidad de que un caracter se degrade en cada copia (¡no pasa siempre!). Y al 
ocurrir, la regla que sigue es:

    Los caracteres de la A a la Z se degradan de mayúsculas a minúsculas (A-Z ⇒ a-z)
    Las letras se degradan en una serie de caracteres en este orden: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
    Una vez degradadas las letras en los símbolos, se pueden continuar degradando.
    Ten en cuenta que el último es un espacio en blanco, no un caracter vacío.
    Los caracteres que no son letras (como los dígitos) no se degradan.

Sabiendo esto y recibiendo dos cartas. La supuesta original y la copia. Debes determinar si la 
copia es una copia de la otra.

checkIsValidCopy(
  'Santa Claus is coming',
  'sa#ta Cl#us i+ comin#'
) // true
checkIsValidCopy(
  's#nta Cla#s is coming',
  'p#nt: cla#s #s c+min#'
) // false (por la p inicial)
checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (hay un # donde no debería)

Para entender cómo funcionan las fotocopiadoras y su degradación, mira este ejemplo:

original:  'Santa Claus'
1ª copia:  'santa cla#s'
2ª copia:  'sa#t# cl#+s'
3ª copia:  'sa+## c#+:s'
4ª copia:  's#++. c+:.s'
5ª copia:  's#+:. c:. s'

Por lo tanto s#+:. c+:++ es una copia válida de Santa Claus. Y, como ves, la degradación de las letras no se produce en un orden específico, es aleatorio.
*/

function checkIsValidCopy(original, copy) {
    if (original.length !== copy.length) return false;
  
    const degradationOrder = ['a', 'z', '#', '+', ':', '.', ' '];
  
    const canDegrade = (char1, char2) => {
      if (char1 === char2) return true;
  
      if (char1 >= 'A' && char1 <= 'Z') {
        if (String.fromCharCode(char1.charCodeAt(0) + 32) === char2) {
          return true;
        }
        char1 = String.fromCharCode(char1.charCodeAt(0) + 32);
      }
  
      if (char1 >= 'a' && char1 <= 'z') {
        let index = degradationOrder.indexOf(char1);
        while (index < degradationOrder.length - 1) {
          if (degradationOrder[index + 1] === char2) return true;
          index++;
        }
      } else if (degradationOrder.includes(char1)) {
        let index = degradationOrder.indexOf(char1);
        while (index < degradationOrder.length - 1) {
          if (degradationOrder[index + 1] === char2) return true;
          index++;
        }
      }
      return false;
    };
  
    for (let i = 0; i < original.length; i++) {
      if (!canDegrade(original[i], copy[i])) {
        return false;
      }
    }
  
    return true;
  }
  
  // Ejemplos de prueba
  console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')); // true
  console.log(checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')); // false
  console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')); // true
  console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')); // false
  console.log(checkIsValidCopy('3 #egalos', '3 .+:# #:')); // true
  
