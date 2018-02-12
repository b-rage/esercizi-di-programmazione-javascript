/*
  Conta il numero
  Scrivi una funzione che prenda in input un numero intero e restituisca il numero di cifre presenti.
    Input : 9999
    Output:
            4
  Hint: puoi convertire il tipo di dato
  http://www.imparareaprogrammare.it
*/


function numberInput (input){
    var convert = String(Math.round(input));
    var numero = convert.length;
    return numero;
}

console.log(numberInput(2688888854.45));

