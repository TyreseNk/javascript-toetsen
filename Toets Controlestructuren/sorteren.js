const prompt = require("prompt-sync")();

let name1 = prompt("Name one: ");
name1 = name1[0].toUpperCase() + name1.substring(1);
let name2 = prompt("Name two: ");
name2 = name2[0].toUpperCase() + name2.substring(1);
let name3 = prompt("Name three: ");
name3 = name3[0].toUpperCase() + name3.substring(1);

if (name1 <= name2 && name1 <= name3) {
    if (name2 <= name3) {
        console.log(`${name1} - ${name2} - ${name3}`);
    } else {
        console.log(`${name1} - ${name3} - ${name2}`)
    }
} else if (name2 <= name1 && name2 <= name3){
    if (name1 <= name3) {
        console.log(`${name2} - ${name1} - ${name3}`);
    } else {
        console.log(`${name2} - ${name3} - ${name1}`);
    }
} else {
    if (name1 <= name2) {
        console.log(`${name3} - ${name1} - ${name2}`);
    } else {
        console.log(`${name3} - ${name2} - ${name1}`);
    }
}