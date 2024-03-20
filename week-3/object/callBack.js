// function sayHello(){
//     return console.log("Hello how are you")
// }

// setInterval(sayHello,3000);

const myNumbers = [4, 1, -20, -7, 5, 9, -6];

 
const positiveNumbers = removeNegative(myNumbers, (x) => x >= 0);

document.getElementById("callback").innerHTML = positiveNumbers;
