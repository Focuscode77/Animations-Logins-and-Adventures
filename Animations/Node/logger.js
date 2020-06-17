// Module wrapper function
console.log(__filename);
console.log(__dirname);

var url = "http://mylogger.io/log";

function log(message) {

    //sends http request
    console.log(message);

}

module.exports = log;

//Using your favorite language, find all numbers that occur more than once in an array of integers. What is a second way you might do the same problem? Which approach would you prefer and why? *

