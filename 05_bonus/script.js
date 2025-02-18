/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const date = new Date()
console.log(date);
// Dichiara la funzione qui.
function greetings(string) {
    if (date.getHours() < 13) {
        console.log(`Buongiorno ${string}`);
    } else if (date.getHours() > 17) {
        console.log(`Buonasera ${string}`);
    } else {
        console.log(`Buon pomeriggio ${string}`);

    }
}
/* 
const greetings =(string)=>{
     if (date.getHours() < 13) {
        console.log(`Buongiorno ${string}`);
    } else if (date.getHours() > 17) {
        console.log(`Buonasera ${string}`);
    } else {
        console.log(`Buon pomeriggio ${string}`);

    }
}
*/
// Invoca la funzione qui e stampa il risultato in console
greetings(name)


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.