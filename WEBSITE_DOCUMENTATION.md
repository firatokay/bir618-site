# Bir618 Website Documentation

A comprehensive reference guide for the Bir618 corporate website.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Routing & Multilingual Support](#routing--multilingual-support)
5. [Pages & Content](#pages--content)
6. [Components](#components)
7. [SEO Implementation](#seo-implementation)
8. [Styling](#styling)
9. [Contact Form](#contact-form)
10. [Development Commands](#development-commands)
11. [Deployment](#deployment)
12. [Content Guidelines](#content-guidelines)

---

## Overview

**Bir618** is a strategic IT transformation consulting firm based in Turkey, established in 2005. The website serves as the company's primary digital presence, showcasing:

- **Training Services**: PeopleCert-accredited programs (ITIL, PRINCE2 Agile, COBIT)
- **Advisory Services**: Digital product/service management, IT governance, transformation delivery, AI strategy
- **Company Information**: About, approach/philosophy, and contact

The website is fully bilingual (English/Turkish) with URL-based language detection.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI framework |
| React Router DOM | 7.12.0 | Client-side routing |
| Vite | 7.2.4 | Build tool & dev server |
| Tailwind CSS | 3.4.19 | Utility-first CSS |
| Lucide React | 0.562.0 | Icon library |

### Key Files

```
bir618-site/
├── package.json          # Dependencies & scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── public/
│   ├── favicon.png       # Browser favicon
│   ├── logo.png          # Company logo
│   ├── robots.txt        # Search engine directives
│   └── sitemap.xml       # XML sitemap with hreflang
└── src/
    ├── main.jsx          # App entry point
    ├── App.jsx           # Root component & routing
    ├── index.css         # Global styles
    ├── components/       # Reusable components
    └── pages/            # Page components
```

---

## Routing & Multilingual Support

### URL Structure

| English Route | Turkish Route | Page |
|---------------|---------------|------|
| `/` | `/tr` | Home |
| `/training` | `/tr/egitim` | Training |
| `/advisory` | `/tr/danismanlik` | Advisory |
| `/approach` | `/tr/yaklasim` | Approach |
| `/about` | `/tr/hakkimizda` | About |
| `/contact` | `/tr/iletisim` | Contact |

### How Language Detection Works

1. **URL-based detection**: The `LanguageSync` component in `App.jsx` detects language from the URL path
2. **Pattern matching**: Checks if path equals `/tr` or starts with `/tr/` (avoiding false matches like `/training`)
3. **State synchronization**: Updates the global `language` state accordingly

### Language Toggle

The language toggle button in the header:
1. Maps the current route to its equivalent in the target language
2. Navigates to the new route
3. State automatically syncs via `LanguageSync`

### Adding New Pages

To add a new page:

1. Create the page component in `src/pages/`
2. Add routes in `App.jsx` for both English and Turkish
3. Update the path maps in:
   - `src/components/Layout.jsx` (navigation)
   - `src/components/SEO.jsx` (canonical URLs)
   - Each page's `createPath()` function
4. Update `public/sitemap.xml` with new URLs

---

## Pages & Content

### Home (`Home.jsx`)

**Hero Titles:**
- EN: "Strategic Partners in Digital Excellence"
- TR: "Dijital Mükemmeliyete Ulaşmak İçin Stratejik İş Ortağı"

**Sections:**
1. Hero with dual CTA (Training / Advisory)
2. Two Core Services (Training & Advisory cards)
3. Why Bir618? (4 differentiators with icons)
4. Closing CTA

### Training (`Training.jsx`)

**Hero Titles:**
- EN: "Build Capabilities That Last"
- TR: "Kalıcı Yetenekler Geliştirin"

**Programs:**
1. ITIL® - Digital Product and Service Management Excellence
2. PRINCE2® Agile - Agile Project Delivery
3. COBIT - IT Governance
4. Custom Workshops - Tailored to Your Needs

### Advisory (`Advisory.jsx`)

**Hero Titles:**
- EN: "Transform with Strategic Partnership"
- TR: "Stratejik Ortaklıkla Dönüşün"

**Capability Areas:**
1. Digital Product & Service Management
2. IT Governance & Value Optimization
3. Transformation and Project Delivery
4. AI Strategy & Governance

### Approach (`Approach.jsx`)

**Hero Titles:**
- EN: "Built on What Works"
- TR: "İşe Yarayan Temeller Üzerine"

**Content:**
- Philosophy section with ITIL 4 Guiding Principles reference
- Seven principles displayed in a 2-column grid:
  1. Focus on Value
  2. Start Where You Are
  3. Progress Iteratively with Feedback
  4. Collaborate and Promote Visibility
  5. Think and Work Holistically
  6. Keep It Simple and Practical
  7. Optimize and Automate

### About (`About.jsx`)

**Hero Titles:**
- EN: "Experience That Delivers"
- TR: "Sonuç Üreten Deneyim"

**Sections:**
1. Hero
2. Our Story (company founding narrative)
3. Our Values (8 values: Partnership, Integrity, Practicality, Continuous Learning, Respect, Courage, Simplicity, Adaptability)
4. CTA

### Contact (`Contact.jsx`)

**Hero Titles:**
- EN: "Let's Talk About Your Transformation"
- TR: "Dönüşümünüz Hakkında Konuşalım"

**Features:**
- Contact form (Web3Forms integration)
- Email display (obfuscated for bot protection)
- LinkedIn link

---

## Components

### Layout (`Layout.jsx`)

The main layout wrapper providing:
- **Fixed navigation bar** with scroll-based styling
- **Desktop navigation** with active state highlighting (amber-600)
- **Mobile responsive menu** with hamburger toggle
- **Language toggle button**
- **Footer** with copyright and trademark notices

### SEO (`SEO.jsx`)

Dynamic SEO management component that updates:
- Document title
- HTML lang attribute
- Meta description
- Open Graph tags (og:title, og:description, og:url)
- Twitter Card tags
- Canonical URL
- Hreflang links (en, tr, x-default)

**Usage in pages:**
```jsx
<SEO
  title={seo[language].title}
  description={seo[language].description}
  lang={language === 'tr' ? 'tr' : 'en'}
  path={language === 'tr' ? '/tr/egitim' : '/training'}
/>
```

---

## SEO Implementation

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://www.bir618.com/sitemap.xml
```

### sitemap.xml

- Contains all 12 URLs (6 EN + 6 TR)
- Includes `xhtml:link` hreflang annotations for each URL
- Priority: Homepage (1.0), other pages (0.8)
- Change frequency: monthly

### Page Meta Tags

Each page has a `seo` object with language-specific:
- `title`: Format is "Page Title | Section | Bir618"
- `description`: 150-160 character summary

### Canonical URLs & Hreflang

- Base URL: `https://www.bir618.com`
- Each page generates:
  - Canonical link for current page
  - hreflang="en" pointing to English version
  - hreflang="tr" pointing to Turkish version
  - hreflang="x-default" pointing to English (default)

---

## Styling

### Design System

- **Font**: Inter (300 light, 400 regular weight)
- **Primary Color**: Amber-600 (`#d97706`) for accents and CTAs
- **Text Colors**: Gray-900 (headings), Gray-700 (body), Gray-600 (secondary)
- **Background**: White and Gray-50 alternating sections

### Typography Scale

| Element | Class |
|---------|-------|
| H1 (Hero) | `text-5xl md:text-7xl lg:text-8xl font-light` |
| H2 (Section) | `text-4xl md:text-5xl font-light` |
| H3 (Card) | `text-2xl md:text-3xl font-light` |
| Body | `text-lg font-light leading-relaxed` |
| Small | `text-base font-light` |

### Section Spacing

- Hero sections: `py-32 px-6 lg:px-12`
- Content sections: `py-16 px-6 lg:px-12` or `py-32 px-6 lg:px-12`
- Max width container: `max-w-6xl mx-auto`

### Button Styles

**Primary (filled):**
```jsx
className="px-8 py-4 text-lg font-light bg-amber-600 text-white hover:bg-amber-700 transition-colors"
```

**Secondary (outlined):**
```jsx
className="px-8 py-4 text-lg font-light border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
```

---

## Contact Form

### Web3Forms Integration

**Access Key:** `1bd0b69b-0e0c-41e4-b29f-eff16ef2e7f7`

**Fields:**
- Name (required)
- Email (required)
- Organization (optional)
- Message (required)

**Features:**
- Honeypot field for spam protection
- Loading state with spinner
- Success message with "Send Another" option
- Error handling with user feedback

**Form submission endpoint:** `https://api.web3forms.com/submit`

### Email Obfuscation

Email is constructed dynamically to prevent bot scraping:
```jsx
const getEmail = () => {
  const user = 'info';
  const domain = 'bir618';
  const tld = 'com';
  return `${user}@${domain}.${tld}`;
};
```

---

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

---

## Deployment

### Build Output

Production build outputs to `dist/` folder.

### SPA Considerations

For single-page app routing to work properly:
- Server must redirect all routes to `index.html`
- Configure 404 fallback on hosting platform

### Recommended Hosting

- Vercel (auto-detects Vite)
- Netlify (add `_redirects` file)
- Cloudflare Pages

---

## Content Guidelines

### Tone & Voice

- **Professional** but approachable
- **Confident** without being boastful
- **Practical** and outcome-focused
- Avoid jargon and buzzwords
- Use "we" for company, "you" for client

### Hero Title Patterns

| Page | Pattern |
|------|---------|
| Home | Value proposition statement |
| Training | Action-oriented capability focus |
| Advisory | Partnership emphasis |
| Approach | Foundation/principle focus |
| About | Experience/credibility focus |
| Contact | Conversation invitation |

### "Why do you need this?" Sections

Used in Training, Advisory, and Home pages. Format:
- 4 pain points per section
- Each ends with "..." to imply ongoing challenge
- Written as incomplete statements the reader completes mentally

### CTA Consistency

All pages end with a dark (gray-900) CTA section containing:
- Question title (e.g., "Ready to Transform?")
- Brief description
- "Schedule a Conversation" / "Contact Us" button linking to Contact page

---

## Future Considerations

### Potential Enhancements

1. **Blog/Resources section** for thought leadership content
2. **Case studies** showcasing client successes
3. **Team page** with consultant profiles
4. **Event calendar** for public training sessions
5. **Newsletter signup** integration
6. **Analytics integration** (Google Analytics 4, Plausible)

### Maintenance Notes

- Review and update copyright year in footer annually
- Keep framework dependencies updated
- Monitor Web3Forms usage/limits
- Periodically review SEO meta descriptions

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| Jan 2026 | 1.0 | Initial website launch |

---

*Last updated: January 2026*
