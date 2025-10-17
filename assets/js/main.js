
// Mobile menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    if (menu.style.display === 'flex') { menu.style.display = 'none'; }
    else { menu.style.display = 'flex'; }
  });
}
// Theme toggle
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
function setTheme(v){ root.setAttribute('data-theme', v); localStorage.setItem('theme', v); }
const saved = localStorage.getItem('theme'); if(saved){ setTheme(saved); }
if (themeToggle){
  themeToggle.addEventListener('click', ()=>{
    const now = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(now);
  });
}
// Simple project filter
const chips = document.querySelectorAll('.chip');
const grid = document.getElementById('projectsGrid');
if (chips && grid){
  chips.forEach(ch=>{
    ch.addEventListener('click', ()=>{
      chips.forEach(c=>c.classList.remove('active')); ch.classList.add('active');
      const tag = ch.dataset.tag;
      grid.querySelectorAll('.card').forEach(card=>{
        const tags = (card.dataset.tags || '').split(' ');
        card.style.display = (tag==='all' || tags.includes(tag)) ? '' : 'none';
      });
    });
  });
}
