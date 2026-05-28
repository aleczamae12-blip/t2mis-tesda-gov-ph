const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    tabButtons.forEach((item) => {
      const isCurrent = item === button;
      item.classList.toggle("is-active", isCurrent);
      item.setAttribute("aria-selected", String(isCurrent));
    });

    tabPanels.forEach((panel) => {
      const isCurrent = panel.id === `panel-${target}`;
      panel.classList.toggle("is-active", isCurrent);
      panel.hidden = !isCurrent;
    });
  });
});
