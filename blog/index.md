---
layout: default
title: Blog Posts
---

<ul class="list-unstyled">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }} </span>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl}}">{{ post.title }}</a>  
        {{post.excerpt}}
        <p><i class="fa fa-chevron-circle-right fa-fw"></i>&nbsp; <a href="{{post.url}}">Read more</a></p>
      </li>
    {% endfor %}
</ul>

<div class="alert alert-info" role="alert">
<i class="fa fa-hand-peace-o fa-fw"></i>&nbsp; The views expressed on this blog are my own and are not necessarily shared by my employer <a href="http://nau.edu">Northern Arizona University</a>.
</div>
