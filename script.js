function toggleFaq(el) {
  const item = el.parentElement;
  const answer = item.querySelector(".faq-answer");
  const isOpen = item.classList.contains("open");

  // close all
  document.querySelectorAll(".faq-item").forEach((i) => {
    i.classList.remove("open");
    i.querySelector(".faq-answer").classList.remove("open");
  });

  if (!isOpen) {
    item.classList.add("open");
    answer.classList.add("open");
  }
}

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);

document
  .querySelectorAll(".prob-card, .dif-card, .doc-item, .obj-item")
  .forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = `opacity 0.52s ease ${(i % 4) * 0.07}s, transform 0.52s ease ${(i % 4) * 0.07}s`;
    obs.observe(el);
  });
