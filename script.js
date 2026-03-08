function updateReveal() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  let progress = scrollTop / docHeight;
  progress = Math.max(0, Math.min(progress, 1));

  document.documentElement.style.setProperty("--reveal", progress * 100 + "%");
}

window.addEventListener("scroll", updateReveal);
window.addEventListener("load", updateReveal);