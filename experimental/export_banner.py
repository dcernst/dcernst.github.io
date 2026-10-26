"""Export the figure row from variation G without its preview labels."""
from pathlib import Path
import fitz

root = Path(__file__).resolve().parent
pdf = fitz.open(root / 'banner-previews.pdf')
page = next(p for p in pdf if p.get_text().startswith('G: Ten'))
legend = next(b for b in page.get_text('blocks') if 'Left to right:' in b[4])
title = page.search_for('G: Ten, requested selection')[0]
paths = [d['rect'] for d in page.get_drawings()
         if d['rect'].y0 > title.y1 and d['rect'].y1 < legend[1]]
assert paths
bounds = fitz.Rect(paths[0])
for rect in paths[1:]:
    bounds |= rect
bounds += (-3, -3, 3, 3)
page.set_cropbox(bounds)
svg = page.get_svg_image(text_as_path=True)
target = root / 'figures' / 'banner-g.svg'
target.write_text(svg)
print(f'{target.name}: {bounds.width:.1f} x {bounds.height:.1f} pt')
