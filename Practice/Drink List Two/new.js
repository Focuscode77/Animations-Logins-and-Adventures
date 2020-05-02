var foodList = [

    "ChesseBurger: $10",
    "Sandwitch: $15",
    "Turkey Burger: $20",
    "Icecream: $5",
    "Pizza: $12",
    "Chicken Wings: $10",

]


var newDiv = document.getElementById("food-list");

foodList.forEach(function (food) {

    var foodPTag = document.createElement("p");

    foodPTag.textContent = food;

    newDiv.appendChild(foodPTag);



})