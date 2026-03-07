
window.NSWER = window.NSWER || {};
(function(){
  const data = window.NSWER.winsData || [];
  const mount = document.getElementById('winsMount');
  const summary = document.getElementById('winsSummary');
  const bars = document.getElementById('winsBars');
  if(!mount) return;

  if(summary){
    summary.innerHTML = data.map(item => `
      <div class="summary">
        <span class="k">${item.era}</span>
        <span class="v">${item.wins.length}</span>
        <span class="s">${item.title}</span>
      </div>
    `).join('');
  }

  if(bars){
    const max = Math.max(...data.map(d => d.wins.length), 1);
    bars.innerHTML = data.map(item => `
      <div class="bar-row">
        <div class="bar-label">${item.title}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(item.wins.length/max)*100}%"></div></div>
        <div class="bar-value">${item.wins.length}</div>
      </div>
    `).join('');
  }

  mount.innerHTML = data.map(item => `
    <article class="pro-win-card">
      <div class="song-header">
        <div>
          <div class="song-title">${item.gold ? '👑 ' : ''}${item.title}</div>
          <span class="song-era">${item.era}</span>
        </div>
        <div class="win-count-badge ${item.gold ? 'gold' : ''}">${item.badge}</div>
      </div>
      <ul class="win-list">
        ${item.wins.map(w=> `<li>${w.date}: ${w.triple ? `<span class="triple">👑 ${w.show}</span><span class="triple-badge">トリプルクラウン達成</span>` : w.show}</li>`).join('')}
      </ul>
      ${item.video ? `<div class="video-container"><iframe src="${item.video}" frameborder="0" allowfullscreen></iframe></div>` : ''}
    </article>
  `).join('');
})();
