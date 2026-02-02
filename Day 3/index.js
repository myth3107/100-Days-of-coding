let form = document.querySelector("form");
let input = document.querySelectorAll("input")

form.addEventListener("submit", (dets)=>{
dets.preventDefault();
console.log(input[0].value);



})




