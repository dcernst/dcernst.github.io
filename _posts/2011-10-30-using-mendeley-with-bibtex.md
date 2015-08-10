---
title: Using Mendeley with BibTeX
author: Dana Ernst
layout: post
permalink: /using-mendeley-with-bibtex/
tumblr_dcernst_permalink:
  - http://dcernst.tumblr.com/post/12128172071/using-mendeley-with-bibtex
tumblr_dcernst_id:
  - 12128172071
categories:
  - Technology Posts
tags:
  - BibTeX
  - LaTeX
  - mathematics
  - Mendeley
  - writing
---
<div class="kcite-section" kcite-section-id="88">
  <p>
    <em>Note:</em> This post overlaps significantly with Mendeley&#8217;s blog post found <a href="http://www.mendeley.com/blog/tipstricks/howto-use-mendeley-to-create-citations-using-latex-and-bibtex/">here</a>.
  </p>
  
  <p>
    My current reference manager of choice is <a href="http://www.mendeley.com">Mendeley</a>, which is a free desktop and web solution designed for storing, annotating, and sharing research papers, discovering research data and collaborating online. It combines <a href="http://www.mendeley.com/download-mendeley-desktop">Mendeley Desktop</a>, a PDF and reference management application (available for Mac, Linux, and Windows) with Mendeley Web, an online research paper management tool and social network for researchers. You can find a short YouTube video that describes what Mendeley is <a href="http://www.youtube.com/watch?v=uYmxynG_MAs">here</a>.
  </p>
  
  <p>
    For nearly all of my academic writing, I use <a href="http://www.latex-project.org/">LaTeX</a> together with <a href="http://www.bibtex.org/">BibTeX</a>. One of the many benefits of Mendeley is that it will automatically generate BibTeX files. However, at the time of writing this post (version 1.1.2 and earlier), integration with BibTeX is lacking in a few ways. In order for things to go smoothly, I suggest the following set up in Mendeley Desktop.
  </p>
  
  <p>
    <a href="http://i0.wp.com/danaernst.com/wp-content/uploads/2011/10/MendeleyBibTeXPreferences.jpeg"><img src="http://i0.wp.com/danaernst.com/wp-content/uploads/2011/10/MendeleyBibTeXPreferences.jpeg?fit=550%2C413" alt="" title="Mendeley BibTeX Preferences" class="aligncenter size-full wp-image-114" data-recalc-dims="1" /></a>
  </p>
  
  <p>
    You want to uncheck the &#8220;Escape LaTeX special characters&#8221; box so that braces, backslashes, dollar signs, etc. don&#8217;t get clobbered by Mendeley when it generates the corresponding .bib files. You should choose &#8220;Create one BibTeX file per collection&#8221;. This generates one .bib file for each subcollection (folder or group) you create in Mendeley Desktop. If you don&#8217;t do this, Mendeley will create a duplicate entry in your synced .bib file for each entry appearing in a subcollection, which will in turn prevent LaTeX/BibTeX from compiling properly if you happen to cite one of the duplicate entries. I create a new subcollection for every document that I am writing that might require a bibliography.
  </p>
  
  <p>
    Once you have got everything set up, it is really easy to incorporate Mendeley into your LaTeX writing workflow. If you want to cite a particular item, just click on it in Mendeley Desktop, hit &#8220;command/control-K&#8221; to copy the BibTeX citation key, then paste it into the appropriate location in your .tex file.
  </p>
  
  <!-- kcite active, but no citations found -->
</div>

<!-- kcite-section 88 -->