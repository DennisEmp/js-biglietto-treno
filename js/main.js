// chiedere l'età

const eta = prompt("inserisci la tua età:");

// chiedere i km da percorrere

const chilometri = prompt("inserisci i chilometri totali del tuo viaggio:");

console.log(eta,chilometri);

// calcolare il prezzo del biglietto del treno che ha come standard 0.21 euro al km

let totaleCorsa = chilometri * 0.21;

// variante minorenne con sconto 20%

if (eta < 18) {
   totaleCorsa * 0.8;
}

// variante over 65 con sconto 40%

else if (eta > 65) {
    totaleCorsa * 0.6;
}

// prezzo senza sconto

else {
    totaleCorsa;
}

// output finale, prezzo del biglietto del treno con in caso sconti applicati (arrotondare il prezzo finale con massimo due decimali)

document.getElementById ("title").innerHTML = "il prezzo totale del tuo biglietto è:" totaleCorsa;