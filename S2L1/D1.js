/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* In JavaScript (ma non solo), le variabili sono una sorta di contenitori per conservare dei valori
Sono presenti differenti tipologie di variabili: */

let num1 = 20; //tipo numerico intero
let num2 = 20.5; //tipo numerico float (ricorda di usare il punto e non la virgola)
let stringa = "Ciao Mondo"; //tipo string (quindi testo)
let v = true; //tipo boolean
let f = false; //tipo boolean
const con = 23; //una costante è un valore che non può essere cambiato
let nn = null; //variabile nulla dove non è mai stato assegnato nulla intenzionalmente
let u = undefined; //variabile non definita che non ha un valore asseganto

console.log(num1);
console.log(num2);
console.log(stringa);
console.log(v); 
console.log(f);

//In sostanza, Javascript permette di assegnare ad una variabile un valore indipendemente dal tipo
//Si parla inoltre di tipizzazione dinamica perché ogni variabile può essere riassegnato (eccetto const)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Vincenzo"; 
/* console.log(name); */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 12;
let numero2 = 20;
let sum = numero1 + numero2;

console.log(sum);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////7

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

console.log(x);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* var name = "Vincenzo"; //variabile già esistente
var name = "Saccone"; //riassegnazione possibile con var

let name1 = "Vincenzo"; 
let name1 = "Saccone"; //riassegnazione non riuscita con let 

const nome = "Vincenzo"; //constante
const nome ="Saccone"; //non può essere riassegnato perché è una costante 

console.log(name);
console.log(name1);
console.log(nome); */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let nume1 = 4;

let sottrazione = nume1 - 12;

console.log(sottrazione);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
let name1 = "john";
let name2 = "John";

let uguaglianza = (name1 == name2) ? "I due nomi sono uguali" : "I due nomi non sono uguali"

console.log(uguaglianza); */

/* EXTRA */
let name1 = "john";
let name2 = "John";

name1 = name1.toLowerCase();
name2 = name2.toLowerCase();

let uguaglianza = (name1 == name2) ? "I due nomi sono uguali" : "I due nomi non sono uguali"

console.log(name1);
console.log(name2);
console.log(uguaglianza);