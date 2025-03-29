


// Smooth Progress Bar Animation
const progressBars = document.querySelectorAll(".progress");
window.addEventListener("scroll", () => {
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            bar.style.width = bar.dataset.progress;
        }
    });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        errorMessage.style.display = "block";
    } else {
        alert("Message sent successfully!");
        this.reset();
        errorMessage.style.display = "none";
    }
});
