	function makeSearch()
	{
		document.write('<div id="search">');
		document.write('<table>');
		document.write('<caption>search</caption>');
		document.write('<tr><td>');
		document.write('<form method="get" action="http://www.google.com/search">');
		document.write('<input type="text"   name="q" size="18" maxlength="255" value="" />');
		document.write('  <input type="submit" value="Google" /></td></tr>');
		document.write('<tr><td align="left">');
		document.write('<input type="radio"  name="sitesearch" value="oz.plymouth.edu/~dcernst" checked /> only Dana\'s web page<br />'),
		document.write('</form>');
		document.write('</td></tr></table>');
		document.write('</div>');
	}

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
		document.write('<title>Dr. Dana C. Ernst > Teaching > '+currentCourse+ '</title>');
	}

	function makeLogo2000()
	{
		document.write('<div id="head">');
		document.write('<h1>Introduction to Formal Mathematics</h1>');
		document.write('<h2>Plymouth State University</h2>');
		document.write('<h2>Fall 2011</h2>');
		document.write('</div>');
	}

	function makeLogo2550()
	{
		document.write('<div id="head">');
		document.write('<h1>Calculus I</h1>');
		document.write('<h2>Plymouth State University</h2>');
		document.write('<h2>Fall 2011</h2>');
		document.write('</div>');
	}

	function makeLogo4140()
	{
		document.write('<div id="head">');
		document.write('<h1>Abstract Algebra</h1>');
		document.write('<h2>Plymouth State University</h2>');
		document.write('<h2>Fall 2011</h2>');
		document.write('</div>');
	}

	var Pages2000= new Array (
		new Array('home','2000.html'),
		new Array('syllabus','syllabus.html'),
		new Array('homework','homework.html'),
		new Array('exams','exams.html'),
		new Array('course notes','notes.html')
	);
	
	function makeNavbar2000()
	{
		document.write('<div id="nav">');
		document.write('<ul>');
		for(var i = 0; i < Pages2000.length; i++)
		{
			var page = Pages2000[i];
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

	var Pages2550 = new Array (
		new Array('home','2550.html'),
		new Array('syllabus','syllabus.html'),
		new Array('homework','homework.html'),
		new Array('course notes','notes.html'),
		new Array('labs','labs.html'),
		new Array('old exams','exams.html')
	);

	function makeNavbar2550()
	{
		document.write('<div id="nav">');
		document.write('<ul>');
		for(var i = 0; i < Pages2550.length; i++)
		{
			var page = Pages2550[i];
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

	var Pages4140 = new Array (
		new Array('home','4140.html'),
		new Array('syllabus','syllabus.html'),
		new Array('homework','homework.html'),
		new Array('exams','exams.html')
	);

	function makeNavbar4140()
	{
		document.write('<div id="nav">');
		document.write('<ul>');
		for(var i = 0; i < Pages4140.length; i++)
		{
			var page = Pages4140[i];
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
	
	function makeSidebar2000()
	{
		document.write('<div id="right">');
		document.write('<h1>Resources</h1>');
		document.write('<ul>');
		document.write('<li><a href="syllabus.html">syllabus</a></li>');
		document.write('<li><a href="homework.html">homework</a></li>');
		document.write('<li><a href="notes.html">course notes</a></li>');
		document.write('<li><a href="exams.html">exams</a></li>');
		document.write('<li><a href="http://www.plymouth.edu/webapp/courses/course/view.php?id=12704" target="_blank">course Moodle page</a></li>');
		document.write('<li><a href="http://www.plymouth.edu/services/math-center/" target="_blank">Math Activity Center</a></li>');
		document.write('<li><a href="http://danaernst.com" target="_blank">Dana\'s web page</a></li>');
		document.write('<li><a href="../../latex.html">Quick LaTeX Guide</a></li>');
		document.write('<li><a href="http://detexify.kirelabs.org/classify.html" target="_blank">Detexify</a></li>');
		document.write('<li><a href="http://www.scribtex.com/" target="_blank">ScribTeX</a></li>');
		document.write('<li><a href="https://sage.plymouth.edu/" target="_blank">PSU Sage Notebook server</a></li>');
		document.write('<li><a href="http://www.wolframalpha.com/" target="_blank">Wolfram|Alpha</a></li>');
		document.write('<li><a href="http://my.plymouth.edu" target="_blank">myPlymouth</a></li>');
		document.write('<li><a href="http://www.plymouth.edu" target="_blank">Plymouth State University</a></li>');
		document.write('</ul>');
		document.write('<center>');
		document.write('<a href="http://www.mathjax.org/"><img title="Powered by MathJax" src="http://www.mathjax.org/badge.gif" border="0" alt="Powered by MathJax" /></a>');
		document.write('</center>');
		document.write('</div>');
	}
	
	function makeSidebar2550()
	{
		document.write('<div id="right">');
		document.write('<h1>Resources</h1>');
		document.write('<ul>');
		document.write('<li><a href="syllabus.html">syllabus</a></li>');
		document.write('<li><a href="homework.html">homework</a></li>');
		document.write('<li><a href="labs.html">labs</a></li>');
		document.write('<li><a href="notes.html">course notes</a></li>');
		document.write('<li><a href="exams.html">old exams</a></li>');
		document.write('<li><a href="http://www.plymouth.edu/webapp/courses/course/view.php?id=12737" target="_blank">course Moodle page</a></li>');
		document.write('<li><a href="http://webassign.net" target="_blank">WebAssign</a></li>');
		document.write('<li><a href="http://www.plymouth.edu/services/math-center/" target="_blank">Math Activity Center</a></li>');
		document.write('<li><a href="http://danaernst.com" target="_blank">Dana\'s web page</a></li>');
		document.write('<li><a href="../../latex.html">Quick LaTeX Guide</a></li>');
		document.write('<li><a href="http://detexify.kirelabs.org/classify.html">Detexify</a></li>');
		document.write('<li><a href="http://www.scribtex.com/" target="_blank">ScribTeX</a></li>');
		document.write('<li><a href="../../Misc/UnitCircle.pdf" target="_blank">Trig Unit Circle (PDF)</a></li>');
		document.write('<li><a href="https://sage.plymouth.edu/" target="_blank">PSU Sage Notebook server</a></li>');
		document.write('<li><a href="http://www.wolframalpha.com/" target="_blank">Wolfram|Alpha</a></li>');
		document.write('<li><a href="http://my.plymouth.edu" target="_blank">myPlymouth</a></li>');
		document.write('<li><a href="http://www.plymouth.edu" target="_blank">Plymouth State University</a></li>');
		document.write('</ul>');
		document.write('<center>');
		document.write('<a href="http://www.mathjax.org/"><img title="Powered by MathJax" src="http://www.mathjax.org/badge.gif" border="0" alt="Powered by MathJax" /></a>');
		document.write('</center>');
		document.write('</div>');
	}

	function makeSidebar4140()
	{
		document.write('<div id="right">');
		document.write('<h1>Resources</h1>');
		document.write('<ul>');
		document.write('<li><a href="syllabus.html">syllabus</a></li>');
		document.write('<li><a href="homework.html">homework</a></li>');
		document.write('<li><a href="exams.html">exams</a></li>');
		document.write('<li><a href="http://www.jiblm.org/downloads/jiblmjournal/V070303/V070303.pdf" target="_blank">course notes (PDF)</a></li>');
		document.write('<li><a href="http://www.plymouth.edu/webapp/courses/course/view.php?id=13103" target="_blank">course Moodle page</a></li>');
		document.write('<li><a href="http://danaernst.com" target="_blank">Dana\'s web page</a></li>');
		document.write('<li><a href="../../Misc/ElementsOfStyle.pdf" target="_blank">Elements of Style of Proofs</a></li>');
		document.write('<li><a href="../../latex.html">Quick LaTeX Guide</a></li>');
		document.write('<li><a href="http://detexify.kirelabs.org/classify.html" target="_blank">Detexify</a></li>');
		document.write('<li><a href="http://www.scribtex.com/" target="_blank">ScribTeX</a></li>');
		document.write('<li><a href="https://sage.plymouth.edu/" target="_blank">PSU Sage Notebook server</a></li>');
		document.write('<li><a href="http://www.wolframalpha.com/" target="_blank">Wolfram|Alpha</a></li>');
		document.write('<li><a href="http://my.plymouth.edu" target="_blank">myPlymouth</a></li>');
		document.write('<li><a href="http://www.plymouth.edu" target="_blank">Plymouth State University</a></li>');
		document.write('</ul>');
		document.write('<center>');
		document.write('<a href="http://www.mathjax.org/"><img title="Powered by MathJax" src="http://www.mathjax.org/badge.gif" border="0" alt="Powered by MathJax" /></a>');
		document.write('</center>');
		document.write('</div>');
	}

	function makeInstructorInfo()
	{
		document.write('<h2>Instructor Information</h2>');
		document.write('<p><b>Instructor:</b> Dr. Dana C. Ernst<br />');
		document.write('<b>Office:</b> Hyde 356<br />');
		document.write('<b>Office Phone:</b>  603.535.2857<br />');
		document.write('<b>Email:</b> <script type="text/javascript">mailScramble("dcernst","plymouth");</script><br />');
		document.write('<b>Office Hours:</b> Monday, Wednesday, &amp; Friday at 1:30-2:30PM (or by appointment)<br />');
		document.write('<b>Webpage: </b><a href="../../index.html" target="_blank">http://oz.plymouth.edu/~dcernst</a></p>');
	}

	function makeFooter()
	{
		document.write('<div style="clear: both;"></div>');
		document.write('<div id="foot">');
		document.write('<div class="alignleft"></a>This page maintained by <a href="http://danaernst.com">Dana C. Ernst</a>.  Template inspired by <a href="http://demusdesign.com/">DemusDesign</a>.</div>');
		document.write('<div class="alignright"><a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/us/"><img alt="Creative Commons License" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/us/88x31.png" /></div>');
		document.write('</div>');
	}