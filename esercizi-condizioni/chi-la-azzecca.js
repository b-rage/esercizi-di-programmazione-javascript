/*
  Chi l'azzecca?
  Scrivi un programma che generi un numero casuale compreso tra 1 e 100 (zero escluso).
  Successivamente prendi in input altri due numeri di due ipotetici utenti, e comunica se uno dei due ha azzeccato il numero casuale, in caso contrario quale dei due si è avvicinato di più al numero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var min = Math.ceil(1);
var max = Math.floor(100);

var num = Math.floor(Math.random() * (max - min + 1)) + min;

var num1 = prompt('inserisci un numero da 1 a 100',3);
var num2 = prompt('inserisci un numero da 1 a 100',3);

var num1n = Number(num1);
var num2n = Number(num2);

if (num==num1n)
  console.log('complimenti hai azzeccato');
else if (num==num2n)
  console.log('complimenti hai azzeccato');


var dif1 = num-num1n;
var dif2 = num-num2n;


if (dif1<dif2)
  console.log('il primo numero che hai inserito é il piú vicino al numero casuale');
else if (dif1>dif2)
  console.log('il secondo numero che hai inserito é il piú vicino al numero casuale');
else if (dif1==dif2)
  console.log('i numeri che hai inserito sono uguali');

  
  