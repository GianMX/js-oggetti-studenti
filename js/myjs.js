$(document).ready(function () {
// Creo una VAR riferita allo studente e la inserisco in un ciclo FOR a mostare le proprieta
  var io = {
    'nome' : 'Gian',
    'cognome' : 'Invernizzi',
    'eta ': '28',
  };
// Ciclo FOR con console.log
  for (var key in io) {
    console.log(io[key]);
  }
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var studenti = [
  {
  'nome' : 'Crescenzo',
  'cognome' : 'De Martino',
  },
  {
  'nome' : 'Mariangela',
  'cognome' : 'Fantozzi',
  },
  {
  'nome' : 'Paolo',
  'cognome' : 'Paoletti',
  },
  {
  'nome' : 'Trick',
  'cognome' : 'Treat',
  },
  {
  'nome' : 'Nonno',
  'cognome' : 'Anselmo',
  },
]

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nome = prompt('Come ti chiami?');
var cognome = prompt('Cognome?');
var eta = prompt('Quanti anni hai?');

var nuovoStudente = {
  'nome' : nome,
  'cognome' : cognome,
};
studenti.push(nuovoStudente);
console.log(studenti);

// Inserisco in HTML tramite JQ risultato array aggiornato con nome inserito dall'user tramite un ciclo for
for (var i = 0; i < studenti.length; i++) {
  var result = studenti[i];
  $('.iscritti').append(' nome : ' + result.nome + '  / cognome : ' + result.cognome + '<br>');
}

});
