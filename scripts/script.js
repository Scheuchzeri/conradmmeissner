document.addEventListener("DOMContentLoaded", function () {
  console.log("Script recognized.");

  navigation();
});

function navigation() {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const heroSection = document.querySelector(".hero-section");
  const projectsSection = document.querySelector(".projects-section");
  const header = document.querySelector("header");
  const menuLinks = document.querySelector(".menu-link");
  const sections = document.querySelectorAll("section");

  const switchTabs = (dataVal) => {
    console.log(dataVal);
    sections.forEach((section) => {
      console.log(section.id);
      section.id === dataVal
        ? section.classList.add("active")
        : section.classList.remove("active");
    });
  };

  document.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target === header) {
      console.log("This event was triggered.");
      header.classList.remove("active");
    } else if (e.target === mobileMenuButton) {
      mobileMenuButton.classList.contains("active")
        ? mobileMenuButton.classList.remove("active")
        : mobileMenuButton.classList.add("active");
      header.classList.toggle("active");
    } else if (e.target.classList.contains("menu-link")) {
      const dataValue = e.target.dataset.tab;
      mobileMenuButton.classList.remove("active");
      header.classList.remove("active");
      switchTabs(dataValue);
    }
  });
}
