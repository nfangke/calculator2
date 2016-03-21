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

var celsiusToFahrenheit = function (number1) {
  return ((number1) * (9 / 5)) + 32 ;
};

var gallonsToLiters = function (number1) {
  return number1 / 0.26417205235815 ;
} ;

var litersToGallons = function (number1) {
  return number1 * 0.26417205235815 ;
} ;

var number1 = parseFloat(prompt("Enter your liters:"));
var number2 = parseFloat(prompt("Enter your Height:"));
var result = litersToGallons(number1 , number2);
alert(result);
