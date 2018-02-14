/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifichs se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  Scrivi una seconda funzione che, in caso la prima restituisca TRUE, visualizzi il giorno della settimana corrispondente considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica

  Nel caso il giorno non sia compreso nel range, il programma dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'
  http://www.imparareaprogrammare.it
*/
var num1;
 function function1(num1) {
   if(num1>=1 && num1<=7) {
     return true, num1;
   }else { return false;}
 }

 var num = function1(3);

 function function2() {
   if(function1(num)) {
     switch(num) {
        case 1: console.log('Lunedí');
        break;
        case 2: console.log('Martedí');
        break;
        case 3: console.log('Mercoledí');
        break;
        case 4: console.log('Giovedí');
        break;
        case 5: console.log('Venerdí');
        break;
        case 6: console.log('Sabato');
        break;
        case 7: console.log('Domenica');
        break;
        

     }
   }else{ console.log('Peccato, non posso indovinare il giorno.');}
 }

function2();