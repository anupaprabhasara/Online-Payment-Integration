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

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function createShopItem(item) {
  const itemElement = document.createElement('div');
  itemElement.className = 'shop-item';
  
  itemElement.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="item-image">
    <h3 class="item-title">${item.name}</h3>
    <p class="item-price">$${item.price.toFixed(2)}</p>
    <p class="item-description">${item.description}</p>
    <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
  `;
  
  return itemElement;
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

function initShop() {
  const shopContainer = document.getElementById('shop-container');
  const cartInfo = document.querySelector('.cart-info');
  
  shopItems.forEach(item => {
    const itemElement = createShopItem(item);
    shopContainer.appendChild(itemElement);
  });
  
  shopContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
      const itemId = parseInt(e.target.dataset.id);
      const item = shopItems.find(item => item.id === itemId);
      
      if (item) {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Visual feedback
        e.target.textContent = 'Added!';
        setTimeout(() => {
          e.target.textContent = 'Add to Cart';
        }, 1000);
      }
    }
  });
  
  // Make cart info clickable
  cartInfo.style.cursor = 'pointer';
  cartInfo.addEventListener('click', () => {
    window.location.href = 'checkout.html';
  });
  
  updateCartCount();
}

initShop();