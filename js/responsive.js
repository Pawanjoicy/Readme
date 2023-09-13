const menuIcon = document.getElementById("menu-icon");
const navBar = document.querySelector(".navBar");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", () => {
    // Toggle the 'active' class on both the navigation menu and the dropdown menu
    navBar.classList.toggle("active");
    dropdownMenu.classList.toggle("active");
});