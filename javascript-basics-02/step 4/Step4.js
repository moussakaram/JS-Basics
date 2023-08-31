const nameR=document.querySelector('#name');
const sureR=document.querySelector('#surname');
const cityR=document.querySelector('#city')









function myFunction(){
    // var name=document.getElementById("name").value;
    // name.reset();
    if(confirm("Are you sure you want to reset ??")){
        nameR.value="";
        sureR.value="";
        cityR.value="";
    }
    
}