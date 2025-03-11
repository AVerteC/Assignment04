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
    } while (isNaN(userInput) || userInput === null);
    console.log(userInput);
    return userInput;
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
    let a = parseFloat(numOne);

    // COLLECT SECOND NUMBER FROM USER
    let numTwo = getUserInputNumber("Enter second number:");
    let b = parseFloat(numTwo);

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    let operation = getOperation();

    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    let answer = calculate(a, b, operation);
    alert(`${a} ${operation} ${b} = ${answer}`);
}

let goAgain = "y";
do {
    mainLogic();
    do {
        goAgain = prompt("Do you want to calculate again? (y/n)", "y");
    } while (goAgain !== "y" && goAgain !== "n");
} while (goAgain === "y");
