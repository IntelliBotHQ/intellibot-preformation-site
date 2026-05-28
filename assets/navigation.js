(() => {
  const button = document.querySelector("[data-nav-toggle]");
  const navigation = document.querySelector("[data-mobile-nav]");
  if (!button || !navigation) return;

  const closeMenu = () => {
    button.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
    document.body.classList.remove("nav-open");
  };

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const desktopQuery = window.matchMedia("(min-width: 901px)");
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener("change", (event) => {
      if (event.matches) closeMenu();
    });
  }
})();
