let newTabellone = () => {
    let tabellone = document.querySelector("#tabellone");
    let table = document.createElement("table");

    let numColonne = 10;
    let numRighe = 8;
    let numCasella = 1;

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


let numSelezionato = []; 

let getButton = () => {
    let button = document.createElement("button");
    let divBtn = document.querySelector("#getButton");

    button.innerText = "Genera";
    button.id = "generateButton";
    button.style.padding = "1em";
    button.style.margin = "1em";
    divBtn.style.textAlign = "right";
    button.style.textTransform = "uppercase";

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

let getReset = () => {
    let resetButton = document.createElement("button");
    let divBtn = document.querySelector("#getButton");

    resetButton.innerText = "Reset";
    resetButton.style.padding = "1em";
    resetButton.style.margin = "1em";
    resetButton.style.textAlign = "right";
    resetButton.style.textTransform = "uppercase";

    divBtn.appendChild(resetButton);

    resetButton.addEventListener('click', (evt) => {
        numSelezionato = [];
        annullaCasella();
        document.querySelector("#generateButton").disabled = false;
    })
}


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


//Cartella giocatore
let getGiocatore = () => {

}

getReset();
getButton();
newTabellone();
