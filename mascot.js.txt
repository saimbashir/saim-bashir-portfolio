/* Lightweight 3D mascot: projected geometry, independent head/body joints and gaze. */
(() => {
 const host=document.querySelector('#portrait');if(!host||host.dataset.renderer==='webgl')return;
 host.classList.add('mascot-portrait');host.setAttribute('role','img');host.setAttribute('aria-label','Baby penguin mascot. Move your pointer or use arrow keys to turn its head and body.');
 const canvas=document.createElement('canvas');canvas.className='mascot-canvas';canvas.setAttribute('aria-hidden','true');host.querySelector('.portrait-inner').replaceChildren(canvas);
 const c=canvas.getContext('2d');if(!c)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let w=400,h=570,scale=1,raf=0,last=0,x=0,y=0,bx=0,by=0,tx=0,ty=0,visible=false,rect=null;
 const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
 let seed=1341;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
 function fur(count,r){return Array.from({length:count},()=>{const z=random()*2-1,a=random()*Math.PI*2,k=Math.sqrt(1-z*z);const n=[k*Math.cos(a),z,k*Math.sin(a)];return{p:n.map((v,i)=>v*r[i]),n,length:1.8+random()*4.5,tone:random(),bend:random()*3-1.5}})}
 const headFur=fur(3200,[84,91,69]),bodyFur=fur(750,[62,77,49]),armFur=fur(100,[14,35,16]);
 function rotate(p,yaw,pitch){const cy=Math.cos(yaw),sy=Math.sin(yaw),cx=Math.cos(pitch),sx=Math.sin(pitch),xx=p[0]*cy+p[2]*sy,zz=-p[0]*sy+p[2]*cy;return[xx,p[1]*cx-zz*sx,p[1]*sx+zz*cx]}
 function project(p){const k=640/(640-p[2]);return[w/2+p[0]*k*scale,h*.49+p[1]*k*scale,k*scale]}
 function world(p,origin,yaw,pitch){const a=rotate(p,yaw,pitch);return a.map((v,i)=>v+origin[i])}
 function sphere(origin,r,yaw,pitch,light='#a8b1bf',dark='#343d4b'){
  const p=project(origin),xp=project(world([r[0],0,0],origin,yaw,pitch)),yp=project(world([0,r[1],0],origin,yaw,pitch));
  const rx=Math.hypot(xp[0]-p[0],xp[1]-p[1]),ry=Math.hypot(yp[0]-p[0],yp[1]-p[1]);
  const g=c.createRadialGradient(p[0]-rx*.38,p[1]-ry*.45,rx*.08,p[0]+rx*.1,p[1]+ry*.1,Math.max(rx,ry)*1.05);g.addColorStop(0,light);g.addColorStop(.48,light==='#fff0d3'?'#f5e6cb':'#6b788c');g.addColorStop(1,dark);
  c.fillStyle=g;c.beginPath();c.ellipse(p[0],p[1],rx,ry,0,0,Math.PI*2);c.fill();
 }
 function coat(){} // Smooth surface: no line-based fur or spikes.
 function eye(local,origin,yaw,pitch,blink){
  const p=project(world(local,origin,yaw,pitch)),r=22*p[2],rx=r*(.96-Math.abs(yaw)*.1),ry=r*1.13;
  c.save();c.translate(p[0],p[1]);c.scale(1,blink);
  const g=c.createRadialGradient(-r*.32,-r*.4,r*.1,0,0,r*1.25);g.addColorStop(0,'#ffffff');g.addColorStop(.65,'#fff9ec');g.addColorStop(1,'#a88e6c');c.fillStyle=g;c.beginPath();c.ellipse(0,0,rx,ry,0,0,Math.PI*2);c.fill();c.clip();
  const px=clamp(x*12-yaw*6,-9,9)*p[2],py=clamp(y*7+pitch*8,-7,7)*p[2],ir=r*.52;
  const iris=c.createRadialGradient(px-ir*.3,py-ir*.3,1,px,py,ir);iris.addColorStop(0,'#503321');iris.addColorStop(.65,'#35251c');iris.addColorStop(1,'#171917');c.fillStyle=iris;c.beginPath();c.arc(px,py,ir,0,Math.PI*2);c.fill();c.fillStyle='#080e0d';c.beginPath();c.arc(px,py,ir*.62,0,Math.PI*2);c.fill();
  c.fillStyle='#fff';c.beginPath();c.arc(px-ir*.3,py-ir*.4,ir*.27,0,Math.PI*2);c.fill();c.globalAlpha=.65;c.beginPath();c.arc(px+ir*.4,py+ir*.25,ir*.11,0,Math.PI*2);c.fill();c.restore();
 }
 function paint(now){
  c.setTransform(canvas.width/w,0,0,canvas.height/h,0,0);c.clearRect(0,0,w,h);
  const idle=reduced.matches?0:Math.sin(now*.0017)*1.8,bodyYaw=bx*.18,bodyPitch=-by*.04;
  const body=[bx*3,83+idle,-9],head=world([0,-110,8],body,bodyYaw,bodyPitch),yaw=x*.43,pitch=-y*.23+(!reduced.matches&&host.classList.contains('name-glow')?.11*Math.sin((performance.now()-nodStart)/1250*Math.PI*2)*Math.min(1,(performance.now()-nodStart)/200):0);
  const shadow=project([0,159,-10]);
  c.fillStyle='rgba(0,0,0,.28)';c.beginPath();c.ellipse(shadow[0],shadow[1],76*scale,13*scale,0,0,Math.PI*2);c.fill();
  for(const side of [-1,1]){sphere(world([side*30,68,19],body,bodyYaw,bodyPitch),[23,14,30],bodyYaw,0,'#646879','#262b32');}
  sphere(body,[62,77,49],bodyYaw,bodyPitch,'#a8b1bf','#343d4b');sphere(world([0,7,38],body,bodyYaw,bodyPitch),[48,64,13],bodyYaw,bodyPitch,'#fff0d3','#d9a977');coat(bodyFur,body,bodyYaw,bodyPitch);
  for(const side of [-1,1]){const arm=world([side*55,6,0],body,bodyYaw,bodyPitch);sphere(arm,[14,35,16],bodyYaw,bodyPitch);coat(armFur,arm,bodyYaw,bodyPitch);}
  sphere(head,[80,79,65],yaw,pitch,'#a8b1bf','#343d4b');for(const side of [-1,1])sphere(world([side*28,4,47],head,yaw,pitch),[32,44,20],yaw,pitch,'#fff0d3','#d9bfa1');
  // Eye sockets, brows and mouth share the head's 3D transform.
  const cycle=now%4700,blink=reduced.matches?1:cycle>4400?Math.max(.08,Math.abs(cycle-4540)/140):1;
  for(const side of [-1,1])eye([side*31,-16,64],head,yaw,pitch,blink);
  const beak=project(world([0,24,71],head,yaw,pitch));c.fillStyle='#d98415';c.beginPath();c.ellipse(beak[0],beak[1]+4*scale,12*scale,6*scale,0,0,Math.PI*2);c.fill();c.fillStyle='#ffc14d';c.beginPath();c.ellipse(beak[0],beak[1],14*scale,7*scale,0,0,Math.PI*2);c.fill();

 }
 let nodStart=-10000;const happyArea=document.querySelector('.about-title');
 function setHappy(on){if(on&&!host.classList.contains('name-glow'))nodStart=performance.now();if(!on)nodStart=-10000;host.classList.toggle('name-glow',on);wake();}
 happyArea.addEventListener('pointerenter',()=>setHappy(true));happyArea.addEventListener('pointerleave',()=>setHappy(false));
 happyArea.addEventListener('focusin',e=>{if(e.target.matches(':focus-visible'))setHappy(true);});happyArea.addEventListener('focusout',e=>{if(!happyArea.contains(e.relatedTarget))setHappy(false);});
 for(const el of happyArea.querySelectorAll('h2,.profile-photo'))el.tabIndex=0;
 function frame(now){raf=0;if(!visible||document.hidden)return;const dt=Math.min(50,now-last||16);last=now;const a=1-Math.exp(-dt/45),b=1-Math.exp(-dt/150);x+=(tx-x)*a;y+=(ty-y)*a;bx+=(tx-bx)*b;by+=(ty-by)*b;paint(now);host.dataset.lookX=x.toFixed(2);host.dataset.lookY=y.toFixed(2);if(!reduced.matches)raf=requestAnimationFrame(frame);}
 function wake(){if(visible&&!raf&&!document.hidden)raf=requestAnimationFrame(frame);}
 function target(a,b){tx=reduced.matches?0:clamp(a,-1,1);ty=reduced.matches?0:clamp(b,-.85,1);wake();}
 // Track across the visible section, not just inside the character silhouette.
 const section=host.closest('section');window.addEventListener('pointermove',e=>{rect||=host.getBoundingClientRect();target((e.clientX-rect.left-rect.width/2)/(rect.width*.75),(e.clientY-rect.top-rect.height*.42)/(rect.height*.6));},{passive:true});
 document.documentElement.addEventListener('pointerleave',()=>target(0,0));host.addEventListener('keydown',e=>{const q={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-.85],ArrowDown:[0,1],Escape:[0,0]}[e.key];if(q){e.preventDefault();target(...q);}});
 addEventListener('scroll',()=>rect=null,{passive:true});
 new ResizeObserver(()=>{const r=host.getBoundingClientRect();w=r.width;h=r.height;const d=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(w*d);canvas.height=Math.round(h*d);scale=Math.min(w/245,h/380);rect=null;paint(performance.now());wake();}).observe(host);
 new IntersectionObserver(es=>{visible=es.some(e=>e.isIntersecting);if(visible)wake();else{cancelAnimationFrame(raf);raf=0;last=0;}},{threshold:.05}).observe(host);
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;}else wake();});reduced.addEventListener('change',()=>{target(0,0);paint(performance.now());});
})();
