document.addEventListener('DOMContentLoaded',()=>{
  const h=document.getElementById('hamburger');
  const m=document.getElementById('mobileMenu');
  const themeToggle=document.getElementById('themeToggle');
  const root=document.documentElement;

  function applyTheme(theme){
    const isLight=theme==='light';
    document.body.classList.toggle('light-mode',isLight);
    root.classList.toggle('light-mode',isLight);
    localStorage.setItem('theme',isLight?'light':'dark');
    if(themeToggle){themeToggle.textContent=isLight?'☀️':'🌙';}
  }

  if(h&&m){
    h.addEventListener('click',()=>{
      m.classList.toggle('active');
      h.textContent=m.classList.contains('active')?'✕':'☰';
    });
  }

  let savedTheme='dark';
  try{
    savedTheme=localStorage.getItem('theme')==='light'?'light':'dark';
  }catch(e){}
  applyTheme(savedTheme);

  if(themeToggle){
    themeToggle.addEventListener('click',()=>{
      applyTheme(document.body.classList.contains('light-mode')?'dark':'light');
    });
  }
});
