/*
  Tick, tack, timer!
  Scrivi un programma che dato un numero in input, stampi il conto alla rovescia a partire dal numero acquisito.
    Input : 5
    Output:
            4
            3
            2
            1
            0
  http://www.imparareaprogrammare.it
*/


function f1 (num) {
  for(var i=num; i<=num; i--) {
    if(i<0) {break;}
    console.log(i);
  }
  
}

f1(43);
