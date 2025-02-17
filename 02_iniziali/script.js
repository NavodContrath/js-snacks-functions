/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const empty_name = []

// Dichiara la funzione qui.
/* function firstLetter(name) {
    for (let i = 0; i < name.length; i++) {
        const thisName = name[i]
        empty_name.push(thisName.charAt(0))
    }
} */

const firstLetter = name => {
    for (let i = 0; i < name.length; i++) {
        const thisName = name[i]
        empty_name.push(thisName.charAt(0))
    }

}
// Invoca la funzione qui e stampa il risultato in console
firstLetter(names)
console.log(empty_name);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]