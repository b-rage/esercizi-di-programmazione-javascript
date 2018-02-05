/*
  Menu dei dolci
  Scrivi un programma stampi il seguente menu:
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Inoltre, prenda in input il valore numerico della scelta.
  Se la scelta non è tra quelle elencate verrà stampata la scritta 'Dolce non disponibile' altrimenti verrà visualizzata la scelta effettuata 'Hai scelto il dolce X'.
  http://www.imparareaprogrammare.it
*/

 var dolce = prompt('MENU: \n 1. Tiramisu \n 2. Torta della nonna \n 3. Cheescake alla nutella \n 4. Macedonia', 2);

 var dolceN = Number(dolce);

switch (dolceN) {
  case 1:
    console.log('Hai scelto il dolce 1');
    break;

  case 2:
    console.log('Hai scelto il dolce 2');
    break;


  case 3:
    console.log('Hai scelto il dolce 3');
    break; 
    
    
  case 4:
    console.log('Hai scelto il dolce 4');
    break; 
    
  default:
    console.log('Dolce non disponibile'); 
  }