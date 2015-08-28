---
title: LaTeX Homework Template
author: Dana Ernst
layout: post
permalink: /latex-homework-template/
standard_seo_post_level_layout:
  - 
standard_link_url_field:
  - 
standard_seo_post_meta_description:
  - 
sharing_disabled:
  - 1
dsq_thread_id:
  - 4020442707
categories:
  - Teaching Posts
  - Technology Posts
tags:
  - IBL
  - inquiry-based learning
  - LaTeX
  - teaching
---
For most of my [inquiry-based learning][1] (IBL) proof-based courses, I typically assign two types of homework assignments:

  1. Daily Homework
  2. Weekly Homework

I'll briefly explain each of these.

# Daily Homework

The Daily Homework is assigned each class meeting, and students are expected to complete (or try their best to complete) each assignment before walking into the next class period. All assignments should be carefully, clearly, and cleanly written. Among other things, this means that the work should include proper grammar, punctuation, and spelling. However, the work done on these assignments is not intended to be perfect. The Daily Homework generally consists of tasks (e.g., completing exercises, proving theorems) from the course notes. On the day that a homework assignment is due, the majority of the class period is devoted to students presenting some subset (maybe all) of their proposed solutions/proofs to the tasks that are due that day. Students are allowed (in fact, strongly encouraged!) to modify their written work in light of presentations made in class; however, they are required to use a felt tip pen, which I provide at the beginning of each class. Students can annotate their work as much as they like and there is no penalty for using the felt tip pen. Students submit their their work at the end of class and the assignment is graded on a $\checkmark$-system. Whether the student receives a $\checkmark-$, $\checkmark$, or $\checkmark+$ depends on how much work they had completed before they walked in the room. The felt tip pen strategy works amazingly well.

# Weekly Homework

In addition to the Daily Homework, students are also required to submit two formally-written proofs each week. During week $n$, students submit any two problems marked with a $\star$ that were turned in during week $n-1$ for the Daily Homework. The $\star$-problems are typically a subset of the medium to difficult proofs. The students are required to submit a PDF of their write-ups, and in general, the Weekly Homework assignments are due on a non-class session day (so that they don't interfere with the Daily Homework). One huge advantage of this approach is that students are forced to reflect on the previous week's work and it allows them another opportunity to learn the material if they didn't master it the firs time.

If you'd like to know more about my approach to Daily and Weekly Homework, as well as the felt tip pens, check out the slides for [this talk][2]. In the future, I plan to write a more extensive blog post about the advantages of the felt tip pens and the multiple rounds of revision that the Weekly Homework promotes.

# Using LaTeX for the Weekly Homework

I either require or strongly encourage my students to type up their Weekly Homework assignments using [LaTeX][3]. In case you don't already know, LaTeX (pronounced "lay-tech", or sometimes "la-tech") is a markup language that is the standard for typesetting mathematics (and other technical fields). Most people find it difficult to get started with LaTeX and my students are no exception. To minimize some of the initial difficulties, I encourage them to use [Overleaf][4], which is an awesome and free online LaTeX editor. This way students do not need to worry about installing the LaTeX backend and an editor. One advantage to Overleaf is that my students can easily share their source documents with me. Whenever they are having difficulty, I can just take a look at their file and either make a comment right in the file or do a quick debug. Another way that I try to reduce the LaTeX start-up cost is by providing my students with a [LaTeX Homework Template][5] (see below).

<noscript>
  <pre><code class="language-tex tex">% --------------------------------------------------------------
% This is all preamble stuff that you don't have to worry about.
% Head down to where it says "Start here"
% --------------------------------------------------------------
 
\documentclass[12pt]{article}
 
\usepackage[margin=1in]{geometry} 
\usepackage{amsmath,amsthm,amssymb}
 
\newcommand{\N}{\mathbb{N}}
\newcommand{\Z}{\mathbb{Z}}
 
\newenvironment{theorem}[2][Theorem]{\begin{trivlist}
\item[\hskip \labelsep {\bfseries #1}\hskip \labelsep {\bfseries #2.}]}{\end{trivlist}}
\newenvironment{lemma}[2][Lemma]{\begin{trivlist}
\item[\hskip \labelsep {\bfseries #1}\hskip \labelsep {\bfseries #2.}]}{\end{trivlist}}
\newenvironment{exercise}[2][Exercise]{\begin{trivlist}
\item[\hskip \labelsep {\bfseries #1}\hskip \labelsep {\bfseries #2.}]}{\end{trivlist}}
\newenvironment{problem}[2][Problem]{\begin{trivlist}
\item[\hskip \labelsep {\bfseries #1}\hskip \labelsep {\bfseries #2.}]}{\end{trivlist}}
\newenvironment{question}[2][Question]{\begin{trivlist}
\item[\hskip \labelsep {\bfseries #1}\hskip \labelsep {\bfseries #2.}]}{\end{trivlist}}
\newenvironment{corollary}[2][Corollary]{\begin{trivlist}
\item[\hskip \labelsep {\bfseries #1}\hskip \labelsep {\bfseries #2.}]}{\end{trivlist}}
 
\begin{document}
 
% --------------------------------------------------------------
%                         Start here
% --------------------------------------------------------------
 
\title{Weekly Homework X}%replace X with the appropriate number
\author{Tony Stark\\ %replace with your name
Foundations of Mathematics} %if necessary, replace with your course title
 
\maketitle
 
\begin{theorem}{x.yz} %You can use theorem, exercise, problem, or question here.  Modify x.yz to be whatever number you are proving
Delete this text and write theorem statement here.
\end{theorem}
 
\begin{proof}
Blah, blah, blah.  Here is an example of the \texttt{align} environment:
%Note 1: The * tells LaTeX not to number the lines.  If you remove the *, be sure to remove it below, too.
%Note 2: Inside the align environment, you do not want to use $-signs.  The reason for this is that this is already a math environment. This is why we have to include \text{} around any text inside the align environment.
\begin{align*}
\sum_{i=1}^{k+1}i & = \left(\sum_{i=1}^{k}i\right) +(k+1)\\ 
& = \frac{k(k+1)}{2}+k+1 & (\text{by inductive hypothesis})\\
& = \frac{k(k+1)+2(k+1)}{2}\\
& = \frac{(k+1)(k+2)}{2}\\
& = \frac{(k+1)((k+1)+1)}{2}.
\end{align*}
\end{proof}
 
\begin{theorem}{x.yz}
Let $n\in \Z$.  Then yada yada.
\end{theorem}
 
\begin{proof}
Blah, blah, blah.  I'm so smart.
\end{proof}
 
% --------------------------------------------------------------
%     You don't have to mess with anything below this line.
% --------------------------------------------------------------
 
\end{document}</code></pre>
</noscript>

This template is set up exactly how I want the Weekly Homework to look. I also provide a minimal amount of guidance, as well as some examples in the template. Here is what the resulting PDF looks like.

<div>
</div>

Using the template in Overleaf is as easy as clicking the link below. Try it!

<center>
  </p> 
  
  <p>
    </center>
  </p>
  
  <p>
    Feel free to use the template and if you have ideas for improvements, I'd love to hear about them. Lastly, I've written a <a href="{{ site.baseurl }}/quick-latex-guide/">Quick LaTeX Guide</a> to help my students get started with the actual writing of LaTeX.
  </p>
  
  <p>
    <em>Update June 2013:</em> I originally encouraged my students to use <a href="http://scribtex.com">ScribTeX</a>, which seems to have joined forces with <a href="http://sharelatex.com">ShareLaTeX</a>. However, I now have my students use <a href="http://Overleaf.com">Overleaf</a>, which my students and I have been very happy with. I modified my original post to reflect my current use of Overleaf.
  </p>

 [1]: http://www.inquirybasedlearning.org/?page=What_is_IBL
 [2]: https://speakerdeck.com/u/dcernst/p/effective-and-efficient-grading-for-an-ibl-course
 [3]: http://en.wikipedia.org/wiki/LaTeX
 [4]: http://Overleaf.com
 [5]: https://gist.github.com/1827406