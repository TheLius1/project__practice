document.addEventListener("DOMContentLoaded", function() {
    const openMenuIcon = document.querySelector("#openMenu");
    const mainMenu = document.querySelector(".mainMenu");

    openMenuIcon.addEventListener("click", function() {
        if (mainMenu.style.display === "flex") {
            mainMenu.style.display = "none";
        } else {
            mainMenu.style.display = "flex";
        }
    });
});