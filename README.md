# Jiandong Jin — Academic Homepage

Personal homepage for Jiandong Jin, Ph.D. student at Anhui University. It focuses on unaligned RGB-T tracking and pedestrian attribute recognition.

The site is a static page with no build step. It uses a two-column academic layout inspired by [Yifei Deng's homepage](https://github.com/Yifei-AHU/Yifei-AHU.github.io) and [Yaoyao Liu's homepage template](https://github.com/yaoyao-liu/yaoyaoliu-homepage), with original HTML and CSS.

## Update content

- Edit `index.html` for biography, news, research areas, and publications.
- Edit `assets/style.css` for layout and colors.
- Each publication has `data-topic="tracking"` or `data-topic="par"`; update filter counts when adding entries.
- Project figures are loaded from the corresponding public research repositories. Replace the image URLs if those figures move.

## GitHub Pages

In repository **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. The workflow at `.github/workflows/pages.yml` publishes the root directory on pushes to `main`.

Site URL: https://nop1224.github.io/jdjin-homepage/
