/*
  Rombo che stampa!
  Scrivi un programma che riceva in input un numero dispari e stampi un rombo di lettere partendo dal valore, in questo modo:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X
  Hint: per indentare puoi usare il tab con '\t'.
  http://www.imparareaprogrammare.it
*/

var num = prompt('inserisci un numero dispari', 5);
var i = 1;
var u = 1;
var numN = Number(num);
var numN2 = Number(num);


for (i=1; i<=numN; i=i+2) {

  document.write('&nbsp;'.repeat(numN-i) + "X".repeat(i) + '<br>');
  
  
}




for (u=numN2; u>0; u=u-2) {

  document.write('&nbsp;'.repeat((numN2-u)+2) + "X".repeat(u-2) + '<br>');
  
  
}

//uncaught rangeerror invalid count value in questa riga--> document.write('&nbsp;'.repeat((numN2-u)+2) + "X".repeat(u-2) + '<br>');