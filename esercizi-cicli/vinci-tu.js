/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero di quanti tiri effettuare per ciascun giocatore (N), dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/

var shotN = prompt('inserisci il numero di tiri per ciascun giocatore', 5);
var i ;
var shotNumber = Number(shotN);
var sumP1 = 0;
var sumP2 = 0;

for(i=1; i<=shotNumber; i++) {
    
    var scorePlayer1 = Math.round( Math.random() * (6 - 1) + 1);
    var scorePlayer2 = Math.round( Math.random() * (6 - 1) + 1);
    sumP1 += scorePlayer1;
    sumP2 += scorePlayer2;   
   
}

console.log(sumP1);
console.log(sumP2);

if (sumP1<sumP2) {
  console.log('vince il giocatore 2');
} else if (sumP1==sumP2) {
  console.log('i giocatori hanno pareggato');
}
else { 
  console.log('vince il giocatore1');
}