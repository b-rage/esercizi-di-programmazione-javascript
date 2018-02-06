/*
  Che giorno è oggi?
  Scrivi un programma che accetti in ingresso un numero intero compreso tra 1 a 7 e visualizzi il corrispondente giorno della settimana, esempio:
    1 => lunedì
    2 => martedì
    3 => mercoledì
    ...
    6 => domenica
  Utilizza il costrutto Switch-case, prevedi anche il caso in cui il valore immesso non sia valido, e stampare un messaggio di errore a tua scelta.

  Variante
  Scriverne una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.
  http://www.imparareaprogrammare.it
*/
var today = prompt('inserisci un numero tra 1 e 7', 3);

var todayN = Number(today);

switch(todayN) {
  case 1:
  console.log('oggi é lunedi');
  break;
  case 2:
  console.log('oggi é martedi');
  break;
  case 3:
  console.log('oggi é mercoledi');
  break;
  case 4:
  console.log('oggi é giovedi');
  break;
  case 5:
  console.log('oggi é venerdi');
  break;
  case 6:
  console.log('oggi é sabato');
  break;
  case 7:
  console.log('oggi é domenica');
  break;
  default:
  console.log('il numero inserito é errato');

  
}