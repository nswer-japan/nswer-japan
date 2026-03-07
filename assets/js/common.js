document.addEventListener('DOMContentLoaded',()=>{
  const hamburger=document.getElementById('hamburger');
  const mobileMenu=document.getElementById('mobileMenu');
  if(hamburger&&mobileMenu){
    hamburger.addEventListener('click',()=>{
      mobileMenu.classList.toggle('active');
      hamburger.textContent=mobileMenu.classList.contains('active')?'✕':'☰';
    });
  }
});
