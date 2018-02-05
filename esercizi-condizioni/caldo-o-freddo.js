/*
  caldo o caldo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/
var mondayT = prompt('Inserisci la temperatura di lunedi', 15);
var tuesdayT = prompt('Inserisci la temperatura di martedi', 15);
var wensdayT = prompt('Inserisci la temperatura di mercoledi', 15);
var tursdayT = prompt('Inserisci la temperatura di giovedi', 15);
var fridayT = prompt('Inserisci la temperatura di venerdi', 15);
var saturdayT = prompt('Inserisci la temperatura di sabato', 15);
var sundayT = prompt('Inserisci la temperatura di domenica', 15);

/* var mondayT = parseInt();
var tuesdayT = parseInt();
var wensdayT = parseInt();
var tursdayT = parseInt();
var fridayT = parseInt();
var saturdayT = parseInt();
var sundayT = parseInt(); */

var tempMax = Math.max(mondayT, tuesdayT, wensdayT, tursdayT, fridayT, saturdayT, sundayT);
var tempMin = Math.min(mondayT, tuesdayT, wensdayT, tursdayT, fridayT, saturdayT, sundayT);

if (tempMax==mondayT) 
  console.log('il giorno piú caldo é lunedi');
else if (tempMax==tuesdayT) 
  console.log('il giorno piú caldo é martedi');
else if (tempMax==wensdayT) 
  console.log('il giorno piú caldo é mercoledi');
else if (tempMax==tursdayT) 
  console.log('il giorno piú caldo é giovedi');
else if (tempMax==fridayT) 
  console.log('il giorno piú caldo é venerdi');
else if (tempMax==saturdayT) 
  console.log('il giorno piú caldo é sabato');
else if (tempMax==sundayT) 
  console.log('il giorno piú caldo é domenica');

if (tempMin==mondayT) 
  console.log('il giorno piú freddo é lunedi');
else if (tempMin==tuesdayT) 
  console.log('il giorno piú freddo é martedi');
else if (tempMin==wensdayT) 
  console.log('il giorno piú freddo é mercoledi');
else if (tempMin==tursdayT) 
  console.log('il giorno piú freddo é giovedi');
else if (tempMin==fridayT) 
  console.log('il giorno piú freddo é venerdi');
else if (tempMin==saturdayT) 
  console.log('il giorno piú freddo é sabato');
else if (tempMin==sundayT) 
  console.log('il giorno piú freddo é domenica');



  
  