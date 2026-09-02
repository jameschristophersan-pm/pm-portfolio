# PM Portfolio Site

This is an MVP Astro portfolio site with one public case study: WhatsApp Commerce at ruparupa.

## Before Publishing

The current public identity values live in `src/data/profile.ts`.

The GitHub Pages workflow automatically sets the public site URL from the GitHub owner and repository name.

## Recommended Repository

Create a public GitHub repository named:

```text
pm-portfolio
```

Then push this folder to that repository and enable GitHub Pages using GitHub Actions. With the current default configuration, the GitHub Pages URL will be:

```text
https://jameschristophersan-pm.github.io/pm-portfolio/
```

## Local Preview

Install dependencies:

```text
pnpm install
```

Start the site:

```text
pnpm dev
```

Build the final static site:

```text
pnpm build
```
