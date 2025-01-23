<?php
// PayHere Merchant Details
$merchant_id = "1229388";
$merchant_secret = "Mjg0NDA5OTQ4NzM3OTU5NzIxNzMzOTk5NDQ2NzY0MzE3NTE0NDA3NQ==";
$currency = "LKR"; // Currency

// Sample total amount (this should be calculated dynamically based on cart items)
$total_amount = 1500.00; // Example total amount in LKR

// URLs for PayHere to call
$return_url = "http://yourdomain.com/return"; // Your success URL
$cancel_url = "http://yourdomain.com/cancel"; // Your cancel URL
$notify_url = "http://yourdomain.com/notify"; // Your notify URL
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="icon" href="../assets/favicon.png">
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
                <div id="cart-items" class="cart-items">
                    <!-- Cart items should be dynamically listed here -->
                </div>
                <div class="cart-total">
                    <h3>Total: LKR <span id="total-amount"><?php echo number_format($total_amount, 2); ?></span></h3>
                </div>
            </div>

            <div class="checkout-form-container">
                <h2>Shipping Information</h2>
                <form id="checkout-form" class="checkout-form">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <textarea id="address" name="address" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="city">City</label>
                        <input type="text" id="city" name="city" required>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="state">State</label>
                            <input type="text" id="state" name="state" required>
                        </div>
                        <div class="form-group">
                            <label for="zip">ZIP Code</label>
                            <input type="text" id="zip" name="zip" required>
                        </div>
                    </div>
                    <button type="submit" class="checkout-button" id="place-order">Place Order</button>
                </form>
            </div>
        </main>
    </div>

    <script src="https://www.payhere.lk/lib/payhere.js"></script>
    <script>
        document.getElementById("place-order").addEventListener("click", function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const address = document.getElementById("address").value;
            const city = document.getElementById("city").value;
            const state = document.getElementById("state").value;
            const zip = document.getElementById("zip").value;

            // Payment request details
            const payment = {
                sandbox: true,  // Use sandbox environment for testing
                merchant_id: "<?php echo $merchant_id; ?>",  // Your PayHere Merchant ID
                return_url: "<?php echo $return_url; ?>",    // Success URL
                cancel_url: "<?php echo $cancel_url; ?>",    // Cancel URL
                notify_url: "<?php echo $notify_url; ?>",    // Notify URL
                order_id: "Order" + Date.now(),  // Unique Order ID
                items: "Shopping Cart Items",  // Items in the cart (could be a list or summary)
                amount: parseFloat("<?php echo $total_amount; ?>").toFixed(2),  // Total amount (LKR)
                currency: "<?php echo $currency; ?>",  // Currency (LKR)
                first_name: name,
                last_name: "",
                email: email,
                phone: "",  // Optional
                address: address,
                city: city,
                state: state,
                zip: zip,
                country: "Sri Lanka"
            };

            // Initialize the PayHere payment
            payhere.startPayment(payment);
        });
    </script>
</body>
</html>