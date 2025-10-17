
// Theme: auto + toggle persist
const root = document.documentElement;
const stored = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (stored) { root.setAttribute('data-theme', stored); }
else if (prefersDark) { root.setAttribute('data-theme', 'dark'); }

const themeToggle = document.getElementById('themeToggle');
function setTheme(v){ root.setAttribute('data-theme', v); localStorage.setItem('theme', v); }
if (themeToggle){
  themeToggle.addEventListener('click', ()=>{
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
}

// Mobile menu (slide-toggle)
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
if (hamburger && menu){
  hamburger.addEventListener('click', ()=>{
    const isOpen = menu.style.display === 'flex';
    menu.style.display = isOpen ? 'none' : 'flex';
    menu.style.flexDirection = 'column';
    menu.style.gap = '14px';
    menu.style.padding = '12px 0';
  });
}

// Filters
const chips = document.querySelectorAll('.chip');
const grid = document.getElementById('projectsGrid') || document.querySelector('.projects-grid');
if (chips && grid){
  chips.forEach(ch=>{
    ch.addEventListener('click', ()=>{
      chips.forEach(c=>c.classList.remove('active')); ch.classList.add('active');
      const tag = ch.dataset.tag;
      grid.querySelectorAll('.card').forEach(card=>{
        const tags = (card.dataset.tags || '').split(' ');
        card.style.display = (tag==='all' || tags.includes(tag)) ? '' : 'none';
      });
      window.scrollTo({top: grid.getBoundingClientRect().top + window.scrollY - 80, behavior:'smooth'});
    });
  });
}
