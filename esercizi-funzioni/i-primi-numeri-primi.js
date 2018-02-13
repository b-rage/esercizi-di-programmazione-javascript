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
  if (isfirstNumbers(i) = true) {
    console.log(i);
    
  }
}



console.log(firstNumbers(n));*/



// prime number is a number which can be devided by 1 and itself only
// by definition 1 is not a prime number
/*function isPrimeNumber(num) {
    // 1 and 0 are not prime numbers
    if(num < 2) { return false; }
    for (var i = 2; i < num; i++) {
        // check if dividiable by any other number, if yes it is not a prime number
        if(num % i == 0){ return false; }
    }
    return true;
}*/

function isPrimeNumber(num) {
  // 1 and 0 are not prime numbers
  if(num < 2) { return false; }
  for (var i = 2; i < num; i++) {
      // check if dividiable by any other number, if yes it is not a prime number
      if(num % i == 0){ return false; }
  }
  return true;
}
var arr = [];
var x = 0;

function second(numero) {
while(arr.length < numero){
  if(isPrimeNumber(x)) { arr.push(x); }
  x++;
}
}

second(13);
console.log(arr);







