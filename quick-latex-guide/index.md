---
title: Quick LaTeX Guide
author: Dana Ernst
layout: page
sharing_disabled:
  - 1
standard_seo_post_meta_description:
  - 
---
This page is intended to be a guide for my students. However, I&#8217;m hoping that this page will be of general interest to those just getting started with LaTeX.

## What is LaTeX?

<a href="http://en.wikipedia.org/wiki/LaTeX" target="_blank">LaTeX</a> (pronounced &#8220;lay-tech&#8221;, or sometimes &#8220;la-tech&#8221;) is a markup language that is the standard for typesetting mathematics.

## Getting Started

The way most people (including myself) learn LaTeX is by taking existing examples, tweaking them, and seeing what happens. To get started, you can open up and play with my [LaTeX Homework Template][1] that I have posted as a gist on [GitHub][2]. In fact, if you just click the link below, the template will open in [Overleaf][3], which is an awesome and free online LaTeX editor.

<center>
  </p> 
  
  <p>
    </center>
  </p>
  
  <h2>
    The Basics
  </h2>
  
  <p>
    You can insert mathematical expressions within your text (i.e., &#8220;inline&#8221;) by using code of the form:
  </p>
  
  <pre><code> $your-mathematical-expression-here$
</code></pre>
  
  <p>
    The pair of dollar signs that frame your mathematical expression are called <em>delimiters</em> and indicate where the expression begins and ends. You must have an opening and closing delimiter.
  </p>
  
  <p>
    For instance, this sentence &#8212; which includes the equation $x^{2}+y^{2} = r^{2}$ &#8212; is typeset as
  </p>
  
  <pre><code> For instance, this sentence -- which includes the equation $x^{2}+y^{2} = r^{2}$ -- is typeset as
</code></pre>
  
  <p>
    Notice that I didn&#8217;t enclose every individual symbol with dollar signs, but rather the entire string of symbols.
  </p>
  
  <p>
    You can also have your mathematical expressions separated from the text and placed on their own line for emphasis. For instance, if you wanted to type:
  </p>
  
  <p>
    Here&#8217;s some fancy mathematics that I don&#8217;t really understand<br /> $$\log \zeta(s) = s\int_{2}^{\infty} \frac{\pi(x)}{x(x^{s}-1)}~dx = \log \prod_{p} (1-p^{-s})^{-1}.$$<br /> Man, that&#8217;s complicated!
  </p>
  
  <p>
    then you&#8217;d use the code
  </p>
  
  <pre><code> Here's some fancy mathematics that I don't really understand
 \[
 \log \zeta(s) = s\int_{2}^{\infty} \frac{\pi(x)}{x(x^{s}-1)}~dx = \log \prod_{p} (1-p^{-s})^{-1}.
 \]
 Man, that's complicated!
</code></pre>
  
  <p>
    Here are a few things to keep in mind:
  </p>
  
  <ul>
    <li>
      All inline mathematical notation must be framed by dollar signs.
    </li>
    <li>
      All displayed mathematical notation (i.e., on its own line and centered) is of the form <code>&#92;[ math-stuff &#92;]</code>.
    </li>
    <li>
      All special symbols in LaTeX are of the form <code>&#92;some-command</code>. Once you&#8217;ve used LaTeX enough, you can almost guess what the command is for a certain symbol.
    </li>
  </ul>
  
  <h2>
    Some Examples
  </h2>
  
  <p>
    Here are a few more examples that illustrate some of the mathematical notation we may want to use:
  </p>
  
  <p>
    <center>
      </p> 
      
      <table>
        <tr>
          <th>
            Expression you want
          </th>
          
          <th>
            Code you type
          </th>
        </tr>
        
        <tr>
          <td>
            $\int_a^b f(x)\; dx=F(b)-F(a)$
          </td>
          
          <td>
            <code>$\int_a^b f(x)\; dx=F(b)-F(a)$</code>
          </td>
        </tr>
        
        <tr>
          <td>
            $n \in \mathbb{N} \subseteq \mathbb{Z}$
          </td>
          
          <td>
            <code>$n \in \mathbb{N} \subseteq \mathbb{Z}$</code>
          </td>
        </tr>
        
        <tr>
          <td>
            $\sum_{i=1}^n i^2=1^2+2^2+ \cdots +n^2$
          </td>
          
          <td>
            <code>$\sum_{i=1}^n i^2=1^2+2^2+ \cdots +n^2$</code>
          </td>
        </tr>
        
        <tr>
          <td>
            $\sqrt{2} \notin \mathbb{Q}$
          </td>
          
          <td>
            <code>$ \sqrt{2} \notin \mathbb{Q}$</code>
          </td>
        </tr>
        
        <tr>
          <td>
            $2\in \{2,3,4\} \cap \{1,2,3\}$
          </td>
          
          <td>
            <code>$2\in \{2,3,4\} \cap \{1,2,3\}$</code>
          </td>
        </tr>
        
        <tr>
          <td>
            $f:A\to B$
          </td>
          
          <td>
            <code>$f:A\to B$</code>
          </td>
        </tr>
        
        <tr>
          <td>
            $f(x_1)\neq f(x_2)$
          </td>
          
          <td>
            <code>$f(x_1)\neq f(x_2)$</code>
          </td>
        </tr>
        
        <tr>
          <td>
            $\{a_n\}_{n=1}^{\infty}$
          </td>
          
          <td>
            <code> $\{a_n\}_{n=1}^{\infty}$</code>
          </td>
        </tr>
        
        <tr>
          <td>
            $(f\circ g)(x)=f(g(x))$
          </td>
          
          <td>
            <code> $(f\circ g)(x)=f(g(x))$</code>
          </td>
        </tr>
        
        <tr>
          <td>
            $\frac{a}{b}+\frac{c}{d}\neq \frac{a+b}{c+d}$
          </td>
          
          <td>
            <code> $\frac{a}{b}+\frac{c}{d}\neq \frac{a+b}{c+d}$</code>
          </td>
        </tr>
      </table>
      
      <p>
        </center>
      </p>
      
      <h2>
        Greek Letters
      </h2>
      
      <p>
        Greek letters are typeset using <code>\name</code>. For example, <code>\theta</code> produces &#40;\theta&#41; (as long as you also include the appropriate delimiters).
      </p>
      
      <h2>
        Braces
      </h2>
      
      <p>
        In order to produce a left or right brace, the brace needs to be preceded by a backslash. For example, to obtain $\mathbb{N}=&#92;{1,2,3,\ldots&#92;}$ we type <code>$\mathbb{N}=&#92;{1,2,3,\ldots&#92;}$</code> and notice the use of <code>&#92;{</code> and <code>&#92;}</code>, which are needed to obtain the braces for the set.
      </p>
      
      <h2>
        Display Style
      </h2>
      
      <p>
        Using LaTeX allows you to do fancy things like the following:<br /> $$\begin{align&#42;}<br /> \sum_{i=1}^{k+1}i & = \left(\sum_{i=1}^{k}i\right) +(k+1) \newline<br /> & = \frac{k(k+1)}{2}+k+1 & (\text{by inductive hypothesis}) \newline<br /> & = \frac{k(k+1)+2(k+1)}{2} \newline<br /> & = \frac{(k+1)(k+2)}{2} \newline<br /> & = \frac{(k+1)((k+1)+1)}{2}.<br /> \end{align&#42;}$$<br /> which is typeset using
      </p>
      
      <pre><code> \begin{align*}
 \sum_{i=1}^{k+1}i & = \left(\sum_{i=1}^{k}i\right) +(k+1) \newline
 & = \frac{k(k+1)}{2}+k+1 & (\text{by inductive hypothesis}) \newline
 & = \frac{k(k+1)+2(k+1)}{2} \newline
 & = \frac{(k+1)(k+2)}{2} \newline
 & = \frac{(k+1)((k+1)+1)}{2}.
 \end{align*}
</code></pre>
      
      <h2>
        Quotation Marks
      </h2>
      
      <p>
        To correctly typeset double quotation marks in a full-fledged LaTeX document, you should use the following syntax; otherwise, the left pair of quotes will be backwards.
      </p>
      
      <pre><code> ``stuff you are quoting"
</code></pre>
      
      <p>
        To obtain the symbols on the left, look for the key on your keyboard in the upper left corner that also has the the tilde (~) on it. You&#8217;ll need to hit this key twice. Using incorrect quotation marks is one of the most common mistakes that I see in documents written using LaTeX.
      </p>
      
      <h2>
        More Information
      </h2>
      
      <p>
        A really cool tool for looking up &#40;\LaTeX&#41; symbols is <a href="http://detexify.kirelabs.org/classify.html" target="_blank">Detexify</a>, which allows you to draw a picture of the symbol for which you are looking. Also, Dave Richeson of Dickinson College has put together a really great &#8220;cheat sheet&#8221;, which you can find <a href="http://users.dickinson.edu/~richesod/latex/latexcheatsheet.pdf" target="_blank">here</a>.
      </p>
      
      <p>
        For a list of some of the more common &#40;\LaTeX&#41; symbols, see <a href="http://amath.colorado.edu/documentation/LaTeX/Symbols.pdf" target="_blank">here</a>. If you want to see a really, really, really long list of symbols, go <a href="http://www.ctan.org/tex-archive/info/symbols/comprehensive/symbols-a4.pdf" target="_blank">here</a>.
      </p>
      
      <p>
        Lastly, you may find the following resources useful:
      </p>
      
      <ul>
        <li>
          <a href="http://en.wikibooks.org/wiki/LaTeX" target="_blank">LaTeX Wiki Book</a>
        </li>
        <li>
          <a href="http://www.latex-community.org/" target="_blank">LaTeX Community</a>
        </li>
        <li>
          <a href="http://tex.stackexchange.com/" target="_blank">LaTeX Stack Exchange</a>
        </li>
        <li>
          <a href="http://users.dickinson.edu/~richesod/latex/index.html" target="_blank">Dave Richeson&#8217;s Quick Introduction to LaTeX</a>
        </li>
      </ul>
      
      <h2>
        Using a LaTeX Editor
      </h2>
      
      <p>
        Writing a LaTeX document is much more complicated than just starting to write. There are a whole host of things that you need to put at the top of your document and this can be rather intimidating at first. The big picture is that the content of your document comes after the line <code>\begin{document}</code>. All of the stuff before this line is called the <em>preamble</em> and when you first start learning LaTeX, you should just ignore this stuff. Below, I&#8217;ve included some templates to get you started. In the beginning, don&#8217;t worry too much about all of the complicated stuff in the preamble.
      </p>
      
      <p>
        The .tex file is where you type the content of your file. You won&#8217;t see the output until you <em>compile</em> it. If you&#8217;ve done everything correctly, the output after compiling will be a PDF. I highly recommend compiling often to see what you&#8217;ve got so far and to make it easier to find your syntax errors if you have any.
      </p>
      
      <p>
        When you are typing the content of your document, you will partition your content into various <em>environments</em>. Examples of environments include: <code>theorem, proof, align*, itemize, enumerate</code>, but there are lots more. Every environment begins with <code>\begin{environment-name}</code> and ends with <code>\end{environment-name}</code>. For example, see the example above that uses the <code>align*</code> environment. As another example, if you wanted to write the statement of the theorem that divides is transitive, you would write:
      </p>
      
      <pre><code> \begin{theorem}
 Let $a,b,c\in \mathbb{Z}$. If $a|b$ and $b|c$, then $a|c$.
 \end{theorem}
</code></pre>
      
      <p>
        <em>Note:</em> LaTeX ignores whitespace. What this means is that extra spaces and carriage returns (i.e., hitting the space bar or return/enter key repeatedly) have no impact on the output of the .tex document. You can adjust vertical spacing using commands like: <code>\newline, \bigskip, \medskip, \smallskip, \vspace{1cm}, \vfill</code>. If you experiment with these commands, you&#8217;ll be able to see what impact they have.
      </p>
      
      <h2>
        Installing LaTeX on Your Own Computer
      </h2>
      
      <p>
        There are a growing number of online LaTeX editors. My favorite is <a href="http://overleaf.com">Overleaf</a> (formerly named writeLaTeX). While there are several benefits of using an online editor, if you use LaTeX enough, you&#8217;ll eventually want to install it locally on your own computer.
      </p>
      
      <h3>
        Installing on a Mac
      </h3>
      
      <p>
        If you have a Mac, installing and using LaTeX is easy. All you need to do is go <a href="http://www.tug.org/mactex/" target="_blank">here</a> and download the latest version of the MacTeX distribution (filename should be MacTeX.mpkg.zip). Once you have downloaded the package, double-click the installer (if it doesn&#8217;t run automatically). If you follow the instructions during the installation, you will be provided with the LaTeX &#8220;backend&#8221; (which you can safely ignore) and the &#8220;frontend&#8221; editor TeXShop (which will be located in a folder called TeX in your Applications folder). TeXShop will be the default application for editing any file with a .tex extension. After editing a tex file, click &#8220;Typeset&#8221; and if you don&#8217;t have any errors, TeXShop will render the corresponding PDF. I recommend clicking &#8220;Trash Aux Files&#8221; in the Console window after you are done editing. If you have questions about using TeXShop on a Mac, please ask!
      </p>
      
      <h3>
        Installing on a PC
      </h3>
      
      <p>
        To get up and running with LaTeX on a computer running Windows, you need to install two things. First, install the MiKTeX &#8220;backend&#8221;, located <a href="http://miktex.org/" target="_blank">here</a>. Click the &#8220;download&#8221; link at the top of the list under MiKTeX Releases and following the instructions. Next, download TeXnicCenter by going <a href="http://www.texniccenter.org/" target="_blank">here</a>. Download the latest version and proceed according to the instructions. TeXnicCenter will now be your default application for editing any file with a .tex extension. You can safely ignore the MiKTeX &#8220;backend&#8221;.
      </p>
      
      <h3>
        Installing on a computer running Linux
      </h3>
      
      <p>
        Most Linux distributions (e.g., Ubuntu, Debian, Fedora, etc.) use a package manager to install and update software. (Don&#8217;t use a web browser to look for LaTeX online. Your computer already knows where to go online to find LaTeX and how to install it.) These instructions assume you are using Ubuntu, but similar actions will work on any Linux distro with a modern package management system. Using your package manager (&#8220;Ubuntu Software Center&#8221; or similar in your applications menu) and assuming you have an internet connection, you need to search for and install two things:
      </p>
      
      <ul>
        <li>
          A LaTeX backend: For the most basic install, search for and install &#8220;texlive-base&#8221;. For a more comprehensive install, search for an install &#8220;texlive-full&#8221;.
        </li>
        <li>
          A LaTeX editor: Search for and install &#8220;Kile&#8221;. Kile is the editor of choice for many Linux users writing LaTeX.
        </li>
        <li>
          After Ubuntu installs these, you should find Kile in your applications menu and it should be capable of calling the various LaTeX programs automatically.
        </li>
      </ul>
      
      <h2>
        Credits
      </h2>
      
      <p>
        This page is an adaptation of <a href="http://math453fall2008.wikidot.com/quick-latex-guide" target="_blank">Andy Schultz&#8217;s Quick LaTeX Guide</a> and <a href="http://elishapeterson.wikidot.com/courses:latex-help" target="_blank">Elisha Peterson&#8217;s LaTeX Help</a>. Thanks to <a href="http://math.jasonbhill.com/" target="_blank">Jason B. Hill</a> for providing instructions for installing LaTeX on a computer running Linux. The mathematical symbols on this page were typeset using <a href="http://www.mathjax.org/" target="_blank">MathJax</a>.
      </p>

 [1]: http://danaernst.com/latex-homework-template
 [2]: https://gist.github.com/1827406
 [3]: http://overleaf.com