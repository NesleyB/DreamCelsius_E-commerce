// Search Bar Functionality
document.querySelector('.search-button').addEventListener('click', () => {
  const query = document.querySelector('.search-bar').value.toLowerCase();
  alert(`Searching for: ${query}`);
  // Add search functionality logic here
});

// Add to Cart Button Logic
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const productName = e.target.parentElement.querySelector('h3').textContent;
    alert(`${productName} added to your cart!`);
    // Add logic to update cart here
  });
});

// Cart Data
let shoppingCart = []; // Example format: [{ id: 1, name: "Apple", price: 2.99, quantity: 1 }]

// Function to Add a Product to the Cart
function addToCart(productId, productName, productPrice) {
  const existingProduct = shoppingCart.find(item => item.id === productId);
  
  if (existingProduct) {
    // If product exists, increase its quantity
    existingProduct.quantity += 1;
  } else {
    // Add new product to the cart
    shoppingCart.push({
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1
    });
  }

  updateCartDisplay();
}

// Function to Update the Cart Display
function updateCartDisplay() {
  const cartCount = shoppingCart.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = shoppingCart.reduce((total, item) => total + (item.price * item.quantity), 0);

  document.getElementById('cart-count').textContent = cartCount;
  document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
}

// Example: Add Event Listeners to "Add to Cart" Buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const productCard = e.target.closest('.product-card');
    const productId = parseInt(productCard.dataset.id); // Assuming each product card has a unique ID
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = parseFloat(productCard.dataset.price); // Assuming the price is stored in the data attribute

    addToCart(productId, productName, productPrice);
  });
});

// Initial cart update to display "0 items in cart" and "$0.00" at start
updateCartDisplay();

// Add Click Event to Each Product Card
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    // Add the 'zoom' class to the clicked card
    card.classList.add('zoom');

    // Remove the 'zoom' effect after a short delay
    setTimeout(() => {
      card.classList.remove('zoom');
    }, 5000); // 1000ms (1 second) delay for zoom effect
  });
});

// Select the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Add event listener to toggle dark mode
darkModeToggle.addEventListener('click', () => {
  // Toggle the dark-mode class on the body
  document.body.classList.toggle('dark-mode');
  
  // Update the button text
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️ Light Mode';
  } else {
    darkModeToggle.textContent = '🌙 Dark Mode';
  }
});
