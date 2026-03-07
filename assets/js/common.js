
window.NSWER = window.NSWER || {};
(function(){
  const menuBtn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if(menuBtn && menu){
    menuBtn.addEventListener('click', ()=>{
      menu.classList.toggle('active');
      menuBtn.textContent = menu.classList.contains('active') ? '✕' : '☰';
    });
  }
  document.querySelectorAll('[data-total-wins]').forEach(el=>{
    const data = (window.NSWER && window.NSWER.winsData) || [];
    const total = data.reduce((sum, item)=> sum + (item.wins ? item.wins.length : 0), 0);
    el.textContent = `${total} WINS`;
  });
})();
