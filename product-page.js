



function showProductFAQ() {
    // Display product FAQ content
    document.getElementById("faqSection").innerHTML = `
    <h2>Product Title</h2>
    <p>Description of the product goes here.</p>
    <h3>Shipping Details</h3>
    <ul>
        <li>Shipping method: Standard</li>
        <li>Delivery time: 3-5 business days</li>
        <li>Shipping cost: $5.99</li>
    </ul>
    `;

    resetButtonStyles();
}

function showDeliveryFAQ() {
    // Display delivery FAQ content
    document.getElementById("faqSection").innerHTML = `
        <div class="faq-item">
            <h2>Where do we deliver?</h2>
            <p>We ship and deliver all our orders pan-India and internationally in all 192 countries.</p>
        </div>

        <div class="faq-item">
            <h2>Where is my order shipped from?</h2>
            <p>All online orders are shipped from our fulfilment centre located in New Delhi.</p>
        </div>

        <div class="faq-item">
            <h2>What are the delivery charges?</h2>
            <p>All online orders from BluOrng.com are eligible for free shipping pan-India. International orders have an additional charge which is mentioned at the time of checkout basis the delivery address.</p>
        </div>
    `;
    resetButtonStyles();
}

function showCustomerServiceFAQ() {
    document.getElementById("faqSection").innerHTML = `
        <div class="faq-item">
            <h2>How can I track my order?</h2>
            <p>You will receive an email from us with your tracking information and estimated delivery date which is provided by our shipping aggregation service.</p>
        </div>

        <div class="faq-item">
            <h2>Why is my order not shipped after it is confirmed?</h2>
            <p>Due to logistic issues out of our control, there may occasionally be a delay in shipping your order. Do not worry as we are only looking to fulfil all orders that are confirmed.</p>
        </div>

        <div class="faq-item">
            <h2>Are there any extra charges when I order internationally?</h2>
            <p>When ordering goods from our site for delivery overseas you may be subject to additional import duties and taxes, which are levied once the order reaches the specified destination.</p>
        </div>
    `;
}
// Define similar functions for other FAQ categories (Customer Service, Order)

function resetButtonStyles() {
    // Reset button styles for all buttons
    const buttons = document.querySelectorAll(".button-container button");
    buttons.forEach(button => {
        button.classList.remove("transparent");
    });
}

// Event listeners to apply transparent background on button click
const buttons = document.querySelectorAll(".button-container button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        resetButtonStyles();
        button.classList.add("transparent");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Call the showProductFAQ function when the page finishes loading
    const productButton = document.getElementById("productButton");
    productButton.click();


});



function selectSize(size) {
    // Remove 'selected' class from all buttons
    let buttons = document.querySelectorAll('.size-button');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    event.target.classList.add('selected');
    
    // Example functionality: You can modify this function based on your requirements
    console.log('Selected size:', size);
    
    // You can add more logic here, such as updating a selected size variable, displaying a message, etc.
}