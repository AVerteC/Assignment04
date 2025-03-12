// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch(operation) {
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "*":
            return x * y;
        case "/":
            return x / y;
    }
}
 
function getUserInputNumber(message) {
    let userInput;
    do {
        userInput = prompt(`${message}`);
        if (userInput !== null) {
            userInput = userInput.trim(); // trim whitespace
        }
    } while (userInput === "" || isNaN(userInput) || userInput === null);
    return parseFloat(userInput);
}

function getOperation() {
    let userOperator;
    do {
        userOperator = prompt("Enter the math operation to perform.\nAdd, Subtract, Multiply or Divide\nChoose (+,-,*,/):");
        if (userOperator !== "+" && userOperator !== "-" && userOperator !== "*" && userOperator !== "/") {
            alert("Invalid operator input. Please input (+,-,*,/).")
        }

    } while (userOperator !== "+" && userOperator !== "-" && userOperator !== "*" && userOperator !== "/")
    console.log(userOperator);
    return userOperator;
}

function mainLogic() {
    // COLLECT FIRST NUMBER FROM USER
    let numOne = getUserInputNumber("Enter first number:");

    // COLLECT SECOND NUMBER FROM USER
    let numTwo = getUserInputNumber("Enter second number:");

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    let operation = getOperation();

    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    let answer = calculate(numOne, numTwo, operation);
    if (isFinite(answer) === false) {
        answer = "Can't divide by 0";
    }
    alert(`${numOne} ${operation} ${numTwo} = ${answer}`);
}

let goAgain = "y";
do {
    mainLogic();
    do {
        goAgain = prompt("Do you want to calculate again? (y/n)", "y");
    } while (goAgain !== "y" && goAgain !== "n");
} while (goAgain === "y");
