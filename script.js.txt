const CONTACT_FRAME_BOUNDS=[[[104,5,128,295],[415,3,140,297],[724,5,132,294],[1040,3,137,297],[87,319,153,297],[414,315,139,299],[728,316,139,296],[1042,315,137,298],[98,665,159,226],[390,690,147,200],[709,624,140,271],[1027,655,149,239],[106,896,147,286],[345,929,276,305],[736,915,129,320],[1053,918,120,316],[386,8,417,856]],[[103,2,136,301],[422,1,151,303],[729,2,141,301],[1054,2,148,302],[87,316,160,301],[422,316,148,300],[731,316,152,300],[1054,316,148,302],[94,659,176,237],[392,684,166,208],[711,623,150,273],[1029,644,167,252],[95,896,156,290],[342,914,285,318],[627,896,242,338],[1065,896,126,339],[1025,12,411,847]]];
'use strict';

const portfolioData={
  name:'Saim Bashir',
  email:'saimbashirkhan25@gmail.com',
  github:'https://github.com/saimbashir',
  linkedin:'https://www.linkedin.com/in/saim-bashir-090097374/?isSelfProfile=true',
  projects:[
    {
      name:'University Timetable Pro',
      description:'Published Android student productivity app for timetables, attendance tracking, smart reminders, academic dashboards, and built-in cognitive mini-games.',
      image:'assets/apps/timetable-cover.jpg',
      tags:'React Native · Expo · Android · Notifications · Local Persistence',
      status:'Published on Google Play',
      store:'https://play.google.com/store/apps/details?id=com.saimbashir.universitytimetable',
      gallery:[
        'https://play-lh.googleusercontent.com/vn60quFF0BeIa92RGVqIOerL38C4S45IeSaCSPGx8zlmXqGD5HjQD0Bvhj9he-w623OXvFDAduZq8nsxKYV-QQ=w526-h296',
        'https://play-lh.googleusercontent.com/Pdd7tx51FNZpLz81ZuEAFYDH2nqj_iCupiFZzgCK4BC-bxzNG7_dG4rUBcCddAwfUnWqIzhPVLdtW-7m0QD7akg=w526-h296',
        'https://play-lh.googleusercontent.com/uzeUEqs5fSA6Ol9RoJ07-JiVfYwz8BhNhG2YGMgbeNCU4PjNs1lsCwMXs0Fyoz7OoJYbuxo1iZQBKD_-WHcVg9g=w526-h296',
        'https://play-lh.googleusercontent.com/tT98v4ORb3QAlpHnwly164vhkhnhzV65FwEX_TOaHU7byBgmbVijS70wpyPpLvOquFdPu-Mirm8RGMZ33Rjgvns=w526-h296'
      ]
    },
    {
      name:'Starlight Catcher',
      description:'Published neon arcade game with touch-first gameplay, collision logic, levels, coins, power-ups, unlockables, rewards, audio, and progressive difficulty.',
      image:'assets/apps/starlight-cover.jpg',
      tags:'React Native · Expo · Game State · Collision Logic · Release Engineering',
      status:'Published on Google Play',
      store:'https://play.google.com/store/apps/details?id=com.saimbashir.neoncolorcatcher',
      gallery:[
        'https://play-lh.googleusercontent.com/fdAyXi26zzd1wIlMZJ00FOBSQFwwPZdKSgdQOnaf8NyGH3xKTJpeAmIxR9P6Cyfvi8qs66Hey8aqdKOhjkCU=w526-h296',
        'https://play-lh.googleusercontent.com/deT2n6AXvWwDA1iha_l0Zx5oXjMYprYW9mt1iCoJh3xzDwPDVwsNF4WsaLu_U2tcayfmqRN5Ezx9i3DnXcVi=w526-h296',
        'https://play-lh.googleusercontent.com/umqKpMjklrCXdE9mF-yx6UxQ4SYFT-IcYRT_Zy-nS1CLfRj_ctVzeYuCLqMbhzSW8EG_-DndfBP2sUHeko02=w526-h296',
        'https://play-lh.googleusercontent.com/bWoacpFIAbOkyXIeb4VxkBvDLwBnaMtorMeNNiAJO-8RUZxrCsfN25AcWmH9UL-zWszY3H-_7M3tVzfdjBdNFhM=w526-h296'
      ]
    },
    {
      name:'Pattern Pulse',
      description:'Cognitive pattern-memory Android game built around short visual challenges, increasing difficulty, scoring, coins, daily and milestone rewards, power-ups, sound, and performance history.',
      image:'assets/apps/pattern-cover.jpg',
      tags:'React Native · Expo · Android · Memory Game · Interaction Design',
      status:'Google Play release preparation',
      github:'https://github.com/saimbashir',
      gallery:['assets/apps/pattern-cover.jpg']
    },
    {
      name:'Recall Lens AI',
      description:'Multimodal personal knowledge retrieval system for PDFs, screenshots, images, notes, voice clips, and saved resources using OCR, speech-to-text, embeddings, vector search, and RAG.',
      image:'assets/project-research.svg',
      tags:'Python · RAG · OCR · Vector Search · SQLite',
      status:'Applied AI project',
      github:'https://github.com/saimbashir',
      gallery:['assets/project-research.svg']
    },
    {
      name:'Grocery Management System',
      description:'C++ data-structures project using linked lists, stacks, and queues for add, search, update, process, and remove operations with pointer-based traversal and memory management.',
      image:'assets/project-luma.svg',
      tags:'C++ · Linked Lists · Stacks · Queues · Data Structures',
      status:'Academic engineering project',
      github:'https://github.com/saimbashir',
      gallery:['assets/project-luma.svg']
    },
    {
      name:'Cafe Management System',
      description:'C++ console workflow for menu selection, orders, quantities, billing, validation, and structured problem solving using functions, arrays, loops, and conditionals.',
      image:'assets/project-care.svg',
      tags:'C++ · Programming Fundamentals · Validation · Console Application',
      status:'Academic engineering project',
      github:'https://github.com/saimbashir',
      gallery:['assets/project-care.svg']
    }
  ]
};

const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const space=document.querySelector('#space'),ctx=space.getContext('2d',{alpha:true,desynchronized:true}),lightning=document.querySelector('#lightning'),lc=lightning.getContext('2d',{alpha:true,desynchronized:true});
const introEl=document.querySelector('#intro'),percentEl=document.querySelector('#percent'),loadingBar=document.querySelector('.loading-track i');
let w=innerWidth,h=innerHeight,dpr=Math.min(devicePixelRatio||1,innerWidth<600?1:1.25),stars=[],introDust=[],introSplit=[],sparkSeeds=[],introStart=performance.now(),introActive=true,lastFrame=0,mainStart=performance.now(),resizeRaf=0;

function makeSeeds(){
  sparkSeeds=Array.from({length:132},(_,i)=>({
    a:i*2.399963229728653+((i*37)%17)*.027,
    speed:.34+((i*47)%101)/100*.92,
    delay:(i%12)*.011,
    tail:.03+(i%5)*.009,
    width:i%11===0?3.2:i%4===0?2.2:1.35,
    warm:i%3
  }));
  introDust=Array.from({length:260},(_,i)=>({
    a:i*2.399963229728653,
    ring:22+(i*29)%240,
    drift:.55+((i*13)%31)/45,
    size:i%13===0?1.7:i%5===0?1.25:.8,
    phase:(i%19)*.33
  }));
  introSplit=Array.from({length:84},(_,i)=>({
    a:i*2.399963229728653+((i*19)%9)*.035,
    speed:.22+((i*17)%29)/100,
    len:i%7===0?9:i%3===0?6:4,
    delay:(i%14)*.05,
    phase:(i%11)*.21
  }));
}
makeSeeds();

function resize(){
  w=innerWidth;h=innerHeight;dpr=Math.min(devicePixelRatio||1,innerWidth<600?1:1.25);
  for(const c of [space,lightning]){
    c.width=Math.max(1,Math.round(w*dpr));c.height=Math.max(1,Math.round(h*dpr));
    c.style.width=w+'px';c.style.height=h+'px';
    c.getContext('2d').setTransform(dpr,0,0,dpr,0,0);
  }
  const count=Math.min(120,Math.max(70,Math.floor(w*h/8200)));
  stars=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*.9+.25,v:Math.random()*.055+.018,phase:Math.random()*6.283}));
}
resize();
addEventListener('resize',()=>{cancelAnimationFrame(resizeRaf);resizeRaf=requestAnimationFrame(resize);},{passive:true});

function electricPath(t,anchor,seed,span){
  const pts=[],steps=46;
  for(let i=0;i<=steps;i++){
    const y=i/steps*h;
    const x=anchor+Math.sin(y*.013+t*.00074+seed)*span+Math.sin(y*.041-t*.00117+seed)*span*.22+Math.sin(i*2.54+t*.0062)*4.2;
    pts.push([x,y]);
  }
  return pts;
}
function drawPath(context,points,alpha,width=1){
  context.save();context.lineJoin='round';context.lineCap='round';
  context.beginPath();for(let i=0;i<points.length;i++){const p=points[i];i?context.lineTo(p[0],p[1]):context.moveTo(p[0],p[1]);}
  context.lineWidth=width*14.5;context.strokeStyle=`rgba(64,208,195,${alpha*.12})`;context.shadowBlur=0;context.shadowColor='rgba(72,224,208,.30)';context.stroke();
  context.beginPath();for(let i=0;i<points.length;i++){const p=points[i];i?context.lineTo(p[0],p[1]):context.moveTo(p[0],p[1]);}
  context.lineWidth=width*5.8;context.strokeStyle=`rgba(110,244,229,${alpha*.34})`;context.shadowBlur=0;context.shadowColor='rgba(110,244,229,.52)';context.stroke();
  context.beginPath();for(let i=0;i<points.length;i++){const p=points[i];i?context.lineTo(p[0],p[1]):context.moveTo(p[0],p[1]);}
  context.lineWidth=width*1.8;context.strokeStyle=`rgba(236,255,251,${Math.min(1,alpha*1.08)})`;context.shadowBlur=0;context.shadowColor='rgba(180,255,247,.88)';context.stroke();
  context.restore();
}
function drawBranch(context,start,side,t,alpha){
  context.save();context.beginPath();context.moveTo(start[0],start[1]);
  for(let j=1;j<=10;j++)context.lineTo(start[0]+side*(j*7+Math.sin(j*1.9+t*.0017)*4),start[1]+j*5+Math.sin(j*.73+t*.0011)*8);
  context.lineWidth=1.05;context.strokeStyle=`rgba(188,244,235,${alpha*.92})`;context.shadowBlur=0;context.shadowColor='rgba(144,255,238,.38)';context.stroke();context.restore();
}

// Constant-speed approach / separation: no easing slowdown at impact.
function collisionPhase(elapsed){
  const phase=(elapsed%7200+7200)%7200;
  let merge=0;
  if(phase>=1700&&phase<2350)merge=(phase-1700)/650;
  else if(phase>=2350&&phase<2430)merge=1;
  else if(phase>=2430&&phase<3080)merge=1-(phase-2430)/650;
  return {phase,merge,sparkAge:phase-2350};
}
function electricField(context,t,intro){
  const elapsed=intro?t-introStart:Math.max(0,t-mainStart);
  const {merge,sparkAge}=collisionPhase(elapsed),anchors=intro?[w*.27,w*.73]:[w*.055,w*.945];
  for(let k=0;k<2;k++){
    const base=electricPath(t,anchors[k],k*4,intro?Math.min(w*.09,96):28);
    for(let i=0;i<base.length;i++){
      const x=base[i][0],y=base[i][1],attraction=Math.pow(Math.max(0,1-Math.abs(y-h*.5)/(h*.54)),.5);
      base[i][0]=x+(w*.5-x)*merge*attraction;
    }
    drawPath(context,base,intro?.9:.78,intro?1.7:1.42);
    drawBranch(context,base[14],k? -1:1,t,intro?.26:.18);
    drawBranch(context,base[32],k? -1:1,t+430,intro?.22:.16);
  }

  // Full-screen impact particles, but intentionally sparse and clean so the effect stays professional.
  if(sparkAge>=0&&sparkAge<1750){
    const age=sparkAge/1000,fade=Math.max(0,1-age/1.75),cx=w*.5,cy=h*.5,maxDim=Math.max(w,h);
    context.save();context.globalCompositeOperation='lighter';
    const glow=context.createRadialGradient(cx,cy,0,cx,cy,86+age*205);
    glow.addColorStop(0,`rgba(255,244,190,${fade*.72})`);glow.addColorStop(.18,`rgba(255,175,76,${fade*.42})`);glow.addColorStop(.46,`rgba(255,111,32,${fade*.18})`);glow.addColorStop(1,'rgba(255,85,24,0)');
    context.fillStyle=glow;context.fillRect(cx-(390+age*240),cy-(390+age*240),(780+age*480),(780+age*480));
    context.lineCap='round';
    for(const p of sparkSeeds){
      const travel=Math.max(0,age-p.delay);if(!travel)continue;
      const distance=maxDim*p.speed*travel,prev=maxDim*p.speed*Math.max(0,travel-p.tail);
      const sin=Math.sin(p.a),cos=Math.cos(p.a),curve=(p.warm-1)*14*travel*travel;
      const x=cx+cos*distance,y=cy+sin*distance+curve,tx=cx+cos*prev,ty=cy+sin*prev+curve*.84;
      context.beginPath();context.moveTo(tx,ty);context.lineTo(x,y);
      context.lineWidth=p.width;context.strokeStyle=p.warm===0?`rgba(255,126,42,${fade*.74})`:p.warm===1?`rgba(255,190,91,${fade*.82})`:`rgba(255,232,174,${fade*.78})`;context.stroke();
      if((p.warm!==1 && p.width>1.8) || p.width>2.8){
        const size=4.4+p.width*2.45+age*2.8;
        context.fillStyle=p.warm===0?`rgba(255,150,58,${fade*.24})`:`rgba(255,240,185,${fade*.22})`;
        context.fillRect(x-size*.5,y-size*.5,size,size);
      }
    }
    context.restore();
  }
}

function drawIntroDust(t){
  const minDim=Math.min(w,h),cx=w*.5,cy=h*.5,clock=t*.001;
  lc.save();lc.globalCompositeOperation='lighter';lc.fillStyle='rgba(160,226,211,.38)';
  for(const p of introDust){
    const rad=(p.ring+(clock*35*p.drift))%(minDim*.5);
    const a=p.a+clock*.045+Math.sin(clock*.23+p.phase)*.012;
    const x=cx+Math.cos(a)*rad*1.38,y=cy+Math.sin(a)*rad*.84;
    lc.fillRect(x,y,p.size,p.size);
  }
  lc.lineCap='round';
  for(const p of introSplit){
    const time=((clock*1.35)+p.phase)%(2.3+p.delay);
    const travel=Math.max(0,time-p.delay);
    if(!travel)continue;
    const distance=(22+travel*minDim*(.18+p.speed));
    const tail=Math.max(8,p.len+travel*11);
    const x=cx+Math.cos(p.a)*distance;
    const y=cy+Math.sin(p.a)*distance*.82;
    const tx=cx+Math.cos(p.a)*(distance-tail);
    const ty=cy+Math.sin(p.a)*(distance-tail)*.82;
    lc.beginPath();lc.moveTo(tx,ty);lc.lineTo(x,y);
    lc.lineWidth=p.len>7?1.4:1;
    lc.strokeStyle=p.len>7?'rgba(183,255,244,.65)':'rgba(152,231,216,.38)';
    lc.stroke();
  }
  lc.restore();
}
function drawIntroAccent(t){
 const elapsed=t-introStart,cx=w*.5,cy=h*.5,r=Math.min(w,h)*.27;
 lc.save();lc.globalCompositeOperation='lighter';
 // Two travelling arcs frame the title while the side bolts approach.
 if(elapsed<2350){const a=elapsed*.0024;for(let k=0;k<2;k++){lc.beginPath();lc.ellipse(cx,cy,r*1.5,r,0,a+k*Math.PI,a+k*Math.PI+.7);lc.strokeStyle='rgba(137,245,224,.3)';lc.lineWidth=1.3;lc.stroke();const end=a+k*Math.PI+.7;lc.fillStyle='rgba(215,255,247,.85)';lc.beginPath();lc.arc(cx+Math.cos(end)*r*1.5,cy+Math.sin(end)*r,2.2,0,Math.PI*2);lc.fill();}}
 // Soft expanding shockwave synchronized with the collision.
 const age=(elapsed-2350)/1000;if(age>=0&&age<1.15){for(let i=0;i<2;i++){const q=Math.max(0,age-i*.11);lc.beginPath();lc.ellipse(cx,cy,30+q*w*.65,20+q*h*.48,0,0,Math.PI*2);lc.lineWidth=i?1:2;lc.strokeStyle=`rgba(151,255,222,${Math.max(0,(1-age/1.15)*.32)})`;lc.stroke();}}
 lc.restore();
}
function drawMain(t,dt){
  ctx.clearRect(0,0,w,h);
  ctx.strokeStyle='rgba(112,163,157,.042)';ctx.lineWidth=.55;
  const grid=86,offset=reduced?0:(t*.0022)%grid;
  for(let x=-grid+offset;x<w;x+=grid){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
  for(let y=-grid+offset;y<h;y+=grid){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
  ctx.fillStyle='rgba(218,235,250,.52)';
  for(const star of stars){if(!reduced){star.y-=star.v*dt;if(star.y<0)star.y=h;}ctx.globalAlpha=.25+(Math.sin(t*.001+star.phase)+1)*.2;ctx.beginPath();ctx.arc(star.x,star.y,star.r,0,6.283);ctx.fill();}
  ctx.globalAlpha=1;
  if(!reduced){
    electricField(ctx,t,false);
    ctx.strokeStyle='rgba(170,205,255,.22)';ctx.lineWidth=.75;
    for(let k=0;k<2;k++){const f=(t*(.021+k*.004)+k*560)%(w+700)-350;ctx.beginPath();ctx.moveTo(f,110+k*280+f*.09);ctx.lineTo(f-42,84+k*280+f*.09);ctx.stroke();}
  }
}

function endIntro(){
  if(!introActive)return;
  introActive=false;mainStart=performance.now();introEl.classList.add('done');document.body.style.overflow='';lc.clearRect(0,0,w,h);
}
document.querySelector('#skip').onclick=endIntro;document.body.style.overflow='hidden';
document.querySelector('#replay').onclick=()=>{introStart=performance.now();introActive=true;introEl.classList.remove('done');document.body.style.overflow='hidden';};

function animate(t){
  requestAnimationFrame(animate);
  if(document.hidden)return;
  if(t-lastFrame<15.5)return;
  const dt=Math.min(2.2,(t-lastFrame||16.7)/16.7);lastFrame=t;

  // Important performance rule: while the intro covers the page, render ONLY the intro canvas.
  // The hidden portfolio canvas is not painted underneath it.
  if(introActive){
    const elapsed=t-introStart,pct=Math.min(100,Math.floor(elapsed/52));
    percentEl.textContent=pct+'%';loadingBar.style.width=pct+'%';lc.clearRect(0,0,w,h);
    if(!reduced){drawIntroDust(t);electricField(lc,t,true);drawIntroAccent(t);}
    if(elapsed>5500||(reduced&&elapsed>600))endIntro();
    return;
  }
  drawMain(t,dt);
}
requestAnimationFrame(animate);

const words=['Software Engineering Undergraduate','React Native & Android Developer','Applied AI Builder'];let wi=0,ci=0,back=false;
function type(){
  document.querySelector('#typed').textContent=words[wi].slice(0,ci);
  if(!back&&ci<words[wi].length){ci++;setTimeout(type,68)}
  else if(!back){back=true;setTimeout(type,1600)}
  else if(ci>0){ci--;setTimeout(type,30)}
  else{back=false;wi=(wi+1)%words.length;setTimeout(type,350)}
}
if(reduced)document.querySelector('#typed').textContent=words[0];else type();

const navLinks=[...document.querySelectorAll('nav a')];
function positionNavPortrait(){const a=navLinks.find(a=>a.classList.contains('active'));if(a)document.querySelector('.nav-mascot').style.left=(a.offsetLeft+a.offsetWidth/2)+'px';}
new ResizeObserver(positionNavPortrait).observe(document.querySelector('nav'));
const navObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const n=navLinks.findIndex(a=>a.hash==='#'+e.target.id);navLinks.forEach((a,i)=>a.classList.toggle('active',i===n));positionNavPortrait();}})},{rootMargin:'-20% 0px -55% 0px'});
document.querySelectorAll('main>section').forEach(s=>navObserver.observe(s));

const awardTitles=['Campus Hackathon','Creative Web Design','Innovation Challenge','Community Contribution'];

let arrivalObserver=null;
if(!reduced){
  arrivalObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting)entry.target.classList.add('arrive-visible');
      else entry.target.classList.remove('arrive-visible');
    });
  },{threshold:.12,rootMargin:'0px 0px -7% 0px'});
}
function registerArrival(el,i,total){
  if(reduced){el.classList.add('arrive-visible');return;}
  const halfway=Math.ceil(total/2);
  el.classList.remove('arrive-left','arrive-right','arrive-visible','from-left','from-right');
  el.classList.add('scroll-arrival',i<halfway?'from-left':'from-right');
  el.style.setProperty('--arrival-delay',`${(i%Math.max(1,halfway))*70}ms`);
  arrivalObserver.observe(el);
}
function animateArrival(container){const items=[...container.querySelectorAll('.project-card,.award,.tech')];items.forEach((el,i)=>registerArrival(el,i,items.length));}

function escapeHtml(value){return String(value).replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));}
function projectActions(p){
  const links=[];
  if(p.store)links.push(`<a class="button mini-action" href="${p.store}" target="_blank" rel="noopener noreferrer">Google Play ↗</a>`);
  if(p.github)links.push(`<a class="outline-button mini-action" href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`);
  return links.join('');
}
function projectDetailMarkup(p){
  const fallback=escapeHtml(p.image);
  const gallery=(p.gallery||[p.image]).map((src,i)=>`<figure><img src="${escapeHtml(src)}" alt="${escapeHtml(p.name)} screenshot ${i+1}" loading="lazy" onerror="this.onerror=null;this.src='${fallback}'"><figcaption>${i===0?'Project visual':'Google Play screenshot'}</figcaption></figure>`).join('');
  return `<div class="project-detail"><div class="project-detail-top"><span class="project-status">${escapeHtml(p.status||'Project')}</span><p>${escapeHtml(p.description)}</p><p class="project-tags">${escapeHtml(p.tags)}</p><div class="project-detail-actions">${projectActions(p)}</div></div><div class="project-gallery">${gallery}</div></div>`;
}

function renderPortfolio(tab){
  const target=document.querySelector('#portfolio-content');
  if(tab==='projects'){
    target.innerHTML='<div class="project-grid">'+portfolioData.projects.map((p,i)=>`<article class="project-card"><div class="project-cover"><img src="${p.image}" alt="${escapeHtml(p.name)} project cover" loading="lazy"><span>${escapeHtml(p.status)}</span></div><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.description)}</p><div class="project-card-actions"><button data-project="${i}">Details ↗</button>${p.store?`<a href="${p.store}" target="_blank" rel="noopener noreferrer">Play Store</a>`:''}</div></article>`).join('')+'</div>';
  }else if(tab==='awards'){
    target.innerHTML='<div class="project-grid">'+awardTitles.map((s,i)=>`<article class="award"><span>♜</span><h3>${s}</h3><p>${i%2?'Finalist':'First Place'} · ${i<2?'2025':'2026'}</p><p>Example achievement</p></article>`).join('')+'</div>';
  }else{
    const tech=[['⚛','React Native','#5cdaf8'],['E','Expo','#fff'],['JS','JavaScript','#f4db40'],['J','Java','#f09a43'],['C++','C++','#6ba7ff'],['Py','Python','#8cd47e'],['SQL','SQL','#8dc8ff'],['DB','MySQL','#4db8ff'],['◫','SQLite','#8dc5d9'],['⌘','Git/GitHub','#ddd'],['A','Android','#78d88b'],['API','REST APIs','#e9a86d']];
    target.innerHTML='<div class="tech-grid">'+tech.map(([symbol,name,color])=>`<div class="tech" style="--tech:${color}"><b>${symbol}</b>${name}</div>`).join('')+'</div>';
  }
  wirePortfolio();animateArrival(target);
}

const tabs=[...document.querySelectorAll('[data-tab]')];
tabs.forEach((b,i)=>{b.onclick=()=>{tabs.forEach(x=>x.setAttribute('aria-selected',String(x===b)));renderPortfolio(b.dataset.tab)};b.onkeydown=e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const next=tabs[(i+(e.key==='ArrowRight'?1:tabs.length-1))%tabs.length];next.focus();next.click();}}});
renderPortfolio('projects');
document.querySelector('.close').onclick=()=>document.querySelector('#detail').close();document.querySelector('#detail').onclick=e=>{if(e.target===e.currentTarget)e.currentTarget.close()};

function toast(msg){const el=document.querySelector('#toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),3500);}

document.querySelector('#resume').onclick=()=>openViewer([{title:'Saim Bashir · Resume',pdf:'assets/documents/resume.pdf',file:'assets/documents/resume.pdf',downloadLabel:'Download Resume'}],0);
document.querySelector('#contact-form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);location.href='mailto:'+portfolioData.email+'?subject='+encodeURIComponent('Portfolio inquiry from '+f.get('name'))+'&body='+encodeURIComponent(f.get('message')+'\n\nFrom: '+f.get('name')+'\nEmail: '+f.get('email'));toast('Opening your email app for '+portfolioData.email);};

let comments=[];try{const saved=JSON.parse(localStorage.getItem('saim-portfolio-comments')||'[]');if(Array.isArray(saved))comments=saved.slice(0,20).filter(x=>typeof x.name==='string'&&typeof x.comment==='string')}catch{}
function renderComments(){const container=document.querySelector('#comments');container.replaceChildren();comments.forEach(c=>{const el=document.createElement('article');el.className='comment';const n=document.createElement('strong'),p=document.createElement('p'),s=document.createElement('small');n.textContent=c.name;p.textContent=c.comment;s.textContent='Saved on this device';el.append(n,p,s);container.append(el)});}
renderComments();document.querySelector('#comment-form').onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);comments.unshift({name:String(f.get('name')).trim(),comment:String(f.get('comment')).trim()});comments=comments.slice(0,20);try{localStorage.setItem('saim-portfolio-comments',JSON.stringify(comments))}catch{}renderComments();e.currentTarget.reset();toast('Comment added on this device');};

// Spoken portfolio radio: uses the browser's built-in speech engine so it works without an audio file.
const speechTexts={
  intro:'Hi, I am Saim Bashir, a Software Engineering undergraduate at COMSATS University Islamabad, Lahore Campus. I focus on mobile app development, Android releases, and applied artificial intelligence projects.',
  skills:'My technical skills include React Native, Expo, Android development, responsive user interfaces, local persistence, notifications, JavaScript, Java, C plus plus, Python, SQL, REST APIs, MySQL, SQLite, Git, GitHub, debugging, testing, and release workflows.',
  projects:'My projects include University Timetable Pro and Starlight Catcher, both published on Google Play, Pattern Pulse, a cognitive pattern memory game in release preparation, and Recall Lens AI, a multimodal knowledge retrieval system using OCR, speech to text, embeddings, vector search, and retrieval augmented generation.'
};
const fullSpeech=[speechTexts.intro,speechTexts.skills,speechTexts.projects].join(' ');
let currentUtterance=null,speaking=false;
function setSpeechState(active){speaking=active;const btn=document.querySelector('#music'),stop=document.querySelector('#stopMusic'),player=document.querySelector('.player');btn.textContent='▶';btn.setAttribute('aria-label',active?'Restart spoken portfolio radio':'Play spoken portfolio radio');if(stop)stop.disabled=!active;player.classList.toggle('speaking',active);player.classList.toggle('playing',active);}
function speakText(text){
  if(!('speechSynthesis'in window)){toast('Spoken radio is not supported in this browser.');return;}
  speechSynthesis.cancel();
  currentUtterance=new SpeechSynthesisUtterance(text);currentUtterance.rate=.94;currentUtterance.pitch=1;currentUtterance.volume=1;
  const voices=speechSynthesis.getVoices();const preferred=voices.find(v=>/^en[-_]PK$/i.test(v.lang))||voices.find(v=>/^en(-|_)/i.test(v.lang)&&/male|david|mark|daniel|google uk english male/i.test(v.name))||voices.find(v=>/^en(-|_)/i.test(v.lang));if(preferred){currentUtterance.voice=preferred;currentUtterance.lang=preferred.lang;}else{currentUtterance.lang='en-PK';}
  currentUtterance.onend=()=>setSpeechState(false);currentUtterance.onerror=()=>setSpeechState(false);
  setSpeechState(true);speechSynthesis.speak(currentUtterance);
}
document.querySelector('#music').onclick=()=>speakText(fullSpeech);
document.querySelector('#stopMusic').onclick=()=>{if('speechSynthesis'in window)speechSynthesis.cancel();setSpeechState(false);};
document.querySelectorAll('[data-speech]').forEach(btn=>btn.onclick=()=>speakText(speechTexts[btn.dataset.speech]));

document.querySelector('#year').textContent=new Date().getFullYear();

// Glass reflections are shared by statistics and portfolio cards.
function wireGlass(el){
  if(el.dataset.glass)return;el.dataset.glass='true';el.classList.add('glass-card');window.observeEffect?.(el);
  let r=null,raf=0,px=0,py=0;
  const paint=()=>{raf=0;if(!r)r=el.getBoundingClientRect();const x=px-r.left,y=py-r.top;el.style.setProperty('--gx',x+'px');el.style.setProperty('--gy',y+'px');if(!reduced)el.style.transform=`perspective(850px) rotateX(${-(y/r.height-.5)*6}deg) rotateY(${(x/r.width-.5)*7}deg) translateY(-2px)`;};
  el.addEventListener('pointerenter',e=>{r=el.getBoundingClientRect();px=e.clientX;py=e.clientY;if(!raf)raf=requestAnimationFrame(paint);},{passive:true});
  el.addEventListener('pointermove',e=>{px=e.clientX;py=e.clientY;if(!raf)raf=requestAnimationFrame(paint);},{passive:true});
  el.addEventListener('pointerleave',()=>{r=null;if(raf){cancelAnimationFrame(raf);raf=0}el.style.transform='';},{passive:true});
}

function wirePortfolio(){
  const content=document.querySelector('#portfolio-content');content.querySelectorAll('.project-card,.award,.tech').forEach(wireGlass);
  const awards=[...content.querySelectorAll('.award')];
  for(const [items,kind] of [[awards,'award']]){
    items.forEach((el,i)=>{
      el.tabIndex=0;el.setAttribute('role','button');el.setAttribute('aria-label','Open '+kind+' '+(i+1));
      const open=()=>openViewer(items.map((x,j)=>({title:x.querySelector('h3').textContent,html:`<div class="document-sheet award-sheet"><div class="document-brand">EXAMPLE AWARDS</div><div class="award-symbol">♜</div><h2>${escapeHtml(x.querySelector('h3').textContent)}</h2><h3>Saim Bashir</h3><p>${escapeHtml(x.querySelector('p').textContent)}</p><small>Achievement preview</small></div>`,file:`assets/documents/${kind}-${j+1}.pdf`,downloadLabel:'Download'})),i);
      el.onclick=open;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}};
    });
  }
  content.querySelectorAll('[data-project]').forEach(b=>b.onclick=()=>{const p=portfolioData.projects[+b.dataset.project];openViewer([{title:p.name,html:projectDetailMarkup(p)}],0);});
}

let viewerItems=[],viewerIndex=0,viewerZoom=1;
function openViewer(items,index){viewerItems=items;viewerIndex=index;viewerZoom=1;drawViewer();const d=document.querySelector('#detail');if(!d.open)d.showModal();}
function drawViewer(){
  const item=viewerItems[viewerIndex],detail=document.querySelector('#detail');detail.classList.add('document-dialog');
  const body=item.pdf?`<iframe class="pdf-frame" src="${item.pdf}#view=FitH" title="${escapeHtml(item.title)}"></iframe>`:item.image?`<img src="${item.image}" alt="${escapeHtml(item.title)}"><p>${escapeHtml(item.description||'')}</p>`:item.html;
  const navButtons=viewerItems.length>1?`<button data-viewer="prev" aria-label="Previous document">‹</button>`:'';
  const nextButton=viewerItems.length>1?`<button data-viewer="next" aria-label="Next document">›</button>`:'';
  const fileButton=item.file?`<a class="button" href="${item.file}" download>${item.downloadLabel||'Download'}</a>`:'';
  document.querySelector('#detail-body').innerHTML=`<div class="viewer-heading"><h2>${escapeHtml(item.title)}</h2><span>${viewerItems.length>1?viewerIndex+1+' / '+viewerItems.length:''}</span></div><div class="viewer-stage"><div class="viewer-page ${item.pdf?'viewer-pdf':''}">${body}</div></div><div class="viewer-tools">${navButtons}<button data-viewer="out" aria-label="Zoom out">−</button><span id="zoom-label">100%</span><button data-viewer="in" aria-label="Zoom in">+</button>${nextButton}${fileButton}</div>`;
  if(!item.pdf&&!document.querySelector('.project-detail'))animateDocumentAssembly();
  document.querySelectorAll('[data-viewer]').forEach(b=>b.onclick=()=>{const action=b.dataset.viewer;if(action==='prev'||action==='next'){viewerIndex=(viewerIndex+(action==='next'?1:viewerItems.length-1))%viewerItems.length;viewerZoom=1;drawViewer();}else{viewerZoom=Math.max(.6,Math.min(2,viewerZoom+(action==='in'?.2:-.2)));const page=document.querySelector('.viewer-page');if(item.pdf){page.style.transform=`scale(${viewerZoom})`;page.style.transformOrigin='top center';}else page.style.zoom=viewerZoom;document.querySelector('#zoom-label').textContent=Math.round(viewerZoom*100)+'%';}});
}
document.querySelector('#detail').addEventListener('keydown',e=>{if(e.key==='ArrowRight')document.querySelector('[data-viewer=next]')?.click();if(e.key==='ArrowLeft')document.querySelector('[data-viewer=prev]')?.click();});

document.querySelectorAll('.stats>div,.history-card,.music-panel').forEach(wireGlass);
document.querySelectorAll('.stats>div').forEach((el,i)=>{el.tabIndex=0;el.setAttribute('role','button');el.setAttribute('aria-label','View '+['projects','awards'][i]);const open=()=>{tabs.find(b=>b.dataset.tab===['projects','awards'][i]).click();document.querySelector('#portfolio').scrollIntoView({behavior:reduced?'auto':'smooth'});};el.onclick=open;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}};});

// History and statistics replay their entrance motion whenever they leave and re-enter the viewport.
if(!reduced){document.querySelectorAll('.stats>div,.history-card').forEach((el,i,all)=>registerArrival(el,i,all.length));}

function animateDocumentAssembly(){
  if(reduced)return;const page=document.querySelector('.viewer-page');if(!page)return;
  const content=document.createElement('div');content.className='document-live';while(page.firstChild)content.append(page.firstChild);page.append(content);
  ['left','right'].forEach(side=>{const fragment=content.cloneNode(true);fragment.className='document-fragment fragment-'+side;fragment.setAttribute('aria-hidden','true');fragment.inert=true;page.append(fragment);});
  page.classList.add('assembling');setTimeout(()=>{if(page.isConnected){page.classList.remove('assembling');page.querySelectorAll('.document-fragment').forEach(x=>x.remove());}},1000);
}


// Small decoded frames, one clock, synchronized case jump and top-to-bottom form reveal.
(() => {
 const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
 const grid=document.querySelector('.contact-grid');if(!grid)return;
 let visible=false,loaded=false,raf=0,start=0,active=false;
 const controllers=[];
 function render(c,n){if(c.lastFrame===n)return;c.lastFrame=n;c.ctx.clearRect(0,0,540,612);if(c.frames[n])c.ctx.drawImage(c.frames[n],0,0);}
 function reveal(c){if(c.stage.classList.contains('panel-open'))return;c.stage.classList.add('panel-open');c.panel.inert=false;c.panel.removeAttribute('aria-hidden');c.trigger.setAttribute('aria-expanded','true');}
 function reset(){cancelAnimationFrame(raf);raf=0;active=false;controllers.forEach(c=>{c.stage.classList.remove('host-playing','host-rest','panel-open','case-flight');c.panel.inert=true;c.panel.setAttribute('aria-hidden','true');c.trigger.setAttribute('aria-expanded','false');c.lastFrame=-1;if(c.frames.length)render(c,0);});}
 function tick(now){raf=0;const t=now-start;
   controllers.forEach(c=>{
     const pose=t<1250?Math.floor(t/95)%8:t<1450?8:t<1650?9:t<1850?10:t<1990?11:t<2160?12:t<2460?13:t<2800?14:t<3300?15:16;
     if(c.frames.length)render(c,pose);
     if(t>=1990)c.stage.classList.add('case-flight');
     if(t>=2250)reveal(c);
     if(t>=3300)c.stage.classList.add('host-rest');
   });
   if(t<3700)raf=requestAnimationFrame(tick);
 }
 function play(){if(active||!loaded)return;active=true;start=performance.now();controllers.forEach(c=>c.stage.classList.add('host-playing'));if(reduce){controllers.forEach(c=>{if(c.frames.length)render(c,16);reveal(c);c.stage.classList.add('host-rest');});return;}raf=requestAnimationFrame(tick);}
 const jobs=[...grid.querySelectorAll(':scope > .contact-panel')].map((panel,i)=>{
   const stage=document.createElement('div');stage.className='contact-stage '+(i?'from-right':'from-left');panel.before(stage);stage.append(panel);panel.id='contact-panel-'+i;
   const kid=document.createElement('div');kid.className='contact-kid';kid.setAttribute('aria-hidden','true');const canvas=document.createElement('canvas');canvas.className='host-canvas';canvas.width=540;canvas.height=612;kid.append(canvas);stage.prepend(kid);
   const bag=document.createElement('div');bag.className='flying-case';bag.setAttribute('aria-hidden','true');bag.innerHTML='<svg viewBox="0 0 60 48"><defs><linearGradient id="bag'+i+'" x2="0" y2="1"><stop stop-color="#a57550"/><stop offset="1" stop-color="#593923"/></linearGradient></defs><path d="M21 13V8q0-4 4-4h10q4 0 4 4v5" stroke="#ad845c" stroke-width="4" fill="none"/><rect x="4" y="12" width="52" height="32" rx="5" fill="url(#bag'+i+')" stroke="#bb9164"/><path d="M5 24q25 8 50 0" fill="none" stroke="#c6a074"/><rect x="27" y="23" width="7" height="9" rx="1" fill="#e8c686"/></svg>';kid.append(bag);
   const trigger=document.createElement('button');trigger.className='contact-reveal-toggle';trigger.type='button';trigger.textContent=i?'Open comments':'Let’s connect';trigger.setAttribute('aria-controls',panel.id);stage.prepend(trigger);
   const c={stage,panel,trigger,ctx:canvas.getContext('2d'),frames:[]};controllers.push(c);trigger.onclick=()=>{play();reveal(c);};
   return (async()=>{
     const img=new Image(),rest=new Image();img.src='assets/host-'+(i?'right':'left')+'-clean.png';rest.src='assets/hosts-resting-clean.png';
     await Promise.all([img.decode(),rest.decode()]);
     const data=CONTACT_FRAME_BOUNDS[i];
     for(let n=0;n<17;n++){
       const f=document.createElement('canvas');f.width=540;f.height=612;
       const box=data[n],height=n===8?145:n===9?127:n===11?149:n===12?177:184;
       const scale=Math.min(height/box[3],168/box[2]),w=box[2]*scale,h=box[3]*scale;
       f.getContext('2d').drawImage(n===16?rest:img,...box,(180-w)*3,(200-h)*3,w*3,h*3);c.frames.push(f);
       if(n%4===3)await new Promise(requestAnimationFrame);
     }render(c,0);
   })();
 });
 reset();Promise.allSettled(jobs).then(()=>{loaded=true;if(visible)play();});
 new IntersectionObserver(entries=>{visible=entries.some(e=>e.isIntersecting);if(visible)play();else if(!grid.contains(document.activeElement))reset();},{threshold:.08,rootMargin:'0px 0px -7% 0px'}).observe(grid);
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;}else if(active&&!controllers.every(c=>c.stage.classList.contains('host-rest'))){controllers.forEach(c=>{if(c.frames.length)render(c,16);reveal(c);c.stage.classList.add('host-rest');});}});
})();

// Pause decorative reflections outside the viewport; visible cards keep their effects.
(() => {
  const effects=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('effect-offscreen',!e.isIntersecting)),{rootMargin:'80px'});
  window.observeEffect=el=>effects.observe(el);
  document.querySelectorAll('.glass-card,.contact-panel,.find-me,.tabs button,.button,.outline-button,.contact-links a').forEach(window.observeEffect);
})();
