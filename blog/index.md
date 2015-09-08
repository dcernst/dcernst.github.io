---
layout: default
title: Blog Posts
---

<div class="posts">
  {% for post in site.posts %}
  <div class="post">
  <a class="post-link" href="{{ post.url | prepend: site.baseurl}}">{{ post.title }}</a>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }} </span>
  {{ post.content }}
  <hr>
  </div>
  {% endfor %}
</div>

<div class="alert alert-info" role="alert">
<i class="fa fa-hand-peace-o fa-fw"></i>&nbsp; The views expressed on this blog are my own and are not necessarily shared by my employer <a href="http://nau.edu">Northern Arizona University</a>.
</div>
