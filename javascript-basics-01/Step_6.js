
var firstNumber = document.getElementById("first_number");
var secondNumber = document.getElementById("second_number");
var validateButton = document.getElementById("validate");

validateButton.addEventListener("click", function(event) {
    event.preventDefault(); 
    var num1 = parseInt(firstNumber.value);
    var num2 = parseInt(secondNumber.value);
    var quotient = Math.floor(num1 / num2);
    var remainder = num1 % num2;
    alert("The quotient of the division is: " + quotient +
          "\nThe remainder of the division is: " + remainder);
});