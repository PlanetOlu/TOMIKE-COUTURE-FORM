// Wait until the page is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Find our form
    const form = document.getElementById('preferenceForm');
    
    // When someone submits the form
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting normally
        event.preventDefault();
        
        // Collect all the answers
        const styleInterest = document.getElementById('styleInterest').value;
        const checkboxes = document.querySelectorAll('input[name="values"]:checked');
        const selectedValues = Array.from(checkboxes).map(cb => cb.value);
        const userEmail = document.getElementById('userEmail').value;
        
        // Show what we collected (for testing)
        console.log('Collected Data:', {
            styleInterest: styleInterest,
            values: selectedValues,
            email: userEmail
        });
        
        // Show success message
        alert('Thank you! Your style preferences have been saved. This helps us create better collections for you.');
        
        // Reset the form
        form.reset();
    });
});