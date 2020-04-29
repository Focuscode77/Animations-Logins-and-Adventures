const element = document.getElementById("empty-div");



element.textContent = "Hello World";

// Creating new elements on the fly!

const newDiv = document.createElement("div");


const thridDiv = document.createElement("div");

thridDiv.textContent = "another example!"

newDiv.textContent = "Getting the hang of programing!";



element.appendChild(thridDiv);

element.appendChild(newDiv);



// Go over new drink list example


