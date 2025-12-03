document.addEventListener("DOMContentLoaded", function () {
  console.log("Script recognized.");

  openMobileMenu();
});

function openMobileMenu() {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const heroSection = document.querySelector(".hero-section");
  const projectsSection = document.querySelector(".projects-section");

  document.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target === mobileMenuButton) {
      console.log("Not the right button.");
    } else {
      heroSection.classList.toggle("active");
      projectsSection.classList.toggle("active");
    }
  });
}
