
(function(){
 const menu=document.querySelector('.km-menu'),links=document.querySelector('.km-links');
 if(menu&&links) menu.addEventListener('click',()=>links.classList.toggle('open'));
 const bar=document.querySelector('.km-progress');
 if(bar) window.addEventListener('scroll',()=>{const d=document.documentElement;bar.style.width=((d.scrollTop/(d.scrollHeight-d.clientHeight))*100)+'%'});
 const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
 const room=document.querySelector('.km-room');
 if(room){const core=room.querySelector('.core'),cap=room.querySelector('.room-caption');room.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>{room.querySelectorAll('[data-mode]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const m=b.dataset.mode;core.textContent=m.toUpperCase();if(cap)cap.textContent={focus:'Reduce noise. Identify the one move that matters. Then act.',energy:'Increase intensity without increasing chaos. Give the system a stronger pulse.',momentum:'Stop waiting for perfect certainty. Convert the next clear insight into movement.'}[m]||'';}));}
})();
