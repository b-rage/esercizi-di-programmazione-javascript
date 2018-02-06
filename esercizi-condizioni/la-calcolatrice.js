/*
  La calcolatrice
  Scrivi un programma che prenda tre input:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Le operazioni supportate sono le suguenti:
    somma => +
    sottrazione => -
    moltiplicazione => *
    divisione => /
    modulo (solo tra interi) => %
    potenza => ^
    media => m
  Utilizza il costrutto Switch-Case mediante acquisizione di caratteri.
  http://www.imparareaprogrammare.it
*/
var num1 = prompt('inserisci il primo numero', 1);
var num2 = prompt('inserisci il secondo numero', 1);
var operator = prompt('inserisci operazione', 'somma');

var num1N = Number(num1);
var num2N = Number(num2);

switch(operator){
  case 'somma':
    console.log(num1N+num2N);
    break;
  case 'sottrazione':
    console.log(num1N-num2N);
    break;
  case 'moltiplicazione':
    console.log(num1N*num2N);
    break;
  case 'divisione':
    console.log(num1N/num2N);
    break;
  case 'modulo':
    console.log(num1N%num2N);
    break;
  case 'potenza':
    console.log(Math.pow(num1N, num2N));
    break;
  case 'media':
    console.log((num1N+num2N)/2);
    break;
    

  

}
