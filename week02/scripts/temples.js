const currentYear = new Date().getFullYear();

const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;

const lastModified = document.lastModified;

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last modified ${lastModified}`;

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const headerTitle = document.querySelector(".header h1");

headerTitle.classList.remove("hidden");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("open");
    hambutton.classList.toggle("open");
    headerTitle.classList.toggle("hidden", mainnav.classList.contains("open"));
    
});

