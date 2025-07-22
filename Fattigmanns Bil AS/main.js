document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("darkModeToggle");

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Bytt ikon basert på modus
        const erMørk = document.body.classList.contains("dark-mode");
        toggleBtn.textContent = erMørk ? "🌞" : "🌙";
    });
});
