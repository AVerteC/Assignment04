//STEP 1
function halfNumber(n) {
    let answer = n/2;
    console.log(`Half of ${n} is ${answer}.`);
    return answer;
}

//STEP 2
function squareNumber(n) {
    let answer = n*n;
    console.log(`The result of squaring the number ${n} is ${answer}.`);
}

//STEP 3
function percentOf(x,y) {
    let answer = x/y * 100;
    if (y === 0) {
        console.log(`Error: Can't divide by zero.`)
        return NaN;
    }
    console.log(`${x} is ${answer}% of ${y}.`);
    return answer;
}

//STEP 4
function findModulus(x,y) {
    let answer = x%y;
    if (y === 0) {
        console.log(`Error: Can't divide by zero.`)
        return NaN;
    }
    console.log(`${answer} is the modulus of ${x} and ${y}.`)
}
