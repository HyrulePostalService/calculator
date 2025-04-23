//Button to add created using DOM//

const addMe = document.createElement("button");
addMe.textContent = "Add Numbers!";
addMe.id = "addNum";
document.body.appendChild(addMe);

//function that gets called when clicking button to add//
const add = function() {
    let userInput = prompt("Add Numbers", 'Seperate by space');

    let numbers = userInput.split(" ").map(Number);
    

    const sum = numbers.reduce(function (accumulator, current){
            return accumulator + current
    },);

   
    alert('Your sum is ' + sum.toLocaleString());
};

const addition = document.getElementById("addNum");
addition.addEventListener("click", add);
//end addition math//

//going above and beyond with this project lol//
let div1 = document.createElement('div');
document.body.appendChild(div1);
const subButton = document.createElement("button");
document.body.appendChild(subButton);
subButton.id = 'subButton';
subButton.textContent = 'Subtract Numbers!';

const subtract = function() {
    let userInput = prompt("Add Numbers", 'Seperate by space');

    let numbers = userInput.split(" ").map(Number);
    

    const sum = numbers.reduce(function (accumulator, current){
            return accumulator - current
    },);

   
    alert('Your sum is ' + sum.toLocaleString());
};

const subTract = document.getElementById("subButton");
subTract.addEventListener("click", subtract);

//end subtract//
let div2 = document.createElement("div");
document.body.appendChild(div2);
//start multiply//
const multiplyBoutton = document.createElement("button");
multiplyBoutton.id = 'multButton';
multiplyBoutton.innerText = 'Multiply Me!';
document.body.appendChild(multiplyBoutton);

const multiply = function() {
    let userInput = prompt("Add Numbers", 'Seperate by space');

    let numbers = userInput.split(" ").map(Number);

    const sum = numbers.reduce(function (accumulator, current){
        return accumulator * current;
    });
    alert("Your sum is " + sum.toLocaleString());
};

const multiplyMe = document.getElementById('multButton');
multiplyMe.addEventListener('click', multiply);

//end multiply//

//start power//

let div3 = document.createElement('div')
document.body.appendChild(div3);
const powerButton = document.createElement('button');
powerButton.id = 'powerButton';
powerButton.innerText = "You've Got the POWER!";
document.body.appendChild(powerButton);

const power = function() {
    let userInput = prompt("Add Numbers", 'Seperate by space');

    let numbers = userInput.split(" ").map(Number);

    const sum = numbers.reduce(function (accumulator, current){
        return Math.pow(accumulator, current);
    });
    alert("Your sum is " + sum.toLocaleString());
};

const powerUp = document.getElementById('powerButton');
powerUp.addEventListener('click', power);

//end power//

//start factorial//

let div4 = document.createElement('div');
document.body.appendChild(div4);

const factButton = document.createElement("button");
factButton.id = 'factButton';
factButton.innerText = 'Factorial';
document.body.appendChild(factButton);

const factorial = function() {

    let userInput = prompt("Add Numbers", 'Seperate by space');

    let numbers = userInput.split(" ").map(Number);

    const sum = numbers.map(function (input){

        let x = 1;
        for (let i = input; i > 0; i--){
            x *= i;
        }
return x;
    })

 alert('Your sum is ' + sum.toLocaleString());

};

const factorialBtn = document.getElementById('factButton');
factorialBtn.addEventListener('click', factorial);

//end factorial