	function makeTitle()
	{
		document.write('<title>AMS Special Session -- ' +currentPage+ '</title>');	
	}

	
	function makeLogo()
	{
		document.write('<div id="logo">');
		document.write('<h1>Combinatorics of Coxeter Groups</h1>');
		document.write('<h2>AMS Special Session, 2011 Spring Eastern Sectional Meeting</h2>')
        document.write('<h2>College of the Holy Cross, Worcester, MA, April 9-10, 2011</h2>')
		document.write('</div>');
	}

	var Pages = new Array (
		new Array('Plymouth State University','http://plymouth.edu'),
		new Array('PSU Mathematics Department','http://www.plymouth.edu/math/'),
		new Array('PSU Mathematics Seminars','seminars.html')
	);
	
	function makeNavbar()
	{
		document.write('<div id="navbar">');
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

	function makeFooter()
	{
		document.write('<div id="footer">');
		document.write('<hr width=100%>');
		document.write('<div class="alignleft">This page maintained by <a href="http://danaernst.com">Dana C. Ernst</a></div>');
		document.write('<div class="alignright"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none" data-via="danaernst" data-related="IBLMath:Inquiry-based learning in mathematics.">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div>');
		document.write('</div>');
	}	