// Add basic interaction for the buttons (dummy function)
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart!');
    });
});
