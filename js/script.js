// Devo collegare l'HTML al JavaScript

// Devo creare una variabile che si colleghi al bottone "Genera"
var generateButton = document.getElementById('generate-button');

// Devo creare un evento quando si clicca sul bottone "Genera"
generateButton.addEventListener('click', function() {
    // Devo scrivere cosa deve avvenire quando clicco su "Genera"
     
    // Leggo il nome inserito dall'utente 
    var nomeUtente = document.getElementById('nome-cognome').value; 

    // Leggo i km che l'utente deve percorrere
    var kmPercorrere = parseInt( document.getElementById('km-percorrere').value );

    // Stabilisco il prezzo del biglietto
    var prezzoBiglietto = parseInt( kmPercorrere * 0.21 ) ;

    // Leggo l'età dell'utente tramite il valore dell'input
    var etaUtente = document.getElementById('fascia-eta').value;
    // Calcolo l'offerta in base all'età
    var offerta = "Prezzo Standard";
    if ( etaUtente == 'minorenne' ) {
        offerta = 'Sconto Minorenne';
        prezzoBiglietto = prezzoBiglietto - ( prezzoBiglietto * 0.2 );
    } else if ( etaUtente == 'over' ) {
        offerta = 'Sconto Silver';
        prezzoBiglietto = prezzoBiglietto - ( prezzoBiglietto * 0.4 );
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

    // Prezzo Biglietto
    document.getElementById('final-price').innerHTML = prezzoBiglietto.toFixed(2) + ' €';

    // Devo far si che la classe "hidden" diventi classe "block" della sezione "il tuo biglietto"
    var bloccoBiglietto = document.getElementById('biglietto');
    bloccoBiglietto.classList.remove('hidden');
})

// Devo creare una variabile che si colleghi al bottone "Annulla"
var cancelButton = document.getElementById('cancel-button');

// Creo l'evento
cancelButton.addEventListener('click', function() {
    var bloccoBiglietto = document.getElementById('biglietto');
    bloccoBiglietto.classList.remove('block');
    bloccoBiglietto.classList.add('hidden');
})




