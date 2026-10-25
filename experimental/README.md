# Experimental homepage

Preview at `/experimental/`. This is an isolated homepage proof of concept; navigation still links to the existing site. The original pages, shared includes, and styles are unchanged. The prototype uses the existing Bootstrap navigation and responsive columns, with a separate stylesheet and layout.

`index.md` retains the original homepage text. If that text changes, synchronize the copy here. The five images are configured in `_includes/experimental-figures.html`; change their order or replace them there. They link to their source PDFs and have descriptive alternative text but no visible captions.

## Figure sources

The following crops were checked against the source PDFs. Page numbers below are PDF page numbers, not printed page numbers. Crop coordinates are in PDF points, measured from the top left, as `(left, top, right, bottom)`. The PNGs were rendered at three pixels per point.

| Asset | Source | Figure | PDF page | Crop |
| --- | --- | --- | --- | --- |
| removing.png | [Impartial geodetic removing games on graphs](https://arxiv.org/pdf/2606.05483) | 3.2, left | 5 | (129, 99, 256, 249) |
| median.png | [Braid graphs in simply-laced triangle-free Coxeter systems are median](https://arxiv.org/pdf/2408.16839) | 14 | 15 | (195, 351, 415, 486) |
| akin-5-1.png | [An isomorphism theorem for quotient commutation graphs](../scholarship/AkinThesis.pdf) | 5.1 | 31 | (100, 169, 510, 345) |
| akin-5-4.png | [An isomorphism theorem for quotient commutation graphs](../scholarship/AkinThesis.pdf) | 5.4 | 32 | (103, 310, 504, 456) |
| akin-6-1.png | [An isomorphism theorem for quotient commutation graphs](../scholarship/AkinThesis.pdf) | 6.1, right | 39 | (373, 260, 482, 371) |

The figures retain their original mathematical labels and colors. The page typography is sans-serif; lettering embedded in the source figures is unchanged.

## Validation

Jekyll build passed. Rendered text, including navigation, sidebar, and footer, was compared with the original homepage and matched. All five image assets were present in the build. The pre-existing pagination-template warning remains. Full-page desktop and mobile visual review is still needed because browser automation was unavailable.
