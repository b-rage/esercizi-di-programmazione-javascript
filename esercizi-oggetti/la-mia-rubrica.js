/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.
  - Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
    L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.
  - Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
    Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

  Variante
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome e ricava l'indice sul quale applicare l'operazione.

  http://www.imparareaprogrammare.it
*/

//Gestore quindi un array di oggetti prevedendo la possibileà di: inserire, modificare, visualizzare, ricercare e cancellare contatti della rubrica.

var contact = {
  nome: 'Fabio',
  cognome: 'Rossi',
  telefono: '654675'
};

var contactsList = [];

function allContacts() {
    for(var i=0; i<contactsList.length; i++) {
      console.log(contactsList[i].nome);
      
    }
};




function insertContact(nomeC, cognomeC, telC) {
  contactsList.push({
    nome: nomeC,
    cognome: cognomeC,
    telefono: telC
  });
}



function deleteContact(index) {
  contactsList.splice(index, 1);
}

function modifyContact(index) {
  console.log(contactsList[index]);
   
}

function findContact(nomeC) {
  for(var i=0; i<contactsList.length; i++)
    if(nomeC === contactsList[i].nome) {
      console.log(contactsList[i].nome + ' ' + contactsList[i].cognome + ' ' + contactsList[i].telefono);
      
    }
}

function delete2Contact(nomeC) {
  for(var i=0; i<contactsList.length; i++)
    if(nomeC === contactsList[i].nome) {
      var pos = contactsList.indexOf(contactsList[i]);

      contactsList.splice(pos, 1);
      
    }
}

function modify2Contact(nomeC) {
  for(var i=0; i<contactsList.length; i++)
    if(nomeC === contactsList[i].nome) {
      var pos = contactsList.indexOf(contactsList[i]);

      console.log(contactsList[i]);
      
      
    }
}

insertContact('Giorgio', 'Bianchi', '675568');
insertContact('Fabio', 'Rossi', '3455667');
insertContact('Carlo', 'Givoni', '3455321');
allContacts();
//deleteContact(0);
//modifyContact(0);
findContact('Carlo');
delete2Contact('Fabio');
modify2Contact('Giorgio');
console.log(contactsList);




