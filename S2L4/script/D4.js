/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area() { //N.B. la funzione se non viene richiamata, non verrà mai eseguita
    return Number(base*altezza);
} 

let base = prompt("Inseris la base: ");
let altezza = prompt("Inserisci l'altezza: ");

let ritorno = area();
console.log(ritorno);


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum() {

    num1 = Number(num1);
    num2 = Number(num2);
    if (num1 != num2) {
        return num1 + num2;
    } else if (num1 == num2) {
        return Number(num1 + num2) * 3;
    }
}

let num1 = prompt("Inserisci primo numero: ");
let num2 = prompt("Inserisci secondo numero: ");

let sommaPazza = crazySum();
console.log(sommaPazza);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff () {
    x = Number(x);
    if(x<=19) {
        return Math.abs(x-19);
    } else if (x>19) {
        return (x-19) * 3;
    }
}

let x = prompt("Inserisci numero: ");

let diffPazza = crazyDiff();
console.log(diffPazza);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    n = Number(n);
    if (Number.isInteger(n) && ((n >= 20 && n <= 100) || n === 400)) {
        return true;
    } else {
        return false;
    }
}

let n = prompt("Inserisci un numero: ");

if (boundary(n)) {
    console.log("Il numero è compreso tra 20 e 100 (inclusi) o è uguale a 400.");
} else {
    console.log("Il numero non soddisfa le condizioni richieste.");
}


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa) {
    if (stringa.toLowerCase().startsWith("epicode")) { //startWish non si preoccupa delle maiuscole o minuscole
        return stringa;
    } else {
        return "EPICODE " + stringa;
    }
}

let stringa = prompt("Inserisci una frase: ");
let epi = epify(stringa);
console.log(epi);


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7 (x) {
    if (x>0) {
        if (x % 3 == 0 && x % 7 == 0) {
            console.log("è un multiplo di 3 e di 7");
        } else if (x % 3 == 0) {
            console.log("è un multiplo di 3");
        } else if (x % 7 == 0) {
            console.log("è un multiplo di 7");
        } else {
            console.log("NON è un multiplo né di 3, né di 7");
        }
    } else {
        console.log("Il numero deve essere positivo");
    }
    
}

let check = check3and7(21);
console.log(check);


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
    let newString= " ";
    for (let i = str.length -1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

let str = prompt("Inserisci una frase: ");
let ep = reverseString(str);
console.log(ep);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(inputString) {
    return inputString
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //map e join sono due funzionalità che non abbiamo ancora usato
        .join(" ");
}

let inputString = prompt("Inserisci una frase: ");
let outputString = upperFirst(inputString);
console.log(outputString);


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(st) {
    if (st.length >= 2) {
        return st.slice(1, -1);
    } else {
        return "";
    }
}

let st = prompt("Inserisci una frase: ");
let fun = cutString(st);
console.log(fun);


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero m e ritorna un'array contenente m numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(m) {
    let arr = []; //questo sarà l'array in cui immagazzineremo i valori casuali

    for (let i = 0; i < m; i++) { 
        let rand = Math.floor(Math.random() * 11);
        arr.push(rand);
    }

    return arr;
}

let m = prompt("Inserisci un numero: ");
let ret = giveMeRandom(m);
console.log(ret);