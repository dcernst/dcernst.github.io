---
layout: default
title: Home
---

<div class="posts">
{% for post in site.posts %}
<h2><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>

{{ post.excerpt }}

{% endfor %}
</div>
