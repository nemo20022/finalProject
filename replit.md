# Community Service Comparison Website

## Overview
A responsive, vanilla HTML/CSS/JS website for comparing community services and pricing. Built with modern CSS best practices and no frameworks or libraries.

## Features
- Service comparison cards with transparent pricing
- Interactive filtering by category (Internet, Phone, Utilities)
- Sorting options (name, price low-to-high, price high-to-low)
- Dark mode toggle with localStorage persistence
- Mobile-first responsive design
- Accessibility features (ARIA labels, focus states, proper contrast)

## Technical Stack
- Pure HTML5 (semantic structure)
- Hand-written CSS3 with modern best practices:
  - CSS variables for theming
  - Fluid typography with clamp()
  - Grid and Flexbox layouts
  - Logical properties for internationalization
  - Mobile-first media queries
  - Dark/light mode support
- Vanilla JavaScript (no frameworks)
- Express.js server (serves static files on port 5000)

## Design Specifications
- Color palette: Monochrome dark
- Typography: Modern geometric sans-serif
- Spacing: Balanced and modular
- Buttons: Rounded soft edges
- Layout: Card-based
- Motion: Smooth and subtle transitions

## Project Structure
- `index.html` - Semantic HTML structure
- `styles.css` - Modern CSS with dark mode support
- `script.js` - Vanilla JavaScript for interactivity
- `server.js` - Express server configuration
- `.gitignore` - Git ignore configuration for Node.js

## Recent Changes (2025-10-08)
- Initial website creation with semantic HTML
- Implemented modern CSS with variables, fluid typography, and dark mode
- Added vanilla JS for filtering, sorting, and theme toggle
- Fixed mobile navigation visibility issues
- Added aria-pressed state to theme toggle for accessibility
- Configured Express server on port 5000

## User Preferences
- No frameworks or libraries (pure HTML/CSS/JS as specified)
- Modern CSS best practices required
- Mobile-first responsive approach
- Accessibility compliance important
