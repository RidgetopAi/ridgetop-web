# DESIGN DECISION — Instance 3 Final Approval

## Status: APPROVED FOR BUILD

Instance 2's DESIGN_SPEC.md is comprehensive and ready. This document records final refinements and provides explicit build guidance for Instance 4.

---

## DESIGN APPROACH: CONFIRMED

**Terminal Elegance + Infrastructure Diagram** — Approved as specified.

The design balances:
- Technical credibility (monospace fonts, dark theme)
- Clear narrative (infrastructure diagram showing project relationships)
- Build feasibility (static HTML/CSS, no framework)

---

## REFINEMENTS FROM INSTANCE 3

### 1. Logo Handling

After reviewing the actual logo (geometric mountain peaks, black on white), I recommend:

- **Header**: Use logo at ~40px height, white version on dark background
- **Favicon**: Create a simple mountain icon derived from logo
- **Consider**: Creating an SVG version for scalability (but JPG works fine for now)

### 2. Infrastructure Diagram Simplification

The DESIGN_SPEC diagram shows:
```
Mandrel → Squire
          ↓
Surveyor →← Ridge-Control
               ↓
         Wilf-Command
```

**Simplified mental model for the SVG**:

```
     ┌─────────────────────────────────────┐
     │           FOUNDATION LAYER          │
     │  ┌─────────┐         ┌─────────┐   │
     │  │ Mandrel │─────────│ Squire  │   │
     │  │ Context │         │ Memory  │   │
     │  └────┬────┘         └────┬────┘   │
     └───────┼───────────────────┼────────┘
             │                   │
     ┌───────▼───────────────────▼────────┐
     │          UNDERSTANDING LAYER        │
     │           ┌──────────┐              │
     │           │ Surveyor │              │
     │           │  Vision  │              │
     │           └────┬─────┘              │
     └────────────────┼───────────────────┘
                      │
     ┌────────────────▼───────────────────┐
     │         ORCHESTRATION LAYER        │
     │         ┌──────────────┐           │
     │         │Ridge-Control │           │
     │         │ Command      │           │
     │         └──────┬───────┘           │
     └────────────────┼───────────────────┘
                      │
     ┌────────────────▼───────────────────┐
     │           VALUE LAYER              │
     │         ┌──────────────┐           │
     │         │ Wilf-Command │           │
     │         │ Real Users   │           │
     │         └──────────────┘           │
     └────────────────────────────────────┘
```

This layered structure:
1. Tells a clearer story (foundation → understanding → orchestration → value)
2. Is easier to implement in SVG
3. Works better on mobile (can stack vertically)

### 3. Mobile Strategy

**Critical decision**: On mobile, the infrastructure diagram should:
- Show a simplified vertical stack (not the full connections)
- Or collapse to "5 projects that build on each other"

**Don't try to make the complex SVG responsive** — have a mobile alternate.

### 4. Project Card Link Strategy

Instance 2 asked: "GitHub links or separate pages?"

**Decision**: GitHub links only. Reasons:
- No scope creep
- Projects speak for themselves in their repos
- Keep landing page focused

### 5. Hero Copy Refinement

Current: "Building infrastructure for AI-native development"

**Refined suggestion**:
```
Brian @ RidgetopAI

Building the infrastructure layer for
AI-native development.

Memory systems, architecture visualization,
and orchestration tools for humans working
with AI.
```

Keep it brief. Don't over-explain.

---

## EXPLICIT BUILD INSTRUCTIONS FOR INSTANCE 4

### Priority Order

1. **index.html** — Complete semantic structure
2. **styles.css** — All styling, no dark mode toggle (dark by default)
3. **script.js** — Intersection Observer for fade-in only
4. **Infrastructure diagram** — Inline SVG in index.html

### File Structure

```
ridgetop-web/
├── assets/
│   └── ridgetopai-logo.JPG    # Existing
├── index.html                  # Create
├── styles.css                  # Create
├── script.js                   # Create
├── STRATEGIC_BRIEF.md          # Keep (reference)
├── DESIGN_SPEC.md              # Keep (reference)
├── DESIGN_DECISION.md          # This file
└── SEED.md                     # Keep (reference)
```

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RidgetopAI — AI-Native Development Infrastructure</title>
    <meta name="description" content="Building the infrastructure layer for AI-native development. Memory systems, architecture visualization, and orchestration tools.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <a href="/" class="logo">
            <img src="assets/ridgetopai-logo.JPG" alt="RidgetopAI">
        </a>
        <nav class="nav">
            <a href="https://github.com/RidgetopAi" target="_blank" rel="noopener">GitHub</a>
            <a href="mailto:brian@ridgetopai.net">Contact</a>
        </nav>
    </header>

    <main>
        <section class="hero">
            <h1>Building the infrastructure layer for<br>AI-native development.</h1>
            <p class="hero-sub">Memory systems, architecture visualization, and orchestration tools for humans working with AI.</p>
        </section>

        <section class="diagram-section">
            <!-- SVG infrastructure diagram here -->
        </section>

        <section class="projects">
            <article class="project-card fade-in">
                <!-- Mandrel -->
            </article>
            <!-- ... other projects -->
        </section>
    </main>

    <footer class="footer">
        <p>Brian @ RidgetopAI</p>
        <nav>
            <a href="https://github.com/RidgetopAi">GitHub</a>
            <a href="mailto:brian@ridgetopai.net">Email</a>
        </nav>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

### CSS Variables (Copy from DESIGN_SPEC.md)

```css
:root {
    --bg: #0D1117;
    --surface: #161B22;
    --border: #30363D;
    --text: #E6EDF3;
    --text-muted: #8B949E;
    --text-dim: #484F58;
    --accent: #58A6FF;
    --accent-green: #7EE787;
    --code: #F0883E;

    --font-mono: 'JetBrains Mono', monospace;
    --font-sans: 'Inter', -apple-system, sans-serif;
}
```

---

## WHAT NOT TO DO

1. **Don't add a framework** — Static HTML is the right choice
2. **Don't over-animate** — Subtle fade-in only
3. **Don't add a blog** — Scope creep
4. **Don't add dark/light toggle** — Dark only
5. **Don't make the diagram too complex** — Simple connections
6. **Don't spend more than Instance 4-5 building** — Ship it

---

## SUCCESS CRITERIA (Instance 4)

At end of Instance 4, there should be:
- [ ] `index.html` with complete structure
- [ ] `styles.css` with all styling
- [ ] `script.js` with intersection observer
- [ ] Working infrastructure diagram (SVG)
- [ ] All 5 project cards with content
- [ ] Responsive layout (mobile tested locally)
- [ ] Ready for deployment (no build step needed)

---

## SUCCESS CRITERIA (Instance 5)

- [ ] Files copied to VPS `/var/www/ridgetopai.net/`
- [ ] Nginx config created and enabled
- [ ] SSL certificate installed
- [ ] Site accessible at https://ridgetopai.net
- [ ] Verified with browser-tool.js

---

## DESIGN DECISION: FINALIZED

**Instance 3 approves the design specification for build.**

The DESIGN_SPEC.md contains all the details needed. This document provides clarifications and explicit build guidance.

Instance 4 should start building immediately.

---

*Instance 3 Complete — Design Decision Finalized*
