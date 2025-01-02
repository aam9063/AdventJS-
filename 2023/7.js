/*
Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos 
en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo 
en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

drawGift(4, '+')

/
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
/

drawGift(5, '*')
/
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
/

drawGift(1, '^')
/
#
/

Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".
*/

function drawGift(size, symbol) {
  let gift = "";

  // Generar la parte superior del regalo
  for (let i = 0; i < size; i++) {
    const spaces = " ".repeat(size - i - 1);
    const hashes = "#".repeat(size);
    const symbols = symbol.repeat(i);
    gift += spaces + "#" + symbols + "#" + hashes.slice(1) + "\n";
  }

  // Generar la parte frontal del regalo
  for (let i = 0; i < size; i++) {
    const symbols = symbol.repeat(i);
    const hashes = "#".repeat(size);
    gift += "#" + symbols + "#" + hashes.slice(1) + "\n";
  }

  gift = gift.trimEnd() + "\n";
  return gift;
}

console.log(drawGift(4, "+"));
console.log(drawGift(5, "*"));
console.log(drawGift(1, "^"));
