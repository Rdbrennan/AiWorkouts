function showWeek(weekNum) {
    // Hide all weeks
    document.querySelectorAll('.weekly-plan').forEach(plan => {
        plan.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.week-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected week
    document.getElementById('week' + weekNum).classList.add('active');
    
    // Activate clicked button
    event.target.classList.add('active');
}

// Add click functionality to checklist items
document.querySelectorAll('.checklist-section li').forEach(item => {
    item.addEventListener('click', function() {
        if (this.style.opacity === '0.5') {
            this.style.opacity = '1';
            this.style.textDecoration = 'none';
        } else {
            this.style.opacity = '0.5';
            this.style.textDecoration = 'line-through';
        }
    });
});