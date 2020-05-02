var drinkList = [

    "Coffee:  $5",
    "Tea:  $10",
    "Orange juice:  $15",
    "Vodka:  $20",
    "Rum:  $30",
    "Wiskey:  $35",
    "Wine:  $13",

]

var drinkDiv = document.getElementById("drink-options");

drinkList.forEach(function (drink) {


    var newDrinkP = document.createElement("p");


    newDrinkP.textContent = drink;

    drinkDiv.appendChild(newDrinkP);

})
