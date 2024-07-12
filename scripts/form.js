document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const currentYearElement = document.getElementById('currentyear');
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }

    const lastModified = document.lastModified;
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last modified: ${lastModified}`;
    }

    const productSelect = document.getElementById('product');

    
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            "avg-rating": 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            "avg-rating": 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            "avg-rating": 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            "avg-rating": 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            "avg-rating": 5.0
        }
    ];

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.name;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    let reviewsCount = localStorage.getItem('reviewsCount') || 0;
    reviewsCount++;
    localStorage.setItem('reviewsCount', reviewsCount);

    console.log(`You have submitted ${reviewsCount} reviews.`);
});