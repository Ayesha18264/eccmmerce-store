// product.js

const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'images/download (1).jpg' },
    { id: 2, name: 'Product 2', price: 200, image: 'images/download.jpg' },
    { id: 3, name: 'Product 3', price: 300, image: 'images/images.jpg' },
];

// Function to render products on the page
function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to the cart!`);
}

// Ensure products are rendered when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProducts);
