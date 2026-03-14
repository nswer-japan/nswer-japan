
const events=[
{date:'2025-11-29',type:'LIVE',title:'Incheon INSPIRE ARENA'},
{date:'2025-11-30',type:'LIVE',title:'Incheon INSPIRE ARENA'},
{date:'2026-03-17',type:'LIVE',title:'Madrid'},
{date:'2026-03-20',type:'LIVE',title:'Amsterdam'},
{date:'2026-03-22',type:'LIVE',title:'Paris'},
{date:'2026-03-24',type:'LIVE',title:'Frankfurt'},
{date:'2026-03-26',type:'LIVE',title:'London'},
{date:'2026-03-29',type:'LIVE',title:'Toronto'},
{date:'2026-03-31',type:'LIVE',title:'Brooklyn'},
{date:'2026-04-02',type:'LIVE',title:'National Harbor'},
{date:'2026-04-04',type:'LIVE',title:'Irving'},
{date:'2026-04-07',type:'LIVE',title:'Oakland'},
{date:'2026-04-09',type:'LIVE',title:'Los Angeles'},
{date:'2026-08-08',type:'LIVE',title:'Tokyo KEIO ARENA'},
{date:'2026-08-09',type:'LIVE',title:'Tokyo KEIO ARENA'},

{date:'2026-03-26',type:'FC',title:'W会員先行締切'},

{date:'2026-01-26',type:'BIRTHDAY',title:'Lily Birthday'},
{date:'2026-03-26',type:'BIRTHDAY',title:'SulLoon Birthday'},
{date:'2026-05-26',type:'BIRTHDAY',title:'Haewon Birthday'},
{date:'2026-06-26',type:'BIRTHDAY',title:'Bae Birthday'},
{date:'2026-10-13',type:'BIRTHDAY',title:'Jiwoo Birthday'},
{date:'2026-12-04',type:'BIRTHDAY',title:'Kyujin Birthday'}
];

const today=new Date();

const upcoming=events
.filter(e=>new Date(e.date)>=today)
.sort((a,b)=>new Date(a.date)-new Date(b.date))
.slice(0,5);

const upcomingBox=document.getElementById("upcoming");

upcoming.forEach(e=>{
const div=document.createElement("div");
div.className="event";
div.innerHTML=`${e.date} | ${e.type} | ${e.title}`;
upcomingBox.appendChild(div);
});

function renderCalendar(){
const cal=document.getElementById("calendar");
cal.className="calendar";

for(let i=1;i<=31;i++){
const d=document.createElement("div");
d.className="day";

const match=events.filter(e=>new Date(e.date).getDate()===i);

d.innerHTML=`<strong>${i}</strong>`;

match.forEach(m=>{
const el=document.createElement("div");
el.textContent=m.type;
d.appendChild(el);
});

cal.appendChild(d);
}
}

renderCalendar();
