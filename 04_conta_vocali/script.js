/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
let wordsVowels = 0

// Dichiara la funzione qui.
/* function countVowels() {
    for (let i = 0; i < word.length; i++) {
        const thisLetter = word[i]
        if ((thisLetter == "a") || (thisLetter == "i") || (thisLetter == "e") || (thisLetter == "o") || (thisLetter == "u")) {
            wordsVowels += 1
        }
    }
    return wordsVowels
} */
const countVowels = (string) => {
    for (let i = 0; i < string.length; i++) {
        const thisLetter = string[i]
        if ((thisLetter == "a") || (thisLetter == "i") || (thisLetter == "e") || (thisLetter == "o") || (thisLetter == "u")) {
            wordsVowels += 1
        }
    }
    return wordsVowels
}

// Invoca la funzione qui e stampa il risultato in console
countVowels(word)
console.log(wordsVowels);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)