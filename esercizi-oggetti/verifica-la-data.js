/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data, l'oggetto sarà composto da giorno, mese e anno (input a piacere).
  Adesso, scrivi una funzione che prenda in input la data e verifichi se è valida o meno, in questo modo:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"

  http://www.imparareaprogrammare.it
*/

function getDates(day, month, year) {
  if((day<1 || day>31) || (month<1 || month>12) || (day>29 && month==2) || (day==31 && month==4) || (day==31 && month==6) || (day==31 && month==9) || (day==31 && month==11)) {
    console.log("La data non è valida!");
    
  }else{
    console.log("La data è valida!");
  }
}

getDates(31, 41, 2000);
