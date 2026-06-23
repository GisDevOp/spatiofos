# Defect Taxonomy — Roof Intelligence

**Agent:** `@geoai-ml-engineer`  
**Used in:** AI-assisted detection + human review + PDF report

---

## Severity definitions

| Level | Definition | Typical action horizon |
|-------|------------|------------------------|
| **Critical** | Active water ingress risk, structural fixity loss, safety hazard | Engage licensed roofer within 14 days |
| **Moderate** | Deterioration progressing; failure likely within 1–2 maintenance cycles | Plan repair 3–12 months |
| **Low** | Maintenance / cosmetic; monitor | Next scheduled maintenance |

---

## Defect classes

| Class | Examples | Default severity |
|-------|----------|------------------|
| Ridge & hip | Cap separation, mortar loss | Critical–Moderate |
| Flashing | Deterioration, lifting, gaps | Moderate–Critical |
| Membrane / sheet | Punctures, seam lift, rust | Moderate–Critical |
| Tile | Cracked, slipped, broken | Moderate |
| Gutters & drainage | Blockage, overflow staining | Low–Moderate |
| Penetrations | Skylight seal, vent boot | Moderate |
| Surface | Granule loss, coating wear | Low–Moderate |
| Debris | Moss, leaf buildup | Low |
| Thermal (Premium) | Moisture anomaly, insulation gap | Moderate |

---

## Required evidence per defect

- Georeferenced image or map location (grid ref)
- Close-up if severity ≥ Moderate
- One-line recommendation
- Confidence: AI-suggested / human-verified

---

## Risk score (report summary)

Illustrative 0–100 index combining:

- Count × severity weights
- Roof age (if known)
- Storm exposure (SEQ context)

**Do not** present as engineering certification. Label as "condition index for maintenance planning."

---

## Changelog

| Date | Change |
|------|--------|
| | v1.0 initial |
