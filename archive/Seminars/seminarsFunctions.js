	function makeTitle()
	{
		document.write('<title>PSU Mathematics Department -- ' +currentPage+ '</title>');	
	}

	
	function makeLogo()
	{
		document.write('<div id="logo">');
		document.write('<h1>PSU Mathematics Seminars</h1>');
		document.write('<h2><a href="http://plymouth.edu/" target="_blank">Plymouth State University</a></h2>');
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
		document.write('<hr width=100%>')
		document.write('This page maintained by <a href="http://danaernst.com">Dana C. Ernst</a>');
		document.write('</div>');
	
	}	