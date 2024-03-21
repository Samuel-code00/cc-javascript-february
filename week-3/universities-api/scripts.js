(async () =>{
    // Get information from universities api
    let url = "http://universities.hipolabs.com/search?country=Nigeria";

    let response = await fetch(url);
    let uniList = await response.json ();

    // Test api json output
    // console.log(uniList[5].name);
    // console.log(uniList[5].domains[0])
    
    // Target corresponding HTML document
    let cardBox = document.getElementById("card")
    let schoolName = cardBox.children[0]; 
    let officialSite = cardBox.children[1]; 
    let userInput = document.forms["school-search"]["input"];
    let buttton = document.getElementById("button")
    buttton.addEventListener("click" function(){
     userInput 
    })
    
    // Add API information to element
    let index = 7
    schoolName.innerHTML += " " + uniList[index].name;
    let hyperlink = officialSite.children[0];
    hyperlink.setAttribute("href", `${"https://" + uniList[index].domains[0]}`)
    hyperlink.innerHTML = uniList[7].domains[0];
})(); 