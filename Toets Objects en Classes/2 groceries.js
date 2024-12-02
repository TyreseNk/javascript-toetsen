const prompt = require("prompt-sync")();

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

let groceries = {
    apples : 0,
    pears : 0,
    bananas : 0
};

let savedGroceries = localStorage.getItem("groceries")
if(savedGroceries){
    groceries = JSON.parse(savedGroceries)
}

const product = prompt("What would you like to add to your groceries? 'apple', 'pear' or 'banana'? ");
switch(product){
    case "apple":
        groceries.apples++;
    break; 
    case "pear":
        groceries.pears++;
    break; 
    case "banana":
        groceries.bananas++;
    break; 
    default:
    console.log("Please write 'apple', 'pear' or 'banana'");
}
console.log(groceries);

let groceriesString = JSON.stringify(groceries);
localStorage.setItem("groceries", groceriesString);