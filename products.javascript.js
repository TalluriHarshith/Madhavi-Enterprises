// Use the same productData format as in cart.html
const productData = [
  {
    name: "Pen Alpha",
    image: "hauser pen.jpg",
    brand: "hauser",
    price: 20
  },
  {
    name: "Marker Bold",
    image: "ai pens.jpg",
    brand: "classic",
    price: 35
  },
  {
    name: "Notebook Pro",
    image: "notebook1.png",
    brand: "Madhavi",
    price: 85
  },
  {
    name: "School Bag",
    image: "bag1.png",
    brand: "Madhavi",
    price: 799
  }
];

function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName) {
  let cart = getCart();
  const idx = cart.findIndex(item => item.name === productName);
  if (idx !== -1) {
    cart[idx].qty += 1;
  } else {
    cart.push({ name: productName, qty: 1 });
  }
  setCart(cart);
  updateCartBadge();
}

// Render your products as before, for each, set button onclick:
function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';
  productData.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h2>${p.name}</h2>
      <div class="brand">${p.brand}</div>
      <div class="price">
        <span class="selling">₹${p.price}</span>
      </div>
      <button onclick="addToCart('${p.name}')">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function updateCartBadge() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cart-badge');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'inline-block' : 'none';
}

// Make addToCart globally available
window.addToCart = addToCart;

document.addEventListener('DOMContentLoaded', function() {
  renderProducts();
  updateCartBadge();
});