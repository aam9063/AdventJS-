/*
Santa Claus tiene una agenda mágica 📇 donde guarda las direcciones de los niños para entregar los regalos. 
El problema: la información de la agenda está mezclada y malformateada. Las líneas contienen un número de 
teléfono mágico, el nombre de un niño y su dirección, pero todo está rodeado de caracteres extraños.

Santa necesita tu ayuda para encontrar información específica de la agenda. Escribe una función que, dado 
el contenido de la agenda y un número de teléfono, devuelva el nombre del niño y su dirección.

Ten en cuenta que en la agenda:

Los números de teléfono están formateados como +X-YYY-YYY-YYY (donde X es uno o dos dígitos, e Y es un dígito).
El nombre de cada niño está siempre entre < y >
La idea es que escribas una funcióna que, pasándole el teléfono completo o una parte, devuelva el nombre y 
dirección del niño. Si no encuentra nada o hay más de un resultado, debes devolver null.

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, '34-600-123-456')
{ name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, '600-987')
{ name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, '111')
null
Explicación: No hay resultados

findInAgenda(agenda, '1')
null
Explicación: Demasiados resultados
*/

/**
 * Dado un texto de "agenda" y un número de teléfono (o parte),
 * busca si hay exactamente un registro que coincida con ese teléfono.
 * Devuelve un objeto { name, address } si hay una coincidencia única;
 * en caso contrario, devuelve null.
 *
 * @param {string} agenda - Texto con varias líneas, cada una con teléfono y nombre.
 * @param {string} phone - Teléfono completo o parte de él a buscar.
 * @returns {{ name: string, address: string } | null}
 */

function findInAgenda(agenda, phone) {
  const kidsList = agenda.split('\n');
  const foundKids = kidsList.filter((kid) => kid.includes(phone));

  const matchingCount = foundKids?.length;

  if (matchingCount === 1) {
    const [firstKid] = foundKids;
    const name = firstKid.split('<')[1].split('>')[0];
    const address = firstKid
      .split(' ')
      .slice(1, -1)
      .join(' ')
      .split('<')[0]
      .trim();

    return { name, address };
  }

  return null;
}


 // Ejemplo con Regex
 
// function findInAgenda(agenda, phone) {
//   // 1. Separamos el contenido por líneas
//   const lines = agenda.split('\n');

//   // Expresiones regulares para extraer el teléfono y el nombre
//   // - Teléfono: +X-YYY-YYY-YYY
//   //   Donde X es 1 o 2 dígitos y cada Y es 1 dígito.
//   const phoneRegex = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/;
//   // - Nombre: contenido dentro de <...>
//   const nameRegex = /<([^>]+)>/;

//   // Aquí almacenaremos la información parseada { phone, name, address }
//   const entries = [];

//   // 2. Procesamos cada línea para extraer sus datos
//   for (const line of lines) {
//     // Buscamos el teléfono
//     const phoneMatch = line.match(phoneRegex);
//     if (!phoneMatch) {
//       // Si no hay teléfono en esta línea, pasamos
//       continue;
//     }
//     const foundPhone = phoneMatch[0];

//     // Buscamos el nombre
//     const nameMatch = line.match(nameRegex);
//     if (!nameMatch) {
//       // Si no hay nombre en esta línea, pasamos
//       continue;
//     }
//     const foundName = nameMatch[1]; // el grupo capturado sin < >

//     // El resto de la línea se considera "dirección", quitando el teléfono y el nombre
//     // Usamos replace para eliminar esas partes del texto
//     let address = line
//       .replace(phoneRegex, '')
//       .replace(nameRegex, '')
//       .trim();

//     // Guardamos la entrada
//     entries.push({
//       phone: foundPhone,
//       name: foundName,
//       address: address
//     });
//   }

//   // 3. Filtramos las entradas cuyo teléfono contenga el "phone" buscado
//   const matches = entries.filter(entry => entry.phone.includes(phone));

//   // 4. Si hay exactamente una coincidencia, devolvemos name y address
//   if (matches.length === 1) {
//     const { name, address } = matches[0];
//     return { name, address };
//   }

//   // 5. Si no hay coincidencias o hay más de una, devolvemos null
//   return null;
// }

// // -------------------------------------------------
// // EJEMPLOS DE USO
// // -------------------------------------------------

// const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
// Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
// <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

// console.log(findInAgenda(agenda, '34-600-123-456'));
// // { name: 'Juan Perez', address: 'Calle Gran Via 12' }

// console.log(findInAgenda(agenda, '600-987'));
// // { name: 'Maria Gomez', address: 'Plaza Mayor 45 Madrid 28013' }

// console.log(findInAgenda(agenda, '111'));
// // null (No hay resultados)

// console.log(findInAgenda(agenda, '1'));
// // null (Demasiados resultados, coincide con +1-800-555-0199 y +34-600-123-456, etc.)



  