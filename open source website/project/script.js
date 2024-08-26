// Function to open the modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    let modals = document.getElementsByClassName('modal');
    Array.from(modals).forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
