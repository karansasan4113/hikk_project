function toggleSidebar() {

    var sidebar = document.getElementById('sidebar');
    var overlay = document.querySelector('.overlay');


    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeSidebar() {

    var sidebar = document.getElementById('sidebar');
    var overlay = document.querySelector('.overlay');

    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}



function changeStylesheet(href) {
    var linkElement = document.getElementById('main-stylesheet');
    linkElement.setAttribute('href', href);
}




// Example: Change to an alternative stylesheet after 300 pixels of scrolling
document.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        changeStylesheet('nav-black.css');
    } else {
        changeStylesheet('nav.css');
    }

});



function togglerightSidebar() {

    var sidebar = document.getElementById('right-sidebar');
    var overlay = document.querySelector('.right-overlay');


    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closerightSidebar() {

    var sidebar = document.getElementById('right-sidebar');
    var overlay = document.querySelector('.right-overlay');

    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}






// Function to handle the checkout process
function checkout() {
    // Your checkout logic goes here
    alert("Redirecting to checkout page...");
}

// Function to decrease quantity
function decreaseQuantity(priceId) {
    let quantityElement = document.getElementById('quantity');
    let priceElement = document.getElementById(priceId);
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        updatePrice(priceElement, quantity);
    }
}

// Function to increase quantity
function increaseQuantity(priceId) {
    let quantityElement = document.getElementById('quantity');
    let priceElement = document.getElementById(priceId);
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updatePrice(priceElement, quantity);
}

// Function to update price based on quantity
function updatePrice(priceElement, quantity) {
    let unitPrice = parseInt(priceElement.dataset.unitPrice); // Extract unit price from data attribute
    let totalPrice = unitPrice * quantity;
    priceElement.textContent = 'RS. ' + totalPrice;
}




window.onload = function () {
    const products = document.querySelectorAll('.product1');
    const checkoutContainer = document.getElementById('checkout-container');

    // Function to check the number of products and apply sticky behavior
    function checkSticky() {
        if (products.length > 3) {
            checkoutContainer.classList.add('sticky');
        } else {
            checkoutContainer.classList.remove('sticky');
        }
    }

    // Call the function initially
    checkSticky();

};
