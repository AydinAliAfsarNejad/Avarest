// Mobile Menu JS
const openMobileMenu = document.querySelector("#open-mobile-menu");
const closeMobileMenu = document.querySelector("#close-mobile-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileBackdrop = document.querySelector("#mobile-backdrop");
// Services Dropdown select
const servicesToggle = document.querySelector("#services-toggle");
const servicesDropdown = document.querySelector("#services-dropdown");
const servicesChevron = document.querySelector("#services-chevron");



// mobile menu
function openMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
  if (mobileBackdrop) mobileBackdrop.classList.remove("hidden");
}

function closeMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.remove("translate-x-0");
  if (mobileBackdrop) mobileBackdrop.classList.add("hidden");
}

openMobileMenu && openMobileMenu.addEventListener("click", openMenu);
closeMobileMenu && closeMobileMenu.addEventListener("click", closeMenu);
mobileBackdrop && mobileBackdrop.addEventListener("click", closeMenu);

// Services Dropdown Toggle

let isServicesOpen = false;

servicesToggle.addEventListener("click", () => {
  isServicesOpen = !isServicesOpen;
  
  if (isServicesOpen) {
    // Open dropdown
    servicesDropdown.style.maxHeight = servicesDropdown.scrollHeight + "px";
    servicesChevron.style.transform = "rotate(-90deg)";
  } else {
    // Close dropdown
    servicesDropdown.style.maxHeight = "0px";
    servicesChevron.style.transform = "rotate(0deg)";
  }
});
