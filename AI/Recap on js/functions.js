function myGreeting(message){
    return console.log(message);
};

myGreeting("Helllo")
myGreeting("Today is monday!");

function addNumbers(firstNumber, secondNumber){
    return console.log (firstNumber + secondNumber)
}

addNumbers(3,20)

let number = 5;

function increase(){
    return number +  1;
}

console.log(increase());

function toCelcius(temperature){
    return (5/9) * (temperature - 32);
}

let tempValue = 212;
let answer = "The temperature value " + tempValue + " is " + toCelcius(tempValue) + " in celcius";
console.log(answer)

function myFunction(){
    alert ("Hello World");
}
myFunction();

for (let count = 0; count <5;count++){
    console.log("hello");
    if (count == 3){
        break;
    }
}