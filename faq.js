function showProductFAQ() {
    // Display product FAQ content
    document.getElementById("faqSection").innerHTML = `
        <div class="faq-item">
            <h2>What is my right size?</h2>
            <p>As BluOrng caters to the oversized fit, if you're unsure about sizing, we recommend going one size down from your regular size. For example, if you normally wear an M, you can go ahead with an S with us. Once comfortable, you can always upsize if you prefer a looser look. It's worth noting that our sizing chart is available on our website, which provides detailed measurements for each size to help you choose the perfect fit.</p>
        </div>

        <div class="faq-item">
            <h2>What are the care instructions on the t-shirts?</h2>
            <p>Machine wash works for all our tees. Air-dry. Avoid dry cleaning. Use cold water to avoid colour bleed & shrinkage. Do not iron the print directly.</p>
        </div>

        <div class="faq-item">
            <h2>How do our new drops work?</h2>
            <p>We usually announce our upcoming designs and collections on our official Instagram account - @BluOrng. We recommend following us on Instagram to stay updated with our latest releases and drops. Once the designs are announced, they are available to purchase on our website.</p>
        </div>
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

function showOrderFAQ() {
    document.getElementById("faqSection").innerHTML = `
        <div class="faq-item">
            <h2>How do I confirm my order status?</h2>
            <p>Your order will be confirmed with a 5-digit order number (e.g., #55555).</p>
        </div>

        <div class="faq-item">
            <h2>I cannot place an order online.</h2>
            <p>No problem; reach out to our WhatsApp chat and you can place an order over the phone instantly by mentioning the required product and by filling in all the right shipping details.</p>
        </div>
        <!-- Add more FAQ items for the Order section -->
    `;
    resetButtonStyles();
}

function showOrderReceivedFAQ() {
    document.getElementById("faqSection").innerHTML = `
        <div class="faq-item">
            <h2>I have received a faulty/damaged product. What do I do?</h2>
            <p>Kindly drop an email to ordersupport@bluorng.com with the order number as well as pictures of proof on the defects.</p>
        </div>

        <div class="faq-item">
            <h2>My order has an incorrect/missing item. What do I do?</h2>
            <p>Kindly drop an email to ordersupport@bluorng.com with the order number as well as pictures of proof on the defects.</p>
        </div>
        <!-- Add more FAQ items for the Order Received section -->
    `;
    resetButtonStyles();
}

function showExchangesFAQ() {
    document.getElementById("faqSection").innerHTML = `
        <div class="faq-item">
            <h2>Can I exchange an item?</h2>
            <p>We have an exchange policy of 5 days from the date of receiving the product for online orders and date of billing for store purchases.</p>
        </div>

        <div class="faq-item">
            <h2>How do I initiate an exchange?</h2>
            <p>Our customer support team will reach out to you within 24 hours and will inform you to ship your order back to our fulfilment centre.</p>
        </div>
        <!-- Add more FAQ items for the Exchanges section -->
    `;
    resetButtonStyles();
}

function showGeneralFAQs() {
    document.getElementById("faqSection").innerHTML = `
        <div class="faq-item">
            <h2>Can I get a GST receipt for my order?</h2>
            <p>Yes, simply drop in an email to ordersupport@bluorng.com and the team will facilitate a GST invoice against your order.</p>
        </div>

        <div class="faq-item">
            <h2>Can I get a custom-made design for myself?</h2>
            <p>For custom orders, kindly drop us an email to contact@bluorng.com and the team will reach out to you shortly.</p>
        </div>
        <!-- Add more FAQ items for the General FAQs section -->
    `;
    resetButtonStyles();
}

// Reset button styles function remains the same

// Event listeners to apply transparent background on button click remain the same

