	function makeTitle()
	{
		document.write('<title>Andrew Schultz, UIUC -- ' +currentPage+ '</title>');	
	}

	
	function makeLogo()
	{
		document.write('<div id="logo">');
		document.write('<h1>Andrew Schultz</h1>');
		document.write('<h2><a href="http://www.math.uiuc.edu/" target="_blank">Mathematics @ UIUC</a></h2>');
		document.write('</div>');
	}

	var Pages = new Array (
		new Array('Home','./'),
		new Array('CV','cv.pdf'),
		new Array('Research','research.html'),
		new Array('Teaching','teaching.html')
//		new Array('Origami','origami.html'),
//		new Array('Links','links.html')
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


	function toggleDiv(divid)
	{
		if (document.getElementById(divid).style.display == 'none') {
			document.getElementById(divid).style.display = 'block';
   		} else {
			document.getElementById(divid).style.display = 'none';
		}
	}

	var Papers = new Array (
		new Array(
			"An elementary (number theory) proof of Touchard's congruence",
			'G.Hurst and A.Schultz',
			'Under review',
			"We use well known recurrence relations for Bell and Stirling numbers to develop a new recurrence relation on Bell numbers. This allows us to give a new proof of Touchard's congruence which uses some techniques approachable by undergraduates.",
			'http://front.math.ucdavis.edu/0906.0696'
		),
		new Array(
			'Galois module structure of Galois cohomology for embeddable cyclic extensions of degree p<sup>n</sup>',
			'N.Lemire, J.Min&aacute;&#269;, A.Schultz, and J.Swallow',
			'Accepted pending revisions by <b>Journal of the London Mathematical Society</b>',
			'In the case that E/F is a cyclic, degree p<sup>n</sup> extension which embeds in a cyclic, degree p<sup>n+1</sup> extension L/F, we give the Galois module structure of the reduced Milnor k-groups k<sub>m</sub>E.',
			'http://front.math.ucdavis.edu/0904.3719'
		),	
		new Array(
			'Cyclic algebras, Schur indices, norms, and Galois modules',
			'J.Min&aacute;&#269;, A.Schultz, and J.Swallow',
			'Under review',
			"Let p be a prime and suppose that K/F is a cyclic extension of degree p<sup>n</sup> with group G. Let J be the F<sub>p</sub>G-module K<sup>*</sup>/K<sup>*p</sup> of pth-power classes. In our previous paper we established precise conditions for J to contain an indecomposable direct summand of dimension not a power of p. At most one such summand exists, and its dimension must be p<sup>i</sup>+1 for some 0&le; i < n. We show that for all primes p and all 0 &le;  i< n, there exists a field extension K/F with a summand of dimension p<sup>i</sup>+1.",
			'http://arxiv.org/pdf/math.NT/0410536'
		),		
		new Array(
			'Hilbert 90 for Galois cohomology',
			'N.Lemire, J.Min&aacute;&#269;, A.Schultz, and J.Swallow',
			'Accepted pending revisions by <b>Communications in Algebra</b>',
			"Assuming the Bloch-Kato Conjecture, we determine precise conditions under which Hilbert 90 is valid for Milnor k-theory and Galois cohomology. In particular, Hilbert 90 holds for degree n when the cohomological dimension of the Galois group of the maximal p-extension of F is at most n.",
			'http://arxiv.org/pdf/math.NT/0601663'
		),
		new Array(
			'Galois module structure of Milnor K-theory mod p<sup>s</sup> in characteristic p',
			'J.Min&aacute;&#269;, A.Schultz, and J.Swallow',
			'Appeared in <b>New York Journal of Mathematics</b> 14: 225--233 (2008).',
			"Let E be a cyclic extension of pth-power degree of a field F of characteristic p. For all m, s in N, we determine K_mE/p^sK_mE as a (Z/p^sZ)[Gal(E/F)]-module. We also provide examples of extensions for which all of the possible nonzero summands in the decomposition are indeed nonzero.",
			'http://arxiv.org/pdf/math.NT/0602546'
		),		
		new Array(
			'Automatic realizations of Galois groups with cyclic quotient of order p<sup>n</sup>',
			'J.Min&aacute;&#269;, A.Schultz, and J.Swallow',
			'Appeared in <b>Journal de Th&eacute;orie des Nombres de Bordeaux</b> 20: 419--430 (2008).',
			"We establish automatic realizations of Galois groups among groups M semidirect G, where G is a cyclic group of order p^n for a prime p and M is a quotient of the group ring Fp[G].",
			'http://arxiv.org/pdf/math.NT/0603594'
		),
		new Array(
			'Hilbert 90 for biquadratic extensions',
			'R.Dwilewicz, J.Min&aacute;&#269;, A.Schultz, and J.Swallow',
			'Appeared in <b>American Mathematical Monthly</b> 114:7 (August-September 2007), 577--587',
			"Hilbert's Theorem 90 is a classical result in the theory of cyclic extensions. The quadratic case of Hilbert 90, however, generalizes in noncyclic directions as well. Informed by a poem of Richard Wilbur, the article explores several generalizations, discerning connections among multiplicative groups of fields, values of binary quadratic forms, a bit of module theory over group rings, and even Galois cohomology.",
			'http://arxiv.org/pdf/math.NT/0510154'
		),
		new Array(
			'Galois module structure of Galois cohomology (thesis)',
			'A.Schultz',
			'Final Draft',
			"My thesis, in which I explore the structure of certain Galois cohomology groups in the vein of Min&aacute;&#269; and Swallow.  This includes generalizations to p-adic extensions, the first result on pro-p groups in this family of projects.",
			'http://www.math.uiuc.edu/~acs/thesis.pdf'
		),		
		new Array(
			'Galois module structure of pth-power classes of cyclic extensions of degree p<sup>n</sup>',
			'J.Min&aacute;&#269;, A.Schultz, and J.Swallow',
			'Appeared in <i>Proc. London Math. Soc.</i> <b>92</b> (2006), 307--341',
			"In the mid-1960s Borevic and Faddeev initiated the study of the Galois module structure of groups of pth-power classes of cyclic extensions K/F of pth-power degree. They determined the structure of these modules in the case when F is a local field. In this paper we determine these Galois modules for all base fields F.",
			'http://arxiv.org/pdf/math.NT/0409532'
		),		
		new Array(
			'A five color zero-sum generalization',
			'D.Grynkiewicz and  A. Schultz',
			'Appeared in <i>Graphs and Combinatorics</i> <b>22</b> (2006), 351 -- 360',
			"Several theorems of Ramsey-type have been generalized by considering Z/mZ-colorings and zero-sum configurations rather than 2-colorings and monochromatic configurations; such generalizations are called EGZ. There is also a notion of EGZ generalizations of r-colorings for r>2. Recently in a sequence of three papers the first author showed that a certain Ramsey-type theorem with 4-colors admitted an EGZ generalization. In this paper we show that a Ramsey-type problem with 5-colors considered in a paper of the second author admits an EGZ generalization.  This is the only EGZ generalization in 5 colors which known to the authors at the time of this paper.",
			'GS.pdf'
		),		
		new Array(
			'On a Modification of a Problem of Bialostocki, Erd&ouml;s, and Lefmann',
			'A.Schultz',
			'Appeared in <i>Discrete Math.</i> <b>306</b> (2006), 244--253',
			"For positive integers m and r, one can easily show there exist integers N such that for every map D:{1,2,...,N} -> {1,2,...,r} there exist 2m integers x_1 < ... < x_m < y_1 < ... < y_m which satisfy:<ul><li>D(x_1) = ... = D(x_m),</li><li> D(y_1) = ... = D(y_m), and </li><li> 2(x_m-x_1) \leq y_m-x_1.</li></ul> In this paper we investigate the minimal such integer, which we call g(m,r). We compute g(m,2) for m \geq 2; g(m,3) for m \geq 4; and g(m,4) for m \geq 3. Furthermore, we consider g(m,r) for general r. Along with results that bound g(m,r), we compute g(m,r) exactly for the following infinite families of r: {f_{2n+3}}, {2f_{2n+3}}, {18f_{2n}-7f_{2n-2}}, and {23f_{2n}-9f_{2n-2}}, where here f_i is the ith Fibonacci number defined by f_0 = 0 and f_1=1.",
			'http://arxiv.org/pdf/math.CO/0506545'
		)
	);

	function makePapers()
	{
		document.write('<dl>');
		for(var i = 0; i < Papers.length; i++)
		{
			var paper = Papers[i];
			document.write('<dt><a href="javascript:;" onmousedown="toggleDiv(');
			document.write("'"+paper[4]+"');");
			document.write('"><font size="-2">&plusmn;</font></a> &nbsp; <a href="'+paper[4]+'">'+paper[0]+'</a></dt>');
			document.write("<dd><div id='"+paper[4]+"' style='display:none'><br>");
			document.write('Author(s): '+paper[1]+'<br>');
			document.write('Status: '+paper[2]+'<br>');
			document.write('Abstract: '+paper[3]+'<br><br></div></dd>');
		}
		document.write('</dl>');
	}
		
	function makeFooter()
	{
		document.write('<div id="footer">');
		document.write('<hr width=100%>')
		document.write("<a href='mailto:&#97;&#110;&#100;&#114;&#101;&#119;&#46;&#99;&#46;&#115;&#99;&#104;&#117;&#108;&#116;&#122;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;'> &#97;&#110;&#100;&#114;&#101;&#119;&#46;&#99;&#46;&#115;&#99;&#104;&#117;&#108;&#116;&#122;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>");
		document.write('</div>');
	
	}	
