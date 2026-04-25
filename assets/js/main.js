/* ===========================================
   株式会社本質 共通スクリプト
   =========================================== */

document.addEventListener("DOMContentLoaded", function () {
  // -- Fade-in on scroll --
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".fade").forEach((el) => observer.observe(el));

  // -- Mobile menu toggle --
  const hamburger = document.querySelector(".hamburger");
  const navUl = document.querySelector("nav ul");
  if (hamburger && navUl) {
    hamburger.addEventListener("click", () => {
      const open = navUl.classList.toggle("mobile-open");
      Object.assign(navUl.style, open ? {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "76px",
        left: "0",
        right: "0",
        background: "#fff",
        padding: "20px",
        borderBottom: "1px solid var(--gray-200)",
        gap: "8px",
      } : { display: "" });
    });
  }

  // -- FAQ accordion --
  document.querySelectorAll(".faq-item").forEach((item) => {
    const q = item.querySelector(".faq-q");
    if (q) q.addEventListener("click", () => item.classList.toggle("open"));
  });
});
