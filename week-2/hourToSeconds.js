function hourToSeconds(hours){
    return hours * 3600;
}

let input = prompt("Type in the number of an hour:\ntype in a number")
input = Number(input);
let message = (input + "hour is" + hourToSeconds(input) + "seconds");
alert(message) 


