document.addEventListener('DOMContentLoaded',function(){
  var nodes=[].slice.call(document.querySelectorAll('[data-count]'));
  function run(el){var t=parseInt(el.getAttribute('data-count'),10);if(!t||el.dataset.done)return;el.dataset.done='1';var d=1300,t0=performance.now();el.textContent='0';
    (function tick(now){var p=Math.min(1,(now-t0)/d),e=1-Math.pow(1-p,3);el.textContent=String(Math.round(t*e));if(p<1)requestAnimationFrame(tick);})(t0);}
  if(!('IntersectionObserver' in window)){nodes.forEach(run);return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);io.unobserve(e.target);}});},{threshold:0.4});
  nodes.forEach(function(x){io.observe(x);});
});
