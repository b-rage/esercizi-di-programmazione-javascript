/*
  Somma e media
  Scrivi un programma che prenda in input 5 numeri a tua scelta e restituisca in output la somma e la media.
  http://www.imparareaprogrammare.it
*/
var number1 = prompt('Immetti il primo numero:', '1');
var number2 = prompt('Immetti il secondo numero:', '1');
var number3 = prompt('Immetti il terzo numero:', '1');
var number4 = prompt('Immetti il quarto numero:', '1');
var number5 = prompt('Immetti il quinto numero:', '1');

var num1 = parseInt(number1);
var num2 = parseInt(number2);
var num3 = parseInt(number3);
var num4 = parseInt(number4);
var num5 = parseInt(number5);

var sum = (num1+num2+num3+num4+num5);
var average = sum/5;
console.log("La somma é: " + sum);
console.log("La media é: " + average);

