/**
 * @param {Event} event
 */
async function copyForValue(event) {
  event.preventDefault();

  const target = /** @type {HTMLElement | null} */ (event.target);

  if (!target) return;

  const forId = target.getAttribute("for");
  const forElement = forId ? document.getElementById(forId) : undefined;
  if (!forElement) return;
  const text = forElement.getAttribute("value") ?? forElement.innerHTML;
  try {
    const task = navigator.clipboard.writeText(text);
    target.classList.add("copying");
    await task;
    target.classList.remove("copying");
    target.classList.add("copied");
  } catch (e) {
    console.error(e);
    target.classList.add("error");
  }
  setTimeout(() => {
    target.classList.remove("copying");
    target.classList.remove("copied");
    target.classList.remove("error");
  }, 1000);
}

document.querySelectorAll("label[role=button].copy").forEach((element) => {
  element.addEventListener("click", (event) => {
    void copyForValue(event);
  });
});
