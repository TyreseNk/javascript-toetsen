const prompt = require("prompt-sync")();
let som = 0;
let teller = 0;
let getal = Number(prompt("Geef een getal in. "));
let max = getal;
let min = getal;
if(getal<0){
   console.log("Je heb geen positieve getallen ingegeven")
}else{
    while(getal>=0){
        teller++
        som+=getal;
        if(getal>max){
            max=getal;
        }
        if(getal<min){
            min=getal;
        }
        getal = Number(prompt("Geef een getal in. "));
        if(getal != typeof Number ){
            getal = Number(prompt("dat was geen getal.Probeer opnieuw:"));
        }
    }
    let gemiddelde=som/teller;
    console.log(som);
    console.log(max);
    console.log(min);
    console.log(gemiddelde);
}
    


