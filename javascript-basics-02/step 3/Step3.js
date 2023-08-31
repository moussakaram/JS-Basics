// const output =document.querySelector("#output");
// const input=document.querySelector("#input");
// input.addEventListener("input", function(){
//     const text = input.value;
//     output.textContent = text;
//   });

const outputDiv = document.querySelector('#output');
const input = document.querySelector('#name');
input.addEventListener('input', function() {
  const newText = input.value;
  output.textContent = newText;
});