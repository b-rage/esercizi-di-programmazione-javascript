/*
  Operazioni tra array
  Scrivi un programma che dichiari 2 array di 10 elementi interi e li riempia con numeri casuali da 1 a 10.
  Il programma prende in input dall'utente il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Ed esegue il calcolo tra ogni elemento dei due array salvando ciascun risultato in un terzo array di appoggio.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var numbers1 = [];
var numbers2 = [];
var numbers3 = [];

for (var i=0; i<10; i++) {
  numbers1.push(Math.round(Math.random() * (10-1) + 1) );
}

for (var i=0; i<10; i++) {
  numbers2.push(Math.round(Math.random() * (10-1) + 1) );
}

console.log(numbers1);
console.log(numbers2);

var operazione = prompt('inserisci operazione:\n1-addizione\n2-sottrazione\n3-moltiplicazione\n4-divisione');

for (var i=0; i<10; i++) {

    switch (operazione) {  

      case 'addizione':
           numbers3.push((numbers1[i] + numbers2[i]));
           break;
      case 'sottrazione':
           numbers3.push((numbers1[i] - numbers2[i]));
           break;
      case 'moltiplicazione':
           numbers3.push((numbers1[i] * numbers2[i]));
           break;
      case 'divisione':
           numbers3.push((numbers1[i] / numbers2[i]));
           break;
      default:
          console.log('non hai scritto una operazione');
          break;
    }
}

console.log(numbers3);