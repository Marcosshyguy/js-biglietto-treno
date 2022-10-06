// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// user input
const pricePerKm = 0.21;

// kilometers to cover
let kiloMeters = parseInt(prompt("How many kms are you going to cover?"));

// user age
let userAge = parseInt(prompt("What's your age?"));
console.log(kiloMeters, userAge, typeof(kiloMeters), typeof(userAge))

let ticketPrice = kiloMeters * pricePerKm;
console.log(ticketPrice)

let childDiscount  = ticketPrice * 0.2;
console.log(childDiscount)

let oldDiscount  = ticketPrice * 0.4;
console.log(oldDiscount)

const ticketChildPrice = ticketPrice - childDiscount;
const ticketOldPrice = ticketPrice - oldDiscount;
console.log(ticketChildPrice, ticketOldPrice);
// data elaboration
if(userAge <= 18){
    ticketPrice = ticketChildPrice.toFixed(2);
}
else if(userAge >= 65){
    ticketPrice = ticketOldPrice.toFixed(2);
}
else{
   ticketPrice = ticketPrice.toFixed(2);
}
console.log(ticketPrice, typeof(ticketPrice))
// output

document.getElementById("ticket-price").innerHTML += ticketPrice+ "$";