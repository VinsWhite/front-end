// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(m) { //funzione costruita precedentemente in S2L4
    let arr = [];

    for (let i = 0; i < m; i++) {
        let rand = Math.floor(Math.random() * 11);
        arr.push(rand);
    }

    return arr;
}

function checkArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            console.log("Il valore è maggiore di 5", arr[i]);
            sum += arr[i];
        } else if (arr[i] < 5) {
            console.log("Il valore è minore di 5", arr[i]);
        } else {
            console.log("Il valore è uguale a 5", arr[i]);
        }
    }
    return sum;
}

let m = prompt("Inserisci un numero: ");
let ret = giveMeRandom(m);
let r = checkArray(ret);

console.log("Array: ", ret, " Somma dei valori maggiori di 5: ", r);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//array di oggetti
shoppingCart = [
    {
        price: 120,
        name: "table",
        id: 2323,
        quantity: 100,
    },

    { 
        price: 30,
        name: "chair",
        id: 3232, //id simile ai tavoli perché ipoteticamente omologati insieme 
        quantity: 400, //4 sedie per tavolo 
    },

    {
        price: 400,
        name: "kitchen",
        id: 4564,
        quantity: 34,
    },

    {
        price: 600,
        name: "fridge",
        id: 4433,
        quantity: 40,
    }
];

function shoppingCartTotal() {
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        let item = shoppingCart[i];
        total += item.price * item.quantity;
    }
    return total;
}

let totalAmount = shoppingCartTotal();
console.log("Il totale dovuto al negozio è: " + totalAmount, "euro");


/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(newItem) {
    shoppingCart.push(newItem); // Aggiungi il nuovo oggetto al carrello
    return shoppingCart.length; // Ritorna il nuovo numero totale di elementi nel carrello
}

let newItem = {
    price: 10,
    name: "pillow",
    id: 2299,
    quantity: 550,
};

let totalItems = addToShoppingCart(newItem); 
console.log("Il nuovo numero totale di elementi nel carrello è: " + totalItems);


/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(shoppingCart) {
    shoppingCart.sort(function(a, b) {
        return b.price - a.price; // Ordina in base al prezzo in ordine decrescente
    });

    return shoppingCart[0]; 
}

let prezzo = [];

let mostExpensiveItem = maxShoppingCart(shoppingCart);
console.log("L'oggetto più costoso è:", mostExpensiveItem);


/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart () {
    return shoppingCart[shoppingCart.length - 1];
}

let lastItem = latestShoppingCart();
console.log("Ultimo elemento dell'array: ", lastItem);


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


//DA RICONTROLLARE - va in loop
/* function loopUntil(x) {
    if (x >= 0 && x <= 9) {
        let count = 0;

        while (count < 3) {
            let rand = Math.floor(Math.random() * 10);

            if (rand > x) {
                count++;
                console.log("Continua così!");
            } else {
                count = 0;
                console.log("Fail! Inserisci un nuovo valore!");
                x = parseInt(prompt("Inserisci un nuovo numero: "));
            }
        }
        console.log("Hai avuto successo!");
    } else {
        console.log("Il numero non è valido! Deve essere compreso tra 0 e 9.");
    }
}

let x = parseInt(prompt("Inserisci un numero tra 0 e 9: "));
loopUntil(x); */


/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function average(mix) {
    let count = 0;
    let sum = mix.reduce((x, y) => { //ho provato ad utilizzare questa funzione molto usato su internet
        if (!isNaN(y)) {
            x += parseFloat(y);
            count++;
        }
        return x;
    }, 0);

    let average = count === 0 ? 0 : sum / count;
    return average;
}

let mix = ["ciao", 1, 20, 3, 45, "mondo", 3, 5]; 
let avg = average(mix);
console.log(avg);

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function longest (stringhe) {
    let long = stringhe.sort(
        function (a, b) {
            return b.length - a.length;
        }
    )[0];
    return long;
}

let stringhe = ["ciao mondo", "javascript", "HTML e CSS", "Nihongo", "Nihongo no hon", "prova di JS"];
let stampa = longest(stringhe);
console.log(stampa);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//SOLUZIONE 
function antiSpam (emailContent) {
    emailContent = emailContent.toUpperCase();
    if(emailContent.includes ("SPAM") || emailContent.includes("SCAM")) {
        return false;
    } else {
        return true; 
    }
}

let spam = antiSpam("ciao");
console.log(spam);


/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function calcolaGiorniPassati(data) {
    let oggi = new Date(); // Ottiene la data corrente
    let differenzaInMILLISECONDI = oggi - data;
    let differenzaInGIORNI = differenzaInMILLISECONDI / (1000 * 60 * 60 * 24);

    return Math.floor(differenzaInGIORNI); // Arrotonda il risultato e restituisci il numero di giorni passati
}

let data = new Date(2022, 9, 10);
let giorniPassati = calcolaGiorniPassati(data);
console.log(giorniPassati);

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

