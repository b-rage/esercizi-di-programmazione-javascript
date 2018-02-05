/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/
 
var num1 = prompt('inserisci un numero', 2);
var num2 = prompt('inserisci un numero', 2);
var num3 = prompt('inserisci un numero', 2);
var num4 = prompt('inserisci un numero', 2);

maxN = Math.max(num1, num2, num3, num4);
minN = Math.min(num1, num2, num3, num4);

console.log(maxN);
console.log(minN);
