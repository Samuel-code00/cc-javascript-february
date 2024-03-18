// input section
let studentName = prompt("Type In Your Full-Name");
let studentHouse = prompt("type in your house number");
studentHouse = Number(studentHouse)

// processing section
let message;
if (studentHouse == 1){
    message = studentName + ", You are in Red House"
} 

else if (studentHouse == 2){
    message = studentName + ", You are in Green House"
} 

if (studentHouse == 3){
    message = studentName + ", You are in Blue House"
} 

else if (studentHouse == 4){
    message = studentName + ", You are in Yellow House"
}

// output
alert(message)