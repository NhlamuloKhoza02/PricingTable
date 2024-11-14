// Select Plan Functionality
function selectPlan(card) {
    // Remove 'selected' class from all pricing cards
    const allCards = document.querySelectorAll('.pricing-card');
    allCards.forEach((card) => {
        card.classList.remove('selected');
    });

    // Add 'selected' class to the clicked card
    card.classList.add('selected');
}

// Show Confirmation on Plan Selection
function choosePlan(plan) {
    // Display confirmation message
    const confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'block';
    confirmation.innerHTML = `You have selected the <strong>${plan}</strong> plan. Thank you for choosing us!`;
}
