# ScriptySphere - Next-Gen 3D Animated Static Website

A futuristic, youth-driven, tech-inspired static website for ScriptySphere, built with HTML5, CSS3, and vanilla JavaScript (ES Modules).

## 🎯 Project Overview

**ScriptySphere** is a youth-led Bangladeshi organization empowering youth and children through technology, education, and innovation. This website showcases our mission, programmes, community, and impact.

### Key Features

- ✨ **Modern Design**: Glassmorphism, 3D transforms, gradient meshes
- 🎨 **Smooth Animations**: GSAP, AOS, CSS animations
- 📱 **Fully Responsive**: Mobile-first design, works on all devices
- ♿ **Accessible**: WCAG 2.2 AA compliant
- 🚀 **Performance Optimized**: Lighthouse 95+ score
- 🔍 **SEO Ready**: Meta tags, JSON-LD, sitemap
- 💾 **PWA Ready**: Service worker, manifest.json
- 🌐 **No Build Tools**: Pure HTML/CSS/JS, deploy anywhere

## 📁 Project Structure

```
/
├── index.html
├── about/
│   └── index.html
├── programmes/
│   └── index.html
├── community/
│   └── members.html
├── contact/
│   └── index.html
├── blog/
│   ├── index.html
│   └── posts/
│       └── sample-post/
│           └── index.html
├── 404.html
├── partials/
│   ├── header.html
│   ├── footer.html
├── assets/
│   ├── css/
│   │   ├── base.css          # Base styles, variables, resets
│   │   ├── layout.css        # Layout, grids, containers
│   │   ├── components.css    # Reusable components
│   │   └── animations.css    # Animations and effects
│   ├── js/
│   │   ├── main.js           # Core functionality
│   │   ├── partials.js       # Partial loader
│   │   ├── forms.js          # Form validation
│   │   ├── search.js         # Search & filter
│   │   └── sw.js             # Service worker
│   ├── img/
│   │   ├── logo.webp
│   │   ├── hero.webp
│   │   ├── icons/
│   │   └── partners/
│   └── data/
│       ├── members.json
│       └── programmes.json
├── manifest.json
├── robots.txt
├── sitemap.xml
└── README.md
```

## 🚀 Quick Start

### 1. Download/Clone the Project

```bash
# Download or clone the repository
git clone https://github.com/your-username/scriptysphere-website.git
cd scriptysphere-website
```

### 2. Local Development

Since this is a static site with no build process, you just need a local server:

**Option A: Using Python**
```bash
# Python 3
python -m http.server 8000

# Visit http://localhost:8000
```

**Option B: Using Node.js**
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000

# Visit http://localhost:8000
```

**Option C: Using VS Code**
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

### 3. Deploy to GitHub Pages

```bash
# Create a new repository on GitHub
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/scriptysphere.git
git push -u origin main

# Enable GitHub Pages
# Go to Settings → Pages
# Source: Deploy from branch 'main' → /root
# Save
```

Your site will be live at: `https://YOUR_USERNAME.github.io/scriptysphere/`

## 📝 Content Editing Guide

### Updating Text Content

**1. Homepage Hero Text**
- File: `/index.html`
- Find: `<h1 class="hero-title">`
- Edit the text within the span

**2. Mission Section**
- File: `/index.html`
- Find: `<section class="mission-section">`
- Edit card titles and descriptions

**3. About Page Content**
- File: `/about/index.html`
- Edit text in any section

**4. Contact Information**
- Files: `/contact/index.html` and `/partials/footer.html`
- Update email, phone, address

### Adding New Programmes

Edit `/assets/data/programmes.json`:

```json
{
  "id": 10,
  "title": "Your Programme Title",
  "summary": "Programme description here",
  "category": "Coding",
  "image": "/assets/img/programmes/your-image.webp",
  "duration": "8 weeks",
  "level": "Beginner",
  "link": "#"
}
```

### Adding New Members

Edit `/assets/data/members.json`:

```json
{
  "id": 16,
  "name": "Member Name",
  "role": "Member Role",
  "division": "Division",
  "district": "District",
  "joinedDate": "2025-01-01"
}
```

### Updating Images

1. **Format**: Use WebP format for best performance
2. **Size**: Optimize images before uploading
3. **Location**: Place in `/assets/img/` directory
4. **Update references**: Update `src` attributes in HTML

**Convert images to WebP:**
```bash
# Using online tools
https://cloudconvert.com/webp-converter

# Or using command line (if installed)
cwebp input.jpg -o output.webp
```

## 🔌 Google Form Integration

### For Membership Form

1. Create a Google Form
2. Click "Send" → Embed icon
3. Copy the iframe code
4. Open `/community/members.html`
5. Find: `<iframe src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"`
6. Replace with your iframe code

**Example:**
```html
<iframe 
  src="https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?embedded=true" 
  width="100%" 
  height="800" 
  frameborder="0" 
  marginheight="0" 
  marginwidth="0">
  Loading…
</iframe>
```

## 🎨 Customization Guide

### Changing Colors

Edit `/assets/css/base.css`:

```css
:root {
  --color-primary: #0EA5E9;      /* Your primary color */
  --color-secondary: #06B6D4;     /* Your secondary color */
  --color-accent: #8B5CF6;        /* Accent color */
}
```

### Changing Fonts

Edit `/assets/css/base.css`:

```css
:root {
  --font-sans: 'Your Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

Add font link in `<head>` of HTML files:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Adding New Pages

1. Create new directory: `/new-page/`
2. Create: `/new-page/index.html`
3. Copy structure from existing page
4. Update navigation in `/partials/header.html`:

```html
<li><a href="/new-page/" class="nav-link">New Page</a></li>
```

## 🔍 SEO Optimization

### Update Meta Tags

For each page, update in `<head>`:

```html
<title>Page Title - ScriptySphere</title>
<meta name="description" content="Page description here">
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:url" content="https://www.scriptysphere.org/page-url/">
```

### Update Sitemap

Edit `/sitemap.xml`:

```xml
<url>
  <loc>https://www.scriptysphere.org/new-page/</loc>
  <lastmod>2025-01-15</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>
```

## ♿ Accessibility Checklist

- ✅ All images have alt text
- ✅ Proper heading hierarchy (h1, h2, h3...)
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation works
- ✅ Focus visible on all interactive elements
- ✅ Color contrast meets WCAG AA standards
- ✅ Forms have proper labels
- ✅ Reduced motion support

## 🚀 Performance Optimization

### Image Optimization

1. Use WebP format
2. Compress images before upload
3. Use lazy loading: `loading="lazy"`
4. Provide width and height attributes

### Code Optimization

1. Minify CSS/JS for production (optional)
2. Enable gzip compression on server
3. Use CDN for libraries
4. Implement caching headers

### Testing Performance

```bash
# Using Lighthouse (Chrome DevTools)
# 1. Open Chrome DevTools (F12)
# 2. Go to "Lighthouse" tab
# 3. Generate report

# Target Scores:
# Performance: 95+
# Accessibility: 95+
# Best Practices: 95+
# SEO: 95+
```

## 🐛 Troubleshooting

### Partials Not Loading

**Problem**: Header/footer not showing
**Solution**: 
- Ensure you're running a local server (not opening HTML directly)
- Check browser console for errors
- Verify `/partials/header.html` and `/partials/footer.html` exist

### Images Not Showing

**Problem**: Images appear broken
**Solution**:
- Check file paths (case-sensitive)
- Verify images exist in `/assets/img/`
- Check image format (use WebP)

### Animations Not Working

**Problem**: Animations don't play
**Solution**:
- Verify AOS library is loaded (check browser console)
- Check for JavaScript errors
- Ensure `AOS.init()` is called

### Mobile Menu Not Opening

**Problem**: Mobile menu doesn't toggle
**Solution**:
- Check if JavaScript is loaded
- Verify `main.js` is imported correctly
- Check browser console for errors

## 📦 Deployment Options

### GitHub Pages (Recommended)

1. Push code to GitHub
2. Go to Settings → Pages
3. Select branch and root folder
4. Save

### Netlify

1. Create account on Netlify
2. Drag and drop project folder
3. Site is live instantly

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Traditional Hosting

Upload entire project folder to your web host via FTP/SFTP.

## 🔐 Security Best Practices

1. **No sensitive data**: Don't commit API keys or passwords
2. **HTTPS**: Always use HTTPS in production
3. **Content Security Policy**: Add CSP headers
4. **Regular updates**: Update dependencies regularly

## 📞 Support & Contact

- **Email**: ScriptySphere@gmail.com
- **Phone**: +880 1600-374396
- **Website**: www.ScriptySphere.org

## 📄 License

Copyright © 2025 ScriptySphere. All rights reserved.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern glassmorphism trends
- **Icons**: SVG icons (inline)
- **Libraries**: GSAP, AOS, CountUp.js, GLightbox

---

**Built with ❤️ by ScriptySphere**

*We are committed to building the Bangladesh of the future in the light of technology.*