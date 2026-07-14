/**
 * Hero text reveal — splits the hero headline into words and reveals each one
 * rising out of a clip mask on page load, staggered left to right.
 */

export function mountHeroReveal() {
  const title = document.querySelector<HTMLElement>('.hero-title');
  if (!title || title.dataset.revealed === 'true') return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    title.dataset.revealed = 'true';
    return;
  }

  const words = (title.textContent ?? '').trim().split(/\s+/);
  title.textContent = '';
  title.dataset.revealed = 'true';

  words.forEach((word, i) => {
    const mask = document.createElement('span');
    mask.className = 'hero-word-mask';

    const inner = document.createElement('span');
    inner.className = 'hero-word';
    inner.textContent = word;
    inner.style.transitionDelay = `${i * 90}ms`;

    mask.appendChild(inner);
    title.appendChild(mask);
    if (i < words.length - 1) title.appendChild(document.createTextNode(' '));
  });

  // Next frame so the initial (hidden) state is committed before we reveal.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => title.classList.add('is-revealed'));
  });
}
