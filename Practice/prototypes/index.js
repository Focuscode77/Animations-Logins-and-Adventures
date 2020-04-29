// Going over prototypes

class career {

    constructor(type, name, position, salary) {

        this.type = type;
        this.name = name;
        this.position = position;
        this.salary = salary
    }

    speak() {
        console.log(`Hello ${this.name} thank you so much for telling me you are a  ${this.position}`);

    }

}


const personOne = new career("enigneer", "Josh", "Jr developer", 88000);


const personTwo = new career("Porperty Manger", "Daxx", "Lead agent", 75000);
// Test
console.log(personOne.name);
console.log(personTwo.name);
console.log(personOne.salary);
console.log(personTwo.salary);

personOne.speak();

personTwo.speak();


// Callback Function Example

function logInBefore(func) {

    console.log("before");
    func();

}

const afterLog = function () {
    console.log('after');


}


logInBefore(afterLog);


