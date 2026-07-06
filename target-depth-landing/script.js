document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("[data-case-lab]").forEach((lab) => {
  const cards = Array.from(lab.querySelectorAll("[data-case-card]"));
  const prev = lab.querySelector("[data-case-prev]");
  const next = lab.querySelector("[data-case-next]");
  let active = 0;

  const render = () => {
    cards.forEach((card, index) => {
      card.classList.toggle("is-active", index === active);
      card.classList.toggle("is-prev", index === (active - 1 + cards.length) % cards.length);
      card.classList.toggle("is-next", index === (active + 1) % cards.length);
    });
  };

  prev?.addEventListener("click", () => {
    active = (active - 1 + cards.length) % cards.length;
    render();
  });

  next?.addEventListener("click", () => {
    active = (active + 1) % cards.length;
    render();
  });

  render();
});
