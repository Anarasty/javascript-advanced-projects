const toggle = document.querySelector(".toggle");
const items = document.querySelectorAll(".item");
toggle.addEventListener("click", () => {
  Array.from(items).forEach((item) => {
    item.classList.toggle("active");
  });
});