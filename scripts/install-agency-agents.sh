#!/usr/bin/env bash
# Install curated SpatioFos launch agents into .cursor/rules
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
AGENCY="$ROOT/tools/agency-agents"
RULES_SRC="$AGENCY/integrations/cursor/rules"
RULES_DST="$ROOT/.cursor/rules"

AGENTS=(
  agents-orchestrator
  workflow-architect
  senior-project-manager
  project-shepherd
  product-manager
  sprint-prioritizer
  frontend-developer
  backend-architect
  devops-automator
  email-intelligence-engineer
  reality-checker
  evidence-collector
  content-creator
  growth-hacker
  sales-outreach
  offer-lead-gen-strategist
  support-responder
  legal-compliance-checker
  analytics-reporter
  finance-tracker
  drone-reality-mapping-specialist
  geoai-ml-engineer
  spatial-data-engineer
  technical-consultant
  web-gis-developer
)

if [[ ! -d "$AGENCY" ]]; then
  echo "Run: git submodule update --init tools/agency-agents"
  exit 1
fi

cd "$AGENCY"
./scripts/convert.sh --tool cursor

mkdir -p "$RULES_DST"
installed=0
for agent in "${AGENTS[@]}"; do
  src="$RULES_SRC/${agent}.mdc"
  if [[ -f "$src" ]]; then
    cp "$src" "$RULES_DST/"
    ((installed++)) || true
  else
    echo "[WARN] Missing rule: $agent"
  fi
done

echo "[OK] Installed $installed agents to $RULES_DST"
