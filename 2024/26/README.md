# Reto 26: Calcula-el-porcentaje-completado

¡Santa Claus ya ha repartido todos los regalos! Ahora está revisando los informes de productividad de los elfos. Pero hay un problema: **la Product Owner, Mrs. Claus** 🧑‍🎄✨, necesita entender rápidamente si los elfos cumplieron con los tiempos estimados. Están haciendo **Agile Scream.**

Para ayudar a Mrs. Claus, tu tarea es calcular el porcentaje completado de cada tarea y devolverlo redondeado al número entero más cercano. Esto le permitirá planificar mejor para la próxima Navidad y mantener a todos contentos.

Esta es la función que espera:

```js
getCompleted('01:00:00', '03:00:00') // 33%
getCompleted('02:00:00', '04:00:00') // 50%
getCompleted('01:00:00', '01:00:00') // 100%
getCompleted('00:10:00', '01:00:00') // 17%
getCompleted('01:10:10', '03:30:30') // 33%
getCompleted('03:30:30', '05:50:50') // 60%
```

🎁 **Ahora Santa Claus y los elfos merecen un descanso. ¡Esperamos que hayan disfrutado el AdventJS y lo recomienden a sus amigos!**

## Mi solución explicada

```js
function getCompleted(timeWorked, totalTime) {
  const timeToSeconds = (time) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const partSeconds = timeToSeconds(timeWorked);
  const totalSeconds = timeToSeconds(totalTime);

  return `${Math.round((partSeconds / totalSeconds) * 100)}%`;
}
```

Al parecer, hay un reto extra en esta serie de retos de AdventJS **Interesante** 💪

Para resolver este reto, primero necesitamos convertir las horas, minutos y segundos a `segundos`. Para eso, creamos una función llamada `timeToSeconds` que recibe un tiempo en formato de cadena y lo convierte a segundos. Lo encapsulamos en una función porque como tenemos que hacerlo dos veces, es mejor tenerlo en un solo lugar.

Dentro de la función `timeToSeconds`, primero dividimos el tiempo en horas, minutos y segundos, partiéndolo por los dos puntos (`:`). Luego, convertimos cada parte a un número entero.

Finalmente, multiplicamos las horas por `3600`, los minutos por `60` y sumamos los segundos. Esto nos da el tiempo total en segundos.

¿Por qué 3600 y 60? Porque hay `3600` segundos en una hora y `60` segundos en un minuto. Así que, multiplicamos las horas por `3600` y los minutos por `60` para convertir todo a segundos. Luego, sumamos los segundos.

Después de tener el tiempo trabajado y el tiempo total en segundos, calculamos el porcentaje completado. Dividimos el tiempo trabajado entre el tiempo total y multiplicamos por `100` para obtener el porcentaje. Luego, utilizamos `Math.round` para redondear el resultado al número entero más cercano.

Vale la pena mencionar que `Math.round` redondea al número entero más cercano. Por ejemplo, `Math.round(0.5)` devuelve `1`, `Math.round(1.5)` devuelve `2` y `Math.round(2.4)` devuelve `2`.

Finalmente, devolvemos el porcentaje completado en formato de cadena, concatenando el porcentaje al final `'%'`.

**Veamos un ejemplo:**

Supongamos que tenemos la siguiente entrada:

```js
getCompleted('03:30:30', '05:50:50');
```

Nuestra ejecución sería la siguiente:

```js
const partSeconds = timeToSeconds('03:30:30');
const totalSeconds = timeToSeconds('05:50:50');
```

Enfocándonos en `partSeconds`, primero dividimos el tiempo en horas, minutos y segundos:

```js
const [hours, minutes, seconds] = time.split(':').map(Number);
// const [hours, minutes, seconds] = '03:30:30'.split(':').map(Number);
// const [hours, minutes, seconds] = ['03', '30', '30'].map(Number);
const [hours, minutes, seconds] = [3, 30, 30];

// nuestras horas, minutos y segundos son:
const hours = 3;
const minutes = 30;
const seconds = 30;
```

Ahora, devolvemos el tiempo total en segundos:

```js
return hours * 3600 + minutes * 60 + seconds;
// return 3 * 3600 + 30 * 60 + 30;
// return 10800 + 1800 + 30;
return 12630;
```

Hacemos lo mismo para `totalSeconds`, primero dividimos el tiempo en horas, minutos y segundos:

```js
const [hours, minutes, seconds] = time.split(':').map(Number);
// const [hours, minutes, seconds] = '05:50:50'.split(':').map(Number);
// const [hours, minutes, seconds] = ['05', '50', '50'].map(Number);
const [hours, minutes, seconds] = [5, 50, 50];

// nuestras horas, minutos y segundos son:
const hours = 5;
const minutes = 50;
const seconds = 50;
```

Ahora, devolvemos el tiempo total en segundos:

```js
return hours * 3600 + minutes * 60 + seconds;
// return 5 * 3600 + 50 * 60 + 50;
// return 18000 + 3000 + 50;
return 21050;
```

Nuestras variables `partSeconds` y `totalSeconds` hasta este momento son:

```js
// const partSeconds = timeToSeconds('03:30:30');
const partSeconds = 12630;
// const totalSeconds = timeToSeconds('05:50:50');
const totalSeconds = 21050;
```

Ahora, calculamos el porcentaje completado:

```js
return `${Math.round((partSeconds / totalSeconds) * 100)}%`;
// return `${Math.round((12630 / 21050) * 100)}%`;
// return `${Math.round(0.6 * 100)}%`;
// return `${Math.round(60)}%`;
return '60%';
```

Por lo tanto, el porcentaje completado es `60%`.

Y eso es todo. Hemos calculado el porcentaje completado de la tarea. 🎉

Ahora si, **¡Santa Claus y los elfos pueden disfrutar de su merecido descanso!** 🎅🎄✨

