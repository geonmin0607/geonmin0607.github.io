document.addEventListener("DOMContentLoaded", () => {
  // ===== 탭 전환 =====
  const tabs = document.querySelectorAll(".hub-tab");
  const panels = document.querySelectorAll(".hub-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.target;

      tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      panels.forEach((p) =>
        p.classList.toggle("is-active", p.dataset.panel === target)
      );
    });
  });

  // ===== 각 패널 안 캐러셀 셋업 =====
  document.querySelectorAll(".hub-panel").forEach((panel) => {
    const carousel = panel.querySelector(".hub-carousel");
    if (!carousel) return;

    const track = carousel.querySelector(".hub-carousel-track");
    const slides = Array.from(carousel.querySelectorAll(".hub-slide"));
    const prevBtn = carousel.querySelector(".hub-prev");
    const nextBtn = carousel.querySelector(".hub-next");
    const dotsWrap = panel.querySelector(".hub-dots");

    if (!track || slides.length === 0) return;

    let index = 0;

    // 점(dot) 만들기
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "hub-dot" + (i === 0 ? " is-active" : "");
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    });

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      const dots = dotsWrap.querySelectorAll(".hub-dot");
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

    window.addEventListener("resize", update);
    update();
  });
});
