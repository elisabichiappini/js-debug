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
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// 1- questa funzione vuole restituire un risultato.
// 2- Sono presenti errori di sintassi? no.
// 3- Sono presenti errori logici? si 
 
/*
funzione
    function checkAge(age) {
    const message = '';

        if (myAge < 18) {
            message = `Sei troppo giovane! Hai ${myAge} anni!`;
        } else {
            message = 'Hai più di 18 anni!';
            
        }
    return message;
    }

operazioni
    const myAge = 32;


    checkAge(myAge);
*/

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

// 1- Che cosa fa questo codice? questa funzione vuole restituirmi il numero di colori
// 2- Sono presenti errori di sintassi? manca il return e il length scritto così
// 3- Sono presenti errori logici?
 
/*
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
    return colors.length;
}
printColorsNumber();
*/

// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// 1- Che cosa fa questo codice? una funzione che chiede all'utente un numero e poi lo somma e restituisce.
// 2- Sono presenti errori di sintassi? non c'è il return e il prompt deve essere fuori dalla funzione.
// 3- Sono presenti errori logici?

/*

funzioni
    function addNumbers() {
        
        const total = userNumber + 12;
        console.log(`Il risultato finale è ${total}`);
        return total;
    }

operazioni
    const userNumber = Number(prompt('Inserisci un numero'));
    addNumbers(userNumber.value);
    */
 

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// 1- Che cosa fa questo codice?
// 2- Sono presenti errori di sintassi?
// 3- Sono presenti errori logici?
 
// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();

// 1- Che cosa fa questo codice?
// 2- Sono presenti errori di sintassi?
// 3- Sono presenti errori logici?
 




























