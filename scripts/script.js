document.addEventListener("DOMContentLoaded", function () {
  console.log("Script recognized.");

  const openingBanner = document.querySelector(".opening-banner");
  const heroSection = document.querySelector(".hero-section");
  const footer = document.querySelector("footer");
  const mobileMenuBtn = document.querySelector(".mobile-menu-button");
  const header = document.querySelector("header");

  function navigation() {

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
  };

  function hideOpeningBanner() {
    const vw = window.innerWidth;
    openingBanner.classList.add("hidden");
    heroSection.classList.add("active");
    footer.classList.remove("hidden");
    mobileMenuBtn.classList.remove("hidden");
    navigation();
    vw <= 768 ? header.classList.add("hidden") :
    header.classList.remove("hidden");
  }

  openingBanner.addEventListener("click", hideOpeningBanner);

  header.addEventListener("resize", () => {
    const vw = window.innerWidth;

    vw >= 768 ? header.classList.remove("hidden") : header ; 
  })

})




  
