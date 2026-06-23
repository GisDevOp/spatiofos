# Inspection SOP — Roof Intelligence (SEQ)

**Version:** 1.0  
**Owner:** Operations  
**Agents:** `@drone-reality-mapping-specialist`, `@technical-consultant`

---

## 1. Booking intake

1. Customer books via site → email to `bookings@spatiofos.com`
2. Confirm property address, roof type, tier (Essential / Premium)
3. Schedule within agreed window; send **Booking confirmation** (see `docs/launch/support/EMAIL_TEMPLATES.md`)
4. CASA weather / NOTAM check for flight day

---

## 2. Pre-flight (T-24h to T-1h)

- [ ] RePL pilot assigned
- [ ] Property boundary + hazards reviewed (maps / site photos)
- [ ] Client notified of approximate arrival window
- [ ] Equipment: drone, RTK base/rover, batteries, calibration current
- [ ] Premium: thermal payload confirmed if sold

**No-fly:** wind > operator limit, active lightning, CASA restrictions → reschedule

---

## 3. On-site capture

1. Site risk assessment; no roof access required
2. RTK-enabled flight per capture plan (nadir + obliques as needed)
3. Photogrammetry overlap per equipment SOP (typically 75/75 frontlap/sidelap)
4. Premium: thermal pass per checklist
5. Field notes: weather, anomalies, access issues

**Target on-site:** 45–90 minutes residential

---

## 4. Processing (same day)

| Step | Owner | Output |
|------|-------|--------|
| Import imagery | Pilot / processor | Project folder |
| Orthomosaic + DSM | Processor | GeoTIFF |
| AI-assisted defect pass | `@geoai-ml-engineer` workflow | Draft defect list |
| Human review | Qualified reviewer | Validated defects |
| GIS overlay | Processor | GeoJSON / map image for PDF |
| Premium extras | As sold | Thermal layer, 3D snapshot if captured |

See [`REPORT_PIPELINE.md`](REPORT_PIPELINE.md).

---

## 5. Report delivery

- [ ] PDF assembled from template (branding-kit)
- [ ] Risk score + severity per [`DEFECT_TAXONOMY.md`](DEFECT_TAXONOMY.md)
- [ ] Internal QA: second pair of eyes on critical defects
- [ ] Deliver to client email **within 24hr target** from capture
- [ ] Send **Report delivered** email
- [ ] Archive project files (retention policy: ___ years)

---

## 6. Exceptions

| Issue | Action |
|-------|--------|
| Weather abort | Reschedule within 5 business days |
| Incomplete coverage | Re-flight at no charge |
| Client dispute | Document evidence; escalate to founder |

---

## File naming

`SF-YYYY-####_AddressSlug_CaptureDate`

Example: `SF-2026-0042_12_Main_St_Brisbane_2026-06-23`
