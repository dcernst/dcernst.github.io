# Experimental homepage

Preview at `/experimental/`. The original homepage is unchanged. This prototype uses the existing Bootstrap navigation and responsive content/sidebar columns, with a separate stylesheet and layout.

`index.md` retains the homepage text. The banner spans both columns. A horizontal divider has 24 px of space above and below it, separating the banner from the content and sidebar. Its rounded container matches the sidebar (`#f4f7fb` background, `1px solid #bfcbdb` border, `8px` radius). On mobile the figure row scrolls horizontally rather than shrinking labels to unreadable sizes.

## Banner workflow

- Edit diagrams in `figures.tex`.
- Edit the variation order in `build_banner_previews.py`; run it to regenerate `banner-previews.tex`.
- Compile `banner-previews.tex` and update `banner-previews.pdf`.
- Run `python3 experimental/export_banner.py` from the repository root to export variation G to `experimental/figures/banner-g.svg`.

The SVG has a transparent page background, preserves intentional white fills within diagrams, and uses outlined lettering so it does not depend on visitors having TeX fonts. Preview headings and descriptions are excluded. `_includes/experimental-figures.html` supplies its alternative text.

Earlier paper crops remain in `experimental/figures/` but are no longer used by this landing page.
