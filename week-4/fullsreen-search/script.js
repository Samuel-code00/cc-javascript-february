let closeSpan = document.getElementById("myOverlay");
let button = document.getElementsByClassName("openBtn")

closeSpan.addEventListener("click", function(){
    this.style.display = "none";
})

button[0].addEventListener("click", function(){
    closeSpan.style.display = "block";
})