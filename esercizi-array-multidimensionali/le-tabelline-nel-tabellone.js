/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
    
  http://www.imparareaprogrammare.it
*/

var matrix = [[]];
for(var j=0; j<10; j++) {
  matrix.push([]);                 //numero righe
}



  for (var i=0; i<11; i++) {
    
    matrix[0].push(0);        //numero colonne
  } 

  for (var i=0; i<11; i++) {
    
    matrix[1].push(i);       
  } 

  for (var i=0; i<11; i++) {
    
    matrix[2].push(i*2);       
  } 

  for (var i=0; i<11; i++) {
    
    matrix[3].push(i*3);       
  } 

  for (var i=0; i<11; i++) {
    
    matrix[4].push(i*4);       
  } 

  for (var i=0; i<11; i++) {
    
    matrix[5].push(i*5);       
  } 

  for (var i=0; i<11; i++) {
    
    matrix[6].push(i*6);       
  } 

  for (var i=0; i<11; i++) {
    
    matrix[7].push(i*7);       
  }
  
  for (var i=0; i<11; i++) {
    
    matrix[8].push(i*8);       
  } 

  for (var i=0; i<11; i++) {
    
    matrix[9].push(i*9);       
  } 

  for (var i=0; i<11; i++) {
    
    matrix[10].push(i*10);       
  }


<<<<<<< HEAD
  matrix.unshift(['x',0,1,2,3,4,5,6,7,8,9,10]);
  for (var t=1; t<12; t++) {
  matrix[t].unshift(t-1);
  
  }
  
   console.log(matrix);
=======
matrix.unshift(['x',0,1,2,3,4,5,6,7,8,9,10]);
for (var t=1; t<12; t++) {
matrix[t].unshift(t-1);

}

 console.log(matrix);
>>>>>>> 3fa33ca689f850389fba732787ab935468bea804
