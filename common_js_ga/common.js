// Google Analytics (GA4)
(function(){
  const script1=document.createElement('script');
  script1.async=true;
  script1.src="https://www.googletagmanager.com/gtag/js?id=G-NHQQZE93RS";
  document.head.appendChild(script1);

  const script2=document.createElement('script');
  script2.innerHTML=`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-NHQQZE93RS');
  `;
  document.head.appendChild(script2);
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
