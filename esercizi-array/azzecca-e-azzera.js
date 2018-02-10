/*
  Azzecca e azzera
  Scrivi un programma che dichiari un array di 100 elementi interi e lo riempia con numeri casuali da 1 a 50.
  Permetti all'utente di inserire una serie di numeri e azzera tutti i numeri nell'array principale che contengono un multiplo del numero inserito.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var numbers = [];


for (var i = 0; i<100; i++) {

     numbers.push(Math.round( Math.random() * (50 - 1) + 1));
  }
 
  console.log(numbers);  
  




var length = numbers.length;


for (var i=0; i<100; i++) {
  var numero = numbers[i];
  console.log(numero);
  if (numero !==0) {
      var numberUser = prompt('inserisci un numero', 12);

      numbers.forEach(function(number){
      
        var numberUserN = Number(numberUser);
        var indexN = numbers.indexOf(number);
      
        
        for (i=0; i<numbers.length; i++) {
          if (number  % numberUserN === 0){
            numbers.splice(indexN, 1, 0);
          }
      
        } 
        

      });} 
}


console.log(numbers); 
 



  

   

 



