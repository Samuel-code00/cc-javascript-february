let states = [
  'Abia', 
  'Adamawa', 
  'Akwa Ibom', 
  'Anambra', 
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Enugu', 
  'Gombe'];
let newStates = [];

for (let count = 0; count <= states.length - 1; count++){
    newStates[count] = states[count] + "state";
}

document.write("<h1>" + newStates + "</h1>")

// display hello text five(5) times
for (let count = 0; count < 5; count++){
    document.write("<h2>" + "Hello" + "</h2>")
}

