// Save the API url in a variable
let url = "https://www.boredapi.com/api/activity";

// Write an asynchronous function to get a response
async function activity (){
    let response = await fetch (url);
    let activityObject = await response.json();
    
    // Save HTML element into variable
   let activityElement = document.getElementById("main-activity")

    // extract the information from json
   activityElement.innerHTML += "\n" + activityObject.activity

//    setInterval(activity,3000);
};

activity();