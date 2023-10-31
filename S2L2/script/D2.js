/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = prompt("Inserisci il primo numero: "); //preleviamo da tastiera 2 numeri
let num2 = prompt("Inserisci il secondo numero: ");

num1 = parseInt(num1); //i valori presi da tastiera figurano come string, quindi convertiamoli in num. interi con parseInt
num2 = parseInt(num2);

if (num1 > num2) { //se il numero 1 è più grande del 2
  console.log("Il ", num1, " è più grande di ", num2);
} else if (num1 == num2) { //se i due numeri sono uguali
  console.log("I numeri sono uguali");
} else {
  console.log("Il ", num1, " è più piccolo di ", num2); //se il numero 1 è più piccolo del 2
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = prompt("Inserisci un numero: "); //inseriamo da tastiera un numero

if (numero != 5) { //se questo è diverso da 5
  console.log("not equal"); //not equal (non uguale)
} else { //altrimenti
  console.log("equal"); //equal (uguale)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = prompt("Inserisci un numero per verificare se è divisibile per 5: "); 

if (num%5 == 0) {
  console.log("Il numero ", num, " è divisibile per 5");
} else {
  console.log("Il numero ", num, " non è divisibile per 5");
} 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = prompt("Inserisci il primo numero: ");
let number2 = prompt("Inserisci il secondo numero: ");

number = parseInt(number);
number2 = parseInt(number2);

if (number == 8 || number2 == 8) { //se number e number2 sono uguali a 8
  console.log("Uno o entrambi i due valori inseriti, valgono 8");
} else if (number + number2 == 8) { //se number + number2 è uguale a 8
  console.log("La somma tra i due numeri è uguale ad 8");
} else if (number - number2 == 8) { //se number - number2 è uguale a 8
  console.log("La differenza tra i due numeri è uguale ad 8");
} else {
  console.log("La somma dei due numeri è ", number + number2); //per completezza
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* let totalShoppingCart = 49; //saldo totale
let spedizione = 10;

if (totalShoppingCart >= 50) {
  console.log("Hai diritto alla spedizione gratuita!")
} else {
  console.log("Pagamento: ", totalShoppingCart, " Euro + ", spedizione, " Euro ", 
  "| Totale: ", totalShoppingCart + spedizione, " Euro");
} */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 49; //saldo totale
const spedizione = 10;

let blackFridaySconto = totalShoppingCart * 0.2; // 20% sconto
totalShoppingCart = totalShoppingCart - blackFridaySconto; //sconto applicato

if (totalShoppingCart >= 50) {
  console.log("Hai diritto alla spedizione gratuita!")
} else {
  console.log("Pagamento: ", totalShoppingCart, " Euro + ", spedizione, " Euro ", 
  "| Totale: ", totalShoppingCart + spedizione, " Euro");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 5;
let b = 2;
let c = 8;

if (a > b) { //se a è maggiore di b
  let temp = a; //scambia il valore di a 
  a = b;
  b = temp; //con quello di b 
}
//ora a conterrà il valore più piccolo

if (a > c) { //se a è maggiore di c
  let temp = a; //scambia il valore di a 
  a = c;
  c = temp; //con quello di c
}
//quindi a conterrà il valore più piccolo

if (b > c) { //se b è maggiore di c
  let temp = b; //scambia il valore di b
  b = c;
  c = temp; //con quello di c
}
//quindi c alla fine conterrà il valore più grande

console.log("Valori ordinati: a =", a, ", b =", b, ", c =", c);

////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 3;
let tipo = typeof(val);

console.log("Il valore è di tipo: ",tipo);
 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numer = prompt("Inserisci un numero: ");
numer = parseInt(num);

if (numer%2 == 1) {
  console.log("Il numero è dispari");
} else {
  console.log("Il numero è pari");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val1 = 7;

if (val1 < 5) {
  console.log("Meno di 5");
} else if (val1 < 10) {
  console.log("Meno di 10 ma non meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log(me);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log("Nuovo oggetto ",me);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log("Nuovo oggetto con skill eliminata ",me);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let array = [];
array = [1,2,3,4,5,6,7,8,9];
array.push(10);

console.log(array);

//////////////////////////////////////////////////////////////////////////////////////////////////////7

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array[9] = 100;

console.log(array);