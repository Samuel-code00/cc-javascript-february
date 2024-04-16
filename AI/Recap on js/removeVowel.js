function removeVowels(text){
    let newString = "";
    for (let count = 0; count <= text.length -1; count++){
        if (text[count] != "a" && text[count] != "e" && text[count] != "i" && text[count] != "o" && text[count] != "u"){
            newString += text[count]
        }
    }
    console.log(newString);
}

removeVowels("this is a boy");