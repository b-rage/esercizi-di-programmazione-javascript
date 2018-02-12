/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.
  
    Input : 
      2 3
    Output:
      [
        [1, 50, 100],
        [1, 20, 40],
      ]
      212

  http://www.imparareaprogrammare.it
*/

var n = prompt('inserisci un numero');
var m = prompt('inserisci un numero');
var nN = parseInt(n);
var mM = parseInt(m);

var matrix = [[]];
for(var j=1; j<nN; j++) {
  matrix.push([]);
}


 matrix.forEach(function(element, index)  {
  for (var i=0; i<mM; i++) {
    
    matrix[index].push(Math.round(Math.random() * (100-1) + 1));
  } 
 });

 console.log(matrix);

 if(typeof Array.prototype.sum !== 'function') {

	Array.prototype.sum = function() {

		var total = 0;
	
		for(var i = 0; i < this.length; i += 1) {
	
			total += this[i];
	
		}
	
		return total;

	};

}

 var c = [];
 var r = [];

matrix.forEach(function(element, index) {     //somma righe
     r.push(matrix[index].sum());
});




for(var i=0;i<matrix.length;i++){       //somma colonne
 for(var j=0;j<matrix[i].length;j++){
  c[j] = (c[j] || 0) + matrix[i][j];
 }
}

console.log(matrix);
console.log(r.sum());
console.log(c.sum());
 
