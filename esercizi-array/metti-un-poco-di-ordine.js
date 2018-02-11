/*
  Metti un po' d'ordine
  Scrivi un programma che data un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Variante
  Prova ad ordinali in modo crescente.
  http://www.imparareaprogrammare.it
*/

var numbers = [3,9,4,21,8];
function myFunction() {
  numbers.sort(function(a, b){return b-a});
  console.log(numbers);
  }

myFunction();
