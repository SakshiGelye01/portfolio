# 🚀 Professional Portfolio Website

A **modern, responsive, and fully customizable personal portfolio** built with HTML5, CSS3, JavaScript, and Bootstrap 5. Features glassmorphism design, dark/light mode toggle, smooth animations, and more.

---

## ✨ Features

### Design & UI
- 🎨 **Modern Glassmorphism Design** - Frosted glass effect with backdrop blur
- 🌈 **Gradient Accents** - Beautiful gradient colors and animations
- 🌙 **Dark/Light Mode Toggle** - Persistent theme switcher
- 📱 **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- ✨ **Smooth Animations** - Scroll reveal, hover effects, and transitions
- 🎯 **Micro-interactions** - Subtle but engaging user interactions

### Functionality
- 📊 **Animated Counters** - Skill progress bars and statistics
- 🔍 **Project Filtering** - Filter projects by category (All, Web, Java, Android, Python)
- 📝 **Contact Form** - Full form validation with error messages
- 📜 **Certificates Modal** - Bootstrap modals for certificate details
- 🔝 **Back to Top Button** - Smooth scroll to top
- ⌨️ **Keyboard Navigation** - Accessible and user-friendly
- 🎭 **Typing Animation** - Animated tech stack in hero section

### Technical Features
- 🔒 **CSS Variables** - Easy theme customization
- 📦 **Modular Code** - Clean, organized, and maintainable
- 🎯 **Semantic HTML5** - Proper HTML structure
- ⚡ **No Dependencies** - Vanilla JavaScript (only Bootstrap for layout)
- 🔧 **Easy to Customize** - Well-documented and beginner-friendly

---

## 📁 Folder Structure

```
portfolio/
│
├── index.html                    # Main HTML file
│
├── css/
│   └── style.css                # All styling and animations
│
├── js/
│   └── script.js                # JavaScript functionality
│
├── assets/
│   ├── profile.jpg              # Profile image
│   ├── resume.pdf               # Your resume
│   ├── project1.jpg             # Project screenshots
│   ├── project2.jpg
│   ├── project3.jpg
│   └── certificates/            # Certificate images
│       ├── cert1.jpg
│       ├── cert2.jpg
│       └── ...
│
└── README.md                     # This file
```

---

## 🎯 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone or Download** this repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in Browser**
   - Double-click `index.html` to open in your default browser
   - OR right-click and select "Open with" → Choose your browser
   - OR use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (with http-server installed)
     http-server
     ```
   - Then navigate to `http://localhost:8000`

3. **That's it!** Your portfolio is ready to use.

---

## 🎨 Customization Guide

### 1. **Personalize Your Information**

#### Update Name & Title
**File:** `index.html`
- Find the Hero section and update:
  ```html
  <h1 class="hero-title">
      Hi, I'm <span>Sakshi Gelye</span>  <!-- Change this -->
  </h1>
  <p class="hero-subtitle">
      Software Developer | Web Developer | 
      <span class="typing-animation"></span>
  </p>
  ```

#### Update Tech Stack (Typing Animation)
**File:** `js/script.js` - Look for `initTypingAnimation()` function:
```javascript
const texts = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Java', 'Python', 'SQL'];
// Add or remove technologies as needed
```

#### Update Social Links
**File:** `index.html` - Footer and Contact section:
```html
<a href="https://github.com/yourprofile" target="_blank">
<a href="https://linkedin.com/in/yourprofile" target="_blank">
<a href="https://twitter.com/yourprofile" target="_blank">
```

### 2. **Update Your Skills**

**File:** `index.html` - Skills Section
Each skill has a `data-progress` attribute:
```html
<div class="skill-item scroll-reveal" data-progress="90">
    <div class="skill-icon">🏗️</div>
    <div class="skill-name">HTML5</div>
    <div class="skill-bar"><div class="skill-progress"></div></div>
    <div class="skill-percentage">90%</div>
</div>
```

- Change `data-progress="90"` to your skill level (0-100)
- Update `skill-percentage` text
- Change icon emoji or use different ones

### 3. **Add Your Projects**

**File:** `index.html` - Projects Section
Duplicate this template and modify:
```html
<div class="project-card scroll-reveal" data-category="web">
    <div class="project-image">
        <i class="bi bi-globe"></i>  <!-- Change icon -->
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Your project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology1</span>
            <span class="tech-tag">Technology2</span>
        </div>
        <div class="project-buttons">
            <button class="project-btn" onclick="smoothScroll('#contact')">
                <i class="bi bi-github"></i> GitHub
            </button>
            <button class="project-btn" onclick="showToast('Demo coming soon!')">
                <i class="bi bi-play-circle"></i> Demo
            </button>
        </div>
    </div>
</div>
```

**Categories:** Use `data-category="web"`, `data-category="android"`, `data-category="java"`, `data-category="python"`, or `data-category="all"`

### 4. **Update Education Timeline**

**File:** `index.html` - Education Section
```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content scroll-reveal">
        <h3 class="timeline-title">Your Degree Name</h3>
        <p class="timeline-institute">Your Institute Name</p>
        <p class="timeline-year">2020 - 2024</p>
        <p class="timeline-description">Your description...</p>
    </div>
</div>
```

### 5. **Add Certificates**

**File:** `index.html` - Certificates Section
```html
<div class="cert-card scroll-reveal">
    <div class="cert-image">
        <i class="bi bi-award"></i>
    </div>
    <div class="cert-content">
        <h3 class="cert-title">Certificate Name</h3>
        <p class="cert-issuer">Issuing Organization</p>
        <p class="cert-date">Month Year</p>
        <button class="cert-btn">View Certificate</button>
    </div>
</div>
```

### 6. **Update Contact Information**

**File:** `index.html` - Contact Section:
```html
<!-- Email -->
<p class="info-value">your.email@example.com</p>

<!-- Phone -->
<p class="info-value">+91 XXXXX XXXXX</p>

<!-- Location -->
<p class="info-value">Your City, Country</p>

<!-- GitHub -->
<p class="info-value">@YourGitHubHandle</p>
```

### 7. **Add Profile Image**

1. Place your profile image in `assets/` folder
2. Name it `profile.jpg`
3. Update in `index.html` if using (optional, currently using emoji)

### 8. **Add Project Screenshots**

1. Place images in `assets/` folder
2. In project cards, replace:
   ```html
   <i class="bi bi-film"></i>  <!-- Emoji/Icon -->
   ```
   With:
   ```html
   <img src="assets/project1.jpg" alt="Project Name">
   ```

### 9. **Add Resume PDF**

1. Place your resume PDF in `assets/` folder
2. Name it `resume.pdf`
3. The download link already points to `assets/resume.pdf`

---

## 🎨 Theme Customization

### Change Colors

**File:** `css/style.css` - Look for CSS Variables section at the top:
```css
:root {
  --primary-color: #00d4ff;        /* Main brand color */
  --secondary-color: #a855f7;      /* Secondary gradient */
  --tertiary-color: #ec4899;       /* Accent color */
  --background-color: #0f172a;     /* Background */
  --text-primary: #f8fafc;         /* Main text */
  --text-secondary: #cbd5e1;       /* Secondary text */
  --text-tertiary: #94a3b8;        /* Tertiary text */
  --accent-color: #fbbf24;         /* Accent */
  --success-color: #10b981;        /* Success messages */
  --danger-color: #ef4444;         /* Error messages */
}
```

Change any color to your preference:
- **Blue theme:** Primary: #0099ff, Secondary: #00d4ff
- **Purple theme:** Primary: #9d4edd, Secondary: #c77dff
- **Green theme:** Primary: #00d26a, Secondary: #34d399
- **Pink theme:** Primary: #ff006e, Secondary: #ff1493

### Modify Fonts

In `index.html`, update Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

### Adjust Spacing & Border Radius

In `css/style.css`:
```css
:root {
  --border-radius: 16px;      /* Change corner roundness */
  --transition-speed: 0.3s;   /* Change animation speed */
}
```

---

## 📱 Making It Your Own

### Quick Customization Checklist
- [ ] Update name and title
- [ ] Change social media links
- [ ] Update skills and progress bars
- [ ] Add your projects
- [ ] Update education timeline
- [ ] Add your certificates
- [ ] Update contact information
- [ ] Add profile image (optional)
- [ ] Change color scheme (optional)
- [ ] Test on mobile devices

### Testing

1. **Desktop** - Chrome, Firefox, Safari, Edge
2. **Tablet** - iPad, Android tablets
3. **Mobile** - iPhone, Android phones
4. **Responsive** - Resize browser window

---

## 🔧 Advanced Customization

### Modify Navbar Links

**File:** `index.html`
```html
<ul class="navbar-nav ms-auto">
    <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
    <li class="nav-item"><a class="nav-link" href="#section-id">Your Section</a></li>
</ul>
```

### Add New Section

1. Add HTML in `index.html`:
   ```html
   <section id="your-section">
       <div class="container-lg">
           <!-- Your content -->
       </div>
   </section>
   ```

2. Add CSS in `css/style.css`:
   ```css
   #your-section {
       padding: 5rem 2rem;
       background: rgba(0, 212, 255, 0.02);
   }
   ```

3. Add navbar link pointing to the section

### Modify Animations

**File:** `css/style.css` - Look for `@keyframes`:
- Adjust `duration`, `delay`, and `easing` values
- Create new animations for custom effects
- Reduce animations for better performance

### Disable Dark Mode

**File:** `js/script.js` - Comment out or remove:
```javascript
// function initTheme() { ... }
```

---

## 📚 File Guide

### index.html
- Contains all HTML structure
- All sections (hero, about, skills, projects, etc.)
- Bootstrap components (navbar, modals, forms)

### css/style.css
- All styling and visual design
- CSS variables for easy customization
- Responsive design with media queries
- Keyframe animations
- Glassmorphism effects

### js/script.js
- Dark/light mode toggle
- Scroll effects and animations
- Form validation
- Project filtering
- Animated counters
- Typing animation
- All interactive features

---

## 🐛 Troubleshooting

### Issue: Styles not loading
- **Solution:** Check file paths. Ensure `css/style.css` and `js/script.js` are in correct folders
- Refresh browser with `Ctrl+Shift+R` (hard refresh)

### Issue: Bootstrap icons not showing
- **Solution:** Check internet connection (CDN requires internet)
- Verify Bootstrap Icons CDN link in HTML

### Issue: Images not displaying
- **Solution:** Ensure images are in `assets/` folder
- Use correct file paths: `assets/image.jpg`

### Issue: Form not validating
- **Solution:** Check browser console for errors (F12)
- Ensure form fields have correct `name` attributes

### Issue: Animations too slow
- **Solution:** Modify `--transition-speed` in CSS variables
- Reduce animation durations in `@keyframes`

### Issue: Mobile menu not working
- **Solution:** Ensure Bootstrap JS is loaded
- Check navbar HTML structure

---

## 📖 Documentation

### HTML Sections
- **Hero Section** - Main introduction with CTA buttons
- **About Section** - Personal introduction with statistics
- **Skills Section** - Technical skills with progress bars
- **Education Section** - Timeline of education
- **Projects Section** - Project showcase with filtering
- **Services Section** - Services offered
- **Certificates Section** - Certifications and achievements
- **Resume Section** - Resume download CTA
- **Contact Section** - Contact form and information
- **Footer** - Footer with links and social media

### CSS Classes
- `.hero` - Hero section styling
- `.section-title` - Section heading styling
- `.card` - Generic card styling
- `.btn-primary-custom` - Primary button
- `.btn-secondary-custom` - Secondary button
- `.scroll-reveal` - Scroll animation class

### JavaScript Functions
- `initTheme()` - Dark/light mode toggle
- `initNavbar()` - Navbar functionality
- `initSkillBars()` - Skill progress animation
- `initCounters()` - Statistics counter animation
- `initProjectFilters()` - Project filtering
- `validateForm()` - Form validation
- `showToast()` - Toast notifications
- `smoothScroll()` - Smooth scrolling

---

## 🚀 Deployment

### Deploy on GitHub Pages

1. Create GitHub repository named `yourusername.github.io`
2. Push your portfolio files
3. Visit `https://yourusername.github.io`

### Deploy on Netlify

1. Sign up on [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Get instant live link

### Deploy on Vercel

1. Sign up on [vercel.com](https://vercel.com)
2. Import your repository
3. Click Deploy

---

## 📝 Browser Support

- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 📜 License

This portfolio template is free to use and modify for personal use.

---

## 💡 Tips & Best Practices

1. **Keep it Updated** - Update portfolio with new projects regularly
2. **Test Thoroughly** - Test on multiple devices and browsers
3. **Optimize Images** - Use compressed images for faster loading
4. **SEO Optimization** - Add meta tags and descriptions
5. **Accessibility** - Add alt text to images
6. **Performance** - Minimize CSS and JavaScript files
7. **Backup** - Keep backups of your portfolio

---

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to submit issues or pull requests!

---

## ❓ FAQ

**Q: Can I use this for commercial purposes?**
A: Yes, feel free to customize and use for your professional portfolio.

**Q: How do I change the color scheme?**
A: Modify CSS variables in `css/style.css` `:root` section.

**Q: Can I add more sections?**
A: Yes! Add HTML section, CSS styling, and navbar link.

**Q: Is this mobile-friendly?**
A: Absolutely! It's fully responsive and mobile-optimized.

**Q: Do I need to host images separately?**
A: No, keep them in the `assets/` folder.

**Q: How do I submit the contact form?**
A: Currently shows a success message. Integrate with backend/email service for actual submission.

---

## 📞 Support

For questions or help with customization, refer to this README or contact me through the portfolio contact form.

---

**Happy Coding! 🚀**

Built with ❤️ by Sakshi Gelye
