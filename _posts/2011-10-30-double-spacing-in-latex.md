---
title: Double-spacing in LaTeX
author: Dana Ernst
layout: post
permalink: /double-spacing-in-latex/
tumblr_dcernst_permalink:
  - http://dcernst.tumblr.com/post/12118165410/double-spacing-in-latex
tumblr_dcernst_id:
  - 12118165410
categories:
  - Technology Posts
tags:
  - LaTeX
  - writing
---
I'm currently writing a grant proposal and the narrative is supposed to be double-spaced. As with most of my writing, I'm using LaTeX. I've double-spaced a .tex document before, but I do it so infrequently that I needed to remind myself how do it. It seems the most common technique is to make use of the `setspace` package, which you can find [here][1] if you don't already have it. Here are the steps necessary to double-space.

In the preamble of your document add the line `usepackage{setspace}`. In order to double-space your document, add the line `doublespacing` before `begin{document}`.

The `setspace` package also supports `singlespacing`, `onehalfspacing`, and even `setstretch{1.5}`, where you can change 1.5 to whatever you desire. In addition, you can make a block of text single-spaced in the middle of a double-spaced document by using `begin{singlespace}stuff you want single-spacedend{singlespace}`.

 [1]: http://www.ctan.org/pkg/setspace