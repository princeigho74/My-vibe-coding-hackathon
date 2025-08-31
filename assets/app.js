(function(){
  const form = document.getElementById('ideaForm');
  const idea = document.getElementById('idea');
  const out = document.getElementById('output');
  const btn = document.getElementById('intasendBtn');
  const status = document.getElementById('payStatus');

  function genBrief(text){
    const trimmed = (text||'').trim();
    if(!trimmed){ return '➤ Enter an idea above to generate a brief.'; }
    const title = trimmed.split(/\.|;|\n/)[0].slice(0,80);
    return [
      `Title: ${title}`,
      '',
      `Problem: Limited access to affordable nutritious food in the target area.`,
      `Solution: ${trimmed}`,
      `Users: Smallholder farmers, schools, restaurants, households.`,
      `SDG Match: SDG 2 — Zero Hunger (Nigeria case study).`,
      `MVP Features: Listings, buyer requests, basic matching, payment placeholder.`,
      `Stack: HTML/CSS/JS (Pages) + optional Flask/Node API (Render/Heroku).`,
      '',
      'Copy this brief into README.md or your pitch deck.'
    ].join('\n');
  }

  form?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const brief = genBrief(idea.value);
    out.textContent = brief;
    try{ localStorage.setItem('lastBrief', brief); }catch(_){}
  });

  try{
    const last = localStorage.getItem('lastBrief');
    if(last){ out.textContent = last; }
  }catch(_){}

  btn?.addEventListener('click', ()=>{
    status.textContent = 'Simulated: IntaSend checkout launched (demo). Use a secure backend in production.';
    setTimeout(()=>{ status.textContent = 'Payment simulation complete.'; }, 1400);
  });
})();
