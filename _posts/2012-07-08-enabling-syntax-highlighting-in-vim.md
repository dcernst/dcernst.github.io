---
title: Enabling syntax highlighting in vim
author: Dana Ernst
layout: post
permalink: /enabling-syntax-highlighting-in-vim/
standard_seo_post_level_layout:
  - 
standard_seo_post_meta_description:
  - 
dsq_thread_id:
  - 755795605
categories:
  - Technology Posts
tags:
  - coding
  - productivity
  - vim
---
I don't use [vim][1] very often, but when I do it would be handy to have some syntax highlighting. Over on Google+, [Vincent Knight][2] shared a link to a [post on Geekology][3] that describes how to turn on syntax highlighting and autoindenting for vim on a Mac. Here is a summary.

Open the Terminal and type the following commands.

    cd /usr/share/vim
    sudo vim vimrc
    

Press the `i` key and then paste the following lines of code just below the `set backspace=2` line:

    set ai                  " auto indenting
    set history=100         " keep 100 lines of history
    set ruler               " show the cursor position
    syntax on               " syntax highlighting
    set hlsearch            " highlight the last searched term
    filetype plugin on      " use the file type plugins
    
    " When editing a file, always jump to the last cursor position
    autocmd BufReadPost *
    \ if ! exists("g:leave_my_cursor_position_alone") |
    \ if line("'"") > 0 && line ("'"") <= line("$") |
    \ exe "normal g'"" |
    \ endif |
    \ endif
    

Lastly, type `Esc` followed by `:x`. That's it!

 [1]: http://www.vim.org/
 [2]: https://plus.google.com/110464871801965858778/posts
 [3]: http://geekology.co.za/article/2009/03/how-to-enable-syntax-highlighting-and-other-options-in-vim