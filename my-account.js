document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("forgotPasswordModal");
    const openBtn = document.getElementById("forgot-password");
    const closeBtn = document.getElementsByClassName("close")[0];
    const submitBtn = document.getElementById("submitBtn");

    openBtn.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    submitBtn.addEventListener("click", function() {
        // Perform actions when the form is submitted, e.g., send a password reset email
        modal.style.display = "none";
    });
});
   

function closePopup() {
    const modal = document.getElementById("forgotPasswordModal");
    modal.style.display = "none";
}