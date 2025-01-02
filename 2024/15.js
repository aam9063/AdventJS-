/*
Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

Tiene una cabecera con el nombre de la columna.
El nombre de la columna pone la primera letra en mayúscula.
Cada fila debe contener los valores de los objetos en el orden correspondiente.
Cada valor debe estar alineado a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
Mira el ejemplo para ver cómo debes dibujar la tabla:

drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
*/

/**
 * Dibuja una tabla con cabecera, ajustando las columnas 
 * a la máxima longitud de cada campo, alineado a la izquierda.
 * 
 * @param {Array<Object>} data - Array de objetos con datos homogéneos.
 * @returns {string} - La representación en tabla de texto.
 */
function drawTable(data) {
  // Si el array está vacío, no dibujamos nada
  if (!data || data.length === 0) return '';

  // 1) Determinamos las columnas a partir de las claves del primer objeto
  const columns = Object.keys(data[0]);

  // Función para poner en mayúscula la primera letra
  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // 2) Calculamos las longitudes máximas para cada columna
  //    - Hay que considerar la cabecera y todos los valores.
  const colWidths = columns.map((col) => {
    const headerLength = capitalizeFirst(col).length;
    const maxValueLength = data.reduce((acc, obj) => {
      const cellValue = String(obj[col]);
      return Math.max(acc, cellValue.length);
    }, 0);
    return Math.max(headerLength, maxValueLength);
  });

  // 3) Funciones auxiliares para construir la tabla

  // Construye una línea como +-------+------+ según las colWidths
  function buildLine() {
    return '+' + colWidths
      .map((width) => '-'.repeat(width + 2)) // +2 para dejar espacio a los lados
      .join('+') + '+';
  }

  // Construye una fila de datos (o cabecera), colocando cada campo
  // alineado a la izquierda, dejando 1 espacio por la izquierda.
  function buildRow(values) {
    return '|' + values.map((val, i) => {
      const width = colWidths[i];
      const text = String(val);
      // Alineamos a la izquierda: 1 espacio + texto + relleno de espacios
      return ' ' + text + ' '.repeat(width - text.length + 1);
    }).join('|') + '|';
  }

  // 4) Armamos todas las partes de la tabla

  // 4.1) Línea superior
  const topLine = buildLine();

  // 4.2) Fila de cabecera (con la primera letra capitalizada)
  const headerValues = columns.map(capitalizeFirst);
  const headerRow = buildRow(headerValues);

  // 4.3) Línea tras la cabecera
  const separatorLine = buildLine();

  // 4.4) Filas de datos
  const dataRows = data.map((obj) => {
    const values = columns.map((col) => String(obj[col]));
    return buildRow(values);
  });

  // 4.5) Línea inferior
  const bottomLine = buildLine();

  // 5) Unimos todo con saltos de línea
  return [
    topLine,
    headerRow,
    separatorLine,
    ...dataRows,
    bottomLine
  ].join('\n');
}

// Ejemplo 1
const table1 = drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
]);
console.log(table1);
/*
+---------+-----------+
| Name    | City      |
+---------+-----------+
| Alice   | London    |
| Bob     | Paris     |
| Charlie | New York  |
+---------+-----------+
*/

// Ejemplo 2
const table2 = drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
]);
console.log(table2);
/*
+----------+----------+
| Gift     | Quantity |
+----------+----------+
| Doll     | 10       |
| Book     | 5        |
| Music CD | 1        |
+----------+----------+
*/

/*
La idea principal es:

Determinar las columnas a partir de las claves del primer objeto (suponiendo que todos tienen las mismas claves).
Calcular la anchura necesaria de cada columna (entre el nombre de la columna —con inicial mayúscula— y los valores 
correspondientes de cada objeto).
Construir:
la línea superior de la tabla,
la fila de cabecera con las columnas,
una línea divisoria tras la cabecera,
las filas de datos,
y finalmente la línea inferior de la tabla.
La anchura de cada columna considera un espacio a la izquierda y la alineación a la izquierda del contenido.
*/

  