---
title: Undergraduate Research
author: Dana Ernst
layout: page
sharing_disabled:
  - 1
standard_seo_post_meta_description:
  - 
---
<div class="kcite-section" kcite-section-id="68">
  <p>
    The combinatorial nature of <a href="http://danaernst.com/scholarship/">my research</a> naturally lends itself to collaborations with undergraduates, and my goal is to incorporate students in my research as much as possible. If you are an NAU student interested in conducting research in mathematics, please come talk to me! Occasionally, there may be funding available to pay students to do research.
  </p>
  
  <p>
    Here is a list of my current and recent undergraduate research projects that are roughly arranged chronologically.
  </p>
  
  <h3>
    Contents
  </h3>
  
  <ol>
    <li>
      <a href="#SylverCoinage">Sylver Coinage</a>
    </li>
    <li>
      <a href="#HeroinHero">Commutation classes of the longest element in the symmetric group</a>
    </li>
    <li>
      <a href="#PrimeGraphs">Prime vertex labelings of graphs</a>
    </li>
    <li>
      <a href="#DiagramFactorization">Factorization of Temperley-Lieb diagrams</a>
    </li>
    <li>
      <a href="#Spinpossible">Mathematics of Spinpossible</a>
    </li>
    <li>
      <a href="#TAvoidingF">Exploration of T-avoiding elements in Coxeter groups of type $F$</a>
    </li>
    <li>
      <a href="#TAvoidingAB">T-avoiding permutations in Coxeter groups of types $A$ and $B$</a>
    </li>
  </ol>
  
  <h3>
    <a name="SylverCoinage"></a>Sylver Coinage
  </h3>
  
  <p>
    The <a href="https://en.wikipedia.org/wiki/Sylver_coinage">Sylver Coinage Game</a> is a game in which 2 players, $A$ and $B$, alternately name positive integers that are not the sum of nonnegative multiples of previously named integers. The person who names 1 is the loser! Here is a sample game between $A$ and $B$:
  </p>
  
  <ol>
    <li>
      $A$ opens with 5. Now neither player can name $5, 10, 15,\ldots$
    </li>
    <li>
      $B$ names 4. Now neither player can name 4, 5, 8, 9, 10, or any number greater than 11.
    </li>
    <li>
      $A$ names 11. Now the only remaining numbers are 1, 2, 3, 6, and 7.
    </li>
    <li>
      $B$ names 6. Now the only remaining numbers are 1, 2, 3, and 7.
    </li>
    <li>
      $A$ names 7. Now the only remaining numbers are 1, 2, and 3.
    </li>
    <li>
      $B$ names 2. Now the only remaining numbers are 1 and 3.
    </li>
    <li>
      $A$ names 3, leaving only 1.
    </li>
    <li>
      $B$ is forced to name 1 and loses.
    </li>
  </ol>
  
  <p>
    This seemingly innocent looking game is the subject of one of <a href="http://www.cheswick.com/ches/conway1000.pdf">John Conway&#8217;s open problems with monetary rewards</a>. In particular, the question that <a href="https://en.wikipedia.org/wiki/John_Horton_Conway">Conway</a> asks is:
  </p>
  
  <blockquote>
    <p>
      If player $A$ names 16, and both players play optimally thereafter, then who wins?
    </p>
  </blockquote>
  
  <p>
    During the 2015-2016 academic year, this question will be the focus of a research project with four undergraduate students: Joni Hazelman, Parker Montfort, Robert Voinescu, and Ryan Wood. Due to the expected difficulty of the problem (it is a Conway problem after all!), we will begin by focusing our attention on related, and hopefully simpler, questions. Our research will begin with a survey of what is currently known about the game. In particular, we would like to know what is known about who wins under optimal play given certain opening moves.
  </p>
  
  <p>
    In addition, we will study a simplified version of the Sylver Coinage game that goes as follows. In the simplified version of the game, a fixed positive integer $n\geq 3$ is agreed upon in advance. Then 2 players, $A$ and $B$, alternately name positive integers from the set $&#123;1,2,\ldots,n&#125;$ that are not the sum of nonnegative multiples of previously named numbers among $&#123;1,2,\ldots,n&#125;$. The person who is forced to name 1 is the loser! Here is a sample game between $A$ and $B$ using the set $&#123;1,2,3,4,5,6,7,8,9,10&#125;$ (i.e., $n=10$):
  </p>
  
  <ol>
    <li>
      $A$ opens with 4. Now neither player can name $4,8$.
    </li>
    <li>
      $B$ names 5. Neither player can name $4, 5, 8,9,10$.
    </li>
    <li>
      $A$ names 6. Neither player can name $4, 5, 6,8,9,10$.
    </li>
    <li>
      $B$ names 3. Neither player can name $3,4, 5, 6,7,8,9,10$.
    </li>
    <li>
      $A$ names 2. Neither player can name $2,3,4, 5, 6,7,8,9,10$.
    </li>
    <li>
      $B$ is forced to name 1 and loses.
    </li>
  </ol>
  
  <p>
    To my knowledge, no one has explicitly studied this version of the game. One goal will be to determine who wins under optimal play for given values of $n$. Moreover, we will attempt to compute the Nim-values for the simplified game. The hope is that by studying the simplified game, we will gain insight into the original Sylver Coinage game.
  </p>
  
  <p>
    If you want to know more about other open problems with monetary rewards, check out <a href="http://danaernst.com/talk-open-problems-with-monetary-rewards/">this blog post</a>.
  </p>
  
  <h3>
    <a name="HeroinHero"></a>Commutation classes of the longest element in the symmetric group
  </h3>
  
  <p>
    Recall that the symmetric group $S_n$ is generated by the adjacent 2-cycles $(1,2),(2,3),\ldots, (n-1,n)$. That is, every element in $S_n$ can be written as a word using the alphabet consisting of the adjacent 2-cycles. It is important to note that there are potentially many different ways to express a given permutation as a product of adjacent 2-cycles, but we only need a few tools to get from one expression for a permutation to another, namely:
  </p>
  
  <ul>
    <li>
      $(i,i+1)^{2}=(1)$ (2-cycles have order two)
    </li>
    <li>
      $(i,i+1)(j, j+1)=(j, j+1)(i,i+1)$, where $|i-j|>1$ (disjoint cycles commute)
    </li>
    <li>
      $(i, i+1)(i+1, i+2)(i, i+1)=(i+1, i+2)(i, i+1)(i+1, i+2)$ (braid relations)
    </li>
  </ul>
  
  <p>
    If we express a permutation as a product of adjacent 2-cycles in the most efficient way possible, then we call the expression a <strong>reduced expression</strong>. There may be many different reduced expressions for a given permutation, but all of them can be written in terms of the same number of adjacent 2-cycles occurring in the product (called the <strong>length</strong>).
  </p>
  
  <p>
    We say that two reduced expressions are <strong>commutation equivalent</strong> if we can obtain one from the other by only commuting disjoint adjacent 2-cycles (no need to apply any braid relations). A <strong>commutation class</strong> of a permutation is the subset of all its reduced expressions that can be obtained from one another by commuting disjoint cycles. For example, there are 11 reduced expressions for $(1,3,5,4)$ that split into 2 commutation classes consisting of 7 and 4 reduced expressions, respectively. The <strong>longest element</strong> in $S_{n}$ is the (unique) element having maximal length. The number of reduced expressions for the longest element is known. However, the answer to the following question, originally posed by <a href="http://www-math.mit.edu/~rstan/">Richard Stanley</a>, is unknown:
  </p>
  
  <blockquote>
    <p>
      How many commutation classes does the longest element in the symmetric group have?
    </p>
  </blockquote>
  
  <p>
    In $S_{4}$, the longest element is $(1,4)(2,3)$. In this case, it turns out that there are 8 commutation classes.
  </p>
  
  <p>
    During the 2015-2016 academic year, Dustin Story will attack the problem given above. A closed-form solution is probably unlikely. At the very least, we will generate data aimed at providing insight into the problem. In addition, one goal will be to identify multiple reformulations of the problem. Moreover, we will tackle the problem for special classes of elements other than the longest element and possibly explore the analogous problem in other finite Coxeter groups.
  </p>
  
  <p>
    If you want to know more, check out the slides linked to in <a href="http://danaernst.com/talk-an-open-problem-of-the-symmetric-group/">this blog post</a>.
  </p>
  
  <h3>
    <a name="PrimeGraphs"></a>Prime vertex labelings of graphs
  </h3>
  
  <p>
    <img src="http://i1.wp.com/danaernst.com/wp-content/uploads/2012/02/CoprimeGraph.png?w=200" alt="PrimeGraph" class="alignleft size-full wp-image-1380" data-recalc-dims="1" />
  </p>
  
  <p>
    For the Fall 2014-Spring 2015 academic year, my colleague <a href="https://nau.edu/CEFNS/NatSci/Math/Directory-Full-Time/Rushall-Jeff/">Jeff Rushall</a> and I were awarded a <a href="http://curm.byu.edu">Center for Undergraduate Research in Mathematics</a> (CURM) mini-grant to fund a small group of undergraduate students to work on an original research project in the area of graph theory. For the project, we recruited a diverse group of 7 talented undergraduates: Nathan Diefenderfer, Michael Hastings (one of my past research students), Levi Heath, Hannah Prawzinsky, Briahna Preston, Emily White, and Alyssa Whittemore. Our research was inspired by two conjectures:
  </p>
  
  <blockquote>
    <p>
      All unicyclic graphs have a prime vertex labeling (Seoud and Youssef, 1999).
    </p>
    
    <p>
      All tree graphs have a prime vertex labeling (Entringer&#8211;Tout Conjecture, ~1980).
    </p>
  </blockquote>
  
  <p>
    A <strong>unicyclic graph</strong> is a simple graph containing exactly one cycle. An $n$-vertex simple graph $G$ with vertex set $V(G)$ is said to have a <strong>prime vertex labeling</strong> if there exists a bijection $f: V(G) \to &#92;{1, 2, 3, \ldots, n&#92;}$ such that the labels assigned to adjacent vertices of $G$ are relatively prime.
  </p>
  
  <p>
    As discussed in Gallian&#8217;s <a href="http://www.combinatorics.org/Surveys/ds6.pdf">&#8220;A Dynamic Survey of Graph Labeling&#8221;</a>, many families of graphs have a prime vertex labeling; the &#8220;simpler&#8221; types of unicyclic graphs that are known to be &#8220;prime&#8221; include cycles, helms, crowns, and tadpoles. The goal of this project was to discover additional families of graphs that permit a prime vertex labeling, in hopes of bringing the aforementioned conjectures within reach.
  </p>
  
  <p>
    Over the course of the academic year, we uncovered previously unknown prime vertex labelings for several families of graphs including (but not limited to) &#8220;hairy&#8221; cycles, cycle pendant stars, cycle chains, prisms, and generalized books. The results of our work is summarized in the following papers:
  </p>
  
  <ul>
    <li>
      N. Diefenderfer, M. Hastings, L.N. Heath, H. Prawzinsky, B. Preston, E. White, A. Whittemore. Prime Vertex Labelings of Several Families of Graphs. <em>The Rose-Hulman Undergraduate Math Journal</em> 16(1), 2015. [<a href="http://arxiv.org/abs/1503.08386">arXiv:1503.08386</a>] [<a href="http://www.rose-hulman.edu/mathjournal/archives/2015/vol16-n1/paper14/v16n1-14pd.pdf">ePrint</a>]
    </li>
    <li>
      N. Diefenderfer, D.C. Ernst, M. Hastings, L.N. Heath, H. Prawzinsky, B. Preston, J. Rushall, E. White, A. Whittemore. Prime Vertex Labelings of Several Families of Graphs. Submitted to <em>Involve</em>. [<a href="http://arxiv.org/abs/1503.08386">arXiv:1503.08386</a>]
    </li>
  </ul>
  
  <p>
    In addition, the students gave the following presentations:
  </p>
  
  <ul>
    <li>
      N. Diefenderfer, M. Hastings, L.N. Heath, H. Prawzinsky, B. Preston, E. White, A. Whittemore. Prime Vertex Labelings of Graphs. Friday Afternoon Mathematics Undergraduate Seminar (FAMUS), <a href="http://nau.edu">Northern Arizona University</a>, Flagstaff, AZ. December 2014. [<a href="https://speakerdeck.com/dcernst/prime-vertex-labelings-of-graphs">Slides</a>]
    </li>
    <li>
      B. Preston and A. Whittemore. Prime Vertex Labelings of Graphs. <a href="http://www.math.unl.edu/~ncuwm/17thAnnual/">Nebraska Conference for Undergraduate Women in Mathematics</a>, <a href="http://www.unl.edu">University of Nebraska&#8211;Lincoln</a>, Lincoln, NE. January 2015. [<a href="https://speakerdeck.com/dcernst/prime-vertex-labelings-of-graphs-1">Slides</a>]
    </li>
    <li>
      H. Prawzinsky and E. White. On Prime Vertex Labelings. <a href="http://www.math.unl.edu/~ncuwm/17thAnnual/">Nebraska Conference for Undergraduate Women in Mathematics</a>, <a href="http://www.unl.edu">University of Nebraska&#8211;Lincoln</a>, Lincoln, NE. January 2015. [<a href="https://speakerdeck.com/dcernst/prime-vertex-labelings-of-graphs-2">Poster</a>]
    </li>
    <li>
      L.N. Heath and E. White. New Results on Prime Vertex Labelings, I. <a href="http://sunmarc.org">2015 Southwestern Undergraduate Mathematics Research Conference</a> (SUnMaRC), <a href="http://www.utep.edu">University of Texas at El Paso</a>, El Paso, TX. February 2015. [<a href="https://speakerdeck.com/dcernst/new-results-on-prime-vertex-labelings-i">Slides</a>]
    </li>
    <li>
      N. Diefenderfer and B. Preston. New Results on Prime Vertex Labelings, II. <a href="http://sunmarc.org">2015 Southwestern Undergraduate Mathematics Research Conference</a> (SUnMaRC), <a href="http://www.utep.edu">University of Texas at El Paso</a>, El Paso, TX. February 2015. [<a href="https://speakerdeck.com/dcernst/new-results-on-prime-vertex-labelings-ii">Slides</a>]
    </li>
    <li>
      M. Hastings, H. Prawzinsky, A. Whittemore. New Results on Prime Vertex Labelings, II. <a href="http://sunmarc.org">2015 Southwestern Undergraduate Mathematics Research Conference</a> (SUnMaRC), <a href="http://www.utep.edu">University of Texas at El Paso</a>, El Paso, TX. February 2015. [<a href="https://speakerdeck.com/dcernst/new-results-on-prime-vertex-labelings-iii">Slides</a>]
    </li>
    <li>
      L.N. Heath and E. White. Unicyclic Graphs with Prime Vertex Labelings, I. 2015 MAA/CURM Spring Conference, <a href="http://home.byu.edu/home/">Brigham Young University</a>, Provo, UT. March 2015. [<a href="https://speakerdeck.com/dcernst/unicyclic-graphs-with-prime-vertex-labelings-i">Slides</a>]
    </li>
    <li>
      N. Diefenderfer and B. Preston. Unicyclic Graphs with Prime Vertex Labelings, II. 2015 MAA/CURM Spring Conference, <a href="http://home.byu.edu/home/">Brigham Young University</a>, Provo, UT. March 2015. [<a href="https://speakerdeck.com/dcernst/unicyclic-graphs-with-prime-vertex-labelings-ii">Slides</a>]
    </li>
    <li>
      M. Hastings and H. Prawzinsky. Nonunicyclic Graphs with Prime Vertex Labelings, I. 2015 MAA/CURM Spring Conference, <a href="http://home.byu.edu/home/">Brigham Young University</a>, Provo, UT. March 2015. [<a href="https://speakerdeck.com/dcernst/nonunicyclic-graphs-with-prime-vertex-labelings-i">Slides</a>]
    </li>
    <li>
      A. Whittemore. Nonunicyclic Graphs with Prime Vertex Labelings, II. 2015 MAA/CURM Spring Conference, <a href="http://home.byu.edu/home/">Brigham Young University</a>, Provo, UT. March 2015. [<a href="https://speakerdeck.com/dcernst/nonunicyclic-graphs-with-prime-vertex-labelings-ii">Slides</a>]
    </li>
    <li>
      N. Diefenderfer, M. Hastings, L.N. Heath, H. Prawzinsky, B. Preston, E. White, A. Whittemore. New Prime Vertex Labelings. <a href="http://nau.edu/Research/Undergraduate/Undergraduate-Symposium/">2015 NAU Research Symposium</a>, <a href="http://nau.edu">Northern Arizona University</a>, Flagstaff, AZ. April 2015. [<a href="https://speakerdeck.com/dcernst/new-prime-vertex-labelings">Poster</a>]
    </li>
  </ul>
  
  <p>
    For additional information on our CURM grant, see <a href="http://danaernst.com/undergraduate-research-project-for-2014-2015/">this blog post</a>.
  </p>
  
  <h3>
    <a name="DiagramFactorization"></a>Factorization of Temperley-Lieb diagrams
  </h3>
  
  <p>
    <img src="http://i2.wp.com/danaernst.com/wp-content/uploads/2012/02/Screen-Shot-2013-08-07-at-11.21.58-PM.png?w=250" alt="Type B Temperley-Lieb diagram" class="alignleft size-full wp-image-927" data-recalc-dims="1" /> The (type $A$) <a href="http://en.wikipedia.org/wiki/Temperley-Lieb_algebra">Temperley-Lieb diagram algebra</a>, invented by H.N.V. Temperley and E.H. Lieb in 1971, is a finite dimensional associative algebra, which arose in statistical mechanics. R. Penrose and L.H. Kauffman showed that this algebra can be realized as a particular diagram algebra, which is a type of associative algebra with a basis given by certain diagrams in which the multiplication rule is given by applying local combinatorial rules to the diagrams. In 1987, V.F.R. Jones showed that the Temperley-Lieb algebra occurs naturally as a quotient of the type $A$ Hecke algebra whose underlying group is the symmetric group. Eventually, this realization of the Temperley-Lieb algebra as a Hecke algebra quotient was generalized by J.J. Graham to the case of an arbitrary Coxeter group. Subsequently, several diagrammatic representations of these generalized Temperley-Lieb algebras have been constructed for various Coxeter systems.
  </p>
  
  <p>
    It turns out that every diagram can be written as a product of a finite set of &#8220;simple diagrams.&#8221; These factorizations correspond precisely to factorizations in the underlying group. Given a diagrammatic representation and a factorization of a group element (which may not be unique), it is easy to construct the corresponding diagram. However, given a diagram, it is generally difficult to reconstruct the factorization of the corresponding group element. Unlike the situation with natural numbers, knowing the factors is not enough information to obtain the factorization for a given diagram. The major obstacle is that some factors of the group element may not commute with other factors.
  </p>
  
  <p>
    During the Spring 2010 semester, Sarah Otis and Leal Rivanis obtained original results concerning Temperley-Lieb diagram algebras of types $A$ and $B$, which have a basis indexed by the fully commutative elements in Coxeter groups of types $A$ and $B$, respectively. In particular, we obtained a non-recursive method for enumerating the number of generators occurring in the fully commutative element that indexes a given diagram. One consequence of our results is a classification of the diagrams of the Temperley-Lieb algebras of types $A$ and $B$ indexed by <a href="http://arxiv.org/abs/1202.6657">cyclically fully commutative elements</a>. The students presented their work at the following conference:
  </p>
  
  <ul>
    <li>
      S. Otis and L. Rivanis. Counting generators in type $B$ Temperley-Lieb diagrams. <a href="https://apps.skidmore.edu/pls/apex/f?p=115:1:2302061374948119">2010 Hudson River Undergraduate Mathematics Conference</a>, <a href="http://www.keene.edu/">Keene State College</a>, Keene, NH. April 2010. [<a href="https://speakerdeck.com/dcernst/counting-generators-in-type-b-temperley-lieb-diagrams">Slides</a>]
    </li>
  </ul>
  
  <p>
    <img src="http://i2.wp.com/danaernst.com/wp-content/uploads/2012/02/Factorization-300x108.png?w=250" alt="Factorization" class="alignleft size-medium wp-image-1145" data-recalc-dims="1" /> During the 2013-2014 academic year, I am mentored Michael Hastings and Sarah Salmon on a project aimed at obtaining factorization algorithms for Temperley-Lieb diagrams in various algebras. Michael and Sarah discovered a beautiful and efficient algorithm for factoring diagrams in Temperley–Lieb algebras of types $A$ and $B$ that yields a &#8220;normal form&#8221; for the factorization. Their work extends the results obtained by Sarah Otis and Leal Rivanis during the Spring 2010 semester. The students made the following presentations:
  </p>
  
  <ul>
    <li>
      S. Salmon. Visualizing diagram factorizations in Temperley–Lieb algebras. <a href="https://www.aznvas.org">Annual Meeting of the Arizona-Nevada Academy of Science</a>, <a href="http://nau.edu">Northern Arizona University</a>, Flagstaff, AZ. April 2014. [<a href="https://speakerdeck.com/dcernst/visualizing-diagram-factorizations-in-temperley-lieb-algebras">Slides</a>]
    </li>
    <li>
      M. Hastings and S. Salmon. A factorization of Temperley-Lieb diagrams. <a href="http://nau.edu/Research/Undergraduate/Undergraduate-Symposium/">2014 NAU Research Symposium</a>, <a href="http://nau.edu">Northern Arizona University</a>, Flagstaff, AZ. April 2014. [<a href="https://speakerdeck.com/dcernst/a-factorization-of-temperley-lieb-diagrams">Poster</a>]
    </li>
    <li>
      S. Salmon. Visualizing diagram factorizations in Temperley-Lieb algebras, Part 2. <a href="http://sunmarc.org">2014 Southwestern Undergraduate Mathematics Research Conference</a> (SUnMaRC), <a href="http://www.mesacc.edu">Mesa Community College</a>, Mesa, AZ. March 2014. [<a href="https://speakerdeck.com/dcernst/visualizing-diagram-factorizations-in-temperley-lieb-algebras-part-2">Slides</a>]
    </li>
    <li>
      M. Hastings. Visualizing diagram factorizations in Temperley-Lieb algebras, Part 1. <a href="http://sunmarc.org">2014 Southwestern Undergraduate Mathematics Research Conference</a> (SUnMaRC), <a href="http://www.mesacc.edu">Mesa Community College</a>, Mesa, AZ. March 2014. [<a href="https://speakerdeck.com/dcernst/visualizing-diagram-factorizations-in-temperley-lieb-algebras-part-1">Slides</a>]
    </li>
    <li>
      S. Salmon. Towards a factorization of Temperley-Lieb diagrams. <a href="http://www.math.unl.edu/~ncuwm/">Nebraska Conference for Undergraduate Women in Mathematics</a>, <a href="http://www.unl.edu">University of Nebraska-Lincoln</a>, Lincoln, NE. February 2014. [<a href="https://speakerdeck.com/dcernst/towards-a-factorization-of-temperley-lieb-diagrams">Slides</a>]
    </li>
    <li>
      M. Hastings and S. Salmon. A factorization of Temperley-Lieb diagrams. Undergraduate Student Poster Session, <a href="http://jointmathematicsmeetings.org/jmm">2014 Joint Mathematics Meetings</a>, Baltimore, MD. January 2014. [<a href="https://speakerdeck.com/dcernst/a-factorization-of-temperley-lieb-diagrams">Poster</a>]
    </li>
    <li>
      M. Hastings and S. Salmon. A factorization of Temperley-Lieb diagrams. Friday Afternoon Mathematics Undergraduate Seminar (FAMUS), <a href="http://nau.edu">Northern Arizona University</a>, Flagstaff, AZ. November 2013. [<a href="https://speakerdeck.com/dcernst/a-factorization-of-temperley-lieb-diagrams-1">Slides</a>]
    </li>
  </ul>
  
  <h3>
    <a name="Spinpossible"></a>Mathematics of Spinpossible
  </h3>
  
  <p>
    <img src="http://i1.wp.com/danaernst.com/wp-content/uploads/2012/02/Scramble1.png?w=200" alt="Spinpossible" class="alignleft size-full wp-image-961" data-recalc-dims="1" /> Two of my students, Dane Jacobson and Michael Woodward, spent the Spring 2013 semester studying the mathematics behind <a href="https://spinpossible.com">Spinpossible</a>, which is a game that is available for iOS and Android devices. Alternatively, you can just play the game in any modern web browser. The game is played on a 3 by 3 board of scrambled tiles numbered 1 to 9, each of which may be right-side-up or up-side-down. The objective of the game is to return the board to the standard configuration where tiles are arranged in numerical order and right-side-up. This is accomplished by a sequence of &#8220;spins&#8221;, each of which rotates a rectangular region of the board by 180 degrees. The goal is to minimize the number of spins used. It turns out that the group generated by the set of allowable spins is identical to the <a href="http://en.wikipedia.org/wiki/Hyperoctahedral_group">symmetry group of the 9 dimensional hyper-cube</a> (equivalently, a <a href="http://en.wikipedia.org/wiki/Coxeter_group">Coxeter group</a> of type $B_9$).
  </p>
  
  <p>
    In a 2011 paper, Alex Sutherland and <a href="http://math.mit.edu/~drew/">Andrew Sutherland</a> (a father and son team) present a number of interesting results about Spinpossible and list a few open problems <a href="#bib3">[1]</a>. You can find the paper <a href="http://arxiv.org/abs/1110.6645">here</a>. As a side note, Alex is one of the developers of the game and his father, Andrew, is a mathematics professor at <a href="http://www.mit.edu">MIT</a>. Using brute-force, the Sutherlands verified that every scrambled board can be solved in at most 9 moves. The goal of the project was to find a short proof of this fact, but this remains elusive. Dane continued to work on this unexpectedly difficult problem during the Fall 2013 semester and obtained a proof that every $2\times 2$ board can be solved in 5 moves or less. The students made the following presentations of their research:
  </p>
  
  <ul>
    <li>
      D. Jacobson. Mathematics of the game Spinpossible. <a href="http://nau.edu/Research/Undergraduate/Undergraduate-Symposium/">2014 NAU Research Symposium</a>, <a href="http://nau.edu">Northern Arizona University</a>, Flagstaff, AZ. April 2014. [<a href="https://speakerdeck.com/dcernst/mathematics-of-the-game-spinpossible-2">Poster</a>]
    </li>
    <li>
      D. Jacobson. Mathematics of the game Spinpossible (3 hour-long talks). Algebra, Combinatoric, Geometry, and Topology (ACGT) Seminar, <a href="http://nau.edu">Northern Arizona University</a>, Flagstaff, AZ. November 2013.
    </li>
    <li>
      D. Jacobson and M. Woodward. Mathematics of the game Spinpossible. <a href="http://nau.edu/Research/Undergraduate/Undergraduate-Symposium/">2013 NAU Research Symposium</a>, <a href="http://nau.edu">Northern Arizona University</a>, Flagstaff, AZ. April 2013. [<a href="https://speakerdeck.com/dcernst/mathematics-of-the-game-spinpossible-2">Poster</a>]
    </li>
    <li>
      D. Jacobson and M. Woodward. Mathematics of the game Spinpossible. Friday Afternoon Mathematics Undergraduate Seminar (FAMUS), <a href="http://nau.edu">Northern Arizona University</a>, Flagstaff, AZ. March 2013. [<a href="https://speakerdeck.com/dcernst/mathematics-of-the-game-spinpossible-1">Slides</a>]
    </li>
    <li>
      D. Jacobson and M. Woodward. Mathematics of the game Spinpossible. <a href="http://sunmarc.org">2013 Southwestern Undergraduate Mathematics Research Conference</a> (SUnMaRC), <a href="http://www.unm.edu/">University of New Mexico</a>, Albuquerque, NM. March 2013. [<a href="https://speakerdeck.com/dcernst/mathematics-of-the-game-spinpossible">Slides</a>] [<a href="http://danaernst.com/sunmarc-2013/">Blog Post</a>]
    </li>
  </ul>
  
  <h3>
    <a name="TAvoidingF"></a>Exploration of T-avoiding elements in Coxeter groups of type $F$
  </h3>
  
  <p>
    <img src="http://i2.wp.com/danaernst.com/wp-content/uploads/2012/02/Screen-Shot-2013-08-07-at-11.22.59-PM.png?w=200" alt="T-avoiding heap in type F" class="alignleft size-full wp-image-925" data-recalc-dims="1" /> In mathematics, one uses <a href="http://en.wikipedia.org/wiki/Group_(mathematics)">groups</a> to study <a href="http://en.wikipedia.org/wiki/Symmetry">symmetry</a>. In particular, a <a href="http://en.wikipedia.org/wiki/Reflection_group">reflection group</a> is used to study the reflection and rotational symmetry of an object. A <a href="http://en.wikipedia.org/wiki/Coxeter_group">Coxeter group</a> can be thought of as a generalized reflection group, where the group is generated by a set of elements of order two (i.e., reflections) and there are rules for how the generators interact with each other. Every element of a Coxeter group can be written as an expression in the generators, and if the number of generators in an expression is minimal, we say that the expression is reduced. An element $w$ of a Coxeter group is called T-avoiding if $w$ does not have a reduced expression beginning or ending with a pair of non-commuting generators.
  </p>
  
  <p>
    During the 2011-2012 academic year, I mentored Ryan Cross, Katie Hills-Kimball, and Christie Quaranta at <a href="http://plymouth.edu">Plymouth State University</a> on an original research project aimed at exploring the T-avoiding elements in Coxeter groups of type $F$. In particular, the students successfully classified the T-avoiding elements in the infinite Coxeter group of type $F_{5}$, as well as the finite Coxeter group of type $F_{4}$. We conjectured that our classification holds more generally for arbitrary $F_{n}$. However, a year later, Selina Gilbertson showed that this is not the case (see below). The students made the following presentations:
  </p>
  
  <ul>
    <li>
      R. Cross, K. Hills-Kimball, and C. Quaranta. Classification of the T-avoiding elements in Coxeter groups of type $F$. <a href="https://apps.skidmore.edu/pls/apex/f?p=115:8:4058920624008023::NO:::">2012 Hudson River Undergraduate Mathematics Conference</a>, <a href="http://www.wne.edu">Western New England University</a>, Springfield, MA. April 2012. [<a href="https://speakerdeck.com/dcernst/classification-of-the-t-avoiding-elements-in-coxeter-groups-of-type-f">Slides</a>]
    </li>
    <li>
      R. Cross, K. Hills-Kimball, and C. Quaranta. Classification of the T-avoiding elements in Coxeter groups of type $F$. <a href="http://thisweek.blogs.plymouth.edu/2012/04/20/9178/">PSU Research Symposium</a>, <a href="http://plymouth.edu">Plymouth State University</a>, Plymouth, NH. April 2012. [<a href="https://speakerdeck.com/dcernst/classification-of-the-t-avoiding-elements-in-coxeter-groups-of-type-f-1">Poster</a>]
    </li>
  </ul>
  
  <p>
    In the Spring of 2013, I worked with Selina Gilbertson at <a href="http://nau.edu">Northern Arizona University</a> on extending the results obtained by Ryan, Katie, and Christie the previous year. The initial goal was to prove that there were no new T-avoiding elements (other than tacking on products of commuting generators) in type $F_n$ for $n\geq 6$. Selina discovered that this is horribly wrong. It appears that the classification of T-avoiding elements in higher ranks gets more and more complicated. We believe that we have the correct classification of the T-avoiding elements in type $F_6$ and Selina was able to put most of the pieces of a proof together in one semester. This is a hard problem! Selina gave the following presentations:
  </p>
  
  <ul>
    <li>
      S. Gilbertson. Investigation of T-avoiding elements of Coxeter groups. <a href="http://nau.edu/Research/Undergraduate/Undergraduate-Symposium/">2013 NAU Research Symposium</a>, <a href="http://nau.edu">Northern Arizona University</a>, Flagstaff, AZ. April 2013. [<a href="https://speakerdeck.com/dcernst/investigation-of-t-avoiding-elements-of-coxeter-groups-1">Poster</a>]
    </li>
    <li>
      S. Gilbertson. Investigation of T-avoiding elements of Coxeter groups. <a href="http://sunmarc.org">2013 Southwestern Undergraduate Mathematics Research Conference</a> (SUnMaRC), <a href="http://www.unm.edu/">University of New Mexico</a>, Albuquerque, NM. March 2013. [<a href="https://speakerdeck.com/dcernst/investigation-of-t-avoiding-elements-of-coxeter-groups">Slides</a>] [<a href="http://danaernst.com/sunmarc-2013/">Blog Post</a>]
    </li>
  </ul>
  
  <h3>
    <a name="TAvoidingAB"></a>T-avoiding permutations in Coxeter groups of types $A$ and $B$
  </h3>
  
  <p>
    <img src="http://i2.wp.com/danaernst.com/wp-content/uploads/2013/01/pic4.png?w=250" alt="Type A string diagram" class="alignleft size-full wp-image-622" data-recalc-dims="1" /> A permutation of a set of objects is simply a rearrangement of those objects. If we have $n$ objects, then a permutation can be represented as a function from $&#123;1, 2,\ldots , n&#125;$ to $&#123;1, 2, \ldots , n&#125;$. We say that a permutation $w$ has property T if there exists $i$ such that either $w(i)$ is greater than $w(i+1)$ and $w(i+2)$, or $w(i+2)$ is less than $w(i)$ and $w(i+1)$. A permutation $w$ is T-avoiding if neither $w$ nor its inverse have property T.
  </p>
  
  <p>
    During the 2010-2011 academic year, I mentored Joseph Cormier, Zachariah Goldenberg, Jessica Kelly, and Christopher Malbon on an original research project aimed at exploring the T-avoiding permutations. As a result of our research, we classified the T-avoiding permutations in the symmetric group, which happens to be a <a href="http://en.wikipedia.org/wiki/Coxeter_group">Coxeter group</a> of type $A$. In addition, we generalized the notion of T-avoiding to arbitrary Coxeter groups and classified the T-avoiding elements in Coxeter groups of type $B$ (i.e., the group of signed permutations). Our results are a reformulation of known results, but with a much simpler proof. We are currently in the progress of writing up our results with the intention of submitting an article for publication. The students also made the following presentations:
  </p>
  
  <ul>
    <li>
      J. Cormier, Z. Goldenberg, and J. Kelly. Classification of the T-avoiding permutations and generalizations to other Coxeter groups. <a href="http://thisweek.blogs.plymouth.edu/2012/04/20/9178/">PSU Research Symposium</a>, <a href="http://plymouth.edu">Plymouth State University</a>, Plymouth, NH. April 2012. [<a href="https://speakerdeck.com/dcernst/classification-of-the-t-avoiding-permutations-and-generalizations-to-other-coxeter-groups">Poster</a>]
    </li>
    <li>
      J. Cormier, Z. Goldenberg, and J. Kelly. Classification of the T-avoiding permutations and generalizations to other Coxeter groups. Undergraduate Student Poster Session, <a href="http://jointmathematicsmeetings.org/jmm">2012 Joint Mathematics Meetings</a>, Boston, MA. January 2012. [<a href="https://speakerdeck.com/dcernst/classification-of-the-t-avoiding-permutations-and-generalizations-to-other-coxeter-groups-1">Poster</a>]
    </li>
    <li>
      J. Cormier, Z. Goldenberg, J. Kelly, and C. Malbon. Classification of the T-avoiding permutations and generalizations to other Coxeter groups. <a href="http://danaernst.com/archive/SpecialSession/specialsession.html">Combinatorics of Coxeter Groups Special Session</a>, <a href="http://www.ams.org./meetings/sectional/2177_program.html">Spring 2011 Eastern Sectional Meeting of the AMS</a>, <a href="http://www.holycross.edu/">College of the Holy Cross</a>, Worcester, MA. April 2011. [<a href="https://speakerdeck.com/dcernst/classification-of-the-t-avoiding-permutations-and-generalizations-to-other-coxeter-groups-2">Slides</a>]
    </li>
    <li>
      J. Cormier, Z. Goldenberg, J. Kelly, and C. Malbon. Classification of the T-avoiding permutations. <a href="https://apps.skidmore.edu/pls/apex/f?p=115:8:4058920624008023::NO:::">2011 Hudson River Undergraduate Mathematics Conference</a>, <a href="http://skidmore.edu">Skidmore College</a>, Saratoga Springs, NY. April 2011. [<a href="https://speakerdeck.com/dcernst/classification-of-the-t-avoiding-permutations-and-generalizations-to-other-coxeter-groups-3">Slides</a>]
    </li>
  </ul>
  
  <!-- kcite active, but no citations found -->
</div>

<!-- kcite-section 68 -->