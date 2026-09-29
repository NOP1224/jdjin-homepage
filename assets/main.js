document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    const topic = button.dataset.filter;
    document.querySelectorAll('.filter').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.publication').forEach(item => {
      item.hidden = topic !== 'all' && item.dataset.topic !== topic;
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const links = [...document.querySelectorAll('.section-nav a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    }
  }, {rootMargin: '-12% 0px -72% 0px'});
  links.forEach(link => observer.observe(document.querySelector(link.hash)));
}
