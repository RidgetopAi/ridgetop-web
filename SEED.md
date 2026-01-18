# RIDGETOP-WEB SEED v1
## A Landing Page for ridgetopai.net

---

## INSTANCE IDENTITY

You are Instance #{N}. Previous instances have contributed to this project.
- Read previous handoff in Mandrel (if exists)
- Contribute meaningfully
- Write handoff for next instance
- You have PIVOT PERMISSION if patterns aren't working

---

## THE GOAL

Create a landing page for ridgetopai.net that showcases Brian's work as a developer building AI-native tools. This is NOT a generic portfolio. It should reflect someone actively building at the edge of AI-assisted development.

**Deployment Target**: Hetzner VPS (`ssh hetzner`)
**Domain**: ridgetopai.net (A record → 178.156.219.146)
**Working Directory**: ~/projects/ridgetop-web
**Git Remote**: git@github.com:RidgetopAi/ridgetop-web.git

---

## DEPLOYMENT ARCHITECTURE

### Nginx Configuration
- **Config location**: `/etc/nginx/sites-available/ridgetopai.net`
- **Document root**: `/var/www/ridgetopai.net`
- **Pattern**: Static site (see theforgelive.io config as reference)

```bash
# Reference config template (adjust as needed)
ssh hetzner 'cat /etc/nginx/sites-available/theforgelive.io'
```

### Deployment Steps
```bash
# 1. Build locally (if using build step)
# 2. Copy files to VPS
ssh hetzner 'sudo mkdir -p /var/www/ridgetopai.net'
scp -r dist/* hetzner:/var/www/ridgetopai.net/  # or rsync

# 3. Create nginx config (first time only)
ssh hetzner 'sudo nano /etc/nginx/sites-available/ridgetopai.net'

# 4. Enable site (first time only)
ssh hetzner 'sudo ln -s /etc/nginx/sites-available/ridgetopai.net /etc/nginx/sites-enabled/'

# 5. Test and reload
ssh hetzner 'sudo nginx -t && sudo systemctl reload nginx'

# 6. SSL certificate (first time only)
ssh hetzner 'sudo certbot --nginx -d ridgetopai.net -d www.ridgetopai.net'
```

---

## VERIFICATION TOOLS

### Browser Tool (Puppeteer)
Located at `~/forge/browser-tool.js`

```bash
# Navigate and verify deployment
node ~/forge/browser-tool.js navigate "https://ridgetopai.net"
node ~/forge/browser-tool.js read
node ~/forge/browser-tool.js screenshot "/tmp/ridgetop-web.png"
node ~/forge/browser-tool.js console  # Check for errors
```

---

## GIT WORKFLOW (MANDATORY)

**EVERY INSTANCE MUST COMMIT AND PUSH BEFORE ENDING**

```bash
cd ~/projects/ridgetop-web
git add -A
git commit -m "Instance #{N}: [brief description of changes]"
git push origin main
```

This enables:
- Rollback if something breaks
- Progress visibility between instances
- Clean handoff state

---

## PHASE 1: EXPLORATION (Instances 1-2)
### Your Job: Research & Strategy

**Mandatory Research**:
1. Query Mandrel for project insights across all 5 projects
2. Read key files in each project to understand what they DO
3. Search the web for modern landing page trends (2025-2026)
4. Study examples of developer portfolios that stand out

**Projects to Research**:
| Project | Path | What to Discover |
|---------|------|------------------|
| Surveyor | ~/projects/surveyor | Architecture visualization - what problem does it solve? |
| Mandrel | ~/aidis/ (ignore ~/aidis/projects/) | MCP context server - the foundation of everything |
| Ridge-Control | ~/projects/ridge-control | Rust TUI for orchestration - what makes it interesting? |
| Squire | ~/projects/squire | Personal memory system - the vision |
| Wilf-Command | ~/projects/wilf-command | Real-world business tool - practical application |

**Mandrel Queries to Run**:
```
context_search: "what problem does [project] solve"
context_search: "key features of [project]"
smart_search: "architecture decisions"
project_info: [project-name]
```

**Deliverable**: Strategic brief answering:
- What story do these projects tell together?
- What makes Brian's approach distinctive?
- What design direction fits this narrative?
- 2-3 concrete design concepts to explore

---

## PHASE 2: DESIGN DECISION (Instance 3)
### Your Job: Pick a Direction

**Review Phase 1 findings. Then choose:**
- Design framework/approach (not generic Bootstrap/Tailwind templates)
- Visual language that fits the narrative
- Technical stack for deployment

**Constraints**:
- Must be deployable on VPS with nginx (static files preferred)
- Must be performant (not a heavy SPA for a landing page)
- Should feel like it was built by someone who builds tools

**Deliverable**: Concrete design spec with reasoning

---

## PHASE 3: BUILD (Instances 4-6)
### Your Job: Create Working Code

**CRITICAL**: Max 2-3 instances before working deployment.
- Instance 4: Core structure, content, basic styling
- Instance 5: Polish, deploy to VPS, verify
- Instance 6: Refinements based on verification (if needed)

**Must Have**:
- [ ] Clear value proposition above the fold
- [ ] Project showcases with substance (not just screenshots)
- [ ] Contact/connect mechanism
- [ ] Responsive design
- [ ] Deployed and accessible at ridgetopai.net

**Nice to Have**:
- [ ] Interactive elements that show technical capability
- [ ] Something unexpected that makes visitors pause

---

## PHASE 4: POLISH (Instances 7-8)
### Your Job: Refine & Perfect

- Performance optimization
- SEO basics
- Final visual polish
- Cross-browser testing
- Mobile verification

---

## AVAILABLE ASSETS

- **Logo**: `assets/ridgetopai-logo.JPG`
  - Use this as reference for brand colors/style
  - Feel free to create variations or complementary graphics

---

## HANDOFF PROTOCOL

Every instance writes a handoff with this structure:

```markdown
# Instance #{N} Handoff

## What I Did
[Concrete deliverables]

## What Works
[Validated decisions]

## What Doesn't / Open Questions
[Problems encountered, uncertainties]

## For Next Instance
[Specific direction with reasoning]

## Files Created/Modified
[List with paths]
```

Store handoff in Mandrel:
```
context_store(content, "handoff", ["ridgetop-web", "instance-{N}"])
```

---

## ANTI-PATTERNS (Lessons from emergence-notes)

❌ **Analysis Paralysis**: Don't design for 5 instances before building. Max 2-3 exploration passes, then BUILD.

❌ **Scope Creep**: This is a landing page, not a web app.

❌ **Generic Output**: If it looks like every other dev portfolio, start over.

❌ **Over-Engineering**: Simple deployment, simple stack. Static HTML/CSS is fine.

❌ **Ignoring Research**: The projects have stories - find them in Mandrel contexts.

❌ **Skipping Verification**: Use browser-tool to actually check your deployment works.

❌ **Forgetting to Commit**: ALWAYS commit and push before ending your instance.

---

## SUCCESS CRITERIA

1. Page is live at ridgetopai.net
2. A developer visiting would understand what Brian builds
3. It's distinctive enough to remember
4. All commits pushed to GitHub
5. Completed in 8 or fewer instances

---

## MANDREL PROJECT

**Project**: ridgetop-web
**ID**: 1dd4007b-393a-445d-8fa0-01246064a841

Store ALL work as contexts for continuity:
- `completion` - for finished work
- `planning` - for design decisions
- `handoff` - for instance transitions
- `error` - for problems encountered

---

## QUICK REFERENCE

```bash
# Switch to project in Mandrel
project_switch ridgetop-web

# Search for project info
context_search "surveyor features"
smart_search "mandrel architecture"

# Store your work
context_store "[content]" "handoff" ["ridgetop-web", "instance-N"]

# Git workflow
git add -A && git commit -m "Instance #N: description" && git push origin main

# Deploy to VPS
scp -r [files] hetzner:/var/www/ridgetopai.net/
ssh hetzner 'sudo nginx -t && sudo systemctl reload nginx'

# Verify deployment
node ~/forge/browser-tool.js navigate "https://ridgetopai.net"
node ~/forge/browser-tool.js screenshot "/tmp/verify.png"
```
