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
            if (y === 0) {
                return NaN;
            }
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
    userOperator = prompt("Enter the math operation to perform.\nAdd, Subtract, Multiply or Divide\nEnter (+,-,*,/):");
    if (userOperator !== "+" && userOperator !== "-" && userOperator !== "*" && userOperator !== "/") {
        alert("Invalid operator input. Please input (+,-,*,/).")
        return null;
    }
    return userOperator;
}

function mainLogic() {
    // COLLECT FIRST NUMBER FROM USER
    let numOne = getUserInputNumber("Enter first number:");

    // COLLECT SECOND NUMBER FROM USER
    let numTwo = getUserInputNumber("Enter second number:");

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    let operation = getOperation();
    if (operation === null){
        return;
    }

    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    let answer = calculate(numOne, numTwo, operation);
    if (numTwo === 0 && operation === "/") {
        answer = "NaN.\nCan't divide by 0";
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
