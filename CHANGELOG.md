# Changelog

All notable changes to this project will be documented in this file.

## [2026-05-11] - Project Expansion, Certifications & Visual Refresh

### Added

#### Projects
- **7 new projects** added to the `projectsData` array in `Projects.jsx`, bringing the total from **7 → 14**:
  | # | Project | Stack |
  |---|---------|-------|
  | 8  | Bordeaux Guide        | Vue 3, Vite, Tailwind CSS |
  | 9  | BRVM Advisor          | Next.js, TypeScript, Claude API |
  | 10 | ELT E-commerce Pipeline | Python, Snowflake, BigQuery, pandas |
  | 11 | FruityX               | Vue 3, Tauri, Rust, TypeScript |
  | 12 | Munchit Refont        | React, TypeScript, Vite, Tailwind |
  | 13 | AgroNova (Lagos Trip 2025 MVP) | Vue 3, Node.js, MySQL, Interswitch API |
  | 14 | SpotFinder            | React Native, Expo, Django, NativeWind |

#### Certifications (new section)
- New section **Certifications** inserted between Skills and Contact.
- Created `src/components/Certifications.jsx` + `src/styles/Certifications.css`.
- Wired into `App.jsx`; new `#certifications` link added to `Navbar.jsx`.
- 6 credentials listed:
  - **Google** — Build a Data Warehouse with BigQuery Skill Badge (Apr 2026)
  - **Google** — BigQuery Fundamentals for Snowflake Professionals (Apr 2026, ID 23517629)
  - **Snowflake** — Hands-On Essentials: Data Engineering Workshop (Mar 2026, ID 177816040)
  - **Snowflake** — Hands-On Essentials: Data Lake Workshop (Jan 2026, with skill tags)
  - **Snowflake** — Hands-On Essentials: Collaboration, Marketplace & Cost Estimation Workshop (Jan 2026, ID 170906475)
  - **Snowflake** — Hands-On Essentials: Data Warehousing Workshop (Dec 2025, ID 170143678)
- Card layout: issuer-logo avatar (Google multi-color gradient, Snowflake blue gradient), title, issuer, issue date, optional credential ID, optional skill badges.

### Changed

#### Visuals
- **Hero profile photo**: replaced the `/Garotas.jpg` placeholder with a proper ES-module import of `src/assets/profil-photo.jpg`. `alt` attribute corrected to `"Cynthia Zinsou"`.
- **Real project previews**: projects with screenshots in `src/assets/` now show the actual screenshot instead of the text abbreviation.
  - Added `imagePreview` field on project entries; `Projects.jsx` renders `<img>` when present, falls back to the abbreviation cover otherwise.
  - Applied to **Shopiflow** (`assets/shopiflow/`) and **SpotFinder** (`assets/spotfinder/`).
  - `.project-image` CSS updated: `overflow: hidden`, `img { object-fit: cover }`, and hover-scale on the image rather than the container.

## [2026-01-09]

### Added
- **Fixed Navigation Bar**: Changed navbar from sticky to fixed positioning for better accessibility
  - Added `left: 0` and `right: 0` for full width coverage
  - Increased z-index to 1000 for proper layering
  - Added `padding-top: 76px` to body to prevent content from being hidden

- **EmailJS Integration**: Implemented email functionality for contact form
  - Installed `@emailjs/browser` package
  - Added form state management with loading and status indicators
  - Success/error notifications with dismissible alerts
  - Environment variables integration for secure credential storage

- **Environment Variables**: Secured API credentials
  - `VITE_PUBLIC_KEY`: EmailJS public key
  - `VITE_SERVICE_ID`: EmailJS service ID (Gmail)
  - `VITE_TEMPLATE_ID`: EmailJS template ID
  - Stores in `.env` file with `VITE_` prefix for Vite compatibility

- **Social Media Links**: 
  - Added GitHub profiles (cyndzx02 and zinxium)
  - Added LinkedIn profile (https://www.linkedin.com/in/cynthia-zinsou-656715258)
  - Integrated in Footer component
  - Integrated in Contact section

- **Project Documentation**: 
  - Created comprehensive PROJECT_DOCUMENTATION.md
  - Includes project overview, tech stack, features, and setup instructions

### Changed
- **Color Consistency**: 
  - Changed main section titles to use `#212529` (dark gray)
  - Applied to "Featured Projects" and "Skills & Technologies" titles
  - Contact section title remains white for better contrast on blue background

- **Typography Improvements**:
  - Improved readability of technology names in Skills cards
  - Increased font-weight for skill names and percentages
  - Better contrast for all text elements

- **Section Headers**:
  - Renamed and refined section-title styling
  - Made section-specific color rules in respective CSS files:
    - Projects section: `#212529`
    - Skills section: `#212529`
    - Contact section: `#FFFFFF` with text-shadow

- **Contact Form**:
  - Changed from `mailto:` links to proper EmailJS integration
  - Replaced placeholder links with actual social media URLs
  - Added loading state to submit button
  - Shows "Sending..." during email transmission

- **Project 7 Information**:
  - Updated "IT Opportunities tracker" to "BI Dashboard - IT Market Intelligence"
  - Updated description to reflect comprehensive analytics dashboard
  - Changed technology tags to reflect actual stack

### Fixed
- **Form Field Names**: Aligned with EmailJS template variables
  - `from_name` → matches template
  - `email` → matches template field
  - `message` → matches template field

- **CSS Duplications**: Removed duplicate `.skill-category` rule in Skills.css

- **Navigation Styling**: Fixed navbar position and z-index conflicts

### Technical Improvements
- Added `useEffect` hook for EmailJS initialization
- Implemented async/await for email submission
- Added proper error handling with try-catch
- Better state management for form feedback
- Responsive design maintained across all changes

### Removed
- Hardcoded email credentials from component
- Old `mailto:` implementation
- Placeholder social media links

## [Previous] - Initial Setup

### Initial Structure
- React with Vite
- Bootstrap components
- Multi-section portfolio layout
- Responsive design
- CSS animations

### Initial Features
- Navigation with smooth scrolling
- Hero landing section
- Projects showcase
- Skills display with progress bars
- Contact form (basic)
- Footer with information

---

## Migration Guide

### For Email Configuration
1. Sign up at https://www.emailjs.com/
2. Create Gmail service and template
3. Update `.env` file with credentials
4. No hardcoding of sensitive data

### Environment Variables
```env
VITE_PUBLIC_KEY=your_public_key_here
VITE_SERVICE_ID=service_id_here
VITE_TEMPLATE_ID=template_id_here
```

### Color Palette Reference
- Primary Dark: `#212529` (section titles on light backgrounds)
- Contact Section: `#FFFFFF` (text on blue background)
- Background Primary: `#020617` (dark theme)
- Background Secondary: `#F1F5F9` (light sections)
- Contact Background: `#2563EB` (blue)
- Accent: `#007bff` (blue)

---

## Known Issues
- None at this time

## Future Enhancements
- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Detailed project pages
- [ ] GitHub API integration
- [ ] Multi-language support
- [ ] Analytics tracking
- [ ] Mobile app version
- [ ] CMS integration

---

**Last Updated**: May 11, 2026
**Maintainer**: Cynthia Zinsou
**Contact**: zinsouanne4@gmail.com
