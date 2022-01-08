const btn = document.getElementById('menu-button');
const nav = document.getElementById('menu');
btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
});
