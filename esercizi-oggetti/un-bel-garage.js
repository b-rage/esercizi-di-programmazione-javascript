/*
  Un bel garage
  Scrivi un programma per la gestione di un garage:
  - Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  - Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Hint: puoi usare un array come base per salvare le automobili.

  http://www.imparareaprogrammare.it
*/
var car1 = {marca: 'fiat', modello: '500'};
var car2 = {marca: 'BMW', modello: 'X5'};
var car3 = {marca: 'Opel', modello: 'Corsa'};
var car4 = {marca: 'Opel', modello: 'Zafira'};
var car5 = {marca: 'BMW', modello: 'X3'};
var garage = [car1, car2, car3, car4, car5];

console.log(garage);

  //function qualeModello(marc) {
    for(var i=0; i<garage.length; i++) {
    
     console.log(garage[i].marca);
     
    }
  //}

  //console.log(qualeModello('BMW'));
  
