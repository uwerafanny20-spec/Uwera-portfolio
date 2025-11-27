// ===========================
// MOBILE HAMBURGER MENU TOGGLE & SMOOTH SCROLL
// ===========================
const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("navBar");
const navLinks = document.querySelectorAll(".nav-bar a");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
    navBar.classList.toggle("show");
    // Animate hamburger (optional)
    hamburger.classList.toggle("active");
});

// Smooth scroll & close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const offset = window.innerWidth <= 768 ? 60 : 70; // Adjust for header height on mobile vs desktop
            const topPosition = targetSection.offsetTop - offset;

            window.scrollTo({
                top: topPosition,
                behavior: "smooth"
            });
        }

        // Close mobile menu if open
        if (navBar.classList.contains("show")) {
            navBar.classList.remove("show");
            hamburger.classList.remove("active");
        }
    });
});


document.addEventListener("click", (e) => {
    if (!navBar.contains(e.target) && !hamburger.contains(e.target)) {
        if (navBar.classList.contains("show")) {
            navBar.classList.remove("show");
            hamburger.classList.remove("active");
        }
    }
});


const adjustNavHeight = () => {
    if (window.innerWidth <= 768) {
        navBar.style.maxHeight = `${window.innerHeight - 80}px`; // leaves some space from top
    } else {
        navBar.style.maxHeight = "";
    }
};

window.addEventListener("resize", adjustNavHeight);
window.addEventListener("load", adjustNavHeight);
