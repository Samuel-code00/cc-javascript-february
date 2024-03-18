let userInput = prompt("if a number is is less than zero, this program will return true." + "otherwise it will return false.\n" + "type in a number");

function check(number){
    if(number <= 0) {
        return true;
    } else {
        return false;
    }
}

alert(check(userInput))