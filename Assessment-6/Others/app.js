//Grade Checker 
function checkGrade() {
    console.log("Grade Checker");
    const marks = parseFloat(prompt("Enter your marks (0-100):"));

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid marks entered!");
    } else {
        let grade;
        if (marks >= 90) grade = 'A';
        else if (marks >= 80) grade = 'B';
        else if (marks >= 70) grade = 'C';
        else if (marks >= 60) grade = 'D';
        else grade = 'F';

        console.log(`Your grade is: ${grade}`);
    }
}

//Loops 
function Loops() {
    // For loop (1-20)
    console.log("Numbers 1-20:");
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }

    // While loop (even numbers 2-10)
    console.log("\nEven numbers 2-10:");
    let num = 2;
    while (num <= 10) {
        console.log(num);
        num += 2;
    }
}

// Functions
function greetUser(name) {
    console.log(`\nWelcome, ${name}! Nice to see you.`);
}

function squareNumber(num) {
    return num * num;
}

//Main Execution 
console.log("Js Demo");
checkGrade();
Loops();

// Testing the functions
greetUser("Sam");
console.log("Square of 5:", squareNumber(5));
console.log("Square of 8:", squareNumber(8));