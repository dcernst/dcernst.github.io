---
title: Enabling syntax highlighting in vim
author: Dana Ernst
layout: post
permalink: /enabling-syntax-highlighting-in-vim/
standard_seo_post_level_layout:
  - 
standard_seo_post_meta_description:
  - 
categories:
  - Technology Posts
tags:
  - coding
  - productivity
  - vim
---
<div class="kcite-section" kcite-section-id="196">
  <p>
    I don&#8217;t use <a href="http://www.vim.org/">vim</a> very often, but when I do it would be handy to have some syntax highlighting. Over on Google+, <a href="https://plus.google.com/110464871801965858778/posts">Vincent Knight</a> shared a link to a <a href="http://geekology.co.za/article/2009/03/how-to-enable-syntax-highlighting-and-other-options-in-vim">post on Geekology</a> that describes how to turn on syntax highlighting and autoindenting for vim on a Mac. Here is a summary.
  </p>
  
  <p>
    Open the Terminal and type the following commands.
  </p>
  
  <pre><code>cd /usr/share/vim
sudo vim vimrc
</code></pre>
  
  <p>
    Press the <code>i</code> key and then paste the following lines of code just below the <code>set backspace=2</code> line:
  </p>
  
  <pre><code>set ai                  " auto indenting
set history=100         " keep 100 lines of history
set ruler               " show the cursor position
syntax on               " syntax highlighting
set hlsearch            " highlight the last searched term
filetype plugin on      " use the file type plugins

" When editing a file, always jump to the last cursor position
autocmd BufReadPost *
\ if ! exists("g:leave_my_cursor_position_alone") |
\ if line("'"") &gt; 0 && line ("'"") &lt;= line("$") |
\ exe "normal g'"" |
\ endif |
\ endif
</code></pre>
  
  <p>
    Lastly, type <code>Esc</code> followed by <code>:x</code>. That&#8217;s it!
  </p>
  
  <!-- kcite active, but no citations found -->
</div>

<!-- kcite-section 196 -->