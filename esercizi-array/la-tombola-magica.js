/*
  La tombola magica
  Scrivi un programma che dichiari un array di 5 elementi e vi inserisca casualmente i valori da 1 a 90 senza ripetizioni.
  Permetti all’utente di effettuare una partita scegliendo 5 numeri a suo piacimento e verifica quanti sono presenti nella array principale, restituisci un risultato del tipo:
    1 numero uguale => estratto
    2 numeri uguali => ambo
    3 numeri uguali => terno
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
  In caso di vittoria dovrà essere stampato un messaggio adeguato a tua scelta, in caso di perdina dovrà essere concesso un nuovo tentativo senza una nuova estrazione.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var card = []; // cartella numeri tombola

var cardN1 = card.push(Math.round(Math.random() * (90-1) + 1));
var cardN3 = card.push(Math.round(Math.random() * (90-1) + 1));
var cardN2 = card.push(Math.round(Math.random() * (90-1) + 1));
var cardN4 = card.push(Math.round(Math.random() * (90-1) + 1));
var cardN5 = card.push(Math.round(Math.random() * (90-1) + 1));

console.log(card);

if (cardN1 === cardN2  || cardN2 === cardN1 ) {
   card.splice(1, 1);
   cardN2 = card.push(Math.round(Math.random() * (90-1) + 1));
   card.splice(1, 0, cardN2);
   card.pop();
} 

console.log(card);

if (cardN1 === cardN3 || cardN3 === cardN1) {
  card.splice(2, 1);
  cardN3 = card.push(Math.round(Math.random() * (90-1) + 1));
  card.splice(2, 0, cardN3);
  card.pop();
}


console.log(card);

if (cardN1 === cardN4 || cardN4 === cardN1) {
  card.splice(3, 1);
  cardN4 = card.push(Math.round(Math.random() * (90-1) + 1));
  card.splice(3, 0, cardN4);
  card.pop();
}


console.log(card);

if (cardN1 === cardN5) {
  card.splice(4, 1);
  cardN5 = card.push(Math.round(Math.random() * (90-1) + 1));
  card.splice(4, 0, cardN5);
  card.pop();
}

console.log(card);


if (cardN2 === cardN3) {
  card.splice(2, 1);
  cardN3 = card.push(Math.round(Math.random() * (90-1) + 1));
  card.splice(2, 0, cardN3);
  card.pop();
}

console.log(card);

if (cardN2 === cardN4) {
  card.splice(3, 1);
  cardN4 = card.push(Math.round(Math.random() * (90-1) + 1));
  card.splice(3, 0, cardN4);
  card.pop();
}

if (cardN2 === cardN5) {
  card.splice(4, 1);
  cardN5 = card.push(Math.round(Math.random() * (90-1) + 1));
  card.splice(4, 0, cardN5);
  card.pop();
}

console.log(card);

if (cardN3 === cardN4) {
  card.splice(3, 1);
  cardN4 = card.push(Math.round(Math.random() * (90-1) + 1));
  card.splice(3, 0, cardN4);
  card.pop();
}

console.log(card);

if (cardN3 === cardN5) {
  card.splice(4, 1);
  cardN5 = card.push(Math.round(Math.random() * (90-1) + 1));
  card.splice(4, 0, cardN5);
  card.pop();
}


console.log(card);

if (cardN4 === cardN5) {
  card.splice(4, 1);
  cardN5 = card.push(Math.round(Math.random() * (90-1) + 1));
  card.splice(4, 0, cardN5);
  card.pop();
}