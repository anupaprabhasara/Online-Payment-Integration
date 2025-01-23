// Import shop items from main.js
const shopItems = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 29.99,
    description: "Comfortable cotton t-shirt",
    image: "https://placehold.co/300x200"
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: 59.99,
    description: "Classic blue denim jeans",
    image: "https://placehold.co/300x200"
  },
  {
    id: 3,
    name: "Sneakers",
    price: 89.99,
    description: "Casual everyday sneakers",
    image: "https://placehold.co/300x200"
  },
  {
    id: 4,
    name: "Watch",
    price: 129.99,
    description: "Elegant analog watch",
    image: "https://placehold.co/300x200"
  }
];

// Mock orders data (in a real app, this would come from a database)
const mockOrders = [
  {
    id: 1,
    customerName: "John Doe",
    items: [shopItems[0], shopItems[1]],
    total: 89.98,
    date: "2024-02-20"
  },
  {
    id: 2,
    customerName: "Jane Smith",
    items: [shopItems[2]],
    total: 89.99,
    date: "2024-02-19"
  }
];

function createProductCard(item) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="product-image">
    <div class="product-details">
      <h3>${item.name}</h3>
      <p class="price">$${item.price.toFixed(2)}</p>
      <p class="stock">In Stock</p>
    </div>
  `;
  
  return card;
}

function createOrderCard(order) {
  const card = document.createElement('div');
  card.className = 'order-card';
  
  const itemsList = order.items.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join('');
  
  card.innerHTML = `
    <div class="order-header">
      <h3>Order #${order.id}</h3>
      <span class="order-date">${order.date}</span>
    </div>
    <div class="order-details">
      <p><strong>Customer:</strong> ${order.customerName}</p>
      <p><strong>Items:</strong></p>
      <ul>${itemsList}</ul>
      <p class="order-total"><strong>Total:</strong> $${order.total.toFixed(2)}</p>
    </div>
  `;
  
  return card;
}

function initDashboard() {
  const productsList = document.getElementById('products-list');
  const ordersList = document.getElementById('orders-list');
  
  // Display products
  shopItems.forEach(item => {
    const productCard = createProductCard(item);
    productsList.appendChild(productCard);
  });
  
  // Display orders
  mockOrders.forEach(order => {
    const orderCard = createOrderCard(order);
    ordersList.appendChild(orderCard);
  });
}

initDashboard();