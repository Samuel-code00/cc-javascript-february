let userInput = prompt("type your name")
alert("Welcome, " + userInput)

let genderInput = prompt("type your gender")
if (genderInput == "male"){
    message = "You are a Man"
} else{
    message = "You are a woman"
}
alert(message)

let ageInput = prompt("type your age")
// alert(ageInput)
if (ageInput < 18){
    alert("you are not qualify")
} else{
    alert("you are qualify")
}