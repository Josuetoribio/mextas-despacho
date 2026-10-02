# MEXTAS Design System

**MEXTAS · Despacho Jurídico** — a Mexico City corporate law firm (Av. Reforma 123, Piso 10, Col. Juárez). It serves companies, executives, investors and high-value private clients across corporate, M&A, litigation/arbitration, IP, labor, real estate, tax, compliance, data protection and international trade.

One product surface: the **marketing website** (single page + simulated routes `/servicios/[slug]`, `/casos/[slug]`, `/equipo/[slug]`, `/blog/[slug]`). No backend — forms, newsletter, search and detail views are simulated in the frontend.

## Sources
- `uploads/despachosmextas.png` → `assets/reference/despachosmextas.png` — primary art-direction reference (full homepage comp).
- Project photography (uploaded, AI-generated for the brand) → `assets/img/`: hero reception, boardroom/contact, four case images, four lawyer portraits.
- Written brief from the client (Spanish) — structure, copy and interactions.
- No codebase, Figma, logo file or font files were provided.

## Index
- `styles.css` — entry point (imports only) → `tokens/{fonts,colors,typography,spacing,motion,base}.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (see below)
- `ui_kits/website/` — full interactive site: `index.html`, `data.js` (demo content), `Chrome.jsx` (header, mobile menu, search), `Hero.jsx`, `Sections.jsx`, `Overlays.jsx` (service/case/profile/article/consult), `Footer.jsx` (contact + footer), `kit.css` (responsive layout)
- `assets/img/`, `assets/reference/`
- `SKILL.md`, `thumbnail.html`

## Components
- core: **Button** (primary / outline / link, tone dark|light, sliding arrow), **Eyebrow**, **Logo** (typographic wordmark), **Icon** (Lucide wrapper)
- content: **SectionHeading**, **ServiceCard**, **CaseCard**, **TeamCard**, **TrustItem**
- forms: **TextField** (underline input/textarea), **ChoiceTile** (radio-style option)
- overlay: **Modal** (dialog / drawer / fullscreen)

No source defined a component inventory; this set is sized to what the site needs. Intentional additions: `Icon` (glyph wrapper), `Logo` (no mark file exists).

## CONTENT FUNDAMENTALS
- **Language:** Spanish (Mexico). Formal-warm: addresses the reader as **tú** ("impulsan tu negocio", "Cuéntanos"), firm speaks as **nosotros** ("Protegemos y acompañamos…").
- **Tone:** measured, precise, advisory. Short declarative sentences; verbs of accompaniment and protection (acompañamos, protegemos, diseñamos, defendemos). No hype, no superlatives, no invented dollar figures — results are described qualitatively ("Sentencia favorable confirmada en apelación").
- **Casing:** Sentence case for headlines ("Resultados que hablan por nosotros."), ending with a period. UPPERCASE only for eyebrows, nav, buttons, micro-labels ("NUESTROS SERVICIOS", "AGENDAR CONSULTA", "VER CASO →").
- **Headline pattern:** one idea, 4–8 words, optional bronze italic accent word ("Soluciones legales que *impulsan* tu negocio.").
- **Avoid:** generic filler ("Somos una empresa comprometida…"), emoji, exclamation marks, lorem ipsum.
- **Numbering:** editorial two-digit indexes (01 — Visión estratégica).

## VISUAL FOUNDATIONS
- **Palette:** carbon blacks (`--carbon-950…600`) for hero, cases, process, contact; warm ivory (`--ivory-50/100`, `--white-warm`) for services, team, blog, footer. Sections alternate dark/light in bands. Bronze (`--bronze-500` #b4905e) is **accent only**: primary CTA fill, one headline word, icons, 36px rules, active nav, dots. On ivory use `--bronze-700` for text.
- **Type:** Newsreader (serif, 400, slight negative tracking) for all headlines; Manrope for UI/body. Micro-labels 11px/600 with .14–.32em tracking. Body 15px/1.65. Wordmark: Manrope 300, .42em tracking.
- **Layout:** 1280 container, fluid gutter `clamp(20,4vw,56)`; section padding `clamp(72,9vw,128)`. Signature split: narrow left column (eyebrow + title + rule + link) and a 4-up grid on the right. Asymmetric 12-col editorial grid for "Por qué MEXTAS" (staggered columns).
- **Imagery:** warm-lit architecture at night (stone, glass, marble, amber LEDs), cool-daylight glass facades for cases, studio portraits on charcoal. Photos run full-bleed or edge-to-edge within cards; slight desaturation at rest, full on hover. Never illustrations.
- **Backgrounds / protection:** hero uses a left-weighted carbon gradient scrim (`--scrim-hero`) plus a bottom fade; no decorative gradients elsewhere. Translucent blurred bars (header on scroll, trust band, WhatsApp pill) are the only use of blur/transparency.
- **Borders & cards:** 1px hairlines (`--line-*`, 10–24% alpha). Corners square (0–2px). Service cards: ivory raised, hairline, no shadow at rest → `--shadow-lift` + translateY(-3px) on hover. Case cards: carbon raised + hairline, image zoom 1.035 over 1.2s.
- **Motion:** institutional, slow-out easing (`--ease-reveal` cubic-bezier(.16,1,.3,1)). Fade + 22px rise on scroll reveal, 90ms stagger. Hero: staggered text entry, 9s Ken Burns settle, 0.18 parallax. Modals slide/fade 700ms. No bounces, no spins.
- **Hover:** arrow nudges 4px; underline grows from left under nav links; outline buttons invert fill; color transitions 320ms. **Press/focus:** 1px bronze focus ring offset 3px; no shrink.
- **Forms:** underline-only fields, label turns bronze on focus; option tiles with radio dot.
- **Fixed elements:** sticky header (92→68px, transparent→blurred carbon), WhatsApp pill bottom-right styled as part of the UI.

## ICONOGRAPHY
- **Lucide** via CDN (`lucide@0.469.0` UMD), rendered through the `Icon` component at stroke 1–1.25 — thin, linear, matching the reference's gold line icons. Substitution: the reference shows bespoke line icons; Lucide is the closest CDN match (flagged).
- Common glyphs: shield-check, target, award, scale, briefcase, handshake, file-text, lock-keyhole, arrow-right, phone, mail, map-pin, clock, linkedin, message-circle.
- Icons in bronze on both surfaces; UI chevrons/arrows inherit text color.
- No emoji, no unicode pictograms, no PNG icons.

## Logo
No logo file was supplied. The brand is rendered as type only (`Logo` component). The signage in the reference image is photographic and must not be redrawn.

## Fonts
Newsreader + Manrope loaded from Google Fonts (substitutes — the reference's typefaces are unidentified). Provide licensed files to replace.
