// Cart Functionality
let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-counter').innerText = cartCount;
}

// Product Filtering
function filterProducts() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.getAttribute('data-name');
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
