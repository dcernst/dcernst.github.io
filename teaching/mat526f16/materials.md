---
layout: default
title: Course Materials
---

<ol class="breadcrumb">
  <li><a href="/"><i class="fa fa-home"></i></a></li>
  <li><a href="/teaching/">Teaching</a></li>
  <li><a href="/teaching/mat526f16">MAT 526</a></li>
  <li class="active">Materials</li>
</ol>

<div class="row">
<div class="col-xs-12">
<div class="btn-group btn-group-justified">
<a class="btn btn-default btn-success" href="{{site.baseurl}}/teaching/mat526f16/syllabus/">Syllabus</a>
<a class="btn btn-default btn-primary" href="{{site.baseurl}}/teaching/mat526f16/materials/">Materials</a>
<a class="btn btn-default btn-warning" href="{{site.baseurl}}/teaching/mat526f16/homework/">Homework</a>
</div>
</div>
</div>

## Course Materials ##
Any relevant course materials will be posted here.

- You can find the current errata for the book [here](http://math.depaul.edu/tpeter21/Errata.pdf) (PDF).
- Zach's work for SP3 can be found [here]({{site.baseurl}}/teaching/mat526f16/ZachParker-SP3.pdf) (PDF).
- Jimie's work for SP4 can be found [here]({{site.baseurl}}/teaching/mat526f16/JimieHorath-SP4.JPG) (JPG).
- Click "Evaluate" on the [SageMathCell](https://sagecell.sagemath.org) below to check out the hyperplane arrangement $\mathcal{H}(3)$. The hyperplanes $H_{1,2}, H_{1,3}, H_{2,3}$ have been colored red, green, and blue, respectively.  The plane $x+y+z=0$ is also included and is colored purple. In addition, I've included the vector $(1,2,3)$ in orange to illustrate where the chamber corresponding to the intersection of the three positive half-spaces lies.

<div class="sage">
<script type="text/x-sage">
H.<x,y,z> = HyperplaneArrangements(QQ)
H12=x-y
H13=x-z
H23=y-z
p=x+y+z
plot(H12,color='red',opacity=0.5)+plot(H13,color="green",opacity=0.5)+plot(H23,opacity=0.5)\
+plot(p,color="purple")+arrow((0,0,0),(1,2,3),color="orange")
</script>
</div>

## Exams ##
Below are links to the take-home portion of each exam.

- [Exam 1 (take-home)]({{site.baseurl}}/teaching/mat526f16/526Exam1-Home.pdf) (PDF). If you are interested in using LaTeX to type up your solutions, then you can obtain the .tex file for the exam [here]({{site.baseurl}}/teaching/mat526f16/526Exam1-Home.tex). (Due Wednesday, October 12)
