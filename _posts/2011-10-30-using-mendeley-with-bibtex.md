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
*Note:* This post overlaps significantly with Mendeley's blog post found [here](http://www.mendeley.com/blog/tipstricks/howto-use-mendeley-to-create-citations-using-latex-and-bibtex/).

My current reference manager of choice is [Mendeley](http://www.mendeley.com), which is a free desktop and web solution designed for storing, annotating, and sharing research papers, discovering research data and collaborating online. It combines [Mendeley Desktop](http://www.mendeley.com/download-mendeley-desktop), a PDF and reference management application (available for Mac, Linux, and Windows) with Mendeley Web, an online research paper management tool and social network for researchers. You can find a short YouTube video that describes what Mendeley is [here](http://www.youtube.com/watch?v=uYmxynG_MAs).

For nearly all of my academic writing, I use [LaTeX](http://www.latex-project.org/) together with [BibTeX](http://www.bibtex.org/). One of the many benefits of Mendeley is that it will automatically generate BibTeX files. However, at the time of writing this post (version 1.1.2 and earlier), integration with BibTeX is lacking in a few ways. In order for things to go smoothly, I suggest the following set up in Mendeley Desktop.

<img src="{{ site.baseurl }}/images/2011/10/MendeleyBibTeXPreferences.jpeg" class="img-responsive" width="80%" img style="margin: 10px" />

You want to uncheck the <code>Escape LaTeX special characters</code> box so that braces, backslashes, dollar signs, etc. don't get clobbered by Mendeley when it generates the corresponding <code>.bib</code> files. You should choose <code>Create one BibTeX file per collection</code>. This generates one <code>.bib</code> file for each subcollection (folder or group) you create in Mendeley Desktop. If you don't do this, Mendeley will create a duplicate entry in your synced <code>.bib</code> file for each entry appearing in a subcollection, which will in turn prevent LaTeX/BibTeX from compiling properly if you happen to cite one of the duplicate entries. I create a new subcollection for every document that I am writing that might require a bibliography.

Once you have got everything set up, it is really easy to incorporate Mendeley into your LaTeX writing workflow. If you want to cite a particular item, just click on it in Mendeley Desktop, hit <code>command/control-k</code> to copy the BibTeX citation key, then paste it into the appropriate location in your <code>.tex</code> file.
