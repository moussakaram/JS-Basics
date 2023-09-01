const pass=document.getElementById("password");
const conf=document.getElementById("confirmation");
const btn =document.querySelector("button[name='button']");


    btn.addEventListener("click",function(){
        if(pass.value!==conf.value){
            conf.style.border='2px solid red';

        }
    })