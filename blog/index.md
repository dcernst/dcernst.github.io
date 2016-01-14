---
layout: default
title: Blog Posts
---

<ol class="breadcrumb">
  <li><a href="/"><i class="fa fa-home"></i></a></li>
  <li class="active">Blog</li>
</ol>

<div>
<ul>
{% for post in site.posts %}
<li><i class="fa fa-file-text"></i>&nbsp; <div class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</div> &nbsp; <i class="fa fa-chevron-right"></i> &nbsp; <a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>
</div>

<div class="alert alert-info" role="alert">
<i class="fa fa-hand-peace-o fa-fw"></i>&nbsp; The views expressed on this blog are my own and are not necessarily shared by my employer <a href="http://nau.edu">Northern Arizona University</a>.
</div>
