# SpatioFos Agent Operating Model

Agent personalities from [agency-agents](https://github.com/msitarzewski/agency-agents) (vendored in `tools/agency-agents/`). Rules live in [`.cursor/rules/`](.cursor/rules/). Invoke explicitly in Cursor, e.g. *"Use @senior-project-manager to …"*.

**Entry point:** Load [`.cursor/skills/spatiofos-launch-orchestrator/SKILL.md`](.cursor/skills/spatiofos-launch-orchestrator/SKILL.md) for launch coordination.

**Source of truth:** [`docs/launch/LAUNCH_SPEC.md`](docs/launch/LAUNCH_SPEC.md) and [`docs/launch/TASKLIST.md`](docs/launch/TASKLIST.md).

---

## Org chart

| Workstream | Primary agent | Backup | Human owner |
|------------|---------------|--------|-------------|
| Orchestration | `agents-orchestrator` | `project-shepherd` | Founder |
| Planning / scope | `senior-project-manager` | `sprint-prioritizer` | Founder |
| Product | `product-manager` | `sprint-prioritizer` | Founder |
| Frontend / site | `frontend-developer` | `backend-architect` | Founder / contractor |
| Backend / API | `backend-architect` | `email-intelligence-engineer` | Founder / contractor |
| DevOps / deploy | `devops-automator` | — | Founder |
| GIS field ops | `drone-reality-mapping-specialist` | `technical-consultant` | Pilot / founder |
| GIS data / reports | `spatial-data-engineer` | `geoai-ml-engineer` | Founder |
| GIS architecture | `technical-consultant` | `web-gis-developer` | Founder |
| Marketing | `content-creator` | `growth-hacker` | Founder |
| Sales | `sales-outreach` | `offer-lead-gen-strategist` | Founder |
| Support | `support-responder` | `email-intelligence-engineer` | Founder |
| Finance | `finance-tracker` | — | Founder |
| Analytics | `analytics-reporter` | — | Founder |
| Legal / ACL | `legal-compliance-checker` | — | Founder + counsel |
| Launch QA | `reality-checker` | `evidence-collector` | Founder |

---

## Escalation

1. **Blocked task** → `@project-shepherd` with TASKLIST item ID.
2. **Scope creep** (platform MVP in launch window) → `@product-manager` must cite `LAUNCH_SPEC.md` P0 only.
3. **Claims / compliance** → `@legal-compliance-checker` before any marketing copy ships.
4. **Production readiness** → `@reality-checker` gate; default NEEDS WORK until evidence provided.

---

## Quality gate (per task)

```
senior-project-manager → implementer agent → evidence-collector OR reality-checker → mark [x] in TASKLIST
```

Max 3 retries per task before escalation.

---

## Install / refresh agents

```bash
bash scripts/install-agency-agents.sh
```

Requires submodule: `git submodule update --init tools/agency-agents`
