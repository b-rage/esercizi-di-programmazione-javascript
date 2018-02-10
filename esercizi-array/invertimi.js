/*
  Invertimi
  Scrivi un programma che prenda in input un numero N generi una serie di N numeri all'interno di un array, stampa la serie di numeri ma invertendola.

  Variente
  Non utilizzare array di appoggio per inversione.
  http://www.imparareaprogrammare.it
*/
var numbers = [];
var inputN = prompt('inserisci un numero');
var inputNumber = Number(inputN);

for (var i=0; i<inputNumber; i++) {
  numbers.push(Math.round(Math.random() * (100-1) + 1) );
  ;}
console.log(numbers);

var reverse = numbers.reverse();

console.log(reverse);
