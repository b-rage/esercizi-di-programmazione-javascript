/*
  Primo e ultimo
  Scrivi due funzioni, una che prenda in input tre numeri e restituisca il maggiore, l'altra che restituisca il minore.

  Variante
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array, l'altra il valore minore.
  http://www.imparareaprogrammare.it
*/

function f1(n1,n2,n3) {
  if(n1>n2 && n1>n3) {
    return n1;
  }else if(n2>n1 && n2>n3) {
    return n2;
  }else{
    return n3;
  }
}

function f2(n1,n2,n3) {
  if(n1<n2 && n1<n3) {
    return n1;
  }else if(n2<n1 && n2<n3) {
    return n2;
  }else{
    return n3;
  }
}

console.log(f1(34,67,45));
console.log(f2(34,67,45));

//Variante

var arr = [];

function fmax(arr) {
  
   var maxN = Math.max.apply(null, arr);
   return maxN;
}

console.log(fmax([23,45,67,34,12]));


