<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="../assets/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <title>Shop Dashboard</title>
  </head>
  <body>
    <div id="app">
      <header class="shop-header">
        <h1>Dashboard</h1>
        <nav class="dashboard-nav">
          <a href="../index.php" class="nav-link">Shop</a>
        </nav>
      </header>
      <main class="dashboard-container">
        <div class="dashboard-section">
          <h2>Products Overview</h2>
          <div id="products-list" class="products-list"></div>
        </div>
        <div class="dashboard-section">
          <h2>Recent Orders</h2>
          <div id="orders-list" class="orders-list"></div>
        </div>
      </main>
    </div>
    <script type="module" src="../script/dashboard.js"></script>
  </body>
</html>