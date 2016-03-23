var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
	return number1 - number2;
};

$(document).ready(function() {
	$("form#add").submit(function(event) {
		(event).preventDefault();
		alert("before parseInt")
		var number1 = parseInt($("input#add1").val());
		var number2 = parseInt($("input#add2").val());
    var result = add(number1 , number2);
		alert("after addition")
		$("#addoutput").text(result);

	$("form#subtract").submit(function(event) {
		(event).preventDefault();
		var number1 = parseInt($("input#subtract1").val());
		var number2 = parseInt($("input#subtract2").val());
    var result = subtract(number1 , number2);

		$("#subtractoutput").text(result);

});
});
});

/*
$("form").submit(function() {
parseFloat(prompt("Enter your Weight:"));
var number2 = parseFloat(prompt("Enter your Height:"));
*/



/*
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

var poundToKg = function(number1) {
  return number1 * 2.20462;
};

var kgToPound = function(number1) {
  return number1 / 2.20462;
};


var number1 = parseFloat(prompt("Enter your Weight:"));
var number2 = parseFloat(prompt("Enter your Height:"));
var result = kgToPound(number1 , number2);
alert(result);*/
