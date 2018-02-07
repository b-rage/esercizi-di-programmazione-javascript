/*
  Ti ricordi le tabelline?
  Scrivi un programma che stampi che prenda in input un numero e stampi la tabellina corrispondente.
  http://www.imparareaprogrammare.it
*/

var num = prompt('inserisci un numero per avere la tabellina',4);
var i;

for (i=1; i<=10; i++) {

  var tab = num*i;
  document.write(tab + '<br>');
}