const {Sum, Division, Mult, Sub} = require('./control.js');
const prompt = require('prompt-sync')();
const readline = require('readline-sync');


var now = Date()
var name = prompt('Your name: ')

console.log("Hello,",name,"it's",now.substr(0, 24))
console.log('Welcome to the Calculator!')
console.log('Look how many operations we have! => +, -, /, *')

const  operator = readline.question('What do you want?')
let numberx = readline.question(('Put a number: '))
let numbery = readline.question(('Put another number: '))

numberx = parseInt(numberx);
numbery = parseInt(numbery);


switch(operator){
    case '+':
        result = Sum(numberx, numbery);
        break;
    case '-':
        result = Sub(numberx, numbery);
        break;
    case '*':
        result = Mult(numberx, numbery);
        break;
    case '/':
        result = Division(numberx, numbery);
        break;
 
    default: 'Invalid Operator Error. Try Again!'
}

console.log(`Your result: ${result}`)





