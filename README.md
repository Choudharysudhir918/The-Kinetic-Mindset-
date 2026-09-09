# The Kinetic Mindset — FINAL GitHub Website

This package fixes the visual issues from the previous GitHub upload while keeping the first navy + cyan + gold design.

## Included
- First-design homepage
- 10 chapter pages
- The Kinetic Mindset overview
- The Kinetic Mindset Engine
- Which Chapter Do You Need?
- Tools pages
- Kinetic Type quiz
- Nine-System Diagnostic
- Reader's Toolkit
- Decision Room
- Quotes & Wisdom / 50 Lines
- Book cover + blurb images
- Shared `style.css` and `main.js`
- Floating `BUY NOW` button on the homepage

## Important: upload the CONTENTS of this folder
Your GitHub repository root should contain `index.html`, `style.css`, `main.js`, all the `.html` pages, and the two image files. Do not upload only the ZIP file.

## Buy button
In `index.html`, search for `FLOATING BUY NOW BUTTON`. Change `href="#book"` to your actual Amazon/Flipkart/publisher/store URL. The chapter-page `Get the Book` buttons can be changed the same way when you have the real purchase URL.

## Why this version is different
- All pages are kept at the repository root so links cannot break because of missing `chapters/` or `tools/` folders.
- A shared stylesheet is loaded last and overrides the legacy cream/white page styles.
- Quote cards are dark with readable light text.
- Chapter overview cards use dark panels so titles are visible.
- Decision Room and diagnostic panels use the same dark theme instead of white boxes.
- Library headings have explicit block spacing so text cannot run together (for example, `The Kinetic Mindset` + `Book`).
