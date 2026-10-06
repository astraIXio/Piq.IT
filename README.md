![PiqIt — Global Retail Services Platform For Fashion & Lifestyle Brands](public/og-image.jpg)

# PiqIt

> **Global Retail Services Platform For Fashion & Lifestyle Brands**

PiqIt connects and manages end-to-end retail execution across four integrated capabilities:
- **Design Studio** — Trend intelligence, virtual 3D sampling, and production-ready tech packs.
- **Sourcing Hub** — Audited ethical manufacturer networks, sampling workflows, and margin-aligned procurement.
- **Content Lab** — Marketplace-ready catalog photography, 3D renders, and multi-channel asset generation.
- **Commerce Grid** — Multi-marketplace synchronization (Amazon, Myntra, Nykaa, Tata CLiQ, AJIO, Direct-to-Consumer) and unified fulfillment.

---

## Tech Stack & Architecture

- **UI Framework:** React 19
- **Type Safety:** TypeScript
- **Styling:** Modular native styling with Montserrat typography and curated design tokens
- **Build & Bundler:** High-performance ES module compilation & static bundling
- **Security:** Static SPA architecture with zero server-side attack surface and zero external tracking scripts

---

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm (v9 or later)

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Starts the local development server on `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Type checks via TypeScript and generates an optimized production distribution in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## Security & Verification

This platform maintains a zero-vulnerability security baseline. For audit details, vulnerability disclosures, and recommended production security headers:
- See [`SECURITY_AUDIT.md`](./SECURITY_AUDIT.md)
- See [`SECURITY.md`](./SECURITY.md)

---

## Consultation Form & Email Service Integration

The **"Book Consultation"** / **"Get Started"** form includes client-side validation, error handling, and visual confirmation states.

> [!IMPORTANT]
> **To receive inquiries submitted through the consultation form, an email service or SMTP provider must be connected.**
>
> Without connecting an email provider, submitted queries will not be delivered to your inbox. The person handling deployment must configure the email integration.

### Deployment & Security Guidelines
1. **Connect Email Provider:** Connect the submission handler to an SMTP service or transactional email provider (such as EmailJS, Resend, SendGrid, Postmark, or AWS SES).
2. **Strict Secrets Management:**
   - **NEVER** mention or hardcode email service API keys, passwords, or secret tokens anywhere in the codebase.
   - Always supply credentials via `.env` (or via your cloud hosting platform's environment variables dashboard, such as Vercel, Netlify, or Cloudflare Pages).
   - Ensure all `.env` files remain protected and uncommitted (already excluded in `.gitignore`).

---

## Performance, Caching & Load Optimization

To handle high-resolution visual assets and ensure seamless delivery under heavy load capacity , dedicated caching efficiency methods and UX enhancements have been implemented:

- **Immutable CDN & Browser Caching:** Configured long-term caching policies (`Cache-Control: public, max-age=31536000, immutable`) across static assets in `netlify.toml` so returning visitors and repeat navigations load instantly from cache without exhausting network bandwidth.
- **Brand Experience Preloader:** An animated brand loader is integrated on initial visit, ensuring the site only reveals once the primary hero banner is downloaded and GPU-decoded (`img.decode()`), preventing layout pop-in and elevating perceived UX quality.
- **Render Deferral (`content-visibility: auto`):** Heavy offscreen sections (including partner brand showcases and visual cards) utilize `content-visibility: auto` with fixed intrinsic reservations, dedicating 100% of initial device compute and bandwidth to the hero viewport without degrading logo quality.
- **Background Banner Pre-Warming:** Subpage hero graphics are pre-fetched into browser memory during idle cycles, enabling instantaneous zero-latency transitions when switching between platform sections.

---

## License

Proprietary © PiqIt. All rights reserved.

