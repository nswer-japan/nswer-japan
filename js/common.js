document.addEventListener('DOMContentLoaded',()=>{
  const h=document.getElementById('hamburger');
  const m=document.getElementById('mobileMenu');
  const t=document.getElementById('themeToggle');

  if(h&&m){
    h.addEventListener('click',()=>{
      m.classList.toggle('active');
      const open=m.classList.contains('active');
      h.textContent=open?'✕':'☰';
      h.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');
    });
  }

  const applyTheme=(theme)=>{
    const light=theme==='light';
    document.body.classList.toggle('light-mode',light);
    if(t){
      t.textContent=light?'☀️':'🌙';
      t.setAttribute('aria-label',light?'ライトモード':'ダークモード');
      t.title=light?'ライトモード':'ダークモード';
    }
  };

  const saved=localStorage.getItem('theme');
  applyTheme(saved==='light'?'light':'dark');

  if(t){
    t.addEventListener('click',()=>{
      const next=document.body.classList.contains('light-mode')?'dark':'light';
      localStorage.setItem('theme',next);
      applyTheme(next);
    });
  }
});
