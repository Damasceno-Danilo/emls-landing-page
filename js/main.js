document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.getElementById('menuToggle');
const panel = document.getElementById('mobile-panel');
toggle.addEventListener('click', () => {
  const open = panel.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  panel.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
}

const WHATSAPP_NUMBER = '5511916821632';
document.getElementById('whatsappForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const nome = f.get('nome') || '';
  const telefone = f.get('telefone') || '';
  const instrumento = f.get('instrumento') || '';
  const mensagem = f.get('mensagem') || '';
  const texto = `Olá! Meu nome é ${nome} (tel: ${telefone}). Tenho interesse em aulas de ${instrumento}. ${mensagem}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank', 'noopener');
});
