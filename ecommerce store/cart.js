// cart.js

// Function to render the cart
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const orderButton = document.getElementById('order-now');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Clear current cart items
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<li>Your cart is empty!</li>';
        cartTotal.textContent = '0.00';
        orderButton.style.display = 'none'; // Hide the Order Now button if cart is empty
        return;
    }

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
    orderButton.style.display = 'inline-block'; // Show the Order Now button if cart has items
}

// Function to handle the "Order Now" button click
function placeOrder() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Example order details (in a real app, you'd collect customer info here)
    const orderDetails = {
        items: cart,
        totalAmount: total,
        orderDate: new Date().toLocaleString(),
    };

    // Simulate placing an order (in a real app, you'd send this to a server)
    alert(`Order placed successfully!\nTotal: $${total.toFixed(2)}`);
    
    // Clear cart after order
    localStorage.removeItem('cart');
    renderCart();
}

// Ensure cart is rendered when DOM is loaded
document.addEventListener('DOMContentLoaded', renderCart);
