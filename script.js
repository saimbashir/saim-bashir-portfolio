'use strict';

const ROOT='https://raw.githubusercontent.com/saimbashir/saim-bashir-portfolio/main/';
const projects=[
  {
    id:'cafe',order:1,category:['academic'],eyebrow:'Semester 1 coursework',title:'Cafe Management System',sub:'Programming fundamentals / C++',status:'Academic engineering project',
    cover:'assets/project-care.svg',
    short:'A console ordering and billing workflow using functions, arrays, loops, conditions, and validation.',
    body:'One of my earliest university software projects. The focus was learning to convert programming fundamentals into a complete usable workflow.',
    points:['Menu and order selection','Quantity and billing logic','Input validation','Structured functions and control flow'],
    tech:['C++','Programming Fundamentals','Console App'],gallery:['assets/project-care.svg']
  },
  {
    id:'starlight',order:2,category:['mobile'],eyebrow:'Semester 2 game project',title:'Starlight Catcher',sub:'Touch-first neon arcade game',status:'Published on Google Play',
    cardCover:'assets/apps/starlight-play-card.jpg',
    cover:'assets/apps/starlight-play-page.jpg',
    short:'A mobile arcade experience with collision logic, levels, coins, power-ups, unlockables, rewards, sound, and progressive difficulty.',
    body:'Starlight Catcher is a colorful neon arcade game where players catch glowing stars with the matching bucket, complete progressively harder levels, earn coins, unlock characters and buckets, and use power-ups to handle challenging stages. The project grew from a learning exercise into a published Android release and gave me practical experience with touch interaction, real-time state updates, game loops, visual feedback, sound, rewards, and release testing.',
    points:['Catch glowing stars with the matching bucket using simple touch controls','Progress through levels with increasing difficulty and score challenges','Earn coins and unlock characters, buckets, rewards, and collectible items','Use power-ups such as Magnet and Slow Time during difficult stages','Daily rewards, sound effects, voice guidance, and neon visual feedback','Built, device-tested, and published through Google Play'],
    tech:['React Native','Expo','Game State','Collision Logic'],
    store:'https://play.google.com/store/apps/details?id=com.saimbashir.neoncolorcatcher',
    gallery:[
      {src:'https://play-lh.googleusercontent.com/fdAyXi26zzd1wIlMZJ00FOBSQFwwPZdKSgdQOnaf8NyGH3xKTJpeAmIxR9P6Cyfvi8qs66Hey8aqdKOhjkCU=w1080-h1920',fallback:'assets/apps/starlight-play-page.jpg',label:'Google Play screenshot 1'},
      {src:'https://play-lh.googleusercontent.com/deT2n6AXvWwDA1iha_l0Zx5oXjMYprYW9mt1iCoJh3xzDwPDVwsNF4WsaLu_U2tcayfmqRN5Ezx9i3DnXcVi=w1080-h1920',fallback:'assets/apps/starlight-play-page.jpg',label:'Google Play screenshot 2'},
      {src:'https://play-lh.googleusercontent.com/umqKpMjklrCXdE9mF-yx6UxQ4SYFT-IcYRT_Zy-nS1CLfRj_ctVzeYuCLqMbhzSW8EG_-DndfBP2sUHeko02=w1080-h1920',fallback:'assets/apps/starlight-play-page.jpg',label:'Google Play screenshot 3'},
      {src:'https://play-lh.googleusercontent.com/bWoacpFIAbOkyXIeb4VxkBvDLwBnaMtorMeNNiAJO-8RUZxrCsfN25AcWmH9UL-zWszY3H-_7M3tVzfdjBdNFhM=w1080-h1920',fallback:'assets/apps/starlight-play-page.jpg',label:'Google Play screenshot 4'},
      {src:'https://play-lh.googleusercontent.com/gL0db8nEjvR85a-7AdqLeydD5z2OzJuqlNvIDvAUHiIStpv2nSvWpCi_RTY6hmCKK2-3NK-g-b3_vg-TAVQgmA=w1080-h1920',fallback:'assets/apps/starlight-play-page.jpg',label:'Google Play screenshot 5'},
      {src:'https://play-lh.googleusercontent.com/b2QY8aisnSZZ_Aymwv78X0LGuzCjzI3vqswOFjSY6zlkFQa-TJSK5s_irvk0u3fu1AfuhNdfQHOm_KZDj1Dz_PU=w1080-h1920',fallback:'assets/apps/starlight-play-page.jpg',label:'Google Play screenshot 6'},
      {src:'https://play-lh.googleusercontent.com/w7P4kZKcokZjjEob2rVVmRzTbtGOv2TDsnlNSmT7kFTrix3KJYaokIa3tPDp_YLpCBTggqywOmJhhP8TgWA=w1080-h1920',fallback:'assets/apps/starlight-play-page.jpg',label:'Google Play screenshot 7'},
      {src:'https://play-lh.googleusercontent.com/iR56Nh9BE_vHHZLFvVKe2AaKOESXXqz78XkgY_ITqRUFi4BcvACHAwTjykOnCCDnqfx77hn_IQUSyBKcEbnt0A=w1080-h1920',fallback:'assets/apps/starlight-play-page.jpg',label:'Google Play screenshot 8'}
    ]
  },
  {
    id:'multi',order:3,category:['ai'],eyebrow:'Semester 2 AI project',title:'Multi-Agent AI Consultation',sub:'Multiple AI perspectives with neutral evaluation',status:'AI learning project',
    cover:'assets/multi-agent-workflow.svg',
    short:'A semester project exploring how several AI agents can answer the same query independently before a neutral evaluator compares the responses.',
    body:'Multi-Agent AI Consultation was an early project I worked on during my second semester to understand agent orchestration. The same user question is sent to multiple AI agents, each response is kept independent, and a neutral evaluator compares the candidates before presenting a final recommendation.',
    points:[
      'Send one user query to multiple AI agents',
      'Keep candidate responses independent before comparison',
      'Compare answers using relevance, correctness, completeness, and reasoning quality',
      'Return a selected recommendation with a short explanation',
      'Explore practical trade-offs such as response time and API usage'
    ],
    details:[
      'The project helped me understand prompt separation and response orchestration.',
      'I experimented with the idea of a neutral judge instead of trusting one model automatically.',
      'The workflow was designed so users can understand why one answer is preferred over the alternatives.'
    ],
    tech:['AI APIs','Prompt Design','Agent Orchestration','Response Evaluation'],
    gallery:['assets/multi-agent-workflow.svg']
  },
  {
    id:'grocery',order:4,category:['academic'],eyebrow:'Semester 3 coursework',title:'Grocery Management System',sub:'Data structures / C++',status:'Academic engineering project',
    cover:'assets/project-luma.svg',
    short:'A pointer-based management system using linked lists, stacks, and queues for common grocery operations.',
    body:'A coursework project focused on implementing core data structures inside a complete management workflow rather than only solving isolated exercises.',
    points:['Linked-list based records','Stacks and queues for workflow operations','Search, update, process and remove functions','Manual pointer and memory-management practice'],
    tech:['C++','Linked Lists','Stacks','Queues'],gallery:['assets/project-luma.svg']
  },
  {
    id:'timetable',order:5,category:['mobile'],eyebrow:'Independent Android app',title:'University Timetable Pro',sub:'Student productivity / Android',status:'Published on Google Play',
    cardCover:'assets/apps/timetable-play-card.jpg',
    cover:'assets/apps/timetable-play-page.jpg',
    short:'Timetables, attendance tracking, reminders, dashboards, and built-in cognitive tools in one student-focused Android app.',
    body:'University Timetable Pro is an all-in-one academic companion I built for university and college students. It combines weekly class scheduling, attendance tracking, smart reminders, an academic dashboard, schedule management, and built-in IQ games in a clean Android experience designed to help students stay organized throughout the semester.',
    points:['Create and manage a weekly timetable with subjects, teachers, classrooms, and meeting locations','Mark classes Present or Absent and automatically track attendance percentages and remaining allowed absences','Receive customizable class reminders for lectures, labs, tutorials, and meetings','Use the academic dashboard to see upcoming classes and attendance information quickly','Add, edit, and manage schedules with course-specific attendance limits','Built-in IQ Games Zone with Pattern Grid Memory, Logic Cipher, Shell Game, and Four in a Row','Offline-friendly timetable management with a lightweight student-focused interface','Built, tested, and published through Google Play'],
    tech:['React Native','Expo','Android','Notifications','Local Storage'],
    store:'https://play.google.com/store/apps/details?id=com.saimbashir.universitytimetable',
    gallery:[
      {src:'https://play-lh.googleusercontent.com/vn60quFF0BeIa92RGVqIOerL38C4S45IeSaCSPGx8zlmXqGD5HjQD0Bvhj9he-w623OXvFDAduZq8nsxKYV-QQ=w1080-h1920',fallback:'assets/apps/timetable-play-page.jpg',label:'Google Play screenshot 1'},
      {src:'https://play-lh.googleusercontent.com/Pdd7tx51FNZpLz81ZuEAFYDH2nqj_iCupiFZzgCK4BC-bxzNG7_dG4rUBcCddAwfUnWqIzhPVLdtW-7m0QD7akg=w1080-h1920',fallback:'assets/apps/timetable-play-page.jpg',label:'Google Play screenshot 2'},
      {src:'https://play-lh.googleusercontent.com/uzeUEqs5fSA6Ol9RoJ07-JiVfYwz8BhNhG2YGMgbeNCU4PjNs1lsCwMXs0Fyoz7OoJYbuxo1iZQBKD_-WHcVg=w1080-h1920',fallback:'assets/apps/timetable-play-page.jpg',label:'Google Play screenshot 3'},
      {src:'https://play-lh.googleusercontent.com/tT98v4ORb3QAlpHnwly164vhkhnhzV65FwEX_TOaHU7byBgmbVijS70wpyPpLvOquFdPu-Mirm8RGMZ33Rjgvns=w1080-h1920',fallback:'assets/apps/timetable-play-page.jpg',label:'Google Play screenshot 4'},
      {src:'https://play-lh.googleusercontent.com/hF9CWCXy_dmdBmo5tNhav4OIBC3vvbnvUMN3s4ANjMYgvSkwjXumJrqD4u5382AlVPsKQKZq4qAH2LN_ZaDl=w1080-h1920',fallback:'assets/apps/timetable-play-page.jpg',label:'Google Play screenshot 5'},
      {src:'https://play-lh.googleusercontent.com/3c2rnjxwiWFUZkurgenONW27th1i6-dhJRXTSgqE5ttwZG0Csj5DHh0LHGI7LUJrrxs-pkz5GuHWJhVXyYkT=w1080-h1920',fallback:'assets/apps/timetable-play-page.jpg',label:'Google Play screenshot 6'},
      {src:'https://play-lh.googleusercontent.com/Iz2w-i_zIQzgk7oxhPrapbEe_j5fbxrOoF4NDvdQvheIK4HksyHi7lS7XaMiK8WTqCcMLnU9Uv0sOFTYc69A=w1080-h1920',fallback:'assets/apps/timetable-play-page.jpg',label:'Google Play screenshot 7'}
    ]
  },
  {
    id:'pattern',order:6,category:['mobile'],eyebrow:'Independent Android game project',title:'Pattern Pulse',sub:'Cognitive pattern-memory game',status:'Closed testing · Google Play soon',
    cardCover:'assets/apps/pattern-play-card.jpg',
    cover:'assets/apps/pattern-level-grid.jpg',
    short:'Short visual memory challenges with increasing difficulty, scoring, coins, milestone rewards, power-ups, sound, and performance history.',
    body:'Pattern Pulse is a cognitive game focused on short memory and pattern-recognition challenges. I used it to practice responsive game UI, progression systems, local state, interaction feedback, and repeated Android testing. It is currently in closed testing and is planned to become available on Google Play soon.',
    points:['Pattern-memory level system','Coins, rewards and milestone progression','Power-ups and interaction feedback','Responsive Android-focused UI','Currently in closed testing before the Google Play release'],
    tech:['React Native','Expo','Android','Interaction Design'],
    gallery:['assets/apps/pattern-level-circle.jpg','assets/apps/pattern-how-to-play.jpg','assets/apps/pattern-powerups.jpg','assets/apps/pattern-splash.jpg','assets/apps/pattern-play-page.jpg']
  },
  {
    id:'recall',order:7,category:['ai'],eyebrow:'Multimodal AI · completed research prototype',title:'Recall Lens AI',sub:'Searchable knowledge across documents, images and voice',status:'Completed · AI retrieval',
    cover:'assets/recall-lens-interface.svg',
    short:'A multimodal personal knowledge assistant combining OCR, speech transcription, embeddings, semantic search and source-grounded RAG answers.',
    body:'Recall Lens AI was built to make fragmented personal information searchable in one place. It extracts content from PDFs, screenshots, notes and voice clips, connects related information using semantic embeddings and vector search, and generates grounded responses with relevant source references. The visual shown is a tailored concept illustration, not a captured live screen.',
    points:['Ingest and extract PDFs, screenshots, images, notes and audio with OCR and transcription','Index semantic embeddings alongside structured SQLite metadata','Search by meaning instead of relying only on exact keywords','Generate retrieval-augmented answers linked to supporting source passages','Organize related notes and concepts with searchable knowledge connections'],
    tech:['Python','RAG','Vector Search','OCR','SQLite'],
    gallery:['assets/recall-lens-interface.svg']
  },
  {
    id:'campusconnect',order:8,category:['academic'],eyebrow:'University systems · database engineering',title:'Campus Connect',sub:'Campus events, registrations and smart venue allocation',status:'Full-stack development demo',
    cover:'https://raw.githubusercontent.com/saimbashir/CampusConnect-DB/main/docs/assets/dashboard.png',
    short:'An event-management platform with student, organizer and admin workspaces, bookings, a calendar, and a transparent venue planner.',
    body:'Campus Connect is a university event-management platform built around an intentionally compact six-table relational database. It supports role-aware workflows, event discovery, student registration, venue booking, calendar management and SQL-backed reports. The Smart Venue Planner uses explainable capacity and scheduling rules rather than an unverified AI prediction model.',
    points:['Student, organizer and administrator workspaces with backend-enforced access rules','Event registration, cancellation, and real seat-availability tracking','Smart Venue Planner with capacity checks, availability scoring and booking conflict prevention','Campus calendar, relational SQL reporting, live charts and CSV exports','Responsive, accessible interface with desktop and mobile layouts'],
    tech:['JavaScript','Node.js','SQLite','SQL','Role-Based Access'],
    github:'https://github.com/saimbashir/CampusConnect-DB',
    gallery:[
      {src:'https://raw.githubusercontent.com/saimbashir/CampusConnect-DB/main/docs/assets/dashboard.png',label:'Actual project dashboard'},
      {src:'https://raw.githubusercontent.com/saimbashir/CampusConnect-DB/main/docs/assets/planner.png',label:'Smart Venue Planner'},
      {src:'https://raw.githubusercontent.com/saimbashir/CampusConnect-DB/main/docs/assets/mobile.png',label:'Mobile interface'}
    ]
  },
  {
    id:'lifepilot',order:9,category:['ai'],eyebrow:'AI automation · full-stack product',title:'LifePilot AI',sub:'A privacy-conscious Gmail assistant with human approval',status:'Development · integrations in validation',
    cover:'https://raw.githubusercontent.com/saimbashir/LifePilot-AI/main/docs/screenshots/preview-desktop.png',
    short:'Connect Gmail, understand message threads, prepare Groq-powered summaries and replies, and review every draft before sending.',
    body:'LifePilot AI combines a responsive React workspace with a Node.js backend, Gmail OAuth integration, AI-powered message assistance and a controlled approval center. The app supports Roman Urdu and English summaries, editable drafts and optional background monitoring. The image is an offline preview with fictional inbox data. PC-off monitoring and production push notifications require cloud deployment and end-to-end verification.',
    points:['OAuth-secured Gmail connection, real inbox retrieval and threaded replies','Groq-powered contextual email summaries and professional reply suggestions with explicit consent','Editable approval center with draft-version checks before any send','Voice/text commands and Roman Urdu/English workflows','Optional monitoring, PWA, and Android Trusted Web Activity scaffold; cloud hosting not yet verified'],
    tech:['React','TypeScript','Node.js','Gmail API','Groq','SQLite'],
    github:'https://github.com/saimbashir/LifePilot-AI',
    gallery:[
      {src:'https://raw.githubusercontent.com/saimbashir/LifePilot-AI/main/docs/screenshots/preview-desktop.png',label:'Offline desktop UI preview'},
      {src:'https://raw.githubusercontent.com/saimbashir/LifePilot-AI/main/docs/screenshots/preview-mobile.png',label:'Offline mobile UI preview'}
    ]
  },
  {
    id:'societyos',order:10,category:['academic'],eyebrow:'Multi-tenant SaaS · operations platform',title:'SocietyOS',sub:'Community and residential society management',status:'Developed · cloud validation pending',
    cover:'assets/societyos-interface.svg',
    short:'A role-aware community platform for residents, administrators, facilities, visitor access, maintenance and billing.',
    body:'SocietyOS is a React and Express community-management workspace backed by relational PostgreSQL data. Separate role experiences cover residents, staff and administrators, while business rules enforce tenant boundaries and permissions. Key flows include maintenance, visitor QR passes, facility reservations, billing, notices and reporting. This project-specific concept visual is based on the source architecture, not a fabricated production screenshot.',
    points:['Five role-specific workspaces with role permissions and tenant-aware data access','Facility scheduling, reservation approval, and overlap prevention','Visitor QR passes, check-in/out and resident communication','Maintenance tickets, status tracking and supporting uploads','Invoices, payments, analytics, notifications and audit records'],
    tech:['React','Express','PostgreSQL','Prisma','PGlite','QR Codes'],
    github:'https://github.com/saimbashir/SocietyOS-Web',
    gallery:['assets/societyos-interface.svg']
  },
  {
    id:'campuspath',order:11,category:['ai'],eyebrow:'EdTech · adaptive learning',title:'CampusPath AI',sub:'Course-grounded learning and personalized viva practice',status:'Tested development build',
    cover:'assets/campuspath-interface.svg',
    short:'An AI-assisted learning platform with source-aware tutoring, prerequisite-based practice, assessments and teacher-reviewed vivas.',
    body:'CampusPath AI is a Python and FastAPI adaptive learning project focused on grounded course-material retrieval, concept practice, assessment records and viva preparation. Student progress and prerequisite knowledge support personalized workflows; teachers can review and approve question sets. Generative features depend on configured provider credentials. The artwork is an interface concept derived from the existing product, not a live screenshot.',
    points:['Source-grounded retrieval and student-facing learning guidance','Prerequisite-aware practice and knowledge tracking','Formal and practice viva workflows with teacher review','Course-scoped assessments and progress analytics','FastAPI backend, persisted records and reproducible local demo'],
    tech:['Python','FastAPI','RAG','SQLite','Adaptive Learning'],
    github:'https://github.com/saimbashir/CampusPath-AI',
    gallery:['assets/campuspath-interface.svg']
  }
];

const grid=document.querySelector('#project-grid');
const esc=s=>String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
let activeFilter='all';

function renderProjects(){
  const shown=projects.filter(p=>activeFilter==='all'||p.category.includes(activeFilter)).sort((a,b)=>(a.order||999)-(b.order||999));
  grid.innerHTML=shown.map(p=>`<article class="project-card" data-id="${p.id}">
    <div class="project-media"><img src="${esc(p.cardCover||p.cover)}" alt="${esc(p.title)} project visual" loading="lazy" decoding="async"></div>
    <div class="project-body">
      <div class="project-kicker"><small>${esc(p.eyebrow)}</small><span class="project-status">${esc(p.status)}</span></div>
      <div class="project-meta"><h3>${esc(p.title)}</h3></div>
      <p>${esc(p.short)}</p>
      <ul class="project-tags">${p.tech.slice(0,4).map(t=>`<li>${esc(t)}</li>`).join('')}</ul>
      <div class="project-actions"><button type="button" data-open="${p.id}">View details ↗</button>${p.github?`<a href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">Source code ↗</a>`:''}${p.store?`<a href="${p.store}" target="_blank" rel="noreferrer">Google Play ↗</a>`:''}</div>
    </div>
  </article>`).join('');
}
renderProjects();

document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter=btn.dataset.filter;
  renderProjects();
}));

const modal=document.querySelector('#project-modal');
const backdrop=document.querySelector('#modal-backdrop');
const content=document.querySelector('#modal-content');
const closeBtn=document.querySelector('#modal-close');

function listBlock(title,items){
  if(!items||!items.length)return '';
  return `<div class="modal-subsection"><h5>${esc(title)}</h5><ul>${items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`;
}

function openProject(id){
  const p=projects.find(x=>x.id===id);if(!p)return;
  const seen=new Set([String(p.cover||'')]);
  const uniqueGallery=(p.gallery||[]).filter(item=>{
    const src=typeof item==='object'&&item!==null?item.src:item;
    const key=String(src||'');
    if(!key||seen.has(key))return false;
    seen.add(key);
    return true;
  });
  const gallery=uniqueGallery.map((item,i)=>{
    const isObj=typeof item==='object'&&item!==null;
    const src=isObj?item.src:item;
    const label=isObj&&item.label?item.label:(i===0?'Project screenshot':'Project screenshot');
    const coverClass=String(src).endsWith('.svg')?'cover-format':'';
    const errorAttr=isObj&&item.fallback?` onerror="this.onerror=null;this.closest('figure').remove();"`:'';
    return `<figure class="${coverClass}"><img src="${esc(src)}"${errorAttr} alt="${esc(p.title)} ${i+1}" loading="lazy" decoding="async"><figcaption><span>${esc(label)}</span><a href="${esc(src)}" target="_blank" rel="noreferrer">Full size ↗</a></figcaption></figure>`;
  }).join('');
  const gallerySection=gallery?`<h4>Project imagery</h4><div class="modal-gallery">${gallery}</div>`:'';
  content.innerHTML=`
    <span class="modal-label">${esc(p.status)}</span>
    <h2>${esc(p.title)}</h2>
    <p class="modal-sub">${esc(p.sub)}</p>
    <div class="modal-cover"><img src="${esc(p.cover)}" alt="${esc(p.title)} project cover"></div>
    <h4>Overview</h4><p>${esc(p.body)}</p>
    <h4>Highlights</h4><ul class="modal-points">${p.points.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
    ${listBlock('More about this project',p.details)}
    ${gallerySection}
    <h4>Built / explored with</h4><ul class="project-tags">${p.tech.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>
    <div class="modal-links">${p.github?`<a class="button primary" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">View GitHub source ↗</a>`:''}${p.store?`<a class="button primary" href="${p.store}" target="_blank" rel="noreferrer">Google Play ↗</a>`:''}</div>`;
  backdrop.hidden=false;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';setTimeout(()=>closeBtn.focus(),30);
}
function closeProject(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');backdrop.hidden=true;document.body.style.overflow=''}
document.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)openProject(b.dataset.open)});
closeBtn.addEventListener('click',closeProject);backdrop.addEventListener('click',closeProject);addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeProject()});

const menu=document.querySelector('.menu-button');
const mobileNav=document.querySelector('.mobile-nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));mobileNav.classList.toggle('open',!open);mobileNav.setAttribute('aria-hidden',String(open))});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');mobileNav.classList.remove('open');mobileNav.setAttribute('aria-hidden','true')}));

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -5% 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const progress=document.querySelector('#scroll-progress-bar');
function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?Math.min(100,(scrollY/max)*100):0)+'%'}
addEventListener('scroll',updateProgress,{passive:true});updateProgress();

const form=document.querySelector('#contact-form');
form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Portfolio inquiry from '+d.get('name'));const body=encodeURIComponent(d.get('message')+'\n\nFrom: '+d.get('name')+'\nEmail: '+d.get('email'));location.href='mailto:saimbashirkhan25@gmail.com?subject='+subject+'&body='+body});
document.querySelector('#year').textContent=new Date().getFullYear();
