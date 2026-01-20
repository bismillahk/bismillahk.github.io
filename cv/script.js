// Set current date and year in footer
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // Set current date
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    document.getElementById('current-date').textContent = formattedDate;
    
    // Add hover effect to image placeholders
    const placeholders = document.querySelectorAll('.profile-image-placeholder, .project-image-placeholder, .small-image-placeholder');
    
    placeholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            alert('Click to upload or replace this image');
        });
    });
    
    // Initialize tooltips for Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});