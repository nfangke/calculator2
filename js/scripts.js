var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
	return number1 - number2;
};

var multiply = function(number1, number2){
	return number1 * number2;
};

var divide = function(number1, number2){
	return number1 / number2;
};

var BMIcalculator = function(number1, number2){
  return (number1) / (number2 * number2);
};

var fahrenheitToCelsius = function(number1){
  return (number1 - 32) * (5/9);
}

var number1 = parseFloat(prompt("Enter your Celsius:"));
var number2 = parseFloat(prompt("Enter your Height:"));
var result = fahrenheitToCelsius(number1 , number2);
alert(result);
