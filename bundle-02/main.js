/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1

//     function checkAge() {
//     let message = '';
//         if (myAge < 18) {
//             message = `Sei troppo giovane! Hai ${myAge} anni!`;
//         } else {
//             message = `Hai più di 18 anni!`;
//         }
//         return message;
//     }

//     const myAge = 3;
//     console.log(checkAge());

/*
    1- questo codice ci restituisce un stringa per dirci se il valore riferito
    all'età myAge è inferiore o maggiore dei 18 anni. stampiamo in console 
    il messaggio corretto in base al percorso in funzione del valore.

    2- Sono presenti errori di sintassi? no.
    3- Sono presenti errori logici? si, funzione a riga 15 corretta.
*/

// ESERCIZIO 2

// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
//     return colors.length;
// }
// printColorsNumber();

/*
1- Questo codice rappresenta una funzione e che invocata restituisce restituirmi il numero di colori nell'array colors.
2- Sono presenti errori di sintassi? si
3- Sono presenti errori logici? si, funzione a riga 39 corretta.
 */


// ESERCIZIO 3

// function addNumbers() {
        
//     const total = userNumber + 12;
//     console.log(`Il risultato finale è ${total}`);
//     return total;
// }

// const userNumber = Number(prompt('Inserisci un numero'));
// addNumbers(userNumber);

/*
1- Questo codice rappresenta una funzione che vuole chiedere a un utente un numero e sommare il numero ricevuto a un numero stabilito. Il risultato è restituito dal return.
2- Sono presenti errori di sintassi? si
3- Sono presenti errori logici? si funzione corretta a riga 55
*/


// ESERCIZIO 4

// function checkAccess() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = false;

//     if (addresses.includes(userEmail)) {
//         grantAccess = true;
//     }

//     if (grantAccess === true) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }

// checkAccess();

// 1- Che cosa fa questo codice? la funzione vuole controllare se si può accedere o meno al sito in base all'input dell'utente, quindi se lui inserisce delle la mail corretta gli sarà consentito l'accesso.
// 2- Sono presenti errori di sintassi? si
// 3- Sono presenti errori logici? si, codice corretto a riga 74
 
// ESERCIZIO 5 (suggerimento: c'è un solo errore)

// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = false;

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {
//             if (email === userEmail) {
//                 grantAccess = true;
//             }
//         }
//     }
//     if (grantAccess) {
//         console.log('Accesso consentito!');
//     } else {
//         console.log('Accesso negato!');
//     }
// }
// checkAccessImproved();

// 1- questo codice come quello sopra vuole fare una verifica di accesso a un presunto sito procedendo con la richiesta di inserimento mail all'utente e verificando lungo l'array se la mail è compresa o no.
// 2- Sono presenti errori di sintassi? si
// 3- Sono presenti errori logici? si funzione corretta a riga 99
