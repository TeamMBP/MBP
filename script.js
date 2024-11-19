// Script to handle "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Producto añadido al carrito.');
        });
    });
});
