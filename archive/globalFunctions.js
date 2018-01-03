	function mailScramble(address,suffix) { 
		var a,b,c,d,e;
 		a='<a href=\"mai';
 		b=address; 
 		c='\">'; 
 		a+='lto:'; 
 		b+='&#64;'; 
 		e='</a>';
 		b+=suffix;
 		b+='.e';
 		b+='du';
 		d=b;
 		document.write(a+b+c+d+e);
	}
	
	function mailScramble2(address,suffix,display) { 
		var a,b,c,d,e;
 		a='<a href=\"mai';
 		b=address; 
 		c='\">'; 
 		a+='lto:'; 
 		b+='&#64;'; 
 		e='</a>';
 		b+=suffix;
 		b+='.e';
 		b+='du';
 		d=display;
 		document.write(a+b+c+d+e);
	}

	function makeTweet()
	{
		document.write('<div class="tweet"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none" data-via="danaernst" data-related="IBLMath:Inquiry-based learning in mathematics.">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div>');
	}

	function makeTitle()
    {
        document.write('<title>Dr. Dana C. Ernst&gt; Teaching&gt; '+currentCourse+ '</title>');
    }

	function makeLogo()
	{
		document.write('<div id="head">');
		document.write('<h1>Dana C. Ernst</h1>');
		document.write('<h2>Plymouth State University</h2>');
		document.write('</div>');
	}

	var Pages= new Array (
		new Array('home','index.html'),
		new Array('teaching','teaching.html'),
		new Array('research','research.html'),
		new Array('other','other.html')
	);
	
	function makeNavbar()
	{
		document.write('<div id="nav">');
		document.write('<ul>');
		for(var i = 0; i < Pages.length; i++)
		{
			var page = Pages[i];
			if (currentPage == page[0]) {
				document.write('<li id="uberlink">');
			} else {
				document.write('<li>');
			}
			document.write('<a href="'+ page[1]+'">'+page[0]);
			document.write('</a></li>');
		}
		document.write('</ul>');
		document.write('</div>');
	}

	function makeSidebar()
	{
		document.write('<div id="right">');
		document.write('<h1>Resources</h1>');
		document.write('<ul>');
		document.write('<li><a href="latex.html">Quick LaTeX Guide</a></li>');
		document.write('<li><a href="http://detexify.kirelabs.org/classify.html" target="_blank">Detexify</a></li>');
		document.write('<li><a href="http://www.scribtex.com/" target="_blank">ScribTeX</a></li>');
		document.write('<li><a href="http://en.wikibooks.org/wiki/LaTeX" target="_blank">LaTeX Wiki Book</a></li>');
		document.write('<li><a href="http://www.latex-community.org/" target="_blank">LaTeX Community</a></li>');
		document.write('<li><a href="http://tex.stackexchange.com/" target="_blank">LaTeX Stack Exchange</a></li>');
		document.write('<li><a href="http://sage.plymouth.edu" target="_blank">PSU Sage Notebook server</a></li>');
		document.write('<li><a href="http://www.wolframalpha.com/" target="_blank">Wolfram|Alpha</a></li>');
		document.write('<li><a href="http://my.plymouth.edu" target="_blank">myPlymouth</a></li>');
		document.write('<li><a href="http://www.plymouth.edu" target="_blank">Plymouth State University</a></li>');
		document.write('<li><a href="http://danaernst.com" target="_blank">Dana\'s webpage</a></li>');
		document.write('</ul>');
		document.write('<center>');
		document.write('<a href="http://www.mathjax.org/"><img title="Powered by MathJax" src="http://www.mathjax.org/badge.gif" border="0" alt="Powered by MathJax" /></a>');
		document.write('</center>');
		document.write('</div>');
	}

	function makeFooter()
	{
		document.write('<div style="clear: both;"></div>');
		document.write('<div id="foot">');
		document.write('<div class="alignleft"></a>This page maintained by <a href="http://danaernst.com">Dana C. Ernst</a>.  Template inspired by <a href="http://demusdesign.com/">DemusDesign</a>.</div>');
		document.write('<div class="alignright"><a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/us/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/us/88x31.png" /></div>');
		document.write('</div>');
	}