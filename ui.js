// Remove conflicting code - task management is now handled in index.html
// Keep only inventory-related functions if needed

// This file can be simplified or removed since functionality is moved to index.html
console.log('ui.js loaded but main functionality moved to index.html');

// --- Profile portrait upload ---
const profilePortrait = document.getElementById("profilePortrait");
const portraitUpload = document.getElementById("portraitUpload");

profilePortrait.addEventListener("click", () => {
    portraitUpload.click();
});
portraitUpload.addEventListener("change", function() {
    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        window.profilePortrait = e.target.result;
        updateUI();
        saveData();
    };
    reader.readAsDataURL(file);
});

// --- Display name editing ---
const displayNameSpan = document.getElementById("displayName");
const editNameBtn = document.getElementById("editNameBtn");
editNameBtn.addEventListener("click", () => {
    const newName = prompt("Enter your display name:", window.profileName || "User");
    if (newName && newName.trim()) {
        window.profileName = newName.trim();
        updateUI();
        saveData();
    }
});

// Add health to player if not present
if (typeof player.health === "undefined") {
    player.health = 100;
    player.maxHealth = 100;
}

// Run when page loads
loadData();
