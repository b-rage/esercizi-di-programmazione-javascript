/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.
    Input : 5
    Output:
            120
  Hint: 5! = 5*4*3*2*1
  http://www.imparareaprogrammare.it
*/
var arr = [];
function fat(num) {
  for (i=1; i<=num; i++) {
    arr.push(i);
    }
  return arr.reduce(function(a, b) {     //MOLTIPLICARE ELEMENTI ARRAY
    return a * b;
  });
   
}


console.log(arr);

console.log(fat(12));

