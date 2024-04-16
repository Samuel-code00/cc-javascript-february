async function message (){
    let url = "https://dog.ceo/api/breeds/image/random"
    let response = await fetch (url);
    let display = await response.json();
    
    // let name = document.getElementById("dog")
    let displayImage = document.getElementById("dog");
    
    displayImage.setAttribute("src",display.message)
    displayImage = display.message;

    
    setInterval(message,3000);
};
message();