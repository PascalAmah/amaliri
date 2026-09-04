/**
 * Normalize a URL path for section matching: strip trailing slashes and map
 * an empty string back to the site root ('/').
 */
function normalizePath(path: string): string {
  if (!path) return '/';
  const trimmed = path.replace(/\/+$/, '');
  return trimmed || '/';
}

/**
 * Whether a nav item (href such as '/projects', '/30days', '/about', '/#contact')
 * represents the section currently open at `pathname`.
 *
 * Rules:
 * - The homepage root ('/' and any '/#…' section link) is NEVER active — on the
 *   homepage no nav link is highlighted.
 * - A section link is active when the path equals it or lives under it, e.g.
 *   '/projects/scout/' highlights '/projects'.
 */
export function isNavItemActive(pathname: string, href: string): boolean {
  const [pathPart] = href.split('#');
  const current = normalizePath(pathname);
  const target = normalizePath(pathPart || '/');

  // Root links and homepage hash sections never highlight.
  if (target === '/') return false;

  return current === target || current.startsWith(`${target}/`);
}
