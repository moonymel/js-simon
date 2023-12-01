// CREO LA FUNZIONE PER LA GENERAZIONE DEI NUMERI CASUALI
function generateNumbers(array){
    let check = false;
    let randomInt;

    while(check == false){
        randomInt = Math.floor(Math.random() * 100 + 1);

        if(array.includes(randomInt) == false) {
            check = true;
        } 

    }

    return randomInt;
}

// CREO LA FUNZIONE PER GENERARE L'ARRAY DEI NUMERI CASUALI
function generateRandoms(num) {
    let randoms = [];
    
    for(let i=0; i<num; i++){

        randoms.push(generateNumbers(randoms));
    }

    return randoms;
}

// CHIAMO LA FUNZIONE
let random_numbers = generateRandoms(5);

// VISUALIZZO IN DOM L'ARRAY
let random_string = document.getElementById('random-numbers');
random_string.innerText = random_numbers;

// AVVIO IL TIMEOUT DI 30SEC E DECIDO COSA SUCCEDE DOPO
setTimeout(function(){

    // FACCIO SPARIRE I 5 NUMERI
    random_string.classList.add('d-none');

}, 30000)

let guessed_numbers = [];
let correct_numbers = [];

// DOPO ANCORA 1SEC CHIEDO I 5 NUMERI ALL'UTENTE
setTimeout(function(){

    while(guessed_numbers.length < 5) {
        let guessed_number = parseInt(prompt('Quale numero hai visto?'));
        guessed_numbers.push(guessed_number);

        // SE IL NUMERO CHIESTO E' NEI NUMERI RANDOM DA INDOVINARE LO AGGIUNGO ALL'ARRAY DEI NUMERI CORRETTI
        if(random_numbers.includes(guessed_number)) {
            correct_numbers.push(guessed_number);
        }
    }

}, 31000)

// DOPO ANCORA 1SEC VISUALIZZO IN DOM QUANTI E QUALI NUMERI HA INDOVINATO L'UTENTE
setTimeout(function() {

    let score_1 = document.getElementById('score-1');
    let score_2 = document.getElementById('score-2');

    score_1.innerText = `Hai indovinato ${correct_numbers.length} numeri`;
    score_2.innerText = `I numeri indovinati sono: ${correct_numbers}`;

}, 32000)