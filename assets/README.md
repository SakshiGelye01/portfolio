<!-- ASSETS PLACEHOLDER GUIDE -->
<!-- 
    This file documents what files should go in the assets folder.
    You can delete this file once you've added your own assets.
-->

ASSETS FOLDER - WHAT TO ADD
=============================

1. PROFILE IMAGE
   - File name: profile.jpg
   - Recommended size: 400x400 pixels
   - Format: JPG, PNG, or WebP
   - Location: assets/profile.jpg
   - Usage: For header/about section if needed

2. RESUME FILE
   - File name: resume.pdf
   - Format: PDF only
   - Location: assets/resume.pdf
   - Current usage: Download Resume buttons link to this file

3. PROJECT SCREENSHOTS
   - File names: project1.jpg, project2.jpg, project3.jpg, etc.
   - Recommended size: 500x350 pixels
   - Format: JPG, PNG, or WebP
   - Location: assets/project1.jpg, assets/project2.jpg, etc.
   - Usage: Project card images in the Projects section

4. CERTIFICATE IMAGES
   - File names: cert1.jpg, cert2.jpg, cert3.jpg, etc.
   - Recommended size: 600x400 pixels or A4 aspect ratio
   - Format: JPG, PNG, or WebP
   - Location: assets/certificates/cert1.jpg, etc.
   - Usage: Certificate preview in modals

5. FAVICON (OPTIONAL)
   - File name: favicon.ico or favicon.png
   - Size: 32x32 pixels
   - Location: assets/favicon.ico
   - Add to HTML: <link rel="icon" href="assets/favicon.ico">

HOW TO ADD IMAGES TO YOUR PORTFOLIO
====================================

1. In Project Cards:
   Replace: <i class="bi bi-film"></i>
   With: <img src="assets/project1.jpg" alt="Project Name">

2. In Certificate Cards:
   Replace: <i class="bi bi-award"></i>
   With: <img src="assets/certificates/cert1.jpg" alt="Certificate Name">

3. Profile Image (if needed):
   Add to About section: <img src="assets/profile.jpg" alt="Profile" class="rounded-circle">

IMAGE OPTIMIZATION TIPS
========================
- Compress images using TinyPNG or ImageOptim
- Use WebP format for better performance
- Keep file sizes under 500KB
- Use descriptive alt text
- Maintain consistent image aspect ratios

PLACEHOLDER ICONS USED
======================
Current implementation uses Bootstrap Icons emojis/icons:
- 🎬 Movie icon
- 🏥 Hospital icon
- ✈️ Airplane icon
- 🎯 Checkmark icon
- 👜 Shopping bag icon
- 📈 Graph icon
- 🌐 Globe icon
- 🎨 Palette icon
- 📱 Phone icon
- 💾 Database icon

You can change these by:
1. Using Font Awesome icons
2. Using emoji symbols
3. Adding actual image files

FOLDER STRUCTURE (RECOMMENDED)
==============================
assets/
├── profile.jpg
├── resume.pdf
├── project1.jpg
├── project2.jpg
├── project3.jpg
├── project4.jpg
├── project5.jpg
├── project6.jpg
├── favicon.ico
└── certificates/
    ├── cert1.jpg
    ├── cert2.jpg
    ├── cert3.jpg
    ├── cert4.jpg
    ├── cert5.jpg
    └── cert6.jpg
