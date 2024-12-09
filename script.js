document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".imgProjects img");

    const observerOptions = {
        root: null, // Observer het viewport
        rootMargin: "0px", // Geen extra marges
        threshold: 0.5, // Het element moet 50% zichtbaar zijn voordat de animatie start
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("grow");
            } else {
                entry.target.classList.remove("grow"); // Optioneel, animatie herhalen bij wegscrollen
            }
        });
    }, observerOptions);

    images.forEach((img) => observer.observe(img));
});
