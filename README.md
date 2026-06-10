# Pascal Amaliri Portfolio

Personal portfolio website for Pascal Amaliri, built with Astro 6.

![Pascal Amaliri Portfolio](.github/assets/astro-tone-showcase-1600x900.png)

## Features

- Responsive Astro 6 static site
- Project collection in `src/content/projects`
- Projects index with tag filters and inline list search
- `/search` route powered by Pagefind
- `Cmd`/`Ctrl` + `K` command palette for quick project search
- Dynamic Island social bar (`SocialIsland.astro`)
- Dark mode with CSS tokens
- Custom code block theme via Expressive Code
- Related projects, RSS, sitemap, Open Graph metadata, and JSON-LD
- Optional giscus comments

## Quick Start

Requires Node.js 22.12.0 or newer.

```bash
pnpm install
pnpm run dev
```

The local dev server usually starts at `http://localhost:4321`.

## Commands

| Command            | Action                                         |
| ------------------ | ---------------------------------------------- |
| `pnpm run dev`      | Start the local dev server                     |
| `pnpm run build`    | Build the site and generate the Pagefind index |
| `pnpm run preview`  | Preview the production build                   |
| `pnpm run check`    | Run Astro type checks                          |
| `pnpm run lint`     | Run ESLint                                     |
| `pnpm run lint:css` | Run Stylelint                                  |
| `pnpm run format`   | Format source files with Prettier              |
| `pnpm test`        | Run unit and property tests                    |

## License

MIT licensed.
