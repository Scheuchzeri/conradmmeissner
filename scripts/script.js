document.addEventListener("DOMContentLoaded", function () {
  console.log("Script recognized.");
  openingBanner();
  navigation();
});

function openingBanner() {
  const openingBanner = document.querySelector(".opening-banner");
  const heroSection = document.querySelector(".hero-section");
  const mobileMenuButton = document.querySelector(".mobile-menu-button");

  openingBanner.addEventListener("click", () => {
    openingBanner.classList.remove("active");
    mobileMenuButton.classList.add("started");
    heroSection.classList.add("active");

  })
}

function navigation() {
  const header = document.querySelector("header");
  const mobileMenuBtn = document.querySelector(".mobile-menu-button");
  const sections = document.querySelectorAll("section");
  const switchTabs = (dataVal) => {
    sections.forEach(sec => sec.id === dataVal ? sec.classList.add("active") : sec.classList.remove("active"))
  };

  let activeTabId = null;

  document.addEventListener("click", (e) => {
    const target = e.target.closest(".menu-link, .mobile-menu-button, header");
    if (!target) return;

    const currentTab = document.querySelector("section.active");
    activeTabId = currentTab.id;

    if (target.matches(".menu-link")) {
      mobileMenuBtn.classList.remove("active");
      header.classList.remove("active");
      switchTabs(target.dataset.tab);
      return;
    } else if (target.matches(".mobile-menu-button")) {
      if (mobileMenuBtn.classList.contains("active")) {
        mobileMenuBtn.classList.remove("active");
        header.classList.remove("active");
        switchTabs(activeTabId);
      } else {
        mobileMenuBtn.classList.add("active");
        header.classList.add("active");
      }
      return;
    } else if (target.matches("header")) {
      mobileMenuBtn.classList.remove("active");
      header.classList.remove("active");
      switchTabs(activeTabId);
    } return;
  })
}
  
