// Sample order data (can be fetched from server)
const currentOrders = [
    {
        orderImage: "assets/hoddie.jpg.webp",
        orderNumber: 123456,
        date: "2024-02-07",
        status: "Processing",
        // Add more order details as needed
    }
];

const pastOrders = [
    {
        orderImage: "assets/sweatshirt-jpg.webp",
        orderNumber: 789012,
        date: "2023-12-15",
        status: "Delivered",
        // Add more order details as needed
    }, {
        orderImage: "assets/sweatshirt-jpg.webp",
        orderNumber: 789012,
        date: "2023-12-15",
        status: "Delivered",
        // Add more order details as needed
    }, {
        orderImage: "assets/sweatshirt-jpg.webp",
        orderNumber: 789012,
        date: "2023-12-15",
        status: "Delivered",
        // Add more order details as needed
    }, {
        orderImage: "assets/sweatshirt-jpg.webp",
        orderNumber: 789012,
        date: "2023-12-15",
        status: "Delivered",
        // Add more order details as needed
    }, {
        orderImage: "assets/sweatshirt-jpg.webp",
        orderNumber: 789012,
        date: "2023-12-15",
        status: "Delivered",
        // Add more order details as needed
    }, {
        orderImage: "assets/sweatshirt-jpg.webp",
        orderNumber: 789012,
        date: "2023-12-15",
        status: "Delivered",
        // Add more order details as needed
    }, {
        orderImage: "assets/sweatshirt-jpg.webp",
        orderNumber: 789012,
        date: "2023-12-15",
        status: "Delivered",
        // Add more order details as needed
    }, {
        orderImage: "assets/sweatshirt-jpg.webp",
        orderNumber: 789012,
        date: "2023-12-15",
        status: "Delivered",
        // Add more order details as needed
    }
];
// Function to show current orders
function showCurrentOrders() {
    const orderStatus = document.getElementById("orderStatus");
    orderStatus.innerHTML = ""; // Clear previous content

    const ul = document.createElement("ul");
    if (currentOrders.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Please buy the product.";
        ul.appendChild(li);



    } else {
        currentOrders.forEach(order => {
            const li = document.createElement("li");
            li.classList.add("order-card"); // Add order-card class
            const image = document.createElement("img");
            image.src = order.orderImage;
            li.appendChild(image);
            li.innerHTML += `<span>Order Number:</span> ${order.orderNumber} <br>
                        <span>Date:</span> ${order.date} <br>
                        <span>Status:</span> ${order.status} <br>
                        `;
            ul.appendChild(li);
        });
    }

    orderStatus.appendChild(ul);
}

// Function to show past orders
function showPastOrders() {
    const orderStatus = document.getElementById("orderStatus");
    orderStatus.innerHTML = ""; // Clear previous content

    const ul = document.createElement("ul");
    if (pastOrders.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No product is bought.";
        ul.appendChild(li);



    } else {
        pastOrders.forEach(order => {
            const li = document.createElement("li");
            li.classList.add("order-card"); // Add order-card class
            const image = document.createElement("img");
            image.src = order.orderImage;
            li.appendChild(image);
            li.innerHTML += `<span>Order Number:</span> ${order.orderNumber} <br>
                        <span>Date:</span> ${order.date} <br>
                        <span>Status:</span> ${order.status} <br>
                       `;
            ul.appendChild(li);
        });
    }
    orderStatus.appendChild(ul);
}

// Function to track order
// function trackOrder(orderNumber) {
//     // Redirect to order tracking page with order number
//     window.location.href = `track-order.html?orderNumber=${orderNumber}`;
// }

// Show current orders by default
showCurrentOrders();

function trackOrder() {
    const orderIDInput = document.getElementById("orderID");
    const orderID = orderIDInput.value;

    // Assuming there's a function to fetch order status based on orderID
    const orderStatus = getOrderStatus(orderID);

    // Display the order status
    const orderStatusContainer = document.getElementById("orderStatus");
    orderStatusContainer.textContent = orderStatus;
}

// Example function to fetch order status based on orderID
function getOrderStatus(orderID) {
    // Make an API call or fetch from database to get the order status
    // For now, let's assume a simple implementation
    if (orderID === "123456") {
        return "Your order is on its way!";
    } else {
        return "Invalid order ID. Please try again.";
    }
}
