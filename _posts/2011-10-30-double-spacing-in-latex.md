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
<div class="kcite-section" kcite-section-id="90">
  <p>
    I&#8217;m currently writing a grant proposal and the narrative is supposed to be double-spaced. As with most of my writing, I&#8217;m using LaTeX. I&#8217;ve double-spaced a .tex document before, but I do it so infrequently that I needed to remind myself how do it. It seems the most common technique is to make use of the <code>setspace</code> package, which you can find <a href="http://www.ctan.org/pkg/setspace">here</a> if you don&#8217;t already have it. Here are the steps necessary to double-space.
  </p>
  
  <p>
    In the preamble of your document add the line <code>usepackage{setspace}</code>. In order to double-space your document, add the line <code>doublespacing</code> before <code>begin{document}</code>.
  </p>
  
  <p>
    The <code>setspace</code> package also supports <code>singlespacing</code>, <code>onehalfspacing</code>, and even <code>setstretch{1.5}</code>, where you can change 1.5 to whatever you desire. In addition, you can make a block of text single-spaced in the middle of a double-spaced document by using <code>begin{singlespace}stuff you want single-spacedend{singlespace}</code>.
  </p>
  
  <!-- kcite active, but no citations found -->
</div>

<!-- kcite-section 90 -->