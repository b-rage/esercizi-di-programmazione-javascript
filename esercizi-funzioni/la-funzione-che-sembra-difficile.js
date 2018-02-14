/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.
    Input : 123456, 3
    Output:
            4
  http://www.imparareaprogrammare.it
*/

function f1(n,k) {
  var N = n.toString();
  var lN = N.length;
  var kN = +k;
  if(kN<=lN) {
     return N.charAt(lN-kN);
  }else{
    return 0;
  }
}


console.log(f1(123456,3));
