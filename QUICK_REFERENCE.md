# QUICK CUSTOMIZATION REFERENCE

## Most Important Changes (Do These First!)

### 1️⃣ YOUR NAME
**File:** `index.html` | **Line ~64**
```html
<span>Sakshi Gelye</span>  →  <span>YOUR NAME</span>
```

### 2️⃣ YOUR TITLE
**File:** `index.html` | **Line ~68**
```html
Software Developer | Web Developer | PHP Developer | Android Developer
```

### 3️⃣ YOUR EMAIL
**File:** `index.html` | **Line ~920**
```html
<p class="info-value">sakshi@example.com</p>  →  <p class="info-value">YOUR EMAIL</p>
```

### 4️⃣ YOUR PHONE
**File:** `index.html` | **Line ~925**
```html
<p class="info-value">+91 9876 543 210</p>  →  <p class="info-value">YOUR PHONE</p>
```

### 5️⃣ YOUR GITHUB
**File:** `index.html` | **Line ~935**
```html
<p class="info-value">@SakshiGelye</p>  →  <p class="info-value">@YOURGITHUB</p>
```
**Also update in footer links:**
```html
<a href="https://github.com/SakshiGelye" target="_blank">
  ↓
<a href="https://github.com/YOURGITHUB" target="_blank">
```

---

## UPDATE SKILLS

**File:** `css/style.css` - Find each skill and change:
```html
<div class="skill-item" data-progress="95">
    <div class="skill-icon">🏗️</div>
    <div class="skill-name">HTML5</div>
    <div class="skill-bar"><div class="skill-progress"></div></div>
    <div class="skill-percentage">95%</div>
</div>
```

**Change:**
- `🏗️` emoji to your choice
- `HTML5` to skill name
- `data-progress="95"` to your percentage (0-100)
- `95%` display text

---

## UPDATE PROJECTS

**File:** `index.html` - Projects section

```html
<div class="project-card" data-category="web">  ← Change category
    <div class="project-image">
        <i class="bi bi-globe"></i>  ← Change icon
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Your description...</p>
        <div class="project-tech">
            <span class="tech-tag">Tech1</span>
            <span class="tech-tag">Tech2</span>
        </div>
</div>
```

**Categories:**
- `data-category="web"` - Web projects
- `data-category="android"` - Android apps
- `data-category="java"` - Java projects
- `data-category="python"` - Python projects

---

## CHANGE COLOR SCHEME

**File:** `css/style.css` | **Top of file**

```css
--primary-color: #00d4ff;        ← Main brand color
--secondary-color: #a855f7;      ← Secondary gradient
--tertiary-color: #ec4899;       ← Accent color
```

**Popular Color Combinations:**

**Blue Theme:**
```css
--primary-color: #0099ff;
--secondary-color: #00d4ff;
--tertiary-color: #0066cc;
```

**Purple Theme:**
```css
--primary-color: #9d4edd;
--secondary-color: #c77dff;
--tertiary-color: #7209b7;
```

**Green Theme:**
```css
--primary-color: #00d26a;
--secondary-color: #34d399;
--tertiary-color: #059669;
```

---

## UPDATE TECH STACK (TYPING ANIMATION)

**File:** `js/script.js` | **Line ~224**

Find this:
```javascript
const texts = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Java', 'Python', 'SQL'];
```

Change to your technologies:
```javascript
const texts = ['React', 'Vue', 'Angular', 'Node.js', 'MongoDB', 'AWS'];
```

---

## ADD PROJECT IMAGES

Replace icon with image:

```html
<!-- Before -->
<div class="project-image">
    <i class="bi bi-globe"></i>
</div>

<!-- After -->
<div class="project-image">
    <img src="assets/project1.jpg" alt="My Project">
</div>
```

---

## UPDATE ABOUT SECTION

**File:** `index.html` | **About section**

Update these paragraphs:
- "Who I Am"
- "My Objective"  
- "My Strengths"

Also update statistics:
```html
<div class="stat-number" data-target="15">0+</div>  ← Change number
<div class="stat-label">Projects Completed</div>   ← Change label
```

---

## UPDATE EDUCATION

**File:** `index.html` | **Education section**

```html
<h3 class="timeline-title">Your Degree Name</h3>
<p class="timeline-institute">Your College Name</p>
<p class="timeline-year">2022 - Present</p>
<p class="timeline-description">Your description...</p>
```

---

## UPDATE CERTIFICATES

**File:** `index.html` | **Certificates section**

```html
<h3 class="cert-title">Certificate Name</h3>
<p class="cert-issuer">Organization Name</p>
<p class="cert-date">Month Year</p>
```

---

## FILE STRUCTURE

```
portfolio/
├── index.html              ← MAIN FILE - 95% of edits here
├── css/
│   └── style.css          ← STYLING - Colors, fonts, animations
├── js/
│   └── script.js          ← INTERACTIONS - Form, filters, animations
├── assets/
│   ├── resume.pdf         ← PUT YOUR RESUME HERE
│   ├── project1.jpg       ← PUT PROJECT IMAGES HERE
│   ├── project2.jpg
│   └── certificates/      ← PUT CERTIFICATE IMAGES HERE
├── README.md              ← Full documentation
├── SETUP.md               ← Detailed setup guide
└── QUICK_REFERENCE.md     ← This file
```

---

## MOST COMMON EDITS

| What | Where | How |
|------|-------|-----|
| Your Name | `index.html` line 64 | Replace text |
| Your Skills | `index.html` Skills section | Add/edit skill items |
| Your Projects | `index.html` Projects section | Add/edit project cards |
| Your Contact | `index.html` Contact section | Replace info values |
| Colors | `css/style.css` top `:root` | Change color values |
| Tech Stack | `js/script.js` line 224 | Change array values |
| Social Links | `index.html` Footer | Update href attributes |

---

## HOW TO RUN

**Option 1: Direct**
- Double-click `index.html`

**Option 2: Local Server (Python)**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Option 3: Live Server (VS Code)**
- Right-click `index.html`
- Select "Open with Live Server"

---

## TESTING CHECKLIST

- [ ] Name updated
- [ ] Skills added
- [ ] Projects added
- [ ] Contact info correct
- [ ] Colors look good
- [ ] Mobile responsive
- [ ] Links working
- [ ] Theme toggle works
- [ ] Form validates
- [ ] No console errors

---

## DEPLOYMENT

**GitHub Pages:**
1. Create repo: `yourusername.github.io`
2. Push files
3. Visit: `https://yourusername.github.io`

**Netlify:**
1. Go to netlify.com
2. Drag & drop portfolio folder
3. Get instant live link

**Vercel:**
1. Go to vercel.com
2. Import repository
3. Click Deploy

---

## QUICK HELP

**Q: How do I change background color?**
A: Edit `--background-color` in `css/style.css`

**Q: How do I add more projects?**
A: Copy a project card in `index.html` and modify it

**Q: How do I disable animations?**
A: Comment out keyframes in `css/style.css`

**Q: How do I change fonts?**
A: Update Google Fonts link in `index.html`

**Q: How do I add images?**
A: Replace icons with `<img src="assets/image.jpg">`

---

## CONTACT FORM NOTE

The contact form shows a success message but doesn't send emails by default.

**To enable email submission:**
- Use Formspree.io (FREE)
- Use EmailJS (FREE)
- Use backend API
- Integrate with email service

---

**Need help? Check README.md or SETUP.md for detailed instructions!**
