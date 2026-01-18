# RIDGETOP-WEB DESIGN SPECIFICATION
## Instance 2 Deliverable — Ready for Build Phase

---

## DESIGN DECISION: Terminal Elegance + Infrastructure Diagram

**Selected Approach**: Concept B (Infrastructure Diagram) with Concept A elements (terminal aesthetics)

This balances:
- **Distinctiveness**: Not a generic developer portfolio
- **Professionalism**: Clean, technical documentation style
- **Buildability**: Achievable in 2-3 instances with static HTML/CSS
- **Narrative**: Projects tell a coherent infrastructure story

---

## COLOR PALETTE

Based on the logo (black geometric mountains on white), interpreted for dark theme:

| Role | Hex | Usage |
|------|-----|-------|
| Background | `#0D1117` | Main background (GitHub dark) |
| Surface | `#161B22` | Cards, code blocks |
| Border | `#30363D` | Subtle separators |
| Text Primary | `#E6EDF3` | Headlines, body text |
| Text Secondary | `#8B949E` | Descriptions, metadata |
| Text Muted | `#484F58` | Hints, placeholders |
| Accent | `#58A6FF` | Links, highlights, CTAs |
| Accent Alt | `#7EE787` | Success states, "active" |
| Code | `#F0883E` | Inline code, numbers |

**Rationale**: GitHub's color system is familiar to developers, proven accessible, and aligns with the "developer tools" positioning. The accent blue provides one pop of color without being garish.

---

## TYPOGRAPHY

| Role | Font | Weight | Size |
|------|------|--------|------|
| Headlines | JetBrains Mono | 700 | 48px / 32px / 24px |
| Body | Inter | 400 | 18px |
| Code/Stats | JetBrains Mono | 400 | 16px |
| Labels | Inter | 500 | 14px |

**Font Loading Strategy**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

---

## LAYOUT STRUCTURE

```
┌─────────────────────────────────────────────────────────────────┐
│                            HEADER                                │
│  [Logo]                                      [GitHub] [Email]    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                           HERO SECTION                           │
│                                                                  │
│  "Building infrastructure for AI-native development"            │
│                                                                  │
│  [One paragraph explaining the mission — 2-3 sentences]          │
│                                                                  │
│  ↓ scroll indicator                                              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    INFRASTRUCTURE DIAGRAM                        │
│                                                                  │
│  Visual showing how the projects connect:                        │
│                                                                  │
│     ┌─────────┐      ┌─────────┐      ┌─────────┐              │
│     │ Mandrel │ ───► │ Squire  │      │Surveyor │              │
│     │ Context │      │ Memory  │      │ Vision  │              │
│     └────┬────┘      └────┬────┘      └────┬────┘              │
│          │                │                │                    │
│          └────────────────┼────────────────┘                    │
│                           ▼                                      │
│                    ┌─────────────┐                               │
│                    │Ridge-Control│                               │
│                    │Orchestration│                               │
│                    └──────┬──────┘                               │
│                           │                                      │
│                           ▼                                      │
│                    ┌─────────────┐                               │
│                    │Wilf-Command │                               │
│                    │ Real Value  │                               │
│                    └─────────────┘                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      PROJECT CARDS                               │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │ MANDREL                                                  │    │
│  │                                                          │    │
│  │ Persistent memory for AI development                     │    │
│  │                                                          │    │
│  │ • 27 MCP tools • 25k lines TypeScript • Zero API costs  │    │
│  │                                                          │    │
│  │ [TypeScript] [PostgreSQL] [pgvector]        [GitHub →]   │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                  │
│  [Similar cards for Squire, Surveyor, Ridge-Control, Wilf]      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                         FOOTER                                   │
│                                                                  │
│  Brian @ RidgetopAI                                              │
│  [GitHub]  [Email]                                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## PROJECT CONTENT (Ready for Copy/Paste)

### Mandrel

**Tagline**: Persistent memory infrastructure for AI-assisted development

**Problem → Solution**: AI agents forget everything between sessions. Mandrel gives them a semantic, searchable knowledge base that survives across conversations.

**Key Stats**:
- 27 MCP tools
- ~25,000 lines TypeScript
- Zero external API costs (local embeddings)
- 12 database tables with vector support

**Tech Stack**: TypeScript, PostgreSQL, pgvector, Transformers.js

**Distinctive Feature**: Local embeddings via Transformers.js — no data leaves your machine, works offline

---

### Squire

**Tagline**: AI memory that knows the user

**Problem → Solution**: Current AI assistants are amnesiacs. Squire gives AI genuine memory — not retrieval, but understanding of patterns, priorities, relationships, and goals.

**Key Stats**:
- ~36,000 lines TypeScript
- 32 database migrations
- 18+ REST API endpoints
- 3D WebGL Memory Village visualization

**Tech Stack**: TypeScript, Next.js, PostgreSQL, Three.js, Socket.IO

**Distinctive Feature**: Story Engine — "Generate Not Retrieve" — synthesizes narratives from memory graphs instead of returning document chunks

---

### Surveyor

**Tagline**: See your codebase, understand your architecture

**Problem → Solution**: AI-generated code becomes incomprehensible fast. Surveyor visualizes three layers: structural (imports/exports), behavioral (what functions do), and intent (emergent patterns).

**Key Stats**:
- Multi-language support (TypeScript first, Rust planned)
- LLM-powered behavioral analysis
- React Flow visualization

**Tech Stack**: TypeScript, ts-morph, React Flow, pnpm monorepo

**Distinctive Feature**: Three-layer mapping — structure, behavior, intent — makes invisible architecture visible

---

### Ridge-Control

**Tagline**: Terminal command center for AI-native development

**Problem → Solution**: Development workflows are fragmented. Ridge-Control unifies terminal emulation, AI interaction, process monitoring, and orchestration in one TUI.

**Key Stats**:
- Full PTY terminal emulator
- Built-in Claude API client with tool use
- Multi-tab interface with split panes
- 45,000+ lines Rust (planned)

**Tech Stack**: Rust, Ratatui

**Distinctive Feature**: The multi-instance experiment — built collaboratively by sequential AI instances, each contributing incrementally with handoffs via Mandrel

---

### Wilf-Command

**Tagline**: Sales territory command center (real users, real value)

**Problem → Solution**: Sales reps manage territories with scattered spreadsheets. Wilf-Command centralizes dealers, product mix, travel planning, and visit tracking in one dashboard.

**Key Stats**:
- ~12,000 lines TypeScript/React
- 10+ database tables with RLS
- 6 major feature modules
- CSV import from Sales-I

**Tech Stack**: Next.js, Supabase, Tailwind CSS, React Query

**Distinctive Feature**: Proof that AI-assisted development delivers real business value — production tool with actual users

---

## COMPONENT INVENTORY

| Component | Purpose | Complexity |
|-----------|---------|------------|
| `Header` | Logo + nav links | Simple |
| `Hero` | Headline + tagline + scroll hint | Simple |
| `InfrastructureDiagram` | SVG visualization of project connections | Medium |
| `ProjectCard` | Expandable card with stats + tech | Medium |
| `TechBadge` | Small pill showing technology | Simple |
| `Footer` | Contact + attribution | Simple |

**Total Components**: 6

---

## RESPONSIVE BREAKPOINTS

| Breakpoint | Layout |
|------------|--------|
| < 640px (mobile) | Single column, stacked cards, simplified diagram |
| 640-1024px (tablet) | Two-column cards, full diagram |
| > 1024px (desktop) | Full layout as designed |

---

## ANIMATION DECISIONS

**Keep It Minimal** (answers open question from Instance 1):

1. **Scroll-triggered fade-in**: Each project card fades in as it enters viewport
2. **Subtle hover states**: Cards lift slightly (transform: translateY(-2px))
3. **Link underline animation**: Underline slides in on hover

**No**:
- Parallax scrolling
- Loading animations
- Typing effects
- Bouncing scroll indicators

**Rationale**: The content is the hero. Animations should enhance, not distract.

---

## OPEN QUESTIONS ANSWERED

From Instance 1's list:

| Question | Decision | Rationale |
|----------|----------|-----------|
| How much interactivity? | Minimal — hover states, scroll fade-in | Content-first; complexity budget spent on diagram |
| Project screenshots? | **No** | Text + stats communicate better than thumbnails; screenshots date quickly |
| Color accent? | Single blue accent (#58A6FF) | One pop of color aligns with terminal aesthetic |
| Animation level? | Subtle CSS only | Professional, performant, timeless |

---

## TECHNICAL IMPLEMENTATION

### File Structure
```
/var/www/ridgetopai.net/
├── index.html          # Single page
├── styles.css          # All styles
├── script.js           # Minimal JS (scroll observers only)
└── assets/
    └── logo.jpg        # From repo
```

### CSS Architecture
```css
/* Reset + Variables */
:root {
  --bg: #0D1117;
  --surface: #161B22;
  --border: #30363D;
  --text: #E6EDF3;
  --text-muted: #8B949E;
  --accent: #58A6FF;
  /* ... */
}

/* Utility classes */
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.mono { font-family: 'JetBrains Mono', monospace; }

/* Components */
.header { ... }
.hero { ... }
.diagram { ... }
.project-card { ... }
.tech-badge { ... }
.footer { ... }
```

### JavaScript (Minimal)
```javascript
// Intersection Observer for scroll fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
```

---

## SVG DIAGRAM APPROACH

The infrastructure diagram will be hand-crafted SVG:

```html
<svg viewBox="0 0 800 500" class="diagram">
  <!-- Connection lines -->
  <path d="M..." stroke="var(--border)" fill="none" />

  <!-- Project nodes -->
  <g class="node mandrel" transform="translate(100, 100)">
    <rect width="120" height="60" rx="4" />
    <text>Mandrel</text>
    <text class="subtitle">Context</text>
  </g>

  <!-- Hover interactivity via CSS -->
</svg>
```

**Why SVG over CSS boxes**:
- Better control over connection lines
- Scalable at any size
- Animatable paths for future enhancement
- Semantic structure

---

## DEPLOYMENT NOTES

1. **No build step** — files deploy directly
2. **Nginx config** — copy from theforgelive.io pattern
3. **SSL** — certbot for ridgetopai.net + www.ridgetopai.net
4. **Verification** — use browser-tool.js to confirm

---

## SUCCESS METRICS

After deployment, the page should:
1. Load in < 2 seconds on 3G
2. Pass Lighthouse accessibility audit
3. Display correctly on mobile (iPhone SE viewport)
4. Have no console errors
5. Clearly communicate "AI infrastructure tools" within 5 seconds of viewing

---

## READY FOR INSTANCE 3+

This specification provides everything needed to build:
- Complete color palette with hex values
- Typography with exact fonts and sizes
- Layout structure with responsive breakpoints
- All project content (copy-ready)
- Component inventory
- Technical implementation approach
- Animation decisions

**Instance 3**: Make final design decisions if any refinements needed
**Instance 4**: Build core HTML/CSS structure
**Instance 5**: Deploy to VPS, verify
**Instance 6+**: Polish as needed

---

*Instance 2 Complete — Design Specification Ready*
