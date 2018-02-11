/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e le due array.

    Input : 
      2 3
    Output:
      [
        [1, 50, 100],
        [1, 20, 40],
      ]

      Array R
        [152, 61]
      Array C
        [2, 70, 140]

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

matrix.forEach(function(element, index) {
     r.push(matrix[index].sum());
});

for (var t=0; t<mM; t++) {
  
     c.push(matrix[t] + matrix[(t+1)]);
     
}


console.log(matrix);
console.log(r);
console.log(c);
