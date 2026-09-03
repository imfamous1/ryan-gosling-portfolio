const playButton = document.querySelector('.play-button');
const vinyl = document.querySelector('.vinyl');

playButton?.addEventListener('click', () => {
  const isPlaying = vinyl.classList.toggle('playing');
  playButton.setAttribute('aria-pressed', String(isPlaying));
  playButton.innerHTML = isPlaying
    ? '<span>Ⅱ</span> Остановить атмосферу'
    : '<span>▶</span> Включить атмосферу';
});

const revealItems = document.querySelectorAll('.film-row, .timeline-track article, .facts div');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(18px)';
    item.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(item);
  });
}
