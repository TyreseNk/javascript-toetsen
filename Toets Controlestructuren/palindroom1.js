const prompt = require("prompt-sync")();
let tekst = prompt("Geef een tekst in. ");
let tekstlower = tekst.toLowerCase();
tekstlower=tekstlower.replace(".","");
tekstlower=tekstlower.replace(",","");

let omgekeerdetekst= tekstlower.split('').reverse().join('');
if(tekstlower===omgekeerdetekst){
    console.log(`${tekst} is een palindroom.`);
}
