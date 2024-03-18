function minuteCoverter(minute){
    return minute * 60;
}

let input = prompt("type in a number");
input = Number(input);

let message = input + "minutes is" + minuteCoverter(input) + "seconds.";
alert(message)

// alert("5 mins is equal to " + minuteCoverter(5) + "seconds")
// alert("3 mins is equal to " + minuteCoverter(3) + "seconds")
// alert("2 mins is equal to " + minuteCoverter(2) + "seconds")

// console.log(minuteCoverter(5));  
// console.log(minuteCoverter(3));
// console.log(minuteCoverter(2));