const prompt = require("prompt-sync")();

let naam1 = prompt("Geef de eerste naam.");
let naam2 = prompt("Geef de twede naam.");
let naam3 = prompt("Geef de derde naam.");

naam1 = naam1.toLowerCase();
naam2 = naam2.toLowerCase();
naam3 = naam3.toLowerCase();

if(naam1<naam2 && naam1<naam3){
    console.log(naam1.substring(0,1).toUpperCase()+naam1.substring(1,naam1.length));
    if(naam2<naam3){
        console.log(naam2.substring(0,1).toUpperCase()+naam2.substring(1,naam2.length));
        console.log(naam3.substring(0,1).toUpperCase()+naam3.substring(1,naam3.length));
    } else{
        console.log(naam3.substring(0,1).toUpperCase()+naam3.substring(1,naam3.length));
        console.log(naam2.substring(0,1).toUpperCase()+naam2.substring(1,naam2.length));
    }      
}else if(naam2<naam1&&naam2<naam3){
    console.log(naam2.substring(0,1).toUpperCase()+naam2.substring(1,naam2.length));
    if(naam1<naam3){
        console.log(naam1.substring(0,1).toUpperCase()+naam1.substring(1,naam1.length));
        console.log(naam3.substring(0,1).toUpperCase()+naam3.substring(1,naam3.length));
    } else{
        console.log(naam3.substring(0,1).toUpperCase()+naam3.substring(1,naam3.length));
        console.log(naam1.substring(0,1).toUpperCase()+naam1.substring(1,naam1.length));
    }      
}
else{
    console.log(naam3.substring(0,1).toUpperCase()+naam3.substring(1,naam3.length));
    if(naam1<naam2){
        console.log(naam1.substring(0,1).toUpperCase()+naam1.substring(1,naam1.length));
        console.log(naam2.substring(0,1).toUpperCase()+naam2.substring(1,naam2.length));
    } else{
        console.log(naam2.substring(0,1).toUpperCase()+naam2.substring(1,naam2.length));
        console.log(naam1.substring(0,1).toUpperCase()+naam1.substring(1,naam1.length));
    }      
}


