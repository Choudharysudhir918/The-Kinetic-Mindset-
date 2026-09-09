
document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.km-menu'),links=document.querySelector('.km-links');
  if(menu&&links){menu.addEventListener('click',()=>{links.classList.toggle('open');});}
  const progress=document.querySelector('.km-progress');
  const update=()=>{if(progress){const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h>0?(scrollY/h)*100:0)+'%';}};
  addEventListener('scroll',update,{passive:true});update();
  const items=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.08});items.forEach(x=>io.observe(x));}else items.forEach(x=>x.classList.add('show'));
  const room=document.querySelector('.km-room'),buttons=document.querySelectorAll('.controls button');
  const copy={focus:'Reduce noise. Identify the one move that matters. Then act.',energy:'Increase intensity without increasing chaos. Give the system a stronger pulse.',momentum:'Stop waiting for perfect certainty. Convert the next clear insight into movement.'};
  buttons.forEach(b=>b.addEventListener('click',()=>{buttons.forEach(x=>x.classList.remove('active'));b.classList.add('active');if(room){room.classList.remove('reading','energized','momentum');const m=b.dataset.mode||'focus';room.classList.add(m==='focus'?'reading':m==='energy'?'energized':'momentum');const cap=room.querySelector('.room-caption');if(cap)cap.textContent=copy[m];const core=room.querySelector('.core');if(core)core.textContent=m.toUpperCase();}}));
});
