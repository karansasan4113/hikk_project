function toggleBillingDetails(radio) {
    var billingDetails = document.getElementById('billing-details');
    if (radio.value === 'different') {
      billingDetails.style.display = 'block';
    } else {
      billingDetails.style.display = 'none';
    }
  
    var labels = document.querySelectorAll('#billing-radio');
    labels.forEach(function(label) {
        if (label.contains(radio)) {
            label.classList.add('border-highlight');
        } else {
            label.classList.remove('border-highlight');
        }
    });
}
