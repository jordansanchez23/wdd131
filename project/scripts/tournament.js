document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified ${lastModified}`;

    const menuButton = document.getElementById("menu");
    const nav = document.querySelector(".navigation");
    const header = document.querySelector("header");

    menuButton.addEventListener("click", function() {
        menuButton.classList.toggle("open");
        nav.classList.toggle("open");
        header.classList.toggle("menu-open");
    });

    const form = document.getElementById('subscription-form');
    
    function handleFormSubmit(event) {
        event.preventDefault();
        
        const team = document.getElementById('team').value;
        const coach = document.getElementById('coach').value;
        const phone = document.getElementById('phone').value;
        const useremail = document.getElementById('useremail').value;
        
        if (team.trim() === '' || coach.trim() === '' || phone.trim() === '' || useremail.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }
        
        localStorage.setItem('team', team);
        localStorage.setItem('coach', coach);
        localStorage.setItem('phone', phone);
        localStorage.setItem('useremail', useremail);
        
        alert('Registration successful! 😊');
        form.reset();
    }
    
    form.addEventListener('submit', handleFormSubmit);
    
    const storedTeam = localStorage.getItem('team');
    const storedCoach = localStorage.getItem('coach');
    const storedPhone = localStorage.getItem('phone');
    const storedEmail = localStorage.getItem('useremail');

    if (storedTeam && storedCoach && storedPhone && storedEmail) {
        document.getElementById('team').value = storedTeam;
        document.getElementById('coach').value = storedCoach;
        document.getElementById('phone').value = storedPhone;
        document.getElementById('useremail').value = storedEmail;
    }
});