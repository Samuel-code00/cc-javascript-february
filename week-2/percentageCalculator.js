/*
algorithm of the problem
take input from the user: two integers
calculate the percentage using a function.
Output the result in the alert box
*/

// input section
let userInput = prompt("input a number:");
userInput = Number(userInput)
let userInput2 = prompt("input a second number:");
userInput2 = Number(userInput2)

// proccessing section
function percentage(userInput,userInput2){
    let answer = (userInput / userInput2) * 100;
    return answer;
}

// output section
alert(percentage(userInput, userInput2) + "%")