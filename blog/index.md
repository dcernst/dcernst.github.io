---
layout: default
title: Blog Posts
---

<div>
<!-- <div class="posts"> -->
  {% for post in site.posts %}
  <div class="post">
  <h2><a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a></h2>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }} </span>
  {{ post.content }}
  </div>
  {% endfor %}
</div>

<div class="alert alert-info" role="alert">
<i class="fa fa-hand-peace-o fa-fw"></i>&nbsp; The views expressed on this blog are my own and are not necessarily shared by my employer <a href="http://nau.edu">Northern Arizona University</a>.
</div>
