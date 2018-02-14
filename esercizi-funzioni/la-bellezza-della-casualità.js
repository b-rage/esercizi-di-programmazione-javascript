/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.
  http://www.imparareaprogrammare.it
*/

function f1(num) {
  return Math.round( Math.random() * (num - 0) + 0)
}

console.log(f1(43));
