# Finance Setup — Launch

**Agent:** `@finance-tracker`

---

## Launch pricing ledger

| SKU | Launch price | Standard | GST treatment | Notes |
|-----|--------------|----------|---------------|-------|
| Residential Essential | $199 | $399 | Confirm with accountant | One-time inspection |
| Residential Premium | $349 | $699 | Confirm with accountant | Includes thermal |

Document launch pricing end date: _______________

---

## Invoice template fields

- SpatioFos Pty Ltd ABN: _______________
- Invoice number: `INV-YYYY-####`
- Customer name + billing address
- Property inspection address
- Line item: Roof Intelligence — Essential or Premium
- Amount ex-GST / GST / total (as applicable)
- Payment terms: Due on booking / Due on report (choose one)
- Bank details or payment link

Store template: `confidential/templates/invoice.docx` (local, not in git)

---

## Accounting software

- [ ] Xero / QuickBooks entity created
- [ ] Chart of accounts: Inspection revenue, COGS (subcontractors), Software
- [ ] Stripe or bank feed connected (if online payments later)

---

## Per-job tracking

| Field | Source |
|-------|--------|
| Job ID | `SF-YYYY-####` matches report |
| Tier | Booking email |
| Amount | Pricing ledger |
| Pilot cost | Timesheet |
| Margin | Finance tracker monthly |

---

## Tax

- Engage AU accountant for GST registration status and invoice wording
- Keep flight / equipment receipts for deductions
