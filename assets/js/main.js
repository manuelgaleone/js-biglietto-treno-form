//Funzione Click Genera e Comunicazione
const generaButton = document.getElementById("genera");
generaButton.addEventListener("click", function(){

    //Dati
    const prezzoChilometri = 0.21
    const select = document.getElementById('etaSelect');
    const option = select.options[select.selectedIndex];

    //Richiesta Dati Passeggero
    const nomePasseggero = document.getElementById("nome").value;
    const chilometri = document.getElementById("chilometri").value;

    //Calcolo prezzo
    const prezzo = chilometri * prezzoChilometri
    let costoFinale

    //Calcolo Sconti
    if (option.value == "minorenne") {

        costoFinale = prezzo - (prezzo * 20 / 100)     

    } else if (option.value === "over") {

        costoFinale = prezzo - (prezzo * 40 / 100)  

    } else if (option.value === "standard") {

        costoFinale = prezzo
    }

    document.getElementById("ticket").style.display = "block";
    document.getElementById("nomeTicket").innerHTML = nomePasseggero;
    document.getElementById('offerta').innerHTML = option.text;
    document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    document.getElementById("codice").innerHTML = Math.floor(Math.random() * (9900 - 1500 + 1)) + 1500;
    document.getElementById("costoBiglietto").innerHTML = costoFinale;

})

//Funzione Click Annulla
const annullaButton = document.getElementById("annulla");
annullaButton.addEventListener("click", function(){

    document.getElementById("ticket").style.display = "none";

})