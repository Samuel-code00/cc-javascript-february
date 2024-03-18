let letter = document.getElementsByClassName("letter")
for (count = 0; count <=letter.length-1; count++){
    
    setInterval(letter, milliseconds);
    function myTimer() {
        setInterval(myTimer, 2000);
        document.getElementsByClassName("letter").innerHTML = d.toLocaleTimeString();
}
}
setInterval(letter, 2000);


      
    