<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="../assets/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <title>Checkout</title>
  </head>
  <body>
    <div id="app">
      <header class="shop-header">
        <h1>Checkout</h1>
        <a href="../index.php" class="back-to-shop">Back to Shop</a>
      </header>
      <main class="checkout-container">
        <div class="cart-summary">
          <h2>Cart Summary</h2>
          <div id="cart-items" class="cart-items"></div>
          <div class="cart-total">
            <h3>Total: $<span id="total-amount">0.00</span></h3>
          </div>
        </div>
        <div class="checkout-form-container">
          <h2>Shipping Information</h2>
          <form id="checkout-form" class="checkout-form">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" required>
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <textarea id="address" required></textarea>
            </div>
            <div class="form-group">
              <label for="city">City</label>
              <input type="text" id="city" required>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="state">State</label>
                <input type="text" id="state" required>
              </div>
              <div class="form-group">
                <label for="zip">ZIP Code</label>
                <input type="text" id="zip" required>
              </div>
            </div>
            <button type="submit" class="checkout-button">Place Order</button>
          </form>
        </div>
      </main>
    </div>
    <script type="module" src="../script/checkout.js"></script>
  </body>
</html>