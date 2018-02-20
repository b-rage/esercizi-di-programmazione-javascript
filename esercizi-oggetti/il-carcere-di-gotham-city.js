/*
  Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  - I dati anagrafici delle guardie
  - I dati anagrafici dei detenuti
  - I fascioli personali dei detenui, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso

  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, una di detenuti e una per i fascicoli.

  Prevedi la possibilià di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
    - Aggiungere nuovi fascicoli
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    - Effettuare ricerche nei fascicoli per nome del detenuto

  Nel carcere di Gothma City non tutti i detenuti arrivano alla data di scarcerazione, gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.

  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi il numero delle guardie, il numero di detenuti totali, il numero di detenuti evasi
  e il numero di detenuti deceduti all’interno della struttura.

  http://www.imparareaprogrammare.it
*/

var guardie = [];
var detenuti = [];
var fascicoli = [];

var detenuto = {
  nome: 'Giorgio',
  cognome: 'Pacciani',
  nascita: '13-02-1950'
};

var guardia = {
  nome: 'Carmelo',
  cognome: 'Sbirro',
  nascita: '18-09-1988'
};

var fascicolo = {
  id: 234,
  nome: 'Giorgio',
  cognome: 'Pacciani',
  incarcerato: '23-03-2008',
  scarcerazione: '23-03-2028',
  crimine: 'omicidio',
  evaso: true,
  morto: false
};

function addGuardia(nomeG, cognomeG, nascitaG) {
  return guardie.push({
          nome: nomeG, 
          cognome: cognomeG, 
          nascita: nascitaG
        });
}

function addDetenuto(nomeD, cognomeD, nascitaD) {
  return detenuti.push({
          nome: nomeD, 
          cognome: cognomeD, 
          nascita: nascitaD
        });
}

function addFascicolo(idF, nomeF, cognomeF, incarceratoF, scarcerazioneF, crimineF, evasoF, mortoF) {
  return fascicoli.push({
          id: idF,
          nome: nomeF,
          cognome: cognomeF,
          incarcerato: incarceratoF,
          scarcerazione: scarcerazioneF,
          crimine: crimineF,
          evaso: evasoF,
          morto: mortoF
        });
}

function guardieList() {
  for(var i=0; i<guardie.length; i++) {
    console.log(guardie[i].nome + ' ' + guardie[i].cognome);
    
  }
}

function detenutiList() {
  for(var i=0; i<detenuti.length; i++) {
    console.log(detenuti[i].nome + ' ' + detenuti[i].cognome);
    
  }
}

function fascicoliList() {
  for(var i=0; i<fascicoli.length; i++) {
    console.log(fascicoli[i].id + ' ' + fascicoli[i].nome + ' ' + fascicoli[i].cognome);
    
  }
}

function findFascicolo(nomeFasc, cognomeFasc) {
  for(var i=0; i<fascicoli.length; i++) {
    if(fascicoli[i].nome == nomeFasc && fascicoli[i].cognome == cognomeFasc) {
      console.log(fascicoli[i].id + ' ' + fascicoli[i].nome + ' ' + fascicoli[i].cognome + ' ' + fascicoli[i].incarcerato + ' ' + fascicoli[i].scarcerazione + ' ' + fascicoli[i].crimine);
      
    }
  }
}

addGuardia('Carmelo', 'Sbirro', '18-09-1988');
addGuardia('Carmelo2', 'Sbirro2', '18-09-1978');
addGuardia('Carmelo3', 'Sbirro3', '22-09-1989');
addDetenuto('Girgio', 'Pacciani', '13-02-1980');
addDetenuto('Girgio2', 'Pacciani2', '13-02-1970');
addDetenuto('Girgio3', 'Pacciani3', '13-02-1960');
addFascicolo(234, 'Giorgio', 'Pacciani', '23-03-2008', '23-03-2028', 'omicidio', true, false);
addFascicolo(234, 'Giorgio2', 'Pacciani2', '23-03-2000', '23-03-2025', 'omicidio', false, false);
addFascicolo(234, 'Giorgio3', 'Pacciani3', '23-03-2010', '23-03-2020', 'rapina', false, false);
guardieList();
detenutiList();
fascicoliList();
findFascicolo('Giorgio2', 'Pacciani2');


