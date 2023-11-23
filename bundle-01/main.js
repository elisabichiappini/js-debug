/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
/* 
    1. il for è un'instruzione di iterazione, ossia un ciclo a contatore noto. Sintatticamente viene definita la keyword for, 
    all'interno del quale viene inizializzata una variabile, scritta in camelCase. Poi viene verificata la condizione di esistenza
    e se vera allora viene eseguito il codice e successivamente avviene l'incrementato o decremento della variabile. 
    Nel caso in cui la condizione non fosse più vera, allora si uscirà dal ciclo. Altre istruzioni di iterazione sono while e do while,
    caratterizzate dalla definizione di essere cicli a contatore indefinito;

    2. non sono presenti errori di sintassi;

    3. sono presenti errori logici, poichè nell'inizializzazione della variabile abbiamo assegnato alla variabile un valore 0, 
    perciò i non può essere > 0 nemmeno alla prima verifica.
    La mia proposta di correzione: 

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
*/

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
/* 
    1. questo codice è una funzione ossia una pezzo di codice riutilizzabile durante il nostro processo sviluppo del progetto, 
    tra i benefici del codice riutilizzato: performance e riduzione di errori. 
    La sintassi delle funzioni è definita dalla keyword function al quale viene attribuito nomeFunzione, sempre scritto in camelCase, 
    parentesi (tonde) e codice da eseguire è racchiuso tra parentesi {graffe} che seguono. Nelle parentesi tonde possono non esserci 
    valori indicati e in questo caso si tratteràd di funzioni anonime oppure ci possono essere uno o più
    valori chiamati argomneti e fungono da inizializzazione di variabili di tipo let, ai quali verranno passati valori 
    di assegnazione durante l'invocazione della funzione.

    2. si ci sono errori di sintassi, il return non può essere riferito al valore di argomento.

    3. sono presenti errori logici poichè nella condizione di if l'operatore relazionale è assegnazione '=' anzichè di identicità '===', quest'ultimo permette di confrontare due valori.
    function addIfEven(num) {
        if (num % 2 === 0) {
            return true;
        }
        return false;
    }

*/
// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}

/* 
    1. questo codice è una funzione anonima identificata con il nome loopToFive. In questa funzione viene eseguito un ciclo che genera un valore indice incrementato 
    e la stampa in console di questo valore da 0 a 4, poichè alla verifica della condizione i(5) < 5, non sarà vera e quindi non verrà eseguito 
    il codice e nemmeno effettuato l'incremento ma si uscirà dal codice.

    2. si ci sono errori di sintassi, nelle parentesi tonde le operazioni devono essere separate da puntoVirgola ';'.
    function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        }
    }

    3. non ci sono errori logici.

*/

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

/* 
    funzioni
    function displayEvenNumbers() {                                         
        for (let i = 0; i < numbers.length; i++) {

            if (numbers[i] % 2 === 0) {
                evenNumbers.push(numbers[i]);
            }
        }
    }

    operazioni
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];         
    let evenNumbers = [];       

    displayEvenNumbers(numbers); // dovrebbe restituire [2,4,6,8]
      
    1. Nel contesto global sono definiti e assegnati degli array, 
    uno composto da valori noti e uno vuoto. Verrà invocata una funzione anonima
    alla quale verrà passato l'argomento, tra le parentesi, ossia l'array di numbers.
    Dentro la funzione, viene eseguito un ciclo che vale per l'attraversamento dell'array 
    per tutti i suoi valori presenti e verifica successivamente il numero se il numero 
    diviso modulo 2 è identito a resto 0, allora pusho il numero nell'array vuoto di evenNumbers.
*/
    
    