document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const greeting = document.getElementById('greeting');
    greeting.textContent = `Hello, ${username}`;

    const rentedCars = JSON.parse(localStorage.getItem('rentedCars')) || [];
    const rentedCarsList = document.getElementById('rented-cars-list');

    rentedCars.forEach(car => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'basket-item';

        const imagePath = `./cars/${car.image}`; 

        cardDiv.innerHTML = `
            <img src="${imagePath}" alt="${car.name}" class="basket-image">
            <div>
                <h2>${car.name}</h2>
                <p>From ${car.startDate} to ${car.endDate}</p>
            </div>
            <button class="remove-btn">Remove</button>
        `;

        rentedCarsList.appendChild(cardDiv);

        cardDiv.querySelector('.remove-btn').addEventListener('click', function() {
            rentedCarsList.removeChild(cardDiv);
            const updatedCars = rentedCars.filter(c => c.name !== car.name);
            localStorage.setItem('rentedCars', JSON.stringify(updatedCars));
        });
    });
});