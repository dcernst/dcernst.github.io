---
layout: default
title: Blog Posts
---

<ol class="breadcrumb">
  <li><a href="/"><i class="fa fa-home"></i></a></li>
  <li class="active">Blog</li>
</ol>

<div class="posts">
    {% for post in site.posts %}
      <h4><a href="{{ post.url | prepend: site.baseurl }}">
        {{ post.date | date: "%b %-d, %Y" }}: {{ post.title }}</a></h4>

      {{ post.excerpt }}

    {% endfor %}
  </div>

<div class="alert alert-info" role="alert">
<i class="fa fa-hand-peace-o fa-fw"></i>&nbsp; The views expressed on this blog are my own and are not necessarily shared by my employer <a href="http://nau.edu">Northern Arizona University</a>.
</div>
