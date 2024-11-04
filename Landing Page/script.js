gsap.from("#img1", {
  opacity:0,
  delay:0.5,
  duration:1,
  y:60
})
gsap.from("#img2", {
  opacity:0,
  delay:0.4,
  duration:1,
  x:60
})
gsap.from("#img3", {
  opacity:0,
  delay:0.4,
  duration:1,
  y:-60
})
gsap.from("#img4", {
  opacity:0,
  delay:0.4,
  duration:1,
  x:60
})
gsap.from("#main h1", {
  opacity:0,
  delay:0.4,
  duration:1,
})
gsap.from("#nav #part2 a", {
  opacity:0,
  delay:0.9,
  duration:1,
  y:-60
})

gsap.from("#main h1 span", {
  opacity:0,
  delay:1.1,
  duration:2,
  x:-60,
})

// Initialize cart array to store items
let cart = [];

// Function to add item to cart
function addToCart(item) {
  cart.push(item);
  updateCartCount();
  saveCartToLocalStorage();
}

// Function to update cart count display
function updateCartCount() {
  const cartCount = document.querySelector('.cart-count');
  cartCount.textContent = cart.length;
}

// Function to save cart to local storage
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load cart from local storage
function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function() {
    const productContainer = this.closest('.text-col');
    const item = {
      name: productContainer.querySelector('h2').textContent,
      price: productContainer.querySelector('h3').textContent.split('Rs.')[1].trim().split(' ')[0],
      image: productContainer.closest('.row').querySelector('img').src
    };
    addToCart(item);
  });
});

// Load cart on page load
document.addEventListener('DOMContentLoaded', loadCartFromLocalStorage);

// Add click event to cart icon to redirect to cart page
document.querySelector('.cart-icon').addEventListener('click', function() {
  window.location.href = 'cart.html';
});