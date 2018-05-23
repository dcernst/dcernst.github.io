---
title: Quick LaTeX Guide
author: Dana Ernst
layout: default
---

<ol class="breadcrumb">
  <li><a href="/"><i class="fa fa-home"></i></a></li>
  <li>Resources</li>
  <li class="active">LaTeX Guide</li>
</ol>

<h2>What is LaTeX?</h2>

<p><a href="http://en.wikipedia.org/wiki/LaTeX" target="_blank">LaTeX</a> (pronounced "lay-tech", or sometimes "la-tech") is a markup language that is the standard for typesetting mathematics.</p>

<h2>Getting Started</h2>

<p>The way most people (including myself) learn LaTeX is by taking existing examples, tweaking them, and seeing what happens.  To get started, you can open up and play with my <a href="{{site.baseurl}}/latex-homework-template">LaTeX Homework Template</a> that I have posted as a gist on <a href="https://gist.github.com/1827406">GitHub</a>. In fact, if you just click the link below, the template will open in <a href="http://overleaf.com">Overleaf</a>, which is an awesome and free online LaTeX editor.</p>

<center>
<form action="https://www.Overleaf.com/docs" method="POST">
    <input type="hidden" name="template" value="danaernst-weekly_homework_x">
    <input type="submit" class="wl-submit" value="Open template in Overleaf">
  </form>
</center>

<h2>The Basics</h2>

<p>You can insert mathematical expressions within your text (i.e., "inline") by using code of the form:</p>

<pre><code> $mathematical-expression-here$</code></pre>

<p>The pair of dollar signs that frame your mathematical expression are called <em>delimiters</em> and indicate where the expression begins and ends. You must have an opening and closing delimiter.</p>

<p>For instance, this sentence -- which includes the equation $x^{2}+y^{2} = r^{2}$ -- is typeset as</p>

<pre><code> For instance, this sentence -- which includes the equation $x^{2}+y^{2} = r^{2}$ -- is typeset as</code></pre>

<p>Notice that I didn't enclose every individual symbol with dollar signs, but rather the entire string of symbols.</p>

<p>You can also have your mathematical expressions separated from the text and placed on their own line for emphasis. For instance, if you wanted to type:</p>

<p>Here's some fancy mathematics that I don't really understand
$$\log \zeta(s) = s\int_{2}^{\infty} \frac{\pi(x)}{x(x^{s}-1)}~dx = \log \prod_{p} (1-p^{-s})^{-1}.$$
Man, that's complicated!</p>

<p>then you'd use the code</p>

<pre><code> Here's some fancy mathematics that I don't really understand
 \[
 \log \zeta(s) = s\int_{2}^{\infty} \frac{\pi(x)}{x(x^{s}-1)}~dx = \log \prod_{p} (1-p^{-s})^{-1}.
 \]
 Man, that's complicated!
</code></pre>

<p>Here are a few things to keep in mind:</p>

<ul>
<li>All inline mathematical notation must be framed by dollar signs.</li>
<li>All displayed mathematical notation (i.e., on its own line and centered) is of the form <code>\[ math-stuff \]</code>.</li>
<li>All special symbols in LaTeX are of the form <code>\some-command</code>. Once you've used LaTeX enough, you can almost guess what the command is for a certain symbol.</li>
</ul>

<h2>Some Examples</h2>

<p>Here are a few more examples that illustrate some of the mathematical notation we may want to use:</p>

<center>
<table class="table table-striped">
    <thead>
    <tr>
        <th>Expression you want</th>
        <th>Code you type</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>$\int_a^b f(x)\; dx=F(b)-F(a)$</td>
        <td><code>$\int_a^b f(x)\; dx=F(b)-F(a)$</code></td>
    </tr>
    <tr>
        <td>$n \in \mathbb{N} \subseteq \mathbb{Z}$</td>
        <td><code>$n \in \mathbb{N} \subseteq \mathbb{Z}$</code></td>
    </tr>
    <tr>
        <td>$\sum_{i=1}^n i^2=1^2+2^2+ \cdots +n^2$</td>
        <td><code>$\sum_{i=1}^n i^2=1^2+2^2+ \cdots +n^2$</code></td>
    </tr>
    <tr>
        <td> $\sqrt{2} \notin \mathbb{Q}$</td>
        <td><code>$ \sqrt{2} \notin \mathbb{Q}$</code></td>
    </tr>
    <tr>
        <td> $2\in \{2,3,4\} \cap \{1,2,3\}$</td>
        <td><code>$2\in \{2,3,4\} \cap \{1,2,3\}$</code></td>
    </tr>
    <tr>
        <td>$f:A\to B$</td>
        <td> <code>$f:A\to B$</code></td>
    </tr>
    <tr>
        <td> $f(x_1)\neq f(x_2)$</td>
        <td>  <code>$f(x_1)\neq f(x_2)$</code></td>
    </tr>
    <tr>
        <td> $\{a_n\}_{n=1}^{\infty}$  </td>
        <td> <code> $\{a_n\}_{n=1}^{\infty}$</code></td>
    </tr>
    <tr>
        <td>  $(f\circ g)(x)=f(g(x))$</td>
        <td> <code> $(f\circ g)(x)=f(g(x))$</code></td>
    </tr>
    <tr>
        <td> $\frac{a}{b}+\frac{c}{d}\neq \frac{a+b}{c+d}$</td>
        <td> <code> $\frac{a}{b}+\frac{c}{d}\neq \frac{a+b}{c+d}$</code></td>
    </tr>
    </tbody>
</table>
</center>

<h2>Greek Letters</h2>

<p>Greek letters are typeset using <code>\name</code>.  For example, <code>\theta</code> produces $\theta$ (as long as you also include the appropriate delimiters).</p>

<h2>Braces</h2>

<p>In order to produce a left or right brace, the brace needs to be preceded by a backslash. For example, to obtain $\mathbb{N}=\{1,2,3,\ldots\}$ we type <code>$\mathbb{N}=\{1,2,3,\ldots\}$</code> and notice the use of <code>\{</code> and <code>\}</code>, which are needed to obtain the braces for the set.</p>

<h2>Display Style</h2>

<p>Using LaTeX allows you to do fancy things like the following:
$$\begin{align*}
\sum_{i=1}^{k+1}i &amp; = \left(\sum_{i=1}^{k}i\right) +(k+1) \newline
&amp; = \frac{k(k+1)}{2}+k+1 &amp; (\text{by inductive hypothesis}) \newline
&amp; = \frac{k(k+1)+2(k+1)}{2} \newline
&amp; = \frac{(k+1)(k+2)}{2} \newline
&amp; = \frac{(k+1)((k+1)+1)}{2}.
\end{align*}$$
which is typeset using</p>

<pre><code> \begin{align*}
 \sum_{i=1}^{k+1}i &amp; = \left(\sum_{i=1}^{k}i\right) +(k+1) \newline
 &amp; = \frac{k(k+1)}{2}+k+1 &amp; (\text{by inductive hypothesis}) \newline
 &amp; = \frac{k(k+1)+2(k+1)}{2} \newline
 &amp; = \frac{(k+1)(k+2)}{2} \newline
 &amp; = \frac{(k+1)((k+1)+1)}{2}.
 \end{align*}
</code></pre>

<h2>Quotation Marks</h2>

<p>To correctly typeset double quotation marks in a full-fledged LaTeX document, you should use the following syntax; otherwise, the left pair of quotes will be backwards.</p>

<pre><code> ``stuff you are quoting"</code></pre>

<p>To obtain the symbols on the left, look for the key on your keyboard in the upper left corner that also has the the tilde (~) on it. You'll need to hit this key twice. Using incorrect quotation marks is one of the most common mistakes that I see in documents written using LaTeX.</p>

<h2>More Information</h2>

<p>A really cool tool for looking up LaTeX symbols is <a href="http://detexify.kirelabs.org/classify.html" target="_blank">Detexify</a>, which allows you to draw a picture of the symbol for which you are looking. Also, Dave Richeson of Dickinson College has put together a really great "cheat sheet", which you can find <a href="http://users.dickinson.edu/~richesod/latex/latexcheatsheet.pdf" target="_blank">here</a>.</p>

<p>If you want to see a really, really, really long list of symbols, go <a href="http://www.ctan.org/tex-archive/info/symbols/comprehensive/symbols-a4.pdf" target="_blank">here</a>.</p>

<p>Lastly, you may find the following resources useful:</p>

<ul>
<li><a href="http://en.wikibooks.org/wiki/LaTeX" target="_blank">LaTeX Wiki Book</a></li>
<li><a href="http://www.latex-community.org/" target="_blank">LaTeX Community</a></li>
<li><a href="http://tex.stackexchange.com/" target="_blank">LaTeX Stack Exchange</a></li>
<li><a href="http://users.dickinson.edu/~richesod/latex/index.html" target="_blank">Dave Richeson's Quick Introduction to LaTeX</a></li>
</ul>

<h2>Using a LaTeX Editor</h2>

<p>Writing a LaTeX document is much more complicated than just starting to write. There are a whole host of things that you need to put at the top of your document and this can be rather intimidating at first. The big picture is that the content of your document comes after the line <code>\begin{document}</code>. All of the stuff before this line is called the <em>preamble</em> and when you first start learning LaTeX, you should just ignore this stuff. Below, I've included some templates to get you started. In the beginning, don't worry too much about all of the complicated stuff in the preamble.</p>

<p>The .tex file is where you type the content of your file. You won't see the output until you <em>compile</em> it. If you've done everything correctly, the output after compiling will be a PDF. I highly recommend compiling often to see what you've got so far and to make it easier to find your syntax errors if you have any.</p>

<p>When you are typing the content of your document, you will partition your content into various <em>environments</em>. Examples of environments include: <code>theorem, proof, align*, itemize, enumerate</code>, but there are lots more. Every environment begins with <code>\begin{environment-name}</code> and ends with <code>\end{environment-name}</code>. For example, see the example above that uses the <code>align*</code> environment. As another example, if you wanted to write the statement of the theorem that divides is transitive, you would write:</p>

<pre><code> \begin{theorem}
 Let $a,b,c\in \mathbb{Z}$. If $a\mid b$ and $b\mid c$, then $a\mid c$.
 \end{theorem}
</code></pre>

<p><em>Note:</em> LaTeX ignores whitespace. What this means is that extra spaces and carriage returns (i.e., hitting the space bar or return/enter key repeatedly) have no impact on the output of the .tex document. You can adjust vertical spacing using commands like: <code>\newline, \bigskip, \medskip, \smallskip, \vspace{1cm}, \vfill</code>. If you experiment with these commands, you'll be able to see what impact they have.</p>

<h2>Installing LaTeX on Your Own Computer</h2>

<p>There are a growing number of online LaTeX editors.  My favorite is <a href="http://overleaf.com">Overleaf</a> (formerly named WriteLaTeX).  While there  are several benefits of using an online editor, if you use LaTeX enough, you'll eventually want to install it locally on your own computer.</p>

<h3>Installing on a Mac</h3>

<p>If you have a Mac, installing and using LaTeX is easy. All you need to do is go <a href="http://www.tug.org/mactex/" target="_blank">here</a> and download the latest version of the MacTeX distribution (filename should be MacTeX.mpkg.zip). Once you have downloaded the package, double-click the installer (if it doesn't run automatically). If you follow the instructions during the installation, you will be provided with the LaTeX "backend" (which you can safely ignore) and the "frontend" editor TeXShop (which will be located in a folder called TeX in your Applications folder). TeXShop will be the default application for editing any file with a .tex extension. After editing a tex file, click "Typeset" and if you don't have any errors, TeXShop will render the corresponding PDF. I recommend clicking "Trash Aux Files" in the Console window after you are done editing. If you have questions about using TeXShop on a Mac, please ask!</p>

<h3>Installing on a PC</h3>

<p>To get up and running with LaTeX on a computer running Windows, you need to install two things. First, install the MiKTeX "backend", located <a href="http://miktex.org/" target="_blank">here</a>.  Click the "download" link at the top of the list under MiKTeX Releases and following the instructions. Next, download TeXnicCenter by going <a href="http://www.texniccenter.org/" target="_blank">here</a>.  Download the latest version and proceed according to the instructions. TeXnicCenter will now be your default application for editing any file with a .tex extension. You can safely ignore the MiKTeX "backend".</p>

<h3>Installing on a computer running Linux</h3>

<p>Most Linux distributions (e.g., Ubuntu, Debian, Fedora, etc.) use a package manager to install and update software. (Don't use a web browser to look for LaTeX online. Your computer already knows where to go online to find LaTeX and how to install it.) These instructions assume you are using Ubuntu, but similar actions will work on any Linux distro with a modern package management system. Using your package manager ("Ubuntu Software Center" or similar in your applications menu) and assuming you have an internet connection, you need to search for and install two things:</p>

<ul>
<li>A LaTeX backend: For the most basic install, search for and install "texlive-base". For a more comprehensive install, search for an install "texlive-full".</li>
<li>A LaTeX editor: Search for and install "Kile". Kile is the editor of choice for many Linux users writing LaTeX.</li>
<li>After Ubuntu installs these, you should find Kile in your applications menu and it should be capable of calling the various LaTeX programs automatically.</li>
</ul>

<h2>Credits</h2>

<p>This page is an adaptation of <a href="http://math453fall2008.wikidot.com/quick-latex-guide" target="_blank">Andy Schultz's Quick LaTeX Guide</a> and <a href="http://elishapeterson.wikidot.com/courses:latex-help" target="_blank">Elisha Peterson's LaTeX Help</a>. Thanks to <a href="http://math.jasonbhill.com/" target="_blank">Jason B. Hill</a> for providing instructions for installing LaTeX on a computer running Linux. The mathematical symbols on this page were typeset using <a href="http://www.mathjax.org/" target="_blank">MathJax</a>.</p>
