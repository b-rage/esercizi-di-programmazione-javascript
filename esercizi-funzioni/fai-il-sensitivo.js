/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre argomenti numerici, A, B e N, e restituisca: 
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B: restituis
    
  Variante
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti: vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.
  http://www.imparareaprogrammare.it
*/
function near (a, b, n){
    var aI = Math.abs(n-a);
    var bI = Math.abs(n-b);
    if (aI === bI) {
      return 0;
    }else if (bI < aI) {
      return 1;
    }else{
      return -1;
    }

}

console.log(near(20, 100, 10));

