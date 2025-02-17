/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const emptyNames = []

// Dichiara la funzione qui.
/* function filterByFirstletter() {
    for (let i = 0; i < names.length; i++) {
        thisName = names[i]
        if (thisName.charAt(0) == "A") {
             emptyNames.push(thisName)
       }
    }
}
*/
const filterByFirstletter = () => {
    for (let i = 0; i < names.length; i++) {
        thisName = names[i]
        if (thisName.charAt(0) == "A") {
            emptyNames.push(thisName)
        }
    }
}
// Invoca la funzione qui e stampa il risultato in console
filterByFirstletter()
console.log(emptyNames);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]