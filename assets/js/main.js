//Dati
let prezzoChilometri = 0.21

//Richiesta d'età
let nomePasseggero = document.getElementById("nome").value;
let etaPasseggero = Number(document.getElementById("eta").value);
let chilometri = Number(document.getElementById("chilometri").value);

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

//Comunicazione prezzo
document.getElementById('comunicazione').innerHTML = "Dovrai pagare in totale:" + " " + (costoFinale).toFixed(2) + "euro."