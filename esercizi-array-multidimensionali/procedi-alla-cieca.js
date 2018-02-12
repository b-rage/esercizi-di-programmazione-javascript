/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  http://www.imparareaprogrammare.it
*/

var matrix = [[]];
for(var j=1; j<4; j++) {
  matrix.push([]);                 //numero righe
}


 matrix.forEach(function(element, index)  {
  for (var i=0; i<5; i++) {
    
    matrix[index].push(Math.round(Math.random() * (100-0) + 0));        //numero colonne
  } 
 });

 console.log(matrix);
 
