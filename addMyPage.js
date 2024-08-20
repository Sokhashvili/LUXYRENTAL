document.addEventListener('DOMContentLoaded', function () {
    const rentButton = document.getElementById('save-button');
    
    rentButton.addEventListener('click', function () {
        const car = {
            name: 'Ferrari 488 pista', // This should be dynamic based on the car being rented
            image: 'Ferrari 488/image1.webp', // This should point to the correct image path
            startDate: '2024-08-21', // Should be dynamic, based on user input
            endDate: '2024-08-25' // Should be dynamic, based on user input
        };
        
        const rentedCars = JSON.parse(localStorage.getItem('rentedCars')) || [];
        rentedCars.push(car);
        localStorage.setItem('rentedCars', JSON.stringify(rentedCars));
        
        alert('Car added to your rented list!');
    });
});