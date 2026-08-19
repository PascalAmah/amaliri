/**
 * "More Work" scroll rows — desktop frame image swap.
 *
 * The active row is chosen by proximity to the viewport center, but the
 * highlight + frame image "step" toward that target one row at a time on a
 * slow interval. This guarantees every project is touched in order while
 * scrolling — no rows are skipped, even on fast scrolls.
 */

let cleanup: (() => void) | null = null;

export function mountMoreWork() {
  const rows = Array.from(document.querySelectorAll<HTMLElement>('.mw-row'));
  const frameImg = document.getElementById('mw-frame-img') as HTMLImageElement | null;
  const frameBox = document.getElementById('mw-frame-box');

  if (!rows.length || !frameImg || !frameBox) return;

  // Re-runs on every navigation — remove any previous listeners/timers.
  if (cleanup) cleanup();

  // How long each project stays active before stepping to the next.
  const STEP_DELAY = 600;

  let currentId: string | null = null;
  let currentIndex = 0;
  let targetIndex = 0;
  let stepTimer: number | null = null;
  let ticking = false;

  function setActive(row: HTMLElement) {
    if (!row.classList.contains('is-active')) {
      rows.forEach((r) => r.classList.remove('is-active'));
      row.classList.add('is-active');
    }

    const id = row.dataset.mwImage;
    if (!id || id === currentId) return;
    currentId = id;

    const src = row.dataset.mwSrc;
    if (!src) return;

    frameImg!.style.opacity = '0';
    frameBox!.classList.add('is-swapping');
    window.setTimeout(() => {
      frameImg!.src = src;
      frameImg!.alt = row.dataset.mwTitle || '';
      frameImg!.style.opacity = '1';
      frameBox!.classList.remove('is-swapping');
    }, 180);
  }

  function computeTargetIndex() {
    const reference = window.innerHeight * 0.5;
    let closest = 0;
    let bestDistance = Infinity;

    rows.forEach((row, i) => {
      const rect = row.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = Math.abs(center - reference);
      if (distance < bestDistance) {
        bestDistance = distance;
        closest = i;
      }
    });

    return closest;
  }

  function startStepping() {
    if (stepTimer !== null) return;

    stepTimer = window.setInterval(() => {
      if (currentIndex === targetIndex) {
        window.clearInterval(stepTimer!);
        stepTimer = null;
        return;
      }

      currentIndex += currentIndex < targetIndex ? 1 : -1;
      setActive(rows[currentIndex]);
    }, STEP_DELAY);
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      targetIndex = computeTargetIndex();
      if (targetIndex !== currentIndex) startStepping();
      ticking = false;
    });
  }

  // Initial state — activate the closest row immediately.
  currentIndex = computeTargetIndex();
  targetIndex = currentIndex;
  setActive(rows[currentIndex]);

  window.addEventListener('scroll', onScroll, { passive: true });

  cleanup = () => {
    window.removeEventListener('scroll', onScroll);
    if (stepTimer !== null) {
      window.clearInterval(stepTimer);
      stepTimer = null;
    }
  };
}
