/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.
    Input : i topi non avevano nipoti
    Output:
            TRUE
  Hint: puoi eliminare spazi e segni di punteggiatura usando le espressioni regolarie e il metodo del tipo stringa chiamato replace, in questo modo: str.replace(/\W/g, "")
  http://www.imparareaprogrammare.it


function f1(text) {
    var rep = text.replace(/\W/g, "");
    var lunghezzafrase = rep.length;
    var media = lunghezzafrase/2;
    if(media % 2 === 0 ) {
      console.log('pari');
    }else{
      console.log('dispari');
    }
   console.log(media);
  
}*/

function fastestIsPalindrome(str) {
  var strP = str.replace(/\W/g, "");
  var len = Math.floor(strP.length / 2);
  for (var i = 0; i < len; i++)
    if (strP[i] !== strP[strP.length - i - 1])
      return false;
  return true;
}

console.log(fastestIsPalindrome('i topi non avevano nipoti'));