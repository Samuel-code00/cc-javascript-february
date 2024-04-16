async function rescue(){
    let url =  "https://dog.ceo/api/breeds/image/random";
    let response = await response (url);
    let play = await response.json();

    console.log(url);
};
rescue();