/*
  Fai il professore
  Scrivi un programma che converte un voto numerico in un giudizio seguendo questi parametri:
    v < 18:  insufficiente
    18 < = v <21:  sufficiente
    21 < = v <24:  buono
    24 < = v <27:  distinto
    27 < = v <29:  ottimo
    v = 30:  eccellente
  Utilizza costrutto If.

  Variante
  Realizzare una versione con il costrutto Switch-Case.
  http://www.imparareaprogrammare.it
*/
var voto = prompt('inserisci il tuo voto', 23);

var v = Number(voto);

if (v < 18)
  console.log('il tuo voto é: insufficiente');
else if (v>=18 && v<21)
  console.log('il tuo voto é: sufficiente');
else if (v>=21 && v<24)
  console.log('il tuo voto é: buono');
else if (v>=24 && v<27)
  console.log('il tuo voto é: distinto');
else if (v>=27 && v<29)
  console.log('il tuo voto é: ottimo');
else if (v=30)
  console.log('il tuo voto é: eccellente');
  