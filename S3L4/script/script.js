/* //funzione per animare la scritta Tombola - NON FUNZIONANTE
let scritta = () => {
    let s = document.querySelector("h1");
    s.style.fontWeight = "bold";
}

let flash = () => { 
    setInterval(scritta, 1000);
}

flash(); */


//Creazione tabellone
let newTabellone = () => {
    let tabellone = document.querySelector("#tabellone");
    let table = document.createElement("table");

    let numColonne = 10;
    let numRighe = 8;
    let numCasella = 1;

    //creazione colonne e righe
    for (let i = 0; i < numRighe; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < numColonne; j++) {
            if (numCasella <= 76) {
                let td = document.createElement("td");
                td.textContent = numCasella;
                tr.appendChild(td);
                numCasella++;
            }
        }

        table.appendChild(tr);
    }

    tabellone.appendChild(table);
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.querySelectorAll("td").forEach(td => {
        td.style.border = "0.2em solid #154c79";
        td.style.padding = "1em";
        td.style.textAlign = "center";
    });
}

//variabile per memorizzare i valori casuali
let numSelezionato = []; 

//creazione del pulsante "genera"
let getButton = () => {
    let button = document.createElement("button");
    let divBtn = document.querySelector("#getButton");

    button.innerText = "Genera";
    button.id = "generateButton";
    button.style.padding = "1em";
    button.style.margin = "1em";
    divBtn.style.textAlign = "right";
    button.style.textTransform = "uppercase";
    button.disabled = true;

    divBtn.appendChild(button);

    button.addEventListener('click', (evt) => {
        if (numSelezionato.length < 76) {
            let ran;
            do {
                ran = Math.floor(Math.random() * 76) + 1;
            } while (numSelezionato.includes(ran));

            numSelezionato.push(ran);
            selectCasella(ran);

            if (numSelezionato.length === 76) {
                button.disabled = true;
            }
        } 
    })
}

//creazione del pulsante "reset"
let getReset = () => {
    let resetButton = document.createElement("button");
    let divBtn = document.querySelector("#getButton");

    resetButton.innerText = "Reset";
    resetButton.style.padding = "1em";
    resetButton.style.margin = "1em";
    resetButton.style.textAlign = "right";
    resetButton.style.textTransform = "uppercase";
    resetButton.disabled = true;
    resetButton.classList.add("attivazione");

    divBtn.appendChild(resetButton);

    resetButton.addEventListener('click', (evt) => {
        numSelezionato = [];
        // Resetta anche gli array delle cartelle
        numSelezionatoPlayer = [];
        annullaCasella();
        rimuoviTabellaGiocatore();
        document.querySelector("#generateButton").disabled = true;
        document.querySelector("#scelta").style.display = "block";
        sceltaBtn.forEach(e => {
            e.style.display = "inline-block";
        });
    })
}

//funzione che seleziona la casella e cambia il colore
let selectCasella = (numero) => {
    let caselle = document.querySelectorAll("td");
    caselle.forEach(casella => {
        if (casella.textContent == numero && !casella.classList.contains("selezionata")) {
            casella.style.backgroundColor = "#a36a77"; 
            casella.classList.add("selezionata"); 
        }
    });
}

//Funzione utile per resettare il tabellone
let annullaCasella = () => {
    let caselle = document.querySelectorAll("td");
    caselle.forEach(casella => {
        casella.style.backgroundColor = "rgb(223, 229, 234)";
        casella.classList.remove("selezionata");
    });

} 


let sceltaBtn = [];

//scelta tabella giocatore (3 pulsanti di scelta)
let scelta = () => {
    let divScelta = document.querySelector("#scelta");
    divScelta.style.textAlign = "center";

    for (let i = 0; i < 3; i++) {
        sceltaBtn[i] = document.createElement("button");
        sceltaBtn[i].style.padding = "1.3em";
        sceltaBtn[i].style.margin = "0 0 4em 2em";
        sceltaBtn[i].style.color = "white";
        sceltaBtn[i].style.backgroundColor = "#eb4250";
        sceltaBtn[i].style.borderRadius = "1em";
        sceltaBtn[i].innerText = `${i + 1} cartella`;

        divScelta.appendChild(sceltaBtn[i]);

        sceltaBtn[i].addEventListener('click', (evt) => {
            getGiocatore(i + 1); // Passa il numero di cartelle selezionate
            document.querySelector("#generateButton").disabled = false;
            document.querySelector(".attivazione").disabled = false;
        });
    }
}


numSelezionatoPlayer = [];

//Cartella giocatore
let getGiocatore = (numCartelle) => {
    let player = document.querySelector("#player");
    player.innerHTML = ""; // Pulisce il contenuto precedente

    for (let c = 0; c < numCartelle; c++) {
        let tableP = document.createElement("table"); // tabella P (Player, giocatore)

        let numColonne = 8;
        let numRighe = 3;

        // Resettare l'array numSelezionatoPlayer per ogni cartella
        numSelezionatoPlayer = [];

        for (let i = 0; i < numRighe; i++) {
            let tr = document.createElement("tr");

            for (let j = 0; j < numColonne; j++) {
                let td = document.createElement("td");

                // Assegna un numero casuale solo se non hai superato 24
                if (numSelezionatoPlayer.length < 24) {
                    let ran;
                    do {
                        ran = Math.floor(Math.random() * 76) + 1;
                    } while (numSelezionatoPlayer.includes(ran));

                    numSelezionatoPlayer.push(ran);

                    td.textContent = ran;

                    tr.appendChild(td);
                } else {
                    td.textContent = " ";
                    tr.appendChild(td);
                }
            }

            tableP.appendChild(tr);
        }

        player.appendChild(tableP);
        tableP.style.borderCollapse = "collapse";
        tableP.style.width = "100%";
        tableP.querySelectorAll("td").forEach(td => {
            td.style.border = "0.2em solid #eb4250";
            td.style.padding = "1em";
            td.style.textAlign = "center";
        });
    }

    // Nascondi i pulsanti
    sceltaBtn.forEach(e => {
        e.style.display = "none";
    });
}

let rimuoviTabellaGiocatore = () => {
    let tabellaGiocatore = document.querySelector("#player table");
    if (tabellaGiocatore) {
        tabellaGiocatore.remove();
    }
}


scelta();
getReset();
getButton();
newTabellone();
