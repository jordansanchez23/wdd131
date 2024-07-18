const currentYear = new Date().getFullYear();

const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;

const lastModified = document.lastModified;

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last modified ${lastModified}`;

document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu");
    const nav = document.querySelector(".navigation");
    const header = document.querySelector("header");

    menuButton.addEventListener("click", function() {
        menuButton.classList.toggle("open");
        nav.classList.toggle("open");
        header.classList.toggle("menu-open"); 
    });
});


