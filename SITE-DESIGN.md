# Shared site design

The site uses `css/site-refresh.css`, `_includes/research-banner.html`, and `images/research-banner.svg`. The banner appears in every shared page layout. Regular pages, blog posts, and AI/mathematics pages share the responsive content/sidebar layout. Page titles sit below the banner divider; the homepage has no visible title. AI/mathematics metadata and navigation and recipe search are preserved.

The old experimental URL redirects to the homepage. Diagram source files, previews, and generator scripts were moved to `~/Desktop/Website-diagram-experiments-2026-10-25`. Its `MOVED-README.md` explains how to update the banner after moving that folder to Dropbox.

## Previous version

The complete pre-refresh Git state is preserved at tag `pre-refresh-2026-10-25` and branch `backup/pre-refresh-2026-10-25`, both pointing to `aed1492d`. These are local references until pushed.

To inspect the old version without disturbing current work, create a separate checkout:

```sh
git worktree add ../dcernst-site-before-refresh backup/pre-refresh-2026-10-25
```

To roll back the design after the migration is committed, revert the migration commit on the main branch. Keep later content changes separate from design changes when committing.
