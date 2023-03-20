//Fizzbuzz 
///-- Multiples of 3

let n;
console.log("Multiples of 3");
for (n=1; n<=20; n++) 
{
    if ((n%3) == 0)
        console.log("fizz" + " ");
    else 
        console.log(n + " ")
}
///-- Multiples of 5
let m;
console.log("Multiples of 5");
for (m=1; m<=20; m++) 
{
    if ((m%5) == 0)
        console.log("buzz" + " ");
    else 
        console.log(m + " ")
}
///-- Multiples of 3 and 5
let o;
console.log("Multiples of 3 and 5");
for (o=1; o<=20; o++) 
{
    if ((o%5) == 0)
        console.log("fizzbuzz" + " ");
    else if ((o%3) == 0)
        console.log("fizzbuzz" + " "); 
    else 
        console.log(o + " ")
}

//prompt
const prompt=require("prompt-sync")({sigint:true}); 

//Simple Calculator
console.log(" ")
console.log("Calculator")

var operator = prompt("What operator would you like to use ('+' , '-', '*', '/')? ");

///-- Addition 
if (operator == '+') { 
    console.log(" ")
    console.log("Let's do some addition!")
    var num1 = parseInt(prompt("What's your first number? "));
    var num2 = parseInt(prompt("What's your second number? "));
    const sum = (num1 + num2);
    console.log(num1, "+", num2, "=", sum);
}  
else if (operator == '-') {  
    ///-- Subtraction
    console.log(" ")
    console.log("Let's do some Subtraction!")
    var num1 = parseInt(prompt("What's your first number? "));
    var num2 = parseInt(prompt("What's your second number? "));
    const sub = (num1 - num2);
    console.log(num1, "-", num2, "=", sub); 
}  
else if (operator == '*') { 
    ///-- Multiplication
    console.log(" ")
    console.log("Let's do some Multiplication!")
    var num1 = parseInt(prompt("What's your first number? "));
    var num2 = parseInt(prompt("What's your second number? "));
    const mul = (num1 * num2);
    console.log(num1, "*", num2, "=", mul); 
}  
else if (operator == '/') {  
    ///-- Division
    console.log(" ")
    console.log("Let's do some Division!")
    var num1 = parseInt(prompt("What's your first number? "));
    var num2 = parseInt(prompt("What's your second number? "));
    const div = (num1 / num2);
    console.log(num1, "/", num2, "=", div); 
}  
else { 
    console.log(" ");
    console.log("Error");
}

console.log(" ")

//Complicated Calculator
console.log("Complicated Calculator")
var operator = prompt("Factorials or Exponents? ('facts' or 'expos')?  ");
if (operator == 'facts') { 
    var num1 = parseInt(prompt("Which number would you like to find the factorial of? "));
    function facts (num) {
        var result = 1;
        for(var i = num; i > 0; i--){
            result *= i;
        }
        return result;
    }
    console.log(facts(num1));
}
else if (operator == 'expos') { 
    var num1 = parseInt(prompt("What's your base number? "));
    var num2 = parseInt(prompt("What's your exponent number? "));
    
    console.log(Math.pow(num1, num2));

}  
else {
    console.log(" ");
    console.log("Error");
}

console.log(" ")


//String Functions
console.log("Reverse It!")
function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("This scentence is in reverse - esrever ni si ecnetnecs sihT"));

console.log(" ")

console.log("Captialize Everthing!".toUpperCase());

console.log(" ")

function nomoreVowels(phrase)
{
  let vowels = ['A', 'E', 'I', 'O', 'U' ,'a', 'e', 'i', 'o', 'u'];
  let result = "";
  for (let i = 0; i < phrase.length; i++)
  {
    if (!vowels.includes(phrase[i]))
    {
        result += phrase[i];
    }
    
  }
  return result;
}

let phrase = "Testing this scentence -This scentence has no vowels!"
console.log(nomoreVowels(phrase));
console.log(" ")

//Object Validator
let student = {
    name: "Aniela Govada",
    age: 22,
    favcolor: "Lavender"
};

console.log('name' in student);
console.log('major' in student);
console.log('age' in student);
console.log('favcolor' in student);

console.log(" ")
//Numbers
var nums = [1, 2, 3, 4, 5]

var sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log("the sum of the 5 numbers is = " + sum)