# runrait-website

Marketing site for [runrait.ai](https://runrait.ai). Single-page, static-export Next.js site.

## Stack

- **Framework:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Build:** Static export (`output: "export"`)
- **Hosting:** GitHub Pages (via `.github/workflows/deploy.yml`)
- **Domain:** runrait.ai (CNAME)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files output to `out/`.

## Deploy

Push to `main`. GitHub Actions builds and deploys to GitHub Pages automatically.

## Structure

```
app/
  page.tsx          # Homepage with JSON-LD schemas
  layout.tsx        # Root layout, metadata, fonts
  globals.css       # Global styles
components/
  sections/         # Page sections (Hero, Problem, HowItWorks, etc.)
  ui/               # Shared UI components (Button, Card, SectionWrapper)
lib/
  constants.ts      # All site copy, FAQ, comparison data
public/
  robots.txt
  CNAME
```

## Knowledge Files

Company knowledge docs live in the repo root as markdown files. These are reference documents, not part of the site build.

| File | Purpose |
|---|---|
| `runrait-messaging-positioning.md` | Positioning, value prop, audience, differentiators |
| `runrait-brand-identity-system.md` | Voice, tone, writing standards, terminology |
| `runrait-visual-identity-brief.md` | Colours, typography, layout principles |
| `runrait-website-copy.md` | All website copy (reference; source of truth is `lib/constants.ts`) |
| `runrait-website-outline.md` | Site structure and section purposes |
| `runrait-seo-implementation.md` | SEO technical implementation guide |
| `runrait-seo-leadgen-plan.md` | SEO, GEO, and lead generation strategy |
| `runrait-validation-plan.md` | Business validation and growth milestones |
