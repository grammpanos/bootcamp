function calculator (number1, number2, operators){
switch (operators){
case "+":
var result = number1 + number2
break;
case "-":
var result = number1 - number2
break;
case "*":
var result = number1 * number2
break;
case "/":
var result = number1 / number2
break;
}
return result
}

var num1 = +prompt ("pick first number")
while (parseInt(num1) != num1){
alert("Not an integer");
num1 = +prompt("pick another number");
}

var num2 = +prompt ("pick second number")
while (parseInt(num2) != num2){
alert("Not an integer");
num2 = +prompt("pick another number");
}



var operator = prompt("pick an operator")



console.log(calculator(num1, num2, operator))