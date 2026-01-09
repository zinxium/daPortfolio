# Cynthia Zinsou - Portfolio Website

> A modern, responsive portfolio website showcasing professional skills, projects, and experience.

**Live Demo**: [Coming Soon]  
**Documentation**: See [PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md)  
**Changelog**: See [CHANGELOG.md](CHANGELOG.md)

## Overview
A modern, responsive portfolio website built with React and Vite showcasing skills, projects, and contact information. The site features a clean design with smooth scrolling navigation and interactive components.

## Tech Stack
- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **UI Components**: React Bootstrap
- **Styling**: CSS3 with custom styles
- **Email Service**: EmailJS for contact form
- **Version Control**: Git

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx          - Fixed navigation bar with smooth scrolling
│   ├── Hero.jsx            - Landing section with introduction
│   ├── Projects.jsx        - Portfolio projects showcase
│   ├── Skills.jsx          - Technical skills and technologies
│   ├── Contact.jsx         - Contact form with EmailJS integration
│   └── Footer.jsx          - Footer with social links
├── styles/
│   ├── global.css          - Global styles and animations
│   ├── Navbar.css          - Navigation styling
│   ├── Hero.css            - Hero section styling
│   ├── Projects.css        - Projects card styling
│   ├── Skills.css          - Skills section styling
│   ├── Contact.css         - Contact form styling
│   └── Footer.css          - Footer styling
├── App.jsx                 - Main application component
└── main.jsx                - Entry point
```

## Features

### 1. Fixed Navigation Bar
- Sticky navigation that stays at the top during scrolling
- Smooth scroll behavior to different sections
- Responsive design for mobile devices
- Backdrop blur effect for modern look

### 2. Hero Section
- Eye-catching introduction with gradient text
- Call-to-action buttons for projects and contact
- Responsive layout with profile image

### 3. Projects Showcase (7 Projects)
- **Soul Connection** - Social networking platform with real-time messaging
- **Shopiflow** - E-commerce platform for local businesses
- **Area** - Task automation and workflow platform
- **Where2Go** - Travel and destination discovery app
- **Legendary Cave** - Photo gallery and cohort memories
- **KPS Groupe Website** - Professional corporate site
- **BI Dashboard - IT Market Intelligence** - Business intelligence dashboard for IT job market analytics

Each project card displays:
- Project title and description
- Technology stack with badges
- Interactive hover effects
- Link to project details

### 4. Skills Section
- Organized by categories: Frontend, Backend, Tools & Others
- Progress bars showing proficiency levels
- Responsive card layout
- Smooth animations on scroll

### 5. Contact Section
- EmailJS integration for direct email sending
- Form validation
- Success/error notifications
- Social media links (GitHub, LinkedIn)
- Responsive contact form design

### 6. Footer
- Company name and brief description
- Quick navigation links
- Social media links:
  - GitHub: https://github.com/cyndzx02
  - GitHub: https://github.com/zinxium
  - LinkedIn: https://www.linkedin.com/in/cynthia-zinsou-656715258
- Copyright information

## Key Updates & Improvements

### Color Scheme & Readability
- Fixed navigation with improved contrast
- Section titles now use `#212529` for better readability on light backgrounds
- White text on blue background for Contact section
- Improved text styling for skills and technologies

### Contact Form Enhancement
- Integrated EmailJS for automated email delivery
- Emails sent directly to: **zinsouanne4@gmail.com**
- Environment variables stored in `.env` file:
  - `VITE_PUBLIC_KEY`
  - `VITE_SERVICE_ID`
  - `VITE_TEMPLATE_ID`
- Loading states and success/error feedback

### Social Media Integration
- Added GitHub profiles and LinkedIn in multiple locations:
  - Footer section
  - Contact section
  - Easy access for visitors

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd daPortfolio

# Install dependencies
npm install
```

### Configuration
1. Create a `.env` file with EmailJS credentials:
```
VITE_PUBLIC_KEY=your_public_key
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
```

2. Get your keys from [EmailJS](https://www.emailjs.com/):
   - Sign up for a free account
   - Configure Gmail as your service
   - Create an email template
   - Copy your public key, service ID, and template ID

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktops
- Adaptive navigation
- Touch-friendly elements

## Performance Optimizations
- Smooth scroll behavior
- CSS animations and transitions
- Optimized asset loading
- Responsive images

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements
- Add dark mode toggle
- Implement blog section
- Add project detail pages
- Integrate GitHub API for live project data
- Add multi-language support
- Implement analytics tracking

## License
All rights reserved © 2026

## Contact
For inquiries, contact: **zinsouanne4@gmail.com**

### Social Media
- **GitHub**: [cyndzx02](https://github.com/cyndzx02) | [zinxium](https://github.com/zinxium)
- **LinkedIn**: [Cynthia Zinsou](https://www.linkedin.com/in/cynthia-zinsou-656715258)

---

**Last Updated**: January 9, 2026  
**Version**: 1.0.0
