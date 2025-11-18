const nav = document.getElementById("site-nav");
const btn = document.getElementById("hamburger");

btn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", open);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", false);
  }
});