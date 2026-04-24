// Function to filter notes based on category string
function filterNotes(category) {
    // Select all elements with the class 'note-card'
    const notes = document.querySelectorAll('.note-card');
    
    // Loop through each note card
    notes.forEach(note => {
        // Check if category is 'all' OR if the note has the category class
        if (category === 'all' || note.classList.contains(category)) {
            // Remove 'hidden' class to show the card
            note.classList.remove('hidden');
        } else {
            // Add 'hidden' class to hide the card
            note.classList.add('hidden');
        }
    });
}