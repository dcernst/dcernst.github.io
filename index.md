---
layout: default
title: Home
---

<div class="posts">
{% for post in site.posts %}
<h3><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>

{{ post.excerpt }}

{% endfor %}
</div>
