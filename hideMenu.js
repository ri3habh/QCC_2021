function toggleNav() {
    document.querySelector(".navbar").classList.toggle("navbar--open");
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("button-navbar").addEventListener("click", toggleNav);
});