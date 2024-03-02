var icon = document.querySelector(".icon");
var menu = document.querySelector(".menu")

icon.addEventListener("click", () => {
    menu.classList.toggle("active");
})