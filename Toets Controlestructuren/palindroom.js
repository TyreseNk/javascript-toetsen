const prompt = require("prompt-sync")();
let tekst = prompt("Geef een tekst in. ");
let tekstlower = tekst.toLowerCase();
tekstlower=tekstlower.replace(".","");
tekstlower=tekstlower.replace(",","");

let vergelijking="";
let omgekeerdetekst="";
for(let i = 0;i<tekstlower.length;i++ ){
    if(tekstlower[i]==" "){       
        vergelijking+="";
    }else{
        vergelijking+=tekstlower[i];
    }
}
for(let i=tekst.length-1;i>=0;i--){
    omgekeerdetekst+=vergelijking[i];
}
console.log(omgekeerdetekst);
if(omgekeerdetekst==vergelijking){
    console.log(`${tekst} is een palindroom.`);
}