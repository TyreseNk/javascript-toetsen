/*
let groet1 = maakGroeter("tyrese");
console.log(groet1());
console.log(groet1());
let groet2 = maakGroeter("Anna");
console.log(groet2());
console.log(groet2());
*/

function maakGroeter(naam){
    let groet="";
    teller=0;
    return function(){
        teller++;
        groet=`Hallo ${naam}! Dit is de ${teller}e keer dat ik je begroet.`;
        return groet;
    }
}

