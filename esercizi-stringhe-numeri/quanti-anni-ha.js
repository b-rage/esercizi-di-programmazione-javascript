/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/

var birthYear = prompt("Please enter your birth year", "1972");
var d = new Date();
var n = d.getFullYear();
var age = n-birthYear;
console.log("Hai " + age + " anni");
