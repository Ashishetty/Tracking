// Initialize the cart array
let cart = [];

// Function to update the cart display
function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the current cart display
    cartItemsList.innerHTML = '';

    let total = 0;
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price} <button class="remove-item" data-index="${index}">Remove</button>`;
        cartItemsList.appendChild(li);
        total += parseFloat(item.price);
    });

    // Update the total price
    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to add an item to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Event listener for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const name = this.getAttribute('data-name');
        const price = this.getAttribute('data-price');
        
        // Debugging step: Check the values of name and price
        console.log('Product Name:', name, 'Price:', price);
        
        if (name && price) {
            addToCart(name, price);
        } else {
            console.error('Error: Missing product name or price');
        }
    });
});

// Event listener for removing items from the cart
document.getElementById('cart-items').addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-item')) {
        const index = event.target.getAttribute('data-index');
        cart.splice(index, 1);
        updateCart();
    }
});

// Event listener for the "Place Order" button
const placeOrderButton = document.querySelector('.place-order');
if (placeOrderButton) {
    placeOrderButton.addEventListener('click', function () {
        // Navigate to the track.html page when the button is clicked
        window.location.href = 'track.html'; // Redirect to track.html
    });
}
