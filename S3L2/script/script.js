/* ESERCIZIO 1
Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro 
*/

const changeTitle = function () {
    let h = window.document.getElementById("h");
    h.innerText = "Titolo sostituito con JavaScript";
}

changeTitle();


/* ESERCIZIO 2
Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/
 
const addClassToTitle = function () {
    let title = document.querySelector("title");
    title.classList.add("myHeading");
}

addClassToTitle();
 
//DA CORREGGERE --------------------------------------------------
/* ESERCIZIO 3  
Scrivi una funzione che cambi il testo dei p figli di un div
*/
 
const changePcontent = function () {
    let paragraphs = document.querySelector("div > p");
    paragraphs.innerText = "Nuovo testo del paragrafo";
}

changePcontent();
 
/* ESERCIZIO 4
Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/
 
const changeUrls = function () {
    document.querySelector("a").href = "https://www.google.com"; 
}

changeUrls();
 

/* ESERCIZIO 5
Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/
 
const addToTheSecond = function () {
    let li = document.createElement("li");
    li.innerText = "4th";
    document.querySelector("#secondList").appendChild(li);
  };

  addToTheSecond();


/* ESERCIZIO 6
Scrivi una funzione che aggiunga un paragrafo al primo div
*/
 
const addParagraph = function () {
    let newP = document.createElement("p");
    newP.innerText = "Paragrafo creato con JS"
}

addParagraph();
 
/* ESERCIZIO 7
Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/
 
const hideFirstUl = function () {
    let firList = document.querySelector("#firstList");
    firList.remove();
}

hideFirstUl();
 
/* ESERCIZIO 8 
Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/
 
const paintItGreen = function () {
    let ul = document.querySelectorAll("ul");

    ul.forEach(function (ul) {
        ul.style.backgroundColor = "green";
    });
}

paintItGreen();
 
/* ESERCIZIO 9
Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/
 
const makeItClickable = function () {
    document.querySelector('h1').addEventListener('click', function(){
        let h1 = document.querySelector("h1");
        h1.innerHTML = h1.innerHTML.slice(0, -1);
    });
}

makeItClickable();
 
/* ESERCIZIO 10
Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/
 
const revealFooterLink = function () {
    document.querySelector('footer').addEventListener('click', function(){
        let f = document.querySelector("footer");
        alert("Link di questa pagina: ", document.URL);
    });
}

revealFooterLink();
 
/* ESERCIZIO 11
Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
La tabella avrà 5 elementi e questa struttura: immagine, nome,  prodotto, quantità, prezzo
*/
 
/* const generateTable = function () {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for(let i = 0; i < 5; i++) {
        const row = document.createElement("tr");

        for(let j = 0; j < 5; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`Prodotto ${i + 1}, quantità ${j + 1}, prezzo ${j * 5}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }

    const tableArea = document.querySelector("#tableArea");
    tableArea.appendChild(tbl);
    tbl.setAttribute("border", "2");
}

generateTable(); */


 
/* ESERCIZIO 12
Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/
 
const addRow = function () {}
 
/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/
 
const hideAllImages = function () {}
 
/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/
 
const changeColorWithRandom = function () {
    document.querySelector('#changeMyColor').addEventListener('click', function () {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        document.querySelector('#changeMyColor').style.backgroundColor = color;
    });
}

changeColorWithRandom();


/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/
 
/* function deleteVowelsFromString(input) {
    return input.replace(/[aeiouAEIOU]/g, '');
}

function deleteVowels() {
    const allTextElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, a, li, td, th');

    allTextElements.forEach(element => {
        const currentText = element.textContent;
        const textWithoutVowels = deleteVowelsFromString(currentText);
        element.textContent = textWithoutVowels;
    });
}

deleteVowels(); */
