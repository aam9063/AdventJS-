/*
Los elfos programadores están creando un pequeño ensamblador mágico para controlar las máquinas del taller de Santa Claus.

Para ayudarles, vamos a implementar un intérprete sencillo que soporte las siguientes instrucciones mágicas:

MOV x y: Copia el valor x (puede ser un número o el contenido de un registro) en el registro y
INC x: Incrementa en 1 el contenido del registro x
DEC x: Decrementa en 1 el contenido del registro x
JMP x y: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.
Comportamiento esperado:
Si se intenta acceder, incrementar o decrementar a un registro que no ha sido inicializado, se tomará el valor 0 por defecto.
El salto con JMP es absoluto y lleva al índice exacto indicado por y.
Al finalizar, el programa debe devolver el contenido del registro A. Si A no tenía un valor definido, retorna undefined.
const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

compile(instructions) // -> 2

 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2

 Nota: Los registros que no han sido inicializados previamente se inicializan a 0.
*/

/**
 * Interpreta un pequeño conjunto de instrucciones de ensamblador mágico.
 * 
 * Instrucciones soportadas:
 *  - MOV x y : Copia el valor x (sea número o registro) en el registro y.
 *  - INC x   : Incrementa en 1 el contenido del registro x.
 *  - DEC x   : Decrementa en 1 el contenido del registro x.
 *  - JMP x y : Si el valor del registro x es 0, salta a la instrucción con índice y (0-based).
 *
 * Si se intenta acceder a un registro no inicializado, toma valor 0 por defecto.
 * Al terminar, devuelve el valor del registro 'A' o undefined si no ha sido usado.
 *
 * @param {string[]} instructions - Lista de instrucciones a ejecutar.
 * @returns {number | undefined} - Valor del registro 'A' tras la ejecución.
 */
function compile(instructions) {
  // Almacenamos los registros usados y sus valores
  const registers = {};

  /**
   * Obtiene el valor de un token, que puede ser:
   *  - Un número (e.g. "-1", "7").
   *  - Un nombre de registro (e.g. "A", "B").
   * Si es un registro no inicializado, se asume 0.
   */
  function getVal(token) {
    // Si no es número, asumimos que es un registro
    if (isNaN(token)) {
      if (!(token in registers)) {
        registers[token] = 0;
      }
      return registers[token];
    }
    // Si es número, lo parseamos
    return parseInt(token, 10);
  }

  /**
   * Asigna el valor 'val' al registro 'reg'. 
   * Si el registro no existe, se inicializa a 0 antes de asignar.
   */
  function setReg(reg, val) {
    if (!(reg in registers)) {
      registers[reg] = 0;
    }
    registers[reg] = val;
  }

  // Contador de programa (PC): índice de la instrucción actual
  let pc = 0;

  while (pc < instructions.length) {
    const line = instructions[pc];
    const [cmd, ...args] = line.split(' ');

    switch (cmd) {
      case 'MOV': {
        // MOV x y => Copiar el valor de x (número o registro) en el registro y
        const [x, y] = args;
        const valX = getVal(x);
        setReg(y, valX);
        pc++;
        break;
      }

      case 'INC': {
        // INC x => Incrementa en 1 el contenido del registro x
        const [x] = args;
        const valX = getVal(x);
        setReg(x, valX + 1);
        pc++;
        break;
      }

      case 'DEC': {
        // DEC x => Decrementa en 1 el contenido del registro x
        const [x] = args;
        const valX = getVal(x);
        setReg(x, valX - 1);
        pc++;
        break;
      }

      case 'JMP': {
        // JMP x y => Si el valor del registro x es 0, salta a la instrucción y
        const [x, y] = args;
        const valX = getVal(x);
        const jumpIndex = parseInt(y, 10);

        if (valX === 0) {
          pc = jumpIndex;
        } else {
          pc++;
        }
        break;
      }

      default: {
        // Si la instrucción no coincide con ninguna conocida, avanzamos
        pc++;
        break;
      }
    }
  }

  // Devolvemos el valor de 'A' o undefined si no existe
  let result;
  if ('A' in registers) {
    result = registers.A;
  }
  return result;
}
