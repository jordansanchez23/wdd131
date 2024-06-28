const currentYear = new Date().getFullYear();

const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;

const lastModified = document.lastModified;

const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last modified ${lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
    const temperature = 25;
    const windSpeed = 10;

    function calculateWindChill(temp, speed) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);

    }

    function isValidForWindChill(temp, speed) {
        return temp <= 10 && speed > 4.8;
    }

    const windChillElement = document.getElementById("windChill");
    if (isValidForWindChill(temperature, windSpeed)) {
        const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
        windChillElement.textContent = `${windChill}°C`;

        } else {
            windChillElement.textContent = "N/A";
        }
    
});