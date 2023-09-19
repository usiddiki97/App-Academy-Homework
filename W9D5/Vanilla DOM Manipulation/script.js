document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const addLi = (e) => {
    e.preventDefault();

    const inputElement = document.querySelector(".favorite-input");
    const inputValue = inputElement.value;
    
    const li = document.createElement("li");
    li.textContent = inputValue;

    document.getElementById("sf-places").appendChild(li);
    inputElement.value = "";
  }

  document.querySelector("form").addEventListener("submit", addLi);


  // adding new photos

  // --- your code here!
  const hiddenForm = document.querySelector(".photo-form-container");

  document.querySelector("button").addEventListener("click", () => {
    hiddenForm.classList.toggle("hidden");
  })  

  hiddenForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const imageURL = document.querySelector(".photo-url-input");
    const img = document.createElement("img");
    img.src = imageURL.value;

    const li = document.createElement("li");
    li.appendChild(img);
    document.querySelector(".dog-photos").appendChild(li);
    imageURL.value = "";
  })

});
