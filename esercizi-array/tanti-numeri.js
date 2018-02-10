/*
  Tanti numeri
  Scrivi un programma che dato un insieme di valori in un array, calcolai la media dei valori e restituisca in output tutti i valori minori della media.
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.
  http://www.imparareaprogrammare.it
*/
var numbers = [];
var number = [numbers];


if(typeof Array.prototype.sum !== 'function') {

	Array.prototype.sum = function() {

		var total = 0;
	
		for(var i = 0; i < this.length; i += 1) {
	
			total += this[i];
	
		}
	
		return total;

	};

}

for (var i=0; i<100; i++) {
  numbers.push(Math.round(Math.random() * (100-1) + 1) );
}

console.log(numbers);


var averageNumbers = Math.round(numbers.sum()/numbers.length);

console.log(averageNumbers);


for (var i = 0; i<numbers.length; i++){

 numbers.forEach(function(number){
  var numberN = Number(number);
  var indexN = numbers.indexOf(number);
  if(numberN >= averageNumbers) {
    numbers.splice(indexN, 1);
     }
  return numbers;
 });
}


console.log(numbers);