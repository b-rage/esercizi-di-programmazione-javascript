/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti, il Giorno e il Mese. La funzione deve restituire il numero del giorno compreso tra 1 e 366.
    Input : 5, 2 
    Output:
            36

  Hint: puoi definire un array con i giorni di ogni mese e ciclarlo.          
  http://www.imparareaprogrammare.it
*/

if(typeof Array.prototype.sum !== 'function') {

	Array.prototype.sum = function() {

		var total = 0;
	
		for(var i = 0; i < this.length; i += 1) {
	
			total += this[i];
	
		}
	
		return total;

	};

}


var arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 function dateCalc(day, month) {
   arr.splice(month);
   var sumA = arr.sum();
   return day + sumA;

 }

 console.log(dateCalc(4, 5));
  