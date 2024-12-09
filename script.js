document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".imgProjects img");

    const observerOptions = {
        root: null, 
        rootMargin: "0px", 
        threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("grow");
            } else {
                entry.target.classList.remove("grow"); 
            }
        });
    }, observerOptions);

    images.forEach((img) => observer.observe(img));
});

