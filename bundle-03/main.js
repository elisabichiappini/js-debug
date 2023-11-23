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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)

const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    }
];
//filtra cars benzina
const gasolineCars = cars.filter( (auto) => auto.type.toLowerCase() === 'benzina');
//filtra cars diesel qui se togliessi le graffe potrei mettere tutto inline e quindi si può non scrivere return perchè il return è implicito
const dieselCars = cars.filter( (auto) => {
    return auto.type.toLowerCase() === 'diesel';
});
//filtra cars che non sono benzina o non sono diesel
const otherCars = cars.filter( (auto) => {
    return auto.type.toLowerCase() !== 'benzina' && auto.type.toLowerCase() !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

/*
1- Che cosa fa questo codice?
    questo codice ci mostra in primis un array di oggetti dichiarati, di cui ciascuno ha 3 key e valori associati, manufacturer model e type. 
    viene dichiarata una variabile costante il cui valore è un array di macchine con filtro sull'oggetto macchina di tipo benzina, poi per diesel e per le altre auto.
    Infine stampiamo in console i risultati.
2- Sono presenti errori di sintassi? si, riscritta corretta
3- Sono presenti errori logici? si, riscritta corretta
*/