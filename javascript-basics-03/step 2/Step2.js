const showtext=document.getElementById("show");
const hidetext=document.getElementById("hide");
const text=document.getElementById("texte");
showtext.addEventListener("click",function(){
    text.style.display = "block";
    


})
hidetext.addEventListener("click",function(){
    text.style.display = "none";

})

