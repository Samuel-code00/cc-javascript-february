(async () => {
  // Get information from universities api
  let url = "http://universities.hipolabs.com/search?country=Nigeria";
  let response = await fetch(url);
  let uniList = await response.json();

  // Target corresponding HTML elements
  let cardBox = document.getElementById("card");
  let schoolName = cardBox.children[0];
  let officialSite = cardBox.children[1];
  let hyperLink = officialSite.children[0];

  // Collect input from user using form
  let userInput = "";
  let form = document.getElementById("input-field");

  // Use button to collect input when the user clicks it.
  let button = document.getElementById("button");
    button.addEventListener("click",() => {
      userInput += form.elements[0].value;

      let inputEx = new RegExp(userInput, "i");
      // console.log(uniList[12].name.search(inputEx));
   
      for (let count = 0; count < uniList - 1; count++){
        if (uniList[count].name.search(inputEx) != -1) {

          schoolName.innerHTML += " " + uniList[count].name;
          hyperLink.setAttribute("href", `${"https://" + uniList[count].domains[0]}`)
          hyperLink.innerHTML = uniList[count].domains[0];
          break;
        }
      }
    })
})(); 