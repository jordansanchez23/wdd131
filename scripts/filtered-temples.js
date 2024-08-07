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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
      width: 400,
      height: 225
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
      width: 400,
      height: 225
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
      width: 400,
      height: 225
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
      width: 400,
      height: 225
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
      width: 400,
      height: 225
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
      width: 400,
      height: 225
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
      width: 400,
      height: 225
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-4947.jpg",
      width: 400,
      height: 225
    },
    {
      templeName: "São Paulo Brazil",
      location: "São Paulo, Brazil",
      dedicated: "1978, October, 30",
      area: 73700,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-46816.jpg",
      width: 400,
      height: 225
    },
    {
      templeName: "Hong Kong China",
      location: "Hong Kong, China",
      dedicated: "1996, May, 26",
      area: 21600,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28220.jpg",
      width: 400,
      height: 225
    }
];
  
  function displayTemples(temples) {
    const section = document.querySelector('.temples-images');
    section.innerHTML = ''; 
    temples.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');
        
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.width = temple.width;  
        img.height = temple.height;  
        img.loading = 'lazy';
        
        const name = document.createElement('h3');
        name.textContent = temple.templeName;
        
        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;
        
        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        
        const area = document.createElement('p');
        area.textContent = `Area: ${temple.area} sq ft`;
        
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        
        section.appendChild(card);
    });
}

function filterTemples(filter) {
    let filteredTemples = temples;
    const currentYear = new Date().getFullYear();
    switch(filter) {
        case 'old':
            filteredTemples = temples.filter(temple => {
                const dedicatedYear = parseInt(temple.dedicated.split(",")[0], 10);
                return dedicatedYear < 1900;
            });
            break;
        case 'new':
            filteredTemples = temples.filter(temple => {
                const dedicatedYear = parseInt(temple.dedicated.split(",")[0], 10);
                return dedicatedYear > 2000;
            });
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'home':
        default:
            filteredTemples = temples;
            break;
    }
    displayTemples(filteredTemples);
}


document.querySelector('nav a:nth-child(1)').addEventListener('click', () => filterTemples('home'));
document.querySelector('nav a:nth-child(2)').addEventListener('click', () => filterTemples('old'));
document.querySelector('nav a:nth-child(3)').addEventListener('click', () => filterTemples('new'));
document.querySelector('nav a:nth-child(4)').addEventListener('click', () => filterTemples('large'));
document.querySelector('nav a:nth-child(5)').addEventListener('click', () => filterTemples('small'));


displayTemples(temples);
       







