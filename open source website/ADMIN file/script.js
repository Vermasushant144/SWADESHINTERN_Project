// Get all cards and modal elements
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const formId = this.getAttribute('data-form');
        openModal(formId);
    });
});

// Modal handling
const modal = document.getElementById('modal');
const closeModalButton = document.querySelector('.close');

// Function to open the modal and show the form related to the clicked card
function openModal(formId) {
    // Hide all forms
    document.querySelectorAll('.form').forEach(form => {
        form.style.display = 'none';
    });

    // Show the specific form based on card clicked
    const selectedForm = document.getElementById(formId);
    selectedForm.style.display = 'block';

    // Display the modal
    modal.style.display = 'flex';
}

// Function to close the modal
closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
