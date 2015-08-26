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
*Note:* This post overlaps significantly with Mendeley&#8217;s blog post found [here][1].

My current reference manager of choice is [Mendeley][2], which is a free desktop and web solution designed for storing, annotating, and sharing research papers, discovering research data and collaborating online. It combines [Mendeley Desktop][3], a PDF and reference management application (available for Mac, Linux, and Windows) with Mendeley Web, an online research paper management tool and social network for researchers. You can find a short YouTube video that describes what Mendeley is [here][4].

For nearly all of my academic writing, I use [LaTeX][5] together with [BibTeX][6]. One of the many benefits of Mendeley is that it will automatically generate BibTeX files. However, at the time of writing this post (version 1.1.2 and earlier), integration with BibTeX is lacking in a few ways. In order for things to go smoothly, I suggest the following set up in Mendeley Desktop.

[<img src="{{ site.baseurl }}/images/2011/10/MendeleyBibTeXPreferences.jpeg?fit=550%2C413" alt="" title="Mendeley BibTeX Preferences" class="aligncenter size-full wp-image-114" data-recalc-dims="1" />][7]

You want to uncheck the &#8220;Escape LaTeX special characters&#8221; box so that braces, backslashes, dollar signs, etc. don&#8217;t get clobbered by Mendeley when it generates the corresponding .bib files. You should choose &#8220;Create one BibTeX file per collection&#8221;. This generates one .bib file for each subcollection (folder or group) you create in Mendeley Desktop. If you don&#8217;t do this, Mendeley will create a duplicate entry in your synced .bib file for each entry appearing in a subcollection, which will in turn prevent LaTeX/BibTeX from compiling properly if you happen to cite one of the duplicate entries. I create a new subcollection for every document that I am writing that might require a bibliography.

Once you have got everything set up, it is really easy to incorporate Mendeley into your LaTeX writing workflow. If you want to cite a particular item, just click on it in Mendeley Desktop, hit &#8220;command/control-K&#8221; to copy the BibTeX citation key, then paste it into the appropriate location in your .tex file.

 [1]: http://www.mendeley.com/blog/tipstricks/howto-use-mendeley-to-create-citations-using-latex-and-bibtex/
 [2]: http://www.mendeley.com
 [3]: http://www.mendeley.com/download-mendeley-desktop
 [4]: http://www.youtube.com/watch?v=uYmxynG_MAs
 [5]: http://www.latex-project.org/
 [6]: http://www.bibtex.org/
 [7]: {{ site.baseurl }}/images/2011/10/MendeleyBibTeXPreferences.jpeg