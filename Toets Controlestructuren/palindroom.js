const prompt = require("prompt-sync")();

const input = prompt("Geef een tekst in: ");
let tekst;
tekst = input.toLowerCase();
tekst = tekst.replace(" ", "");
tekst = tekst.replace(".", "");
tekst = tekst.replace(",", "");

console.log(tekst);

let omgekeerd = "";

for (let i = tekst.length - 1; i >= 0; i--) {
    omgekeerd += tekst[i];
}

if (omgekeerd == tekst) {
    console.log(`${tekst} is een palindroom.`);
} else {
    console.log(`${tekst} is geen palindroom.`);
}