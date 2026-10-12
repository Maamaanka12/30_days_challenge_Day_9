# VESTIRE Nº9

> **Modern Male Fashion Atelier** — a single-page, dependency-free marketing + shop site for a fictional tailoring house.

`HTML` · `CSS` · `Vanilla JS` · Day 9 of the 30 Days Coding challenge

---

## 📖 Overview

VESTIRE Nº9 is a responsive landing page for a menswear atelier: sharp suits, street essentials, and timeless basics. The site presents the brand story, a filterable product grid, the tailoring process, and a newsletter signup — all rendered from three static files with **no build step, no frameworks, and no npm install**.

**Design language:** a strict two-tone palette (olive `#31372B` on off-white `#FAF7EE`), condensed display type, monospace utility labels, outlined borders instead of shadows, and dashed "stitch" dividers that echo the tailoring theme.

---

## ✨ Features

- **Sticky pill navigation** with scroll-spy that highlights the active section
- **Responsive burger menu** for mobile (≤900px) with `aria-expanded` state
- **Hero section** with outlined display type, CTAs, and quick spec metadata
- **About section** with brand pillars and a layered photo collage
- **Filterable product grid** — 8 products across `suits`, `street`, and `essentials` categories, rendered from a JS data array
- **Craft section** — a real 3-step sequence (Measure → Cut → Sew) in an inverted dark card
- **Newsletter form** with inline validation feedback and a toast notification
- **Accessibility**: semantic landmarks, focus-visible outlines, alt text, `role="status"` live regions, `prefers-reduced-motion` support
- **Lazy-loaded images** and fully responsive layouts (CSS Grid + `clamp()` fluid type)

---

## 🗂 Project Structure

```
day 9/
├── index.html          # Page markup & content
├── styles.css          # All styling (design tokens → layout → responsive)
├── script.js           # Product data, filters, nav, scroll-spy, form
├── day9 challenge.docx # Original challenge brief
└── README.md
```

| File | Responsibility |
|------|----------------|
| `index.html` | Semantic sections: hero, about, clothes, craft, quote, footer |
| `styles.css` | CSS custom properties, component styles, breakpoints at 900px |
| `script.js` | `PRODUCTS` array, `render()`, filter chips, burger nav, scroll-spy, newsletter |

---

## 🚀 Getting Started

### Requirements

- Any modern browser (Chrome, Firefox, Edge, Safari)
- *(Optional)* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for auto-reload during development

### Run locally

No installation required — just open the file:

```bash
# Option 1: open directly
start index.html
```

Or serve it with a local dev server (recommended, so lazy-loaded images and modules behave like production):

```bash
# VS Code: right-click index.html → "Open with Live Server"

# ...or use Python
python -m http.server 8000
# → http://localhost:8000
```

---

## 🛠 Usage & Customization

### Add or edit products

Products live in the `PRODUCTS` array at the top of `script.js`:

```js
const PRODUCTS = [
  { id: 9, name: "Linen Camp Shirt", cat: "essentials", price: 79,
    tag: "WASHED LINEN",
    img: "https://images.unsplash.com/photo-...?q=80&w=700&auto=format&fit=crop" },
];
```

`cat` must match one of the filter chips: `suits`, `street`, `essentials`.

### Change the theme

Colors and fonts are CSS custom properties in `styles.css`:

```css
:root{
  --ink:  #31372B;   /* primary olive */
  --paper:#FAF7EE;   /* off-white background */
  --display:'Oswald',sans-serif;      /* headlines */
  --body:'Inter',sans-serif;          /* body copy */
  --mono:'IBM Plex Mono',monospace;   /* utility labels */
}
```

Swap these values to re-skin the entire site without touching component rules.

### Update navigation

Add a section → give it an `id`, add a matching `href="#id"` link in `.links`, and register the id in the `secs` array in `script.js` so scroll-spy tracks it.

---

## 📱 Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| > 900px | Two-column hero & about, 3-column craft steps, inline nav |
| ≤ 900px | Single-column stacking, collapsible burger menu, 1-column footer |

Fluid sizing throughout via `clamp()` — no fixed pixel typography for headings.

---

## ♿ Accessibility Notes

- All interactive elements are keyboard reachable with visible `:focus-visible` rings
- Filter buttons expose selected state via `.active` + `aria-label` on the tablist
- Newsletter confirmation is announced through `role="status"`
- `prefers-reduced-motion: reduce` disables smooth scrolling
- Decorative divider is hidden from screen readers with `aria-hidden="true"`

---

## 📸 Preview

Open `index.html` in a browser to view the full page. Key sections in order:

1. **Hero** — “DRESSED LIKE YOU MEAN IT.”
2. **About** — brand pillars + atelier photos
3. **Clothes** — filterable 8-product grid
4. **Craft** — Measure / Cut / Sew
5. **Quote** — customer testimonial
6. **Footer** — contact, newsletter, links

---

## 🙏 Credits

- **Photography** — [Unsplash](https://unsplash.com) (linked image URLs, free to use)
- **Fonts** — [Google Fonts](https://fonts.google.com) — Oswald, Inter, IBM Plex Mono
- **Challenge** — 30 Days Coding, Day 9 (see `day9 challenge.docx`)

---

## 📄 License

Free to use for learning and portfolio purposes. Replace brand copy, product data, and imagery before any commercial use.
