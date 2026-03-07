(function(){
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if(hamburger && mobileMenu){
    hamburger.addEventListener('click', ()=>{
      mobileMenu.classList.toggle('active');
      hamburger.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
    });
  }

  if(window.NSWER_WINS && document.getElementById('totalWinsNumber')){
    const total = NSWER_WINS.reduce((sum, item)=>sum + item.wins.length, 0);
    const target = document.getElementById('totalWinsNumber');
    target.textContent = `${total} WINS`;
  }

  if(window.NSWER_WINS && document.getElementById('winsRender')){
    const container = document.getElementById('winsRender');
    const grouped = {};
    NSWER_WINS.forEach(item=>{
      if(!grouped[item.year]) grouped[item.year] = [];
      grouped[item.year].push(item);
    });
    Object.keys(grouped).forEach(year=>{
      const section = document.createElement('section');
      section.className = 'year-section';
      const h2 = document.createElement('h2');
      h2.className = 'year-title';
      h2.textContent = year;
      section.appendChild(h2);

      grouped[year].forEach(song=>{
        const card = document.createElement('div');
        card.className = 'card win-card';

        const header = document.createElement('div');
        header.className = 'song-header';
        header.innerHTML = `<div class="song-title">${song.title}</div><div class="win-count-badge ${song.highlight?'gold':''}">${song.wins.length} ${song.wins.length===1?'WIN':'WINS'}</div>`;

        const ul = document.createElement('ul');
        ul.className = 'win-list';
        song.wins.forEach(w=>{
          const li = document.createElement('li');
          if(w.triple){
            li.innerHTML = `${w.date}: <span class="triple">👑 ${w.show}</span><span class="triple-badge">トリプルクラウン達成</span>`;
          }else{
            li.textContent = `${w.date}: ${w.show}`;
          }
          ul.appendChild(li);
        });

        card.appendChild(header);
        card.appendChild(ul);

        if(song.video){
          const wrap = document.createElement('div');
          wrap.className = 'video-container';
          wrap.innerHTML = `<iframe src="${song.video}" title="${song.title}" frameborder="0" allowfullscreen></iframe>`;
          card.appendChild(wrap);
        }

        section.appendChild(card);
      });

      container.appendChild(section);
    });
  }
})();
