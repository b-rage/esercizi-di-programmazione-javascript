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

card.push(Math.round(Math.random() * (90-1) + 1));
var cardN1 = card[0];

card.push(Math.round(Math.random() * (90-1) + 1));
var cardN2 = card[1];



for (var i=0; i<5; i++) {
    if (cardN2 === cardN1) {
      card.pop();
      card[1] = card.push(Math.round(Math.random() * (90-1) + 1));
    } 
}


card.push(Math.round(Math.random() * (90-1) + 1));
var cardN3 = card[2];

for (var i=0; i<5; i++) {
  if (cardN3 === cardN1 || cardN3 === cardN2 ) {
    card.pop();
    card[2] = card.push(Math.round(Math.random() * (90-1) + 1));
  } 
}


card.push(Math.round(Math.random() * (90-1) + 1));
var cardN4 = card[3];



for (var i=0; i<5; i++) {
  if (cardN4 === cardN1 || cardN4 === cardN2 || cardN4 === cardN3) {
    card.pop();
    card[3] = card.push(Math.round(Math.random() * (90-1) + 1));
  } 
}


card.push(Math.round(Math.random() * (90-1) + 1));
var cardN5 = card[4];



for (var i=0; i<5; i++) {
  if (cardN5 === cardN1 || cardN5 === cardN2 || cardN5 === cardN3 || cardN5 === cardN4) {
    card.pop();
    card[4] = card.push(Math.round(Math.random() * (90-1) + 1));
  } 
}
console.log(card);
console.log(cardN1, cardN2, cardN3, cardN4, cardN5);



var numberUser = [];
var match = [];
for (var i=0; i<5; i++) {
  numberUser.push(prompt('inserisci un numero da 1 a 90') );
  if (numberUser[i] == cardN1 || numberUser[i] == cardN2 || numberUser[i] == cardN3 || numberUser[i] == cardN4 || numberUser[i] == cardN5) {
    match.push(numberUser[i]);
    
  }
}

console.log(card);
console.log(numberUser);
console.log(match);





