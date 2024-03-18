let numbers = []; //Empty array to store numbers.
let userInput; //collect user input

while (true){
    userInput = prompt("This programm collects numbers and returns the first number.\n Type in a number:\nType 'stop' to exit")
    // exit condition from the infinite loop
    if (userInput == "stop"){
        break
    }

    // populate the array
    userInput = Number (userInput);
    numbers.push(userInput);
}

// function to get the firt element of the array

function firstElementArray(array){
    return array[0]
}


alert(firstElementArray(numbers))