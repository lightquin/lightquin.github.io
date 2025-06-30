Overview

This is the desktop version of the personal portfolio website. It showcases an interactive 3D-style image carousel, an about section with profile and starry background, and a contact page with cleanly designed cards. All JavaScript has been separated into external files for clean structure and maintainability.

Pages & Features

1. PAGE 1 (page1.html)
   - Coverflow Carousel: A 3D-style image slider that highlights the center image and peeks side images.
   - Navigation Buttons: Left (←) and Right (→) buttons allow users to cycle through the carousel.
   - Description Boxes: Captions below each image.
   - Responsive Layout: Adjusts gracefully across screen sizes.
   - JavaScript: Carousel logic handled in scripts/scripts.js.

2. PAGE 2 (page2.html)
   - About Section: Two-column layout with profile image and about text.
   - Starry Animated Background: Random twinkling stars animate in the background.
   - Card Design: Uses drop shadows for a modern elevated look.
   - JavaScript: Star generation handled in scripts/scripts.js.

3. PAGE 3 (page3.html)
   - Contact & Social Info: Grid-based layout for clean separation of contacts and social media links.
   - Styled Contact Cards: Information is neatly organized using modern UI card styles.
   - No JavaScript Required: This page is fully static.

JavaScript
File: scripts/scripts.js

- render(), prev(), next() functions for carousel (Page 1).
- Star background generator for animated star effect (Page 2).
- Events: DOMContentLoaded, resize, and load listeners.
