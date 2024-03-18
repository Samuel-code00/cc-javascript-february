/*
this program checks the category of the user's age
take input form user: username
take input form user: age
check the age by category
display the message with the username and their category
 */

// input section
let candidateName = prompt("This program classifies you by age category\ntype in your name:")
let candidateAge = prompt("type in your age")
candidateAge = Number(candidateAge);

// processing section
let message;

if (candidateAge < 13){
    message = candidateName + ", you are an adolescent."
} else if(candidateAge < 18){
    message = candidateName + ", you are a teenager"
} else { 
  message = candidateName + ", you are an adult"
}

// output
alert(message)
