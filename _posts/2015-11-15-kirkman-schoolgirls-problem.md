---
title: 'The Kirkman Schoolgirls Problem (Talk)'
author: Dana Ernst
layout: post
permalink: /kirkman-schoolgirls-problem/
categories:
  - Mathematics Posts
tags:
  - math
  - mathematics
  - combinatorial design theory
  - talk
  - FAMUS
---

After several weeks of guest speakers in our [Friday Afternoon Mathematics Undergraduate Seminar](http://naumathstat.github.io/seminars/famus/) (FAMUS), I gave a short talk on Friday, November 13 that was centered around [The Kirkman Schoolgirls Problem](https://en.wikipedia.org/wiki/Kirkman%27s_schoolgirl_problem). In 1850, the Reverend Thomas Kirkman, posed an innocent-looking puzzle in the *Lady’s and Gentleman’s Diary*, a recreational mathematics journal:

<div class="well">
Fifteen young ladies in a school walk out three abreast for seven days in succession: it is required to arrange them daily, so that no two shall walk twice abreast.
</div>

Here “abreast” means “in a group,” so the girls are walking out in groups of three, and each pair of girls should only be in the same group once. It turns out that this problem is harder than it looks. It's not even obvious that a solution is possible. In order to gain some insight into Kirkman's problem, we tinkered with the following simpler problems.

## Simpler Problem 1 ##
<div class="well">
15 young ladies in a school walk out in groups of 3 for 8 days in succession. Can you arrange the girls in walking groups so that no pair of girls ever walks in the same group of three more than once?
</div>

## Simpler Problem 2 ##
<div class="well">
6 young ladies in a school walk out in groups of 3 for 2 days in succession. Can you arrange the girls in walking groups so that no pair of girls ever walks in the same group of three more than once?
</div>

## Simpler Problem 3 ##
<div class="well">
9 young ladies in a school walk out in groups of 3 for 4 days in succession. Can you arrange the girls in walking groups so that no pair of girls ever walks in the same group of three more than once?
</div>

The audience was able to quickly determine that the answer is "no" for problems 1 and 2.  For the third problem, I let the audience play around for a bit and then I showed them one possible solution using *Quanta Magazine's* applet located  [here](https://www.quantamagazine.org/20150609-the-nine-schoolgirls-challenge/). After discussing what it would take to verify that a proposed solution to Kirkman's problem was actually a solution, I showed them one of seven possible solutions.

It turns out that Kirkman’s puzzle is a prototype for a more general problem:

<div class="well">
If you have $n$ schoolgirls, can you create groups of size $k$ such that each smaller set of size $t$ appears in just one of the larger groups?
</div>

Such an arrangement is said to be of type $S(t,k,n)$, which is called a [Steiner systems](https://en.wikipedia.org/wiki/Steiner_system) (or [combinatorial design theory](https://en.wikipedia.org/wiki/Combinatorial_design)). For example, solutions to the original Kirkman problem are of type $S(2,3,15)$. Notice that we have abandoned the extra restriction that the sets of size $k$ are sortable into days.

One of the fundamental problems in the theory of combinatorial designs is determining whether a given $S(t,k,n)$ exists and if one exists, how many are there? For example, is $S(2,3,7)$ possible? The answer is yes and one can interpret the [Fano plane](https://en.wikipedia.org/wiki/Fano_plane) as one possible solution.

Many combinations of $t, k$, and $n$ can be quickly ruled out by divisibility obstacles. For example, problem 2 above helped us to determine that $S(2,3,6)$ is not possible. For combinations that aren't immediately tossed out, there's no easy way to discover whether a given combination is possible.  For example, it turns out that $S(2,7,43)$ is impossible, but it is for complicated reasons. However, in January 2014, [Peter Keevash](https://www.maths.ox.ac.uk/people/peter.keevash) (Oxford) established that, apart from a few exceptions, $S(t,k,n)$ will always exist if a few divisibility requirements are satisfied. This is a big deal in the world of combinatorial design theory.

As with many of the topics I choose to give a talk on in FAMUS, I pretty much knew nothing about the topic before I started prepping for the talk. I go out of my way to emphasize that this is the case because I want the students to know that the learning never ends.

Here are the slides for my talk. *Note:* There are two additional problems related to Kirkman's problem at the very end that you might find interesting.

<script async class="speakerdeck-embed" data-id="e1ea7ccd3b3a423c8d9869294d4f4755" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

The content of my slides was inspired or came directly from the following sources:

  - There is a great write up of Kirkman's original problem, its connection to CDT, and a brief summary of Keevash's new result in [Quanta Magazine](https://www.quantamagazine.org/20150609-a-design-dilemma-solved-minus-designs/).
  - The Wikipedia article on [The Kirkman Schoolgirl Problem](https://en.wikipedia.org/wiki/Kirkman's_schoolgirl_problem) has a lot of cool information.
  - Also, check out the Wikipedia articles on [Steiner systems](https://en.wikipedia.org/wiki/Steiner_system), [Combinatorial Design Theory](https://en.wikipedia.org/wiki/Combinatorial_design), and the [Fano plane](https://en.wikipedia.org/wiki/Fano_plane).
  - You can find Peter Keevash's article about the existence of Steiner systems over on the [arXiv](http://arxiv.org/pdf/1401.3665v1.pdf).

Most weeks in FAMUS, the host interviews a faculty member.  However, this week, [Dr. Derek Sonderegger](http://oak.ucc.nau.edu/dls354/Home/) gave a 30 minute talk on the merits of pursuing a graduate degree in mathematics, statistics, or mathematics education. In addition, Derek provided some details about our graduate program. We also had quite a few of our grad students in attendance that were able to chime in about their current experience.
