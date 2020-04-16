// console.log("Hello world");


// document.write("Joshua Coleman");


// function addMe(a, b) {

//     var c = a + b
//     console.log(c);
//     return c;

// }


// addMe(2, 2);


// addMe(5, 5);

// addMe(3, 3);

// addMe(7, 7);



var pointPeople = function (name, age, occupation) {
    this.name = name;

    this.age = age;

    this.occupation = occupation;
}

console.log(pointPeople);


var coWorker = new pointPeople("James", 25, "Chef");

var coWorkerOne = new pointPeople("Peter", 30, "Software enignneer");
var coWorkerTwo = new pointPeople("Josh", 29, "Ice Maker");
var coWorkerThree = new pointPeople("Daxx", 50, "Police Oficer");

// Testing Code


console.log(coWorker);
console.log(coWorkerOne);
console.log(coWorkerThree);
document.write(coWorkerTwo.name);