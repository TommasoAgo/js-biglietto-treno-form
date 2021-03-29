// Devo collegare l'HTML al JavaScript

// Devo creare una variabile che si colleghi al bottone "Genera"
var generateButton = document.getElementById('generate-button');

// Devo creare un evento quando si clicca sul bottone "Genera"
generateButton.addEventListener('click', function() {
    // Devo scrivere cosa deve avvenire quando clicco su "Genera"
     
    // Leggo il nome inserito dall'utente 
    var nomeUtente = document.getElementById('nome-cognome').value; 

    // Leggo l'età dell'utente tramite il valore dell'input
    var etaUtente = document.getElementById('fascia-eta').value;
    // Calcolo l'offerta in base all'età
    var offerta = "Prezzo Standard";
    if ( etaUtente == 'minorenne' ) {
        offerta = 'Sconto Minorenne';
    } else if ( etaUtente == 'over' ) {
        offerta = 'Sconto Silver';
    }

    // Stbilisco il numero della carrozza con un numero random
    var carrozza = Math.floor(Math.random() * 10) + 1;

    // Stabilisco il codice CP con un numero random
    var cpCode = Math.floor(Math.random() * 100000) + 50000;

    // STAMPO IL RISULTATO
    // Nome
    document.getElementById('nome-utente').innerHTML = nomeUtente;

    // Offerta
    document.getElementById('offer').innerHTML = offerta;

    // Carrozza
    document.getElementById('carrozza').innerHTML = carrozza;

    // Codice CP
    document.getElementById('cp-code').innerHTML = cpCode;
})



