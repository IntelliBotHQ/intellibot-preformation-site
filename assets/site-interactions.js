(function () {
  const triggers = Array.from(document.querySelectorAll("[data-lightbox-gallery] .gallery-trigger"));
  if (!triggers.length) return;

  let activeIndex = 0;

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Interface concept image preview");
  lightbox.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close image preview">×</button>
    <button class="lightbox-nav lightbox-prev" type="button" aria-label="Previous image">‹</button>
    <div class="lightbox-inner">
      <img alt="">
      <div class="lightbox-caption"><strong></strong><span></span></div>
    </div>
    <button class="lightbox-nav lightbox-next" type="button" aria-label="Next image">›</button>
  `;
  document.body.appendChild(lightbox);

  const img = lightbox.querySelector("img");
  const title = lightbox.querySelector(".lightbox-caption strong");
  const caption = lightbox.querySelector(".lightbox-caption span");
  const close = lightbox.querySelector(".lightbox-close");
  const prev = lightbox.querySelector(".lightbox-prev");
  const next = lightbox.querySelector(".lightbox-next");

  function show(index) {
    activeIndex = (index + triggers.length) % triggers.length;
    const trigger = triggers[activeIndex];
    img.src = trigger.dataset.full;
    img.alt = trigger.querySelector("img")?.alt || "Interface concept image preview";
    title.textContent = trigger.dataset.title || "Interface concept";
    caption.textContent = trigger.dataset.caption || "";
  }

  function open(index) {
    show(index);
    lightbox.classList.add("open");
    document.body.classList.add("nav-open");
    close.focus();
  }

  function closeBox() {
    lightbox.classList.remove("open");
    document.body.classList.remove("nav-open");
    triggers[activeIndex]?.focus();
  }

  triggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => open(index));
  });

  close.addEventListener("click", closeBox);
  prev.addEventListener("click", () => show(activeIndex - 1));
  next.addEventListener("click", () => show(activeIndex + 1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeBox();
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("open")) return;
    if (event.key === "Escape") closeBox();
    if (event.key === "ArrowLeft") show(activeIndex - 1);
    if (event.key === "ArrowRight") show(activeIndex + 1);
  });
})();
