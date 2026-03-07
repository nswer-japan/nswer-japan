window.NSWER_WINS=[
  {song:'Blue Valentine',era:'2025-2026',count:10,wins:[
    '10月22日 SHOW CHAMPION','10月23日 M COUNTDOWN','10月24日 Music Bank','10月25日 ショー！音楽中心','10月26日 人気歌謡','11月9日 人気歌謡','11月15日 ショー！音楽中心','11月16日 人気歌謡','11月22日 ショー！音楽中心','2026年1月2日 Music Bank'
  ],triple:['11月16日 人気歌謡','11月22日 ショー！音楽中心'],video:'https://www.youtube.com/embed/rKg9I4mVLVc'},
  {song:'KNOW ABOUT ME',era:'2025-2026',count:3,wins:['3月26日 SHOW CHAMPION','3月28日 Music Bank','3月30日 人気歌謡'],video:'https://www.youtube.com/embed/0rp54oXvJ4o'},
  {song:'별별별 (See that?)',era:'2024',count:3,wins:['8月29日 M COUNTDOWN','8月30日 Music Bank','9月1日 人気歌謡'],video:'https://www.youtube.com/embed/NCQ89aLx54Y'},
  {song:'DASH',era:'2024',count:4,wins:['1月24日 SHOW CHAMPION','1月25日 M COUNTDOWN','1月26日 Music Bank','1月28日 人気歌謡'],video:'https://www.youtube.com/embed/hoHy38Jjkvg'},
  {song:'Love Me Like This',era:'2023',count:1,wins:['3月29日 SHOW CHAMPION'],video:'https://www.youtube.com/embed/O8zBPFYgz04'}
];
window.totalWins=()=>window.NSWER_WINS.reduce((s,x)=>s+x.count,0);
window.winsByYear=()=>{
  const out={};
  window.NSWER_WINS.forEach(item=>{out[item.era]=(out[item.era]||0)+item.count});
  return out;
}
