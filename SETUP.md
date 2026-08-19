# 🚀 PORTFOLIO SETUP GUIDE

## Quick Start (5 Minutes)

### Step 1: Open the Portfolio
1. Navigate to the `portfolio` folder
2. Double-click `index.html`
3. Your portfolio opens in your default browser
4. **Done!** You have a working portfolio

### Step 2: View Responsive Design
- Resize your browser window to see mobile responsiveness
- Press `F12` to open Developer Tools
- Click "Toggle device toolbar" to see mobile view
- Or press `Ctrl+Shift+M` (Windows) / `Cmd+Shift+M` (Mac)

### Step 3: Test All Features
✅ Scroll through all sections
✅ Click navigation links - smooth scroll works
✅ Click theme toggle (Dark/Light mode)
✅ Try the contact form
✅ View certificate modals
✅ Filter projects by category
✅ Test back-to-top button
✅ Try on mobile device

---

## ⚙️ Complete Customization (15 Minutes)

### Essential Changes - Do These First:

#### 1. Update Your Name
**File:** `index.html`
**Find:** Line ~64
```html
<h1 class="hero-title">
    Hi, I'm <span>Sakshi Gelye</span>  <!-- CHANGE THIS -->
</h1>
```
**Change to:** Your name

---

#### 2. Update Your Title/Role
**File:** `index.html`
**Find:** Line ~68
```html
<p class="hero-subtitle">
    Software Developer | Web Developer |  <!-- ADD YOUR ROLES -->
    <span class="typing-animation"></span>
</p>
```
**Change to:** Your roles (e.g., "Full-Stack Developer | Android Developer")

---

#### 3. Update Tech Stack (Typing Animation)
**File:** `js/script.js`
**Find:** Line ~224 in `initTypingAnimation()` function
```javascript
const texts = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Java', 'Python', 'SQL'];
```
**Change to:** Your technologies

---

#### 4. Update Contact Information
**File:** `index.html`
**Find:** Contact Section (around line ~880)

```html
<!-- Email -->
<p class="info-value">sakshi@example.com</p>  <!-- CHANGE -->

<!-- Phone -->
<p class="info-value">+91 9876 543 210</p>  <!-- CHANGE -->

<!-- Location -->
<p class="info-value">Indore, India</p>  <!-- CHANGE -->

<!-- GitHub -->
<p class="info-value">@SakshiGelye</p>  <!-- CHANGE -->
```

---

#### 5. Update Social Media Links
**File:** `index.html`
**Find:** Footer section and Contact social links (around line ~950)

```html
<a href="https://github.com/YOURPROFILE" target="_blank">
<a href="https://linkedin.com/in/YOURPROFILE" target="_blank">
<a href="https://twitter.com/YOURPROFILE" target="_blank">
<a href="https://instagram.com/YOURPROFILE" target="_blank">
```

---

#### 6. Update About Section
**File:** `index.html`
**Find:** About Section (around line ~200)

Update the "Who I Am", "My Objective", and "My Strengths" sections with your information.

---

#### 7. Update Skills
**File:** `index.html`
**Find:** Skills Section (around line ~340)

For each skill:
```html
<div class="skill-item scroll-reveal" data-progress="95">
    <div class="skill-icon">🏗️</div>
    <div class="skill-name">HTML5</div>
    <div class="skill-bar"><div class="skill-progress"></div></div>
    <div class="skill-percentage">95%</div>
</div>
```

- Change `data-progress="95"` to your skill level (0-100)
- Update `skill-name` 
- Update `skill-percentage` display
- Change emoji icon

---

#### 8. Update Education
**File:** `index.html`
**Find:** Education Section (around line ~480)

Update degree name, institute, years, and description:
```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content scroll-reveal">
        <h3 class="timeline-title">Your Degree Name</h3>
        <p class="timeline-institute">Your Institute</p>
        <p class="timeline-year">2022 - Present</p>
        <p class="timeline-description">Your description...</p>
    </div>
</div>
```

---

#### 9. Update Projects
**File:** `index.html`
**Find:** Projects Section (around line ~570)

**To modify existing projects:**
```html
<div class="project-card scroll-reveal" data-category="web">
    <div class="project-image">
        <i class="bi bi-globe"></i>  <!-- Change icon -->
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Your description...</p>
        <div class="project-tech">
            <span class="tech-tag">Tech1</span>
            <span class="tech-tag">Tech2</span>
        </div>
```

**Categories:** 
- `data-category="web"` - Web projects
- `data-category="android"` - Android apps
- `data-category="java"` - Java projects
- `data-category="python"` - Python projects
- `data-category="all"` - All projects

---

#### 10. Update Certificates
**File:** `index.html`
**Find:** Certificates Section (around line ~770)

```html
<div class="cert-card scroll-reveal">
    <div class="cert-image">
        <i class="bi bi-award"></i>
    </div>
    <div class="cert-content">
        <h3 class="cert-title">Certificate Name</h3>
        <p class="cert-issuer">Organization</p>
        <p class="cert-date">Month Year</p>
        <button class="cert-btn">View Certificate</button>
    </div>
</div>
```

---

#### 11. Add Your Resume PDF
1. Create or prepare your resume as PDF
2. Name it: `resume.pdf`
3. Place in: `assets/` folder
4. **Done!** The download buttons already point to it

---

#### 12. Update About Statistics
**File:** `index.html`
**Find:** About Section statistics (around line ~250)

```html
<div class="stat-number" data-target="15">0+</div>
<div class="stat-label">Projects Completed</div>
```

- Change `data-target="15"` to your actual number
- Update `stat-label` text

---

## 🎨 Advanced Customization

### Change Color Scheme
**File:** `css/style.css`
**Find:** Top of the file (`:root` section)

```css
:root {
  --primary-color: #00d4ff;        /* Main color - Change this */
  --secondary-color: #a855f7;      /* Secondary gradient */
  --tertiary-color: #ec4899;       /* Accent color */
  --background-color: #0f172a;     /* Background */
  --text-primary: #f8fafc;         /* Text color */
}
```

**Pre-made Color Schemes:**
- **Blue:** Primary: #0099ff, Secondary: #00d4ff
- **Purple:** Primary: #9d4edd, Secondary: #c77dff
- **Green:** Primary: #00d26a, Secondary: #34d399
- **Pink:** Primary: #ff006e, Secondary: #ff1493
- **Orange:** Primary: #ff8c00, Secondary: #ffa500

### Add Project Images
1. Save project screenshots in `assets/` folder
2. Replace icon with image:
   ```html
   <!-- Old -->
   <div class="project-image">
       <i class="bi bi-globe"></i>
   </div>
   
   <!-- New -->
   <div class="project-image">
       <img src="assets/project1.jpg" alt="Project Name">
   </div>
   ```

### Change Font
**File:** `index.html`
**Find:** Google Fonts link (around line ~18)

Replace with your font:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update `css/style.css`:
```css
body {
    font-family: 'Poppins', sans-serif;  /* Change this */
}
```

---

## 📱 Mobile Testing

### Using Browser DevTools
1. Press `F12` to open Developer Tools
2. Click "Toggle device toolbar" icon
3. Select device (iPhone, iPad, Android)
4. Test all features

### Test Checklist
- [ ] Navigation works on mobile
- [ ] Hero section looks good
- [ ] Text is readable
- [ ] Buttons are clickable
- [ ] Images load properly
- [ ] Forms work correctly
- [ ] Mobile menu opens/closes
- [ ] Theme toggle works

---

## 🚀 Deployment

### Option 1: GitHub Pages (Free)
1. Create GitHub account (if not already)
2. Create repository: `yourusername.github.io`
3. Upload your portfolio files
4. Visit: `https://yourusername.github.io`

### Option 2: Netlify (Free & Easy)
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your portfolio repository
5. Click Deploy
6. Get instant live link

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your portfolio
5. Click Deploy
6. Share your live link

### Option 4: Web Hosting
1. Buy hosting from GoDaddy, Bluehost, etc.
2. Upload files via FTP
3. Access via your domain

---

## 📝 Common Issues & Solutions

### Issue: Styles not loading
**Solution:** 
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check file paths are correct
- Ensure `css/style.css` exists

### Issue: Bootstrap icons not showing
**Solution:**
- Check internet connection (CDN requires internet)
- Try different browser
- Clear browser cache

### Issue: JavaScript not working
**Solution:**
- Check browser console (F12)
- Verify `js/script.js` path
- Reload page

### Issue: Form validation not working
**Solution:**
- Check form field names match
- Ensure JavaScript file is loaded
- Check browser console for errors

### Issue: Mobile menu stuck
**Solution:**
- Hard refresh browser
- Clear browser cache
- Try different browser

---

## 💡 Pro Tips

1. **Keep it updated** - Add new projects regularly
2. **Use consistent naming** - Keep file names lowercase
3. **Optimize images** - Compress before uploading
4. **Test everywhere** - Test on multiple devices/browsers
5. **Backup regularly** - Save backups of your portfolio
6. **Version control** - Use Git/GitHub to track changes
7. **Analytics** - Add Google Analytics to track visitors

---

## 📚 Further Resources

- **Bootstrap Documentation:** https://getbootstrap.com/docs/5.3/
- **Bootstrap Icons:** https://icons.getbootstrap.com/
- **Google Fonts:** https://fonts.google.com/
- **CSS Tricks:** https://css-tricks.com/
- **JavaScript Info:** https://javascript.info/

---

## ✅ Pre-Launch Checklist

Before sharing your portfolio:

- [ ] All personal information updated
- [ ] All projects added
- [ ] All skills updated
- [ ] Contact information correct
- [ ] Social media links working
- [ ] Resume PDF added
- [ ] Images optimized
- [ ] Mobile view tested
- [ ] All links working
- [ ] No console errors
- [ ] Dark mode toggle tested
- [ ] Form validation tested

---

## 🎉 You're Done!

Your professional portfolio is ready to share!

**Next Steps:**
1. Deploy to web
2. Share link with recruiters
3. Add to resume/LinkedIn
4. Keep updating with new projects
5. Collect feedback from peers

---

**Good luck with your coding journey! 🚀**
