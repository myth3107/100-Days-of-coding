let form = document.querySelector("form");
let input = document.querySelector("input[type='number']");
let main = document.querySelector(".main");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const count = Number(input.value);
  if (!count || count <= 0) return;

  // Clear previous cards (remove old generated ones)
  document.querySelectorAll(".card").forEach(card => card.remove());

  for (let i = 1; i <= count; i++) {
    // Create elements
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.classList.add("pic");
    img.src =
      "https://images.unsplash.com/photo-1770562525481-e7a3eae66492?w=500&auto=format&fit=crop&q=60";
    img.alt = "pokemon";

    let data = document.createElement("div");
    data.classList.add("data");

    let para = document.createElement("p");
    para.classList.add("para");
    para.innerText = `Pokemon ${i}`;

    // Build structure
    data.appendChild(para);
    card.appendChild(img);
    card.appendChild(data);

    // Append to main container
    main.appendChild(card);
  }
});
