document.addEventListener("DOMContentLoaded", () => {
  // 각 패널마다 슬라이더 셋업
  document.querySelectorAll(".hub-panel").forEach((panel) => {
    const track = panel.querySelector(".hub-carousel-track");
    const slides = panel.querySelectorAll(".hub-slide");
    const prevBtn = panel.querySelector(".hub-prev");
    const nextBtn = panel.querySelector(".hub-next");
    const dotsWrap = panel.querySelector(".hub-dots");

    if (!track || slides.length === 0) return;

    let index = 0;

    // 점(dot) 생성
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "hub-dot" + (i === 0 ? " is-active" : "");
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    });

    const dots = dotsWrap.querySelectorAll(".hub-dot");

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === slides.length - 1;
    }

    function goTo(i) {
      index = Math.max(0, Math.min(slides.length - 1, i));
      update();
    }

    prevBtn?.addEventListener("click", () => goTo(index - 1));
    nextBtn?.addEventListener("click", () => goTo(index + 1));

    update();
  });
});
