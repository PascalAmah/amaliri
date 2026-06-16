/**
 * Scroll reveal — elements with [data-reveal] animate in as they enter the viewport.
 * Supports staggered children via [data-reveal-group] on the parent.
 */

export function mountScrollAnimations() {
  // Respect reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-group] > *').forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        el.classList.add('is-revealed');
        observer.unobserve(el);
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  // Direct reveal elements
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    observer.observe(el);
  });

  // Staggered group children
  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const children = Array.from(group.children) as HTMLElement[];
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 80}ms`;
      child.classList.add('reveal-child');
      observer.observe(child);
    });
  });
}
