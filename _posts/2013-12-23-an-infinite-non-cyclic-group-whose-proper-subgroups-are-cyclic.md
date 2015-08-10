---
title: An infinite non-cyclic group whose proper subgroups are cyclic
author: Dana Ernst
layout: post
permalink: /an-infinite-non-cyclic-group-whose-proper-subgroups-are-cyclic/
sharing_disabled:
  - 1
standard_seo_post_level_layout:
  - 
standard_link_url_field:
  - 
standard_seo_post_meta_description:
  - 
categories:
  - Mathematics Posts
  - Teaching Posts
tags:
  - abstract algebra
  - group theory
  - math
  - mathematics
---
<div class="kcite-section" kcite-section-id="1104">
  <p>
    <img src="http://i2.wp.com/danaernst.com/wp-content/uploads/2013/12/Q8.png?w=130" alt="Q8" class="alignleft size-full wp-image-1132" data-recalc-dims="1" />The Fall semester of 2013 just ended and one of the classes I taught was <a href="http://teaching.danaernst.com/mat411f13/">abstract algebra</a>. The course is intended to be an introduction to <a href="http://en.wikipedia.org/wiki/Group_theory">groups</a> and <a href="http://en.wikipedia.org/wiki/Ring_theory">rings</a>, although, I spent a lot more time discussing group theory than the latter. A few weeks into the semester, the students were asked to prove the following theorem.
  </p>
  
  <p>
    <strong>Theorem.</strong> If $G$ is a cyclic group, then all the subgroups of $G$ are cyclic.
  </p>
  
  <p>
    As with all conditional theorems, I also encouraged my students to think about whether the converse of this theorem is true. That is, if all the subgroups of a group $G$ are cyclic, does this imply that $G$ is cyclic? Well, since $G$ is always a subgroup of itself, the answer is clearly yes. But this isn&#8217;t the interesting question to ask. Instead, we should ask:
  </p>
  
  <blockquote>
    <p>
      If $G$ is a group such that all <em>proper</em> subgroups are cyclic, does this imply that $G$ is cyclic?
    </p>
  </blockquote>
  
  <p>
    The answer is &#8220;no&#8221; and my students were able to quickly come up with a few counterexamples. In particular, they mentioned the <a href="http://en.wikipedia.org/wiki/Dihedral_group">dihedral group</a> $D_3$ (symmetry group for an equilateral triangle), the <a href="http://en.wikipedia.org/wiki/Klein_four-group">Klein four-group</a> $V_4$, and the <a href="http://en.wikipedia.org/wiki/Quaternion_group">Quarternion group</a> $Q_8$. The groups $D_3$ and $Q_8$ are both non-abelian and hence non-cyclic, but each have 5 subgroups, all of which are cyclic. The group $V_4$ happens to be abelian, but is non-cyclic. Yet it has 4 subgroups, all of which are cyclic.
  </p>
  
  <p>
    Following the discussion of these three examples, one of my students asked whether the question above is true for infinite groups. I responded with something like, &#8220;Uh&#8230;well&#8230;no, I don&#8217;t think so. Hmmm, let me think about it.&#8221; So, I thought about it off and on for a couple hours, but didn&#8217;t make much headway. I decided to roam the hallways and recruit some help. I ended up chatting with my colleagues <a href="http://www.cefns.nau.edu/~falk/">Mike Falk</a>, <a href="http://oak.ucc.nau.edu/jws8/">Jim Swift</a>, and <a href="https://nau.edu/CEFNS/NatSci/Math/Directory-Full-Time/Rushall-Jeff/">Jeff Rushall</a>. Collectively, we all thought about it a little bit here and a little bit there. I was fairly confident that an internet search would provide some insight, but I was intentionally putting that off in the hopes that I could come up with an example.
  </p>
  
  <p>
    A couple days later, I was meeting with one of my undergraduate research students and we chatted briefly about the problem. A few hours after we met, he sent me a link to a discussion on <a href="http://math.stackexchange.com/questions/185508/give-an-example-of-a-noncyclic-abelian-group-all-of-whose-proper-subgroups-are-c/185581#185581">Math Stack Exchange</a>, which contains a response that is precisely about the question above.
  </p>
  
  <p>
    Without further ado, here&#8217;s an example that confirms that the answer to the question above is &#8220;no&#8221; even if the group is infinite.
  </p>
  
  <p>
    <strong>Theorem.</strong> The group $G=&#92;{a/2^k\mid a\in\mathbb{Z}, k\in\mathbb{N}&#92;}$ is an infinite non-cyclic group whose proper subgroups are cyclic.
  </p>
  
  <p>
    Note that any fixed prime will do for the denominator. Let&#8217;s sketch a proof.
  </p>
  
  <p>
    First, it is clear that $G$ is an infinite subgroup of $\mathbb{Q}$ since the sum of any two elements from $G$ will be contained in $G$ and the additive inverse of any element from $G$ is also in $G$. To see that $G$ is not cyclic, let $a/2^k\in G$ such that $a$ is odd and consider $\langle a/2^k\rangle$. It&#8217;s quickly seen that $\langle a/2^k\rangle$ does not contain any rational numbers having denominators equal to $2^{n}$ for $n>k$, and hence $G$ is not cyclic. Now, suppose that $H$ is a proper subgroup of $G$. If $a/2^k\in H$, then $a/2^{k-1}=a/2^k+a/2^k\in H$, as well. It follows that if there is an element in $H$ with denominator equal $2^k$ (in reduced form), then $H$ also contains elements with denominators equal to $2^n$ (in reduced form) for all $n\leq k$. Since $H$ is a proper subgroup, there exists a smallest $m\in \mathbb{N}$ such that no element of $H$ has a denominator equal to $2^m$. Then it must be the case that $H$ is contained in $\langle 1/2^{m-1}\rangle$, and so $H$ is cyclic (since subgroups of cyclic groups are cyclic).
  </p>
  
  <p>
    Cool.
  </p>
  
  <!-- kcite active, but no citations found -->
</div>

<!-- kcite-section 1104 -->