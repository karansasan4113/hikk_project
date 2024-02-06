
    document.addEventListener('DOMContentLoaded', function () {
        // Get all product elements
        var products = document.querySelectorAll('.product');

        // Add click event listener to each section option
        var options = document.querySelectorAll('.section-option');
        options.forEach(function (option) {
            option.addEventListener('click', function () {
                // Remove 'active' class from all options
                options.forEach(function (o) {
                    o.classList.remove('active');
                });

                // Add 'active' class to the clicked option
                option.classList.add('active');

                // Show products based on the clicked option
                var category = option.dataset.category;
                products.forEach(function (product) {
                    if (category === 'all' || product.classList.contains(category)) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });

        // Trigger click event on "All Products" option when the page loads
        var allProductsOption = document.querySelector('.section-option[data-category="all"]');
        allProductsOption.click();
    });
