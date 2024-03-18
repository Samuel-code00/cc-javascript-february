// input
let userInput;

while(true){
    userInput = prompt("This is an infinite loop.\nType 'okay' to stop")

    if (userInput == 'okay'  || userInput == "Okay" || userInput == "OKAY" || userInput =="ok"){
        break
    }

    alert("Hello");
}