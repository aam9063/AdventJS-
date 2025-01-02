/*
¡Santa Claus ya ha repartido todos los regalos! Ahora está revisando los informes de productividad de los elfos. Pero hay un problema: la Product Owner, Mrs. Claus 🧑‍🎄✨, necesita entender rápidamente si los elfos cumplieron con los tiempos estimados. Están haciendo Agile Scream.

Para ayudar a Mrs. Claus, tu tarea es calcular el porcentaje completado de cada tarea y devolverlo redondeado al número entero más cercano. Esto le permitirá planificar mejor para la próxima Navidad y mantener a todos contentos.

Esta es la función que espera:

getCompleted('01:00:00', '03:00:00') // 33%
getCompleted('02:00:00', '04:00:00') // 50%
getCompleted('01:00:00', '01:00:00') // 100%
getCompleted('00:10:00', '01:00:00') // 17%
getCompleted('01:10:10', '03:30:30') // 33%
getCompleted('03:30:30', '05:50:50') // 60%
*/

/**
 * Dado el tiempo trabajado y el tiempo total en formato hh:mm:ss,
 * calcula el porcentaje de completitud redondeado al entero más cercano
 * y devuelve la cadena con el símbolo '%'.
 *
 * @param {string} timeWorked - tiempo trabajado (hh:mm:ss)
 * @param {string} totalTime - tiempo total estimado (hh:mm:ss)
 * @returns {string} - porcentaje completado, p.ej. "33%"
 */

function getCompleted(timeWorked, totalTime) {
  const timeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const partSeconds = timeToSeconds(timeWorked);
  const totalSeconds = timeToSeconds(totalTime);

  return `${Math.round((partSeconds / totalSeconds) * 100)}%`;
}
  
  // Ejemplos:
  console.log(getCompleted('01:00:00', '03:00:00')); // "33%"
  console.log(getCompleted('02:00:00', '04:00:00')); // "50%"
  console.log(getCompleted('01:00:00', '01:00:00')); // "100%"
  console.log(getCompleted('00:10:00', '01:00:00')); // "17%"
  console.log(getCompleted('01:10:10', '03:30:30')); // "33%"
  console.log(getCompleted('03:30:30', '05:50:50')); // "60%"
  