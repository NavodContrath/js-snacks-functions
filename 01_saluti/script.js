/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
//normalf/ function
/* function greetings(name) {
    console.log(`Greetings ${name}`);
} */
//arrow function
const greetings = name => console.log(`Greetings ${name}`)
// Invoca la funzione qui e stampa il risultato in console
greetings(userName)


//Risultato atteso se si passa 'Mario': // ciao Mario
