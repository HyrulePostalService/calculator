

const add = function() {
    let userInput = prompt("Add Numbers");

    let numbers = userInput.split("").map(Number);
    

    const sum = numbers.reduce(function (accumulator, current){
            return accumulator + current
    }, 0);

    console.log(sum)
};

add();
const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};