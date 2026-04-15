const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-Menu");
const alertButton = document.querySelector("#alert-btn");

menuToggle.addEventListener("click", function() 
  {navMenu.classList.toggle("hidden");

    if (navMenu.classList.contains("hidden")) {
        menuToggle.textContent = "☰ Menu";
    } else {
        menuToggle.textContent = "Close Menu"; 
    }
    });

alertButton.addEventListener("click", function() {
    alert("Hello from JavaScript!")
});