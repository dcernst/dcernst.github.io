---
layout: default
title: Home
---

<ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }} </span>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl}}">{{ post.title }}</a>

        <p><a href="{{ post.url | prepend: site.baseurl}}#disqus_thread" data-disqus-identifier="{{ post.url |prepend: site.baseurl}}">Comments</a>

<!--         <a href="{{ post.url | prepend: site.baseurl }}#disqus_thread" data-disqus-identifier="{{post.url}}"></a> -->
        </p>  
        <p>{{post.excerpt}}
       </p>
      </li>
    {% endfor %}
  </ul>

<!-- <div class="posts">
{% for post in site.posts %}
<h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>

{{ post.excerpt }}

{% endfor %}
</div> -->
