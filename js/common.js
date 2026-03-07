document.addEventListener('DOMContentLoaded',()=>{
  const h=document.getElementById('hamburger');
  const m=document.getElementById('mobileMenu');
  const t=document.getElementById('themeToggle');
  if(h&&m){h.addEventListener('click',()=>{m.classList.toggle('active');h.textContent=m.classList.contains('active')?'✕':'☰';});}
  const saved=localStorage.getItem('theme');
  if(saved==='light') document.body.classList.add('light-mode');
  if(t){t.addEventListener('click',()=>{document.body.classList.toggle('light-mode');localStorage.setItem('theme',document.body.classList.contains('light-mode')?'light':'dark');});}
});
