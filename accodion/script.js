
let accodion = document.getElementsByClassName("accodion");

for (let count = 0; count <= accodion.length - 1; count++){
    accodion[count].addEventListener("click", function(){
     this.classList.toggle(".active");
     let panel = this.nextElementSibling;   
     if (panel.style.display == "block"){
        panel.style.display = "none";
     } else{
        panel.style.display = "block";
     }
    });
}
