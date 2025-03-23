//make navbar transperent
window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    var hamburger = document.getElementById("hamburger");
    navLinks.classList.toggle("active");
    hamburger.style.transform = navLinks.classList.contains("active") ? "rotate(180deg)" : "rotate(0)";
    hamburger.innerHTML = navLinks.classList.contains("active") ? "✖" : "☰";
}