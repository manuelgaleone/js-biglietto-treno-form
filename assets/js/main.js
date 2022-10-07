//Dati
let prezzoChilometri = 0.21

//Richiesta d'età
let nomePasseggero = document.getElementById("nome").value;
let etaPasseggero = Number(document.getElementById("eta")).value;
let chilometri = Number(document.getElementById("chilometri")).value;

//Calcolo prezzo
let prezzo = chilometri * prezzoChilometri
let costoFinale

//Calcolo sconto minorenni 20%
if (etaPasseggero < 18) {

    costoFinale = prezzo - (prezzo * 20 / 100)     

} else if (etaPasseggero > 65) {

    costoFinale = prezzo - (prezzo * 40 / 100)  

} else {

    costoFinale = prezzo
    
}

//Funzione Click
const generaButton = document.getElementById("genera");
generaButton.addEventListener("click", function(){

    document.getElementById("ticket").style.display = "block";
    document.getElementById("nomeTicket").innerHTML = nomePasseggero;


})

const annullaButton = document.getElementById("annulla");
annullaButton.addEventListener("click", function(){

    document.getElementById("ticket").style.display = "none";

})