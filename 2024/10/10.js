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
  const registers = {};
  let pointer = 0;

  const operations = {
    MOV: (arg1, arg2) => {
      registers[arg2] = registers[arg1] ?? arg1;
    },
    INC: (arg1) => {
      registers[arg1] = ~~registers[arg1] + 1;
    },
    DEC: (arg1) => {
      registers[arg1] = ~~registers[arg1] - 1;
    },
    JMP: (arg1, arg2) => !registers[arg1] && (pointer = arg2 - 1),
  };

  while (pointer < instructions.length) {
    const [command, arg1, arg2] = instructions[pointer].split(' ');
    operations[command]?.(arg1, arg2);

    pointer++;
  }

  return registers.A;
}
