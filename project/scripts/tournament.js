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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscription-form');

    
    function handleFormSubmit(event) {
        event.preventDefault();

        
        const fullname = document.getElementById('fullname').value;
        const useremail = document.getElementById('useremail').value;

        
        if (fullname.trim() === '' || useremail.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('useremail', useremail);

        
        alert('Subscription successful! 😊');

        
        form.reset();
    }

    
    form.addEventListener('submit', handleFormSubmit);

    
    const storedName = localStorage.getItem('fullname');
    const storedEmail = localStorage.getItem('useremail');

    if (storedName && storedEmail) {
        document.getElementById('fullname').value = storedName;
        document.getElementById('useremail').value = storedEmail;
    }
});
