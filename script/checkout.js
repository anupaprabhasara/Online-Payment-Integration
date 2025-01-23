// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function createCartItem(item) {
  const itemElement = document.createElement('div');
  itemElement.className = 'cart-item';
  
  itemElement.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
    <div class="cart-item-details">
      <h3>${item.name}</h3>
      <p>$${item.price.toFixed(2)}</p>
    </div>
    <button class="remove-item" data-id="${item.id}">×</button>
  `;
  
  return itemElement;
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    return;
  }
  
  cart.forEach(item => {
    const itemElement = createCartItem(item);
    cartItemsContainer.appendChild(itemElement);
  });
  
  updateTotal();
}

function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('total-amount').textContent = total.toFixed(2);
}

function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}

function initCheckout() {
  const cartItemsContainer = document.getElementById('cart-items');
  const checkoutForm = document.getElementById('checkout-form');
  
  // Handle removing items
  cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
      const itemId = parseInt(e.target.dataset.id);
      removeFromCart(itemId);
    }
  });
  
  // Handle form submission
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Collect form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zip: document.getElementById('zip').value,
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price, 0)
    };
    
    // Here you would typically send this data to a server
    console.log('Order submitted:', formData);
    
    // Clear cart and show success message
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
  });
  
  updateCartDisplay();
}

initCheckout();