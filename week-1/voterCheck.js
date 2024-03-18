let userInput = prompt("type in your age:")
userInput = Number(userInput);

if (userInput < 18){
    alert("you are not eligible to vote.")
} else{
    alert("you can go ahead and register.")
}