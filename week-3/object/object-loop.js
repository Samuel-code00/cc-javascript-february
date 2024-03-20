const person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

console.log(person)
let txt = "";
for (let x in person){
    txt += person[x] + " ";
}
console.log(txt)


// let txt = "";

// txt = txt + "Hello";
// console.log(txt);

person.nationality = "Nigeria";
console.log(person);

delete person.nationality