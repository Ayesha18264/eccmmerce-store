// order.js

// Function to display orders (if any exist)
function renderOrders() {
    const ordersList = document.getElementById('orders-list');
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    if (orders.length === 0) {
        ordersList.innerHTML = '<p>No orders placed yet.</p>';
    } else {
        orders.forEach(order => {
            const orderItem = document.createElement('li');
            orderItem.innerHTML = `
                <p>Order Date: ${order.orderDate}</p>
                <p>Total Amount: $${order.totalAmount}</p>
                <ul>
                    ${order.items.map(item => `<li>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</li>`).join('')}
                </ul>
            `;
            ordersList.appendChild(orderItem);
        });
    }
}

// Ensure orders are rendered when DOM is loaded
document.addEventListener('DOMContentLoaded', renderOrders);
