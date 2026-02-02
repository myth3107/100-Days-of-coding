let form = document.querySelector("form");
let input = document.querySelectorAll("input")
let main = document.querySelector(".main")

form.addEventListener("submit", (dets)=>{
dets.preventDefault();
// console.log(input[0].value);

let card = document.createElement("div");
card.classList.add("card");

let checkbox = document.createElement("input")
 checkbox.type = "checkbox";
 checkbox.classList.add("checkbox");

 let h2 = document.createElement("h2");
 h2.classList.add("h2");
 h2.innerText = input[0].value;

 let del = document.createElement("button")
 del.classList.add("button");
 del.innerText = "Delete";

 card.appendChild(checkbox);
 card.appendChild(h2);
 card.appendChild(del);

 main.appendChild(card);


})




