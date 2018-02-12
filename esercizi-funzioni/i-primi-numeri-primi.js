/*
  I primi numeri… primi!
  Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi. Per farlo puoi richiamare la prima funzione.
    Input : 5
    Output:
            2
            3
            5
            7
            11
  http://www.imparareaprogrammare.it
*/
var n = prompt('inserisci un numero');
nN = Number(n);

function firstNumbers (nN) {
    for (var i=2; i<nN; i++) {
      if ( nN % i !=0) {
        return true;
      }else
      { return false;}
    }

}

console.log(firstNumbers(n));

var n2 = prompt('inserisci un numero');
nN2 = Number(n2);

for (i=0; i<nN2; i++) {
  if (firstNumbers(i) = true) {
    console.log(i);
    
  }
}



console.log(firstNumbers(n));
