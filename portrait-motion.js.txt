/* Photo-based gaze: neck-anchored deformation and local eye motion, on demand. */
(() => {
  const portrait=document.querySelector('#portrait'),human=portrait?.querySelector('.human');
  if(!portrait||!human)return;
  portrait.setAttribute('aria-label','Move your pointer over the portrait to guide the head and eyes. Arrow keys also control the gaze.');
  portrait.removeAttribute('role');
  const canvas=document.createElement('canvas');canvas.className='portrait-gaze';canvas.setAttribute('aria-hidden','true');portrait.querySelector('.portrait-inner').append(canvas);
  function canvasFallback(){
    const c=canvas.getContext('2d');if(!c){canvas.remove();return;}
    let ready=false,raf=0,rect=null,x=0,y=0,tx=0,ty=0,last=0;
    const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
    const image=new Image(),head=document.createElement('canvas');head.width=300;head.height=330;
    const hc=head.getContext('2d');
    function point(px,py){const gx=px+365,gy=py;
      const edge=Math.max(0,Math.sin(Math.PI*px/300));
      const weight=Math.pow(edge,.4)*Math.max(0,Math.min(1,(320-gy)/80));
      // Shallow face-depth projection: yaw and pitch, anchored at the neck.
      // This is a photographic approximation, not a rigged 3D likeness.
      const dx=gx-512,dy=gy-220,u=dx/104;
      const depth=58*Math.sqrt(Math.max(0,1-u*u))+17*Math.exp(-((dx/24)**2+((gy-171)/37)**2));
      const yaw=x*.25,pitch=-y*.15;
      const X=dx*Math.cos(yaw)+depth*Math.sin(yaw);
      const Z=-dx*Math.sin(yaw)+depth*Math.cos(yaw);
      const Y=dy*Math.cos(pitch)-Z*Math.sin(pitch);
      return [px+weight*(X-dx),py+weight*(Y-dy)];
    }
    function triangle(a,b,d,A,B,D){
      const det=a[0]*(b[1]-d[1])+b[0]*(d[1]-a[1])+d[0]*(a[1]-b[1]);
      const solve=v=>[(v[0]*(b[1]-d[1])+v[1]*(d[1]-a[1])+v[2]*(a[1]-b[1]))/det,(v[0]*(d[0]-b[0])+v[1]*(a[0]-d[0])+v[2]*(b[0]-a[0]))/det,(v[0]*(b[0]*d[1]-d[0]*b[1])+v[1]*(d[0]*a[1]-a[0]*d[1])+v[2]*(a[0]*b[1]-b[0]*a[1]))/det];
      const xx=solve([A[0],B[0],D[0]]),yy=solve([A[1],B[1],D[1]]);
      const center=[(A[0]+B[0]+D[0])/3,(A[1]+B[1]+D[1])/3];const expand=P=>[center[0]+(P[0]-center[0])*1.16,center[1]+(P[1]-center[1])*1.16];const aa=expand(A),bb=expand(B),dd=expand(D);c.save();c.beginPath();c.moveTo(...aa);c.lineTo(...bb);c.lineTo(...dd);c.closePath();c.clip();c.transform(xx[0],yy[0],xx[1],yy[1],xx[2],yy[2]);c.drawImage(head,0,0);c.restore();
    }
    function paint(){
      hc.clearRect(0,0,300,330);hc.drawImage(image,365,0,300,330,0,0,300,330);
      // Independent iris movement within each eyelid, before head projection.
      for(const ex of [481,543]){
        const ey=143,lx=ex-365;hc.save();hc.beginPath();hc.ellipse(lx,ey,10,4.1,0,0,Math.PI*2);hc.clip();
        const shade=hc.createLinearGradient(0,ey-4,0,ey+4);shade.addColorStop(0,'#988d80');shade.addColorStop(.48,'#ddd5ca');shade.addColorStop(1,'#bcb4a8');hc.fillStyle=shade;hc.fillRect(lx-11,ey-5,22,10);
        hc.drawImage(image,ex-5,ey-6,10,12,lx-5+x*4,ey-6+y*1.8,10,12);hc.restore();
      }
      const scale=canvas.width/1024;c.setTransform(scale,0,0,scale,0,0);c.clearRect(0,0,1024,1536);
      c.save();c.beginPath();c.rect(0,0,1024,1536);c.rect(365,0,300,330);c.clip('evenodd');c.drawImage(image,0,0);c.restore();
      c.save();c.translate(365,0);
      for(let j=0;j<11;j++)for(let i=0;i<10;i++){
        const a=[i*30,j*30],b=[i*30+30,j*30],d=[i*30,j*30+30],e=[i*30+30,j*30+30];
        triangle(a,b,d,point(...a),point(...b),point(...d));triangle(b,e,d,point(...b),point(...e),point(...d));
      }
      c.restore();
    }
    function draw(now){raf=0;const dt=Math.min(32,now-last||16);last=now;const t=1-Math.exp(-dt/42);x+=(tx-x)*t;y+=(ty-y)*t;if(ready){paint();portrait.dataset.gazeX=x.toFixed(3);portrait.dataset.gazeY=y.toFixed(3);}if(Math.abs(tx-x)+Math.abs(ty-y)>.002)raf=requestAnimationFrame(draw);}
    function target(a,b){tx=reduce?0:Math.max(-1,Math.min(1,a));ty=reduce?0:Math.max(-1,Math.min(1,b));if(ready&&!raf)raf=requestAnimationFrame(draw);}
    function resize(){const r=portrait.getBoundingClientRect();canvas.width=Math.round(r.width*Math.min(devicePixelRatio||1,1.5));canvas.height=Math.round(canvas.width*1.5);rect=null;if(ready)paint();}
    portrait.addEventListener('pointermove',e=>{rect||=portrait.getBoundingClientRect();target((e.clientX-rect.left-rect.width*.5)/(rect.width*.5),(e.clientY-rect.top-rect.height*.09)/(rect.height*.5));},{passive:true});
    portrait.addEventListener('pointerleave',()=>{rect=null;target(0,0);});portrait.addEventListener('blur',()=>target(0,0));
    portrait.addEventListener('keydown',e=>{const d={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1],Escape:[0,0]}[e.key];if(d){e.preventDefault();target(...d);}});
    addEventListener('scroll',()=>{rect=null;},{passive:true});new ResizeObserver(resize).observe(portrait);
    image.onload=()=>{hc.drawImage(image,365,0,300,330,0,0,300,330);ready=true;resize();portrait.classList.add('gaze-ready');portrait.dataset.gazeRenderer='canvas';};image.src=human.src;
  }
  canvasFallback();
})();
