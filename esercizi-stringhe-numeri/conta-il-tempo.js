/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/



var input = prompt("Please enter a number", "12560");
var h = Math.round(input/3600);
var restHours = input%3600;
var m = Math.round(restHours/60);
var s = restHours%60;


console.log("Output: " + h + " ore, " + m + " minuti, " + s + " secondi.");
