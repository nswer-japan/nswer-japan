
document.addEventListener('DOMContentLoaded',()=>{
  const h=document.getElementById('hamburger');
  const m=document.getElementById('mobileMenu');
  const themeToggle=document.getElementById('themeToggle');
  if(h&&m){h.addEventListener('click',()=>{m.classList.toggle('active');h.textContent=m.classList.contains('active')?'✕':'☰';});}
  const savedTheme=localStorage.getItem('theme');
  if(savedTheme==='light'){document.body.classList.add('light-mode');}
  function syncThemeIcon(){if(themeToggle){themeToggle.textContent=document.body.classList.contains('light-mode')?'☀️':'🌙';}}
  syncThemeIcon();
  if(themeToggle){themeToggle.addEventListener('click',()=>{document.body.classList.toggle('light-mode');localStorage.setItem('theme',document.body.classList.contains('light-mode')?'light':'dark');syncThemeIcon();});}
});
