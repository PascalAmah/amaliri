/**
 * Scroll-triggered fade-in animations
 * Uses Intersection Observer for elements with fade-in-on-scroll class
 * Falls back for older browsers that don't support view-transition-timeline
 */

export function mountScrollAnimations() {
  const elements = document.querySelectorAll<HTMLElement>('.fade-in-on-scroll');
  if (elements.length === 0) return;

  // Check if browser supports CSS animation-timeline
  const supportsAnimationTimeline = CSS.supports('animation-timeline', 'view()');

  if (supportsAnimationTimeline) {
    // Modern browsers handle animation-timeline natively
    return;
  }

  // Fallback for older browsers: use Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('has-animated');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  elements.forEach((el) => {
    observer.observe(el);
  });
}
