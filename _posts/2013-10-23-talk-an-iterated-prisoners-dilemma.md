---
title: An Iterated Prisoner's Dilemma (Talk)
author: Dana Ernst
layout: post
permalink: /talk-an-iterated-prisoners-dilemma/
categories:
  - Mathematics Posts
  - Talks
tags:
  - game theory
  - math
  - mathematics
  - Paul Harper
  - "prisoner's dilemma"
  - talk
  - Vincent Knight
---

On Thursday, October 17, I gave an hour long talk in our department seminar titled "An Iterated Prisoner's Dilemma." There were about 35 people in attendance, including undergraduates (mostly my calculus students), graduate students, and faculty from the [Mathematics & Statistics Department](http://nau.edu/cefns/natsci/math/) at [Northern Arizona University](http://nau.edu). I was pleased with the turnout since our seminars are usually on Tuesdays and I wasn't sure how many people would come on a non-standard day. Here is the abstract for the talk:

> The Prisoner's Dilemma goes something like this. Two members of a criminal gang are arrested and imprisoned. Each prisoner is in solitary confinement with no means of speaking to or exchanging messages with the other. The police admit they don't have enough evidence to convict the pair on the principal charge. They plan to sentence both to a year in prison on a lesser charge. Simultaneously, the police offer each prisoner a bargain. If A and B both confess the crime, each of them serves 2 years in prison. If A confesses but B denies the crime, A will be set free whereas B will serve 3 years in prison (and vice versa). If A and B both deny the crime, both of them will only serve 1 year in prison. In this talk, we will first discuss this classic game theoretic problem and then introduce an iterative version that consists of a round robin tournament of teams, where the winner is the team that spends the least amount of time in prison.

I pretty much lifted this straight from the Wikipedia page on the [Prisoner's Dilemma](http://en.wikipedia.org/wiki/Prisoner's_dilemma). So, thanks to the author(s) of that page!

There were several motivating factors in choosing this topic. First, every once in a while, I like to give a talk about something that I don't know much about. Doing this forces me to learn something new. Also, I've found that some of my best talks are on things that I am not an expert on. Certainly, one of the reasons why this is true is that I'm likely to pitch a talk at a lower level if I'm talking about something unfamiliar. I don't know about you, but I much prefer sitting through a talk when I understand most of what's going on. Culturally, it seems acceptable to give talks where most of the audience doesn't understand most of the talk. I'm trying to give talks where this doesn't happen.

It's expected that our graduate students (we have a masters program at NAU) attend our weekly seminars, but lately their attendance has been poor. I wanted to pick a topic that might entice them to start coming.

I ended up choosing the Prisoner's Dilemma as a topic because I wanted to learn more about [game theory](http://en.wikipedia.org/wiki/Game_theory) and I figured the topic would be accessible. Moreover, I was inspired by Google+ and blog posts by [Vincent Knight](http://www.vincent-knight.com/) and [Paul Harper](http://www.cardiff.ac.uk/maths/contactsandpeople/profiles/harper.html) (both from Cardiff University). There was also an excellent [Radiolab episode](http://www.radiolab.org/story/104082-prisoners-dilemma/) about the Prisoner's Dilemma back in 2010 that planted a seed for me. I'd like to thank Vince and Paul for helping out while I was preparing my talk. In particular, my slides are a modification of Vince's slides, which he discusses [here](http://drvinceknight.blogspot.co.uk/2012/01/playing-games-during-outreach-event.html).

Without further ado, the slides for my talk are available [here](https://docs.google.com/presentation/d/1awzIbCJATZPTw8Jjk43qIoaAAysniyKm2T8hjcLeXt0/edit?usp=sharing).

As you can see by looking at the slides, the talk began with an activity involving the <a href="http://en.wikipedia.org/wiki/Guess_2/3_of_the_average">Two Thirds of Average Game</a>. During the activity, the audience made two different guesses. While I was giving the rest of the talk, I had a volunteer enter all the guesses into a csv file on the <a href="https://cloud.sagemath.com/">Sagemath Cloud</a>. At the end of the talk, I ran <a href="https://github.com/drvinceknight/two_thirds_of_the_average_game">Vince's python script</a> on the csv file in the Sagemath cloud. The output told me who the winners were for both rounds of guessing and provided a dandy looking graph, seen below.

<img src="{{ site.baseurl }}/images/2013/10/Results_for_danasdata.csv.png" class="img-responsive" width="100%" img style="margin-bottom: 10px" />

I provided the winners with some chocolate.

Around slide 18, the plan was to conduct an Iterated Prisoner's Dilemma tournament involving 4 teams, but I was a little worried about running out of time. So, I decided to wait until the end of the talk and do it if I had time. I ended up squeezing in a 3-team tournament that we probably flew through too quickly to get much out of, but it was fun nonetheless. The three team names were the United States, North Korea, and Russia. North Korea ended up winning, but only by a small margin.
