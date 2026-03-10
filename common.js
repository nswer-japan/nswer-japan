// Google Analytics
(function(){
  const s1=document.createElement('script');
  s1.async=true;
  s1.src="https://www.googletagmanager.com/gtag/js?id=G-ZL16881EGB";
  document.head.appendChild(s1);

  const s2=document.createElement('script');
  s2.innerHTML=`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ZL16881EGB');
  `;
  document.head.appendChild(s2);
})();

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
