---
layout: default
title: Blog Posts
---

<ul class="list-unstyled">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }} </span>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl}}">{{ post.title }}</a>
        <p><a href="{{ post.url | prepend: site.baseurl}}#disqus_thread" data-disqus-identifier="{{ post.url |prepend: site.baseurl}}">Comments</a></p>  
        <p>{{post.excerpt}}</p>
      </li>
    {% endfor %}
</ul>

<i class="fa fa-exclamation-triangle fa-fw"></i> The views expressed on this blog are my own and are not necessarily shared by my employer [Northern Arizona University](http://nau.edu).
