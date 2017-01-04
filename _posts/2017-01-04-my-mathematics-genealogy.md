---
title: My Mathematics Genealogy
author: Dana Ernst
layout: post
permalink: /my-mathematics-genealogy/
categories:
  - Mathematics Posts
tags:
  - genealogy
  - math
  - mathematics
---

The mission of the [Mathematics Genealogy Project](https://www.genealogy.math.ndsu.nodak.edu/index.php) (MGP) is to compile information about all  mathematicians, living and dead, to create family trees based on advisor-student relationships. The MGP database contains over 200,000 entries.  A complete entry for a mathematician in the database lists the mathematician's name, year and title of their dissertation, graduating institution, list of their PhD students, and their PhD advisor(s).  Occasionally, some of this information is missing.  You can find my record [here](https://www.genealogy.math.ndsu.nodak.edu/id.php?id=125763). Since finishing my PhD in 2008, I've poked around the MGP and always thought it would be cool to [get a poster made](https://www.genealogy.math.ndsu.nodak.edu/posters.php) that displays my mathematical genealogy, but I just haven't gotten around to it.  

One of my former students, Andrew Lebovitz, recently posted a link on Facebook to a [Nature article](http://www.nature.com/news/majority-of-mathematicians-hail-from-just-24-scientific-families-1.20491#/b1) that summarizes a paper, titled [The classical origin of modern mathematics](http://epjdatascience.springeropen.com/articles/10.1140/epjds/s13688-016-0088-y), which completed a comprehensive analysis of the MGP database.  One of the interesting findings was that the individuals in the database fall into 84 distinct family trees with two-thirds of the world’s mathematicians concentrated in just 24 of them.

After reading the Nature article, I was motivated to see if I could figure out whether I belonged to one of the 24 families. It wasn't obvious to me how I would do this without manually clicking on my advisor ([Richard M. Green](https://math.colorado.edu/~rmg/)), then my advisor's advisor, etc. This was slightly more complicated than I expected because there were quite a few ancestors with 2 advisors, so I had to navigate down multiple paths.   As I clicked around, I drew out my family tree in a notebook.

Here is what I discovered.  My longest branch goes back to [Nicolo Fontana Tartaglia](https://www.genealogy.math.ndsu.nodak.edu/id.php?id=136514) (currently 14,428 descendants).  My tree includes [Isaac Newton](https://www.genealogy.math.ndsu.nodak.edu/id.php?id=74313), [Galileo Galilei](https://www.genealogy.math.ndsu.nodak.edu/id.php?id=134975), and [Marin Mersenne](https://www.genealogy.math.ndsu.nodak.edu/id.php?id=125434) (who [Mersenne primes](https://en.wikipedia.org/wiki/Mersenne_prime) were named after). Interestingly, no one on this path belongs to one of the 24 families mentioned in [The classical origin of modern mathematics](http://epjdatascience.springeropen.com/articles/10.1140/epjds/s13688-016-0088-y).  Also, I was disappointed to find out that I wasn't related to [Leonhard Euler](https://www.genealogy.math.ndsu.nodak.edu/id.php?id=38586). However, I am a descendant of [Henry Bracken](https://www.genealogy.math.ndsu.nodak.edu/id.php?id=129422), who is the head of one of the 24 families.

I posted some of this information on Facebook and asked if anyone knew how to automatically create a nice visualization of the directed graph corresponding to my family tree. [Chris Drupieski](https://math.depaul.edu/cdrupies/) replied and pointed out a program called [Geneagrapher](http://www.davidalber.net/geneagrapher/), which was built to do exactly what I was looking for. In particular, Geneagrapher gathers information for building math genealogy trees from the MGP, which is then stored in dot file format. This data can then be passed to [Graphviz](http://www.graphviz.org) to generate a directed graph.

Here are the steps that I completed to get Geneagrapher up and running on my computer running MacOS 10.11.  The Geneagrapher website suggests using <code>easy_install</code> via Terminal, but this didn't immediately work for me.  It often seems that doing anything with Python on my Mac requires a few extra steps.  After doing a little searching around, I found a [post on Stack Overflow](http://stackoverflow.com/questions/6012246/why-is-python-easy-install-not-working-on-my-mac) that solved my issue.  At the command line, I typed the following:

> sudo chown -R <your_user>:wheel /Library/Python/2.7/site-packages/

Of course, you should replace <code><your_user></code> with your username.  Note that using <code>sudo</code> requires you to enter your password.  Next, I installed Geneagrapher using the following:

> easy_install http://www.davidalber.net/dist/geneagrapher/Geneagrapher-0.2.1-r2.tar.gz

In order to use Geneagrapher, you need to input a record number from MGP.  Mine is 125763.  At the command line, I typed:

> ggrapher -f ernst.dot -a 125763

You can replace <code>ernst</code> with whatever you'd like the output file to be called. The next step is to pass the dot file to Graphviz.  If you don't already have Graphviz installed, you can do so using [Homebrew](http://brew.sh) (which is also easy to install):

> brew install graphviz

Following the Geneagrapher instructions, I typed the following to generate my family tree:

> dot -Tpng ernst.dot > ernst.png 

Maybe it is worth mentioning that unless you specify otherwise, the dot and png files will be stored in your home directory.  Below is my mathematical family tree created using Geneagrapher. As you can see, it took a while for my ancestors to leave the [University of Cambridge](https://www.cam.ac.uk).

<img src="{{ site.baseurl }}/images/FamilyTree.png" class="img-responsive" width="100%" img style="margin-bottom: 10px" />
