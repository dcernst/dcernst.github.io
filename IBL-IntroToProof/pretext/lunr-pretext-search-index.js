var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "chap_preface",
  "level": "1",
  "url": "chap_preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  Mathematics is not about calculations, but ideas. My goal as a teacher is to provide students with the opportunity to grapple with these ideas and to be immersed in the process of mathematical discovery. Repeatedly engaging in this process hones the mind and develops mental maturity marked by clear and rigorous thinking. Like music and art, mathematics provides an opportunity for enrichment, experiencing beauty, elegance, and aesthetic value. The medium of a painter is color and shape, whereas the medium of a mathematician is abstract thought. The creative aspect of mathematics is what captivates me and fuels my motivation to keep learning and exploring.  While the content we teach our students is important, it is not enough. An education must prepare individuals to ask and explore questions in contexts that do not yet exist and to be able to tackle problems they have never encountered. It is important that we put these issues front and center and place an explicit focus on students producing, rather than consuming, knowledge. If we truly want our students to be independent, inquisitive, and persistent, then we need to provide them with the means to acquire these skills. Their viability as a professional in the modern workforce depends on their ability to embrace this mindset.  When I started teaching, I mimicked the experiences I had as a student. Because it was all I knew, I lectured. By standard metrics, this seemed to work out just fine. Glowing student and peer evaluations, as well as reoccurring teaching awards, indicated that I was effectively doing my job. People consistently told me that I was an excellent teacher. However, two observations made me reconsider how well I was really doing. Namely, many of my students seemed to depend on me to be successful, and second, they retained only some of what I had taught them. In the words of Dylan Retsek:    Things my students claim that I taught them masterfully, they don't know.    Inspired by a desire to address these concerns, I began transitioning away from direct instruction towards a more student-centered approach. The goals and philosophy behind inquiry-based learning (IBL) resonate deeply with my ideals, which is why I have embraced this paradigm. According to the Academy of Inquiry-Based Learning, IBL is a method of teaching that engages students in sense-making activities. Students are given tasks requiring them to solve problems, conjecture, experiment, explore, create, and communicate all those wonderful skills and habits of mind that mathematicians engage in regularly. This book has IBL baked into its core.  This book is intended to be a task sequence for an introduction to proof course that utilizes an IBL approach. The primary objectives of this book are to:  Expand the mathematical content knowledge of the reader,  Provide an opportunity for the reader to experience the profound beauty of mathematics,  Allow the reader to exercise creativity in producing and discovering mathematics,  Enhance the ability of the reader to be a robust and persistent problem solver.    Ultimately, this is really a book about productive struggle and learning how to learn. Mathematics is simply the vehicle.  You can find the most up-to-date version of this textbook on GitHub . I would be thrilled if you used this textbook and improved it. If you make any modifications, you can either make a pull request on GitHub or submit the improvements via email. You are also welcome to fork the source and modify the text for your purposes as long as you maintain the Creative Commons Attribution-Share Alike 4.0 International License.  \\epigraph{Much more important than specific mathematical results are the habits of mind used by the people who create those results. Although it is necessary to infuse courses and curricula with modern content, what is even more important is to give students the tools they will need in order to use, understand, and even make mathematics that does not yet exist.}{Cuoco, Goldenberg, & Mark in Habit of Mind: An Organizing Principle for Mathematics Curriculum }  "
},
{
  "id": "chap_acknowledgements",
  "level": "1",
  "url": "chap_acknowledgements.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " Acknowledgements  The first draft of this book was written in 2009. At that time, several of the sections were adaptations of course materials written by Matthew Jones (CSU Dominguez Hills) and Stan Yoshinobu (University of Toronto). The current version of the book is the result of many iterations that involved the addition of new material, retooling of existing sections, and feedback from instructors that have used the book. The current version of the book is a far cry from what it looked like in 2009.  This book has been an open-source project since day one. Instructors and students can download the PDF for free and modify the source as they see fit. Several instructors and students have provided extremely useful feedback, which has improved the book at each iteration. Moreover, due to the open-source nature of the book, I have been able to incorporate content written by others. Below is a partial list of people (alphabetical by last name) that have contributed content, advice, or feedback.   Chris Drupieski , T. Kyle Petersen , and Bridget Tenner (DePaul University). Modifications that these three made to the book inspired me to streamline some of the exposition, especially in the early chapters.   Paul Ellis (Rutgers University). Paul has provided lots of useful feedback and several suggestions for improvements. Paul suggested problems for Chapter and provided an initial draft of Section : Images and Preimages of Functions.   Jason Grout (Bloomberg, L.P.). I am extremely grateful to Jason for feedback on early versions of this manuscript, as well as for helping me with a variety of technical aspects of writing an open-source textbook.    Anders Hendrickson (Milliman). Anders is the original author of the content in Appendix : Elements of Style for Proofs. The current version in Appendix is a result of modifications made by myself with some suggestions from David Richeson.   Rebecca Jayne (Hampden Sydney College). The current version of Section : Complete Induction is a derivative of content originally contributed by Rebecca.   Matthew Jones (CSU Dominguez Hills) and Stan Yoshinobu (University of Toronto). A few of the sections were originally adaptations of notes written by Matt and Stan. Early versions of this textbook relied heavily on their work. Moreover, Matt and Stan were two of the key players that contributed to shaping my approach to teaching.   David Richeson (Dickinson College). David is responsible for much of the content in Appendix : Fancy Mathematical Terms, Appendix : Paradoxes, and Appendix : Definitions in Mathematics. In addition, the current version of Chapter : Three Famous Theorems is heavily based on content contributed by David.   Carol Schumacher (Kenyon College). When I was transitioning to an IBL approach to teaching, Carol was one of my mentors and played a significant role in my development as a teacher. Moreover, this work is undoubtedly influenced my Carol's excellent book Chapter Zero: Fundamental Notions of Advanced Mathematics , which I used when teaching my very first IBL course.   Josh Wiscons (CSU Sacramento). The current version of Section : Modular Arithmetic is a derivative of content contributed by Josh.    "
},
{
  "id": "sec_WhatIsThisBookAllAbout",
  "level": "1",
  "url": "sec_WhatIsThisBookAllAbout.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is This Book All About?",
  "body": " What is This Book All About?  This book is intended to be used for a one-semester\/quarter introduction to proof course (sometimes referred to as a transition to proof course). The purpose of this book is to introduce the reader to the process of constructing and writing formal and rigorous mathematical proofs. The intended audience is mathematics majors and minors. However, this book is also appropriate for anyone curious about mathematics and writing proofs. Most users of this book will have taken at least one semester of calculus, although other than some familiarity with a few standard functions in Chapter , content knowledge of calculus is not required. The book includes more content than one can expect to cover in a single semester\/quarter. This allows the instructor\/reader to pick and choose the sections that suit their needs and desires. Each chapter takes a focused approach to the included topics, but also includes many gentle exercises aimed at developing intuition.  The following sections form the core of the book and are likely the sections that an instructor would focus on in a one-semester introduction to proof course.    Chapter : Mathematics and Logic. All sections.     Chapter : Set Theory. Sections 3.1, 3.3, 3.4, and 3.5.     Chapter : Induction. All sections.     Chapter : Relations and Partitions. Sections 7.1, 7.2, and 7.3.     Chapter : Functions. Sections 8.1, 8.2, 8.3, and 8.4.     Chapter : Cardinality. All sections.     Time permitting, instructors can pick and choose topics from the remaining sections. I typically cover the core sections listed above together with Chapter : Three Famous Theorems during a single semester. The Instructor Guide contains examples of a few possible paths through the material, as well as information about which sections and theorems depend on material earlier in the book.    Mathematics, rightly viewed, possesses not only truth, but supreme beauty a beauty cold and austere, like that of sculpture, without appeal to any part of our weaker nature, without the gorgeous trappings of painting or music, yet sublimely pure, and capable of a stern perfection such as only the greatest art can show. The true spirit of delight, the exaltation, the sense of being more than Man, which is the touchstone of the highest excellence, is to be found in mathematics as surely as poetry.  Bertrand Russell, philosopher & mathematician   "
},
{
  "id": "sec_what_should_you_expect",
  "level": "1",
  "url": "sec_what_should_you_expect.html",
  "type": "Section",
  "number": "1.2",
  "title": "What Should You Expect?",
  "body": " What Should You Expect?  Up to this point, it is possible that your experience of mathematics has been about using formulas and algorithms. You are used to being asked to do things like: solve for , take the derivative of this function , integrate this function , etc. Accomplishing tasks like these usually amounts to mimicking examples that you have seen in class or in your textbook. However, this is only one part of mathematics. Mathematicians experiment, make conjectures, write definitions, and prove theorems. While engaging with the material contained in this book, we will learn about doing all of these things, especially writing proofs. Mathematicians are in the business of proving theorems and this is exactly our endeavor. Ultimately, the focus of this book is on producing and discovering mathematics.  Your progress will be fueled by your ability to wrestle with mathematical ideas and to prove theorems. As you work through the book, you will find that you have ideas for proofs, but you are unsure of them. Do not be afraid to tinker and make mistakes. You can always revisit your work as you become more proficient. Do not expect to do most things perfectly on your first or even second or third attempt. The material is too rich for a human being to completely understand immediately. Learning a new skill requires dedication and patience during periods of frustration. Moreover, solving genuine problems is difficult and takes time. But it is also rewarding!    You may encounter many defeats, but you must not be defeated.  Maya Angelou, poet & activist   "
},
{
  "id": "sec_IBLApproach",
  "level": "1",
  "url": "sec_IBLApproach.html",
  "type": "Section",
  "number": "1.3",
  "title": "An Inquiry-Based Approach",
  "body": " An Inquiry-Based Approach  In many mathematics classrooms, doing mathematics means following the rules dictated by the teacher, and knowing mathematics means remembering and applying them. However, this is not a typical mathematics textbook and is likely a significant departure from your prior experience, where mimicking prefabricated examples led you to success. In order to promote a more active participation in your learning, this book adheres to an educational philosophy called inquiry-based learning (IBL). IBL is a student-centered method of teaching that engages students in sense-making activities and challenges them to create or discover mathematics. In this book, you will be expected to actively engage with the topics at hand and to construct your own understanding. You will be given tasks requiring you to solve problems, conjecture, experiment, explore, create, and communicate. Rather than showing facts or a clear, smooth path to a solution, this book will guide and mentor you through an adventure in mathematical discovery.  This book makes no assumptions about the specifics of how your instructor chooses to implement an IBL approach. Generally speaking, students are told which problems and theorems to grapple with for the next class sessions, and then the majority of class time is devoted to students working in groups on unresolved solutions\/proofs or having students present their proposed solutions\/proofs to the rest of the class. Students should as much as possible be responsible for guiding the acquisition of knowledge and validating the ideas presented. That is, you should not be looking to the instructor as the sole authority. In an IBL course, instructor and students have joint responsibility for the depth and progress of the course. While effective IBL courses come in a variety of forms, they all possess a few essential ingredients. According to Laursen and Rasmussen (2019) , the Four Pillars of IBL are:   Students engage deeply with coherent and meaningful mathematical tasks.    Students collaboratively process mathematical ideas.    Instructors inquire into student thinking.    Instructors foster equity in their design and facilitation choices.     This book can only address the first pillar while it is the responsibility of your instructor and class to develop a culture that provides an adequate environment for the remaining pillars to take root. If you are studying this material independent of a classroom setting, I encourage you to find a community where you can collaborate and discuss your ideas.  Just like learning to play an instrument or sport, you will have to learn new skills and ideas. Along this journey, you should expect a cycle of victory and defeat, experiencing a full range of emotions. Sometimes you will feel exhilarated, other times you might be seemingly paralyzed by extreme confusion. You will experience struggle and failure before you experience understanding. This is part of the normal learning process. If you are doing things well, you should be confused on a regular basis. Productive struggle and mistakes provide opportunities for growth. As the author of this text, I am here to guide and challenge you, but I cannot do the learning for you, just as a music teacher cannot move your fingers and your heart for you. This is a very exciting time in your mathematical career. You will experience mathematics in a new and profound way. Be patient with yourself and others as you adjust to a new paradigm.  You could view this book as mountaineering guidebook. I have provided a list of mountains to summit, sometimes indicating which trailhead to start at or which trail to follow. There will always be multiple routes to top, some more challenging than others. Some summits you will attain quickly and easily, others might require a multi-day expedition. Oftentimes, your journey will be laced with false summits. Some summits will be obscured by clouds. Sometimes you will have to wait out a storm, perhaps turning around and attempting another route, or even attempting to summit on a different day after the weather has cleared. The strength, fitness, and endurance you gain along the way will allow you to take on more and more challenging, and often beautiful, terrain. Do not forget to take in the view from the top! The joy you feel from overcoming obstacles and reaching each summit under your own will and power has the potential to be life changing. But make no mistake, the journey is vastly more important than the destinations.    Don't fear failure. Not failure, but low aim, is the crime. In great attempts it is glorious even to fail.  Bruce Lee, martial artist & actor   "
},
{
  "id": "sec_Structure",
  "level": "1",
  "url": "sec_Structure.html",
  "type": "Section",
  "number": "1.4",
  "title": "Structure of the Textbook",
  "body": " Structure of the Textbook  As you read this book, you will be required to digest the material in a meaningful way. It is your responsibility to read and understand new definitions and their related concepts. In addition, you will be asked to complete problems aimed at solidifying your understanding of the material. Most importantly, you will be asked to make conjectures, produce counterexamples, and prove theorems. All of these tasks will almost always be challenging.  The items labeled as Definition and Example are meant to be read and digested. However, the items labeled as Problem , Theorem , and Corollary require action on your part. Items labeled as Problem are sort of a mixed bag. Some Problems are computational in nature and aimed at improving your understanding of a particular concept while others ask you to provide a counterexample for a statement if it is false or to provide a proof if the statement is true. Items with the Theorem and Corollary designation are mathematical facts and the intention is for you to produce a valid proof of the given statement. The main difference between a theorem and a corollary is that corollaries are typically statements that follow quickly from a previous theorem. In general, you should expect corollaries to have very short proofs. However, that does not mean that you cannot produce a more lengthy yet valid proof of a corollary.  Oftentimes, the problems and theorems are guiding you towards a substantial, more general result. Other times, they are designed to get you to apply ideas in a new way. One thing to always keep in mind is that every task in this book can be done by you, the student. But it may not be on your first try, or even your second.  Discussion of new topics is typically kept at a minimum and there are very few examples in this book. This is intentional. One of the objectives of the items labeled as Problem is for you to produce the examples needed to internalize unfamiliar concepts. The overarching goal of this book is to help you develop a deep and meaningful understanding of the processes of producing mathematics by putting you in direct contact with mathematical phenomena.    Don't just read it; fight it! Ask your own questions, look for your own examples, discover your own proofs. Is the hypothesis necessary? Is the converse true? What happens in the classical special case? What about the degenerate cases? Where does the proof use the hypothesis?  aul Halmos, mathematician   "
},
{
  "id": "sec_Structure-3",
  "level": "2",
  "url": "sec_Structure.html#sec_Structure-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition Example Problem Theorem Corollary Problem Theorem Corollary "
},
{
  "id": "sec_Structure-5",
  "level": "2",
  "url": "sec_Structure.html#sec_Structure-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Problem "
},
{
  "id": "sec_guidance",
  "level": "1",
  "url": "sec_guidance.html",
  "type": "Section",
  "number": "1.5",
  "title": "Some Minimal Guidance",
  "body": " Some Minimal Guidance  Especially in the opening sections, it will not be clear what facts from your prior experience in mathematics you are allowed to use. Unfortunately, addressing this issue is difficult and is something we will sort out along the way. In addition, you are likely unfamiliar with how to structure a valid mathematical proof. So that you do not feel completely abandoned, here are some guidelines to keep in mind as you get started with writing proofs.   The statement you are proving should be on the same page as the beginning of your proof.    You should indicate where the proof begins by writing Proof. at the beginning.    Make it clear to yourself and the reader what your assumptions are at the very beginning of your proof. Typically, these statements will start off Assume , Suppose , or Let . Sometimes there will be some implicit assumptions that we can omit, but at least in the beginning, you should get in the habit of clearly stating your assumptions up front.    Carefully consider the order in which you write your proof. Each sentence should follow from an earlier sentence in your proof or possibly a result you have already proved.    Unlike the experience many of you had writing proofs in your high school geometry class, our proofs should be written in complete sentences. You should break sections of a proof into paragraphs and use proper grammar. There are some pedantic conventions for doing this that will be pointed out along the way. Initially, this will be an issue that you may struggle with, but you will get the hang of it.    There will be many situations where you will want to refer to an earlier definition, problem, theorem, or corollary. In this case, you should reference the statement by number, but it is also helpful to the reader to summarize the statement you are citing. For example, you might write something like, According to Theorem , the sum of two consecutive integers is odd, and so or By the definition of divides ( Definition ), it follows that . One thing worth pointing out is that if we are citing a definition, theorem, or problem by number, we should capitalize Definition , Theorem , or Problem , respectively (e.g., According to Theorem ). Otherwise, we do not capitalize these words (e.g., By the definition of divides ).    There will be times when we will need to do some basic algebraic manipulations. You should feel free to do this whenever the need arises. But you should show sufficient work along the way. In addition, you should organize your calculations so that each step follows from the previous. The order in which we write things matters. You do not need to write down justifications for basic algebraic manipulations (e.g., adding 1 to both sides of an equation, adding and subtracting the same amount on the same side of an equation, adding like terms, factoring, basic simplification, etc.).    On the other hand, you do need to make explicit justification of the logical steps in a proof. As stated above, you should cite a previous definition, theorem, etc. when necessary.    Similar to making it clear where your proof begins, you should indicate where it ends. It is common to conclude a proof with the standard proof box ( or ). This little square at end of a proof is sometimes called a tombstone or Halmos symbol after Hungarian-born American mathematician Paul Halmos (1916 2006).     It is of utmost importance that you work to understand every proof. Questions asked to your instructor, your peers, and yourself are often your best tool for determining whether you understand a proof. Another way to help you process and understand a proof is to try and make observations and connections between different ideas, proof statements and methods, and to compare various approaches.  If you would like additional guidance before you dig in, look over the guidelines in Appendix : Elements of Style for Proofs. It is suggested that you review this appendix occasionally as you progress through the book as some guidelines may not initially make sense or seem relevant. Be prepared to put in a lot of time and do all the work. Your effort will pay off in intellectual development. Now, go have fun and start exploring mathematics!    Our greatest glory is not in never falling, but in rising every time we fall.  Confucius, philosopher   "
},
{
  "id": "sec_guidance-2",
  "level": "2",
  "url": "sec_guidance.html#sec_guidance-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tombstone Halmos symbol "
},
{
  "id": "sec_baby_number_theory",
  "level": "1",
  "url": "sec_baby_number_theory.html",
  "type": "Section",
  "number": "2.1",
  "title": "A Taste of Number Theory",
  "body": " A Taste of Number Theory  It is important to point out that we are diving in head first here. As we get started, we are going to rely on your intuition and previous experience with proofs. This is intentional. What you will likely encounter is a general sense of what a proof entails, but you may not be able to articulate the finer details that you do and do not comprehend. There are going to be some subtle issues that you will be confronted with and one of our goals will be to elucidate as many of them as possible. We need to calibrate and develop an intellectual need for structure. You are encouraged to just try your hand at writing proofs for the problems in this section without too much concern for whether you are doing it the right way. In Section , we will start over and begin to develop a formal foundation for the material in the remainder of the book. Once you have gained more experience and a better understanding of what a proof entails, you should consider returning to this section and reviewing your first attempts at writing proofs. In the meantime, see what you can do!  In this section, we will introduce the basics of a branch of mathematics called number theory , which is devoted to studying the properties of the integers. The integers is the set of numbers given by .  The collection of positive integers also have a special name. The set of natural numbers is given by .  Some mathematicians (set theorists, in particular) include in , but this will not be our convention. If you look closely at the two sets we defined above, you will notice that we wrote instead of . We use to mean that the symbol or expression on the left is defined to be equal to the expression on the right. The symbol is used to denote the set of all real numbers . We will not formally define the real numbers, but instead rely on your prior intuition and understanding.  Because you are so familiar with many of the properties of the integers and real numbers, one of the issues that we will bump into is knowing which facts we can take for granted. As a general rule of thumb, you should attempt to use the definitions provided without relying too much on your prior knowledge. The order in which we develop things is important.  It is common practice in mathematics to use the symbol as an abbreviation for the phrase is an element of or sometimes simply in. For example, the mathematical expression means is an element of the integers. However, some care should be taken in how this symbol is used. We will only use the symbol in expressions of the form , where is a set and is an element of . We will write expressions like as shorthand for and . We should avoid writing phrases such as is a number and integers .  We will now encounter our very first definition. In mathematics, a definition is a precise and unambiguous description of the meaning of a mathematical term. It characterizes the meaning of a word by giving all the properties and only those properties that must be true. Check out Appendix for a list of other mathematical terms that we should be familiar with.    An integer is even if for some . An integer is odd if for some .    Notice that we framed the definition of even in terms of multiplication as opposed to division. When tackling theorems and problems involving even or odd, be sure to make use of our formal definitions and not some of the well-known divisibility properties. For now, you should avoid arguments that involve statements like, even numbers have no remainder when divided by two or the last digit of an even number is 0, 2, 4, 6, or 8. Also notice that the notions of even and odd apply to zero and negative numbers. In particular, zero is even since , where it is worth emphasizing that the occurrence of on the righthand side of the equation is an integer. As another example, we see that is odd since . Despite the fact that , this does not imply that is also even since is not an integer. For the remainder of this section, you may assume that every integer is either even or odd but never both.  Our first theorem concerning the integers is stated below. A theorem is a mathematical statement that is proved using rigorous mathematical reasoning. A synonym for theorem is proposition . However, in formal mathematics research papers, the term theorem is typically reserved for the most important results while proposition is used for other interesting but generally less important results. To complicate matters, the term proposition has a second yet related meaning, which we will encounter in Definition . In this book, we will utilize the theorem designation for true mathematical statements. In contrast, as in Definition , we will use proposition to describe a sentence that is either true or false (but never both). See Appendix for a list of fancy mathematical terms that includes theorem and proposition. As with most theorems in this book, your task is to try your hand at proving the following theorem. Give it a try.    If is an even integer, then is an even integer.    One crux in proving the next theorem involves figuring out how to describe an arbitrary pair of consecutive integers.    The sum of two consecutive integers is odd.    One skill we will want to develop is determining whether a given mathematical statement is true or false. In order to verify that a mathematical statement is false, we should provide a specific example where the statement fails. Such an example is called a counterexample . Notice that it is sufficient to provide a single example to verify that a general statement is not true. On the other hand, if we want to prove that a general mathematical statement is true, it is usually not sufficient to provide just a single example, or even a hundred examples. Such examples are just evidence that the statement is true.    Determine whether each of the following statements is true or false. If a statement is true, prove it. If a statement is false, provide a counterexample.   The product of an odd integer and an even integer is odd.    The product of an odd integer and an odd integer is odd.    The product of an even integer and an even integer is even.    The sum of an even integer and an odd integer is odd.       For the statements that were true in the previous problem, you may cite them later in a future proof as if they are theorems.    Given , we say that divides , written , if there exists such that . If , we may also say that is divisible by or that is a factor of .      For , how are the following mathematical expressions similar and how are they different? In particular, is each one a sentence or simply a noun?                     In this section on number theory, we allow addition, subtraction, and multiplication of integers. In general, we avoid division since an integer divided by an integer may result in a number that is not an integer. The upshot is that we will avoid writing . When you feel the urge to divide, switch to an equivalent formulation using multiplication. This will make your life much easier when proving statements involving divisibility.    The sum of any three consecutive integers is always divisible by three.      Let . Determine whether each of the following statements is true or false. If a statement is true, prove it. If a statement is false, provide a counterexample.   If , then .    If 6 divides , then 2 divides and 3 divides .    If divides , then divides and divides .       A theorem that follows almost immediately from another theorem is called a corollary . See if you can prove the next result quickly using a previous result. Be sure to cite the result in your proof.    If such that divides , then divides .    The next two theorems are likely familiar to you.    If such that divides , then divides .      If such that divides and divides , then divides .    Notice that we have been tinkering with statements of the form If , then . Statements of this form are called conditional propositions , which we revisit in the next section. The phrase that occurs after If but before then is called the hypothesis while the phrase that occurs after then is called the conclusion . For example, in Problem  , is the hypothesis while is the conclusion. Note that conditional propositions can also be written in the form if , where the conclusion is written before if and the hypothesis after. For example, we can rewrite Problem  as if . While the order of the hypothesis and conclusion have been reversed in the sentence, their roles have not.  Whenever we encounter a conditional statement in mathematics, we want to get in the habit of asking ourselves what happens when we swap the roles of the hypothesis and the conclusion. The statement that results from reversing the roles of the hypothesis and conclusion in a conditional statement is called the converse of the original statement. For example, the converse of Problem  is If , then , which happens to be false. The converse of Theorem is If is an even integer, then is an even integer . While this statement is true it does not have the same meaning as Theorem .    Determine whether the converse of each of Corollary , Theorem , and Theorem is true. That is, for , determine whether each of the following statements is true or false. If a statement is true, prove it. If a statement is false, provide a counterexample.   If divides , then divides . (Converse of Corollary )    If divides , then divides . (Converse of Theorem )    If divides , then divides and divides . (Converse of Theorem )       The next theorem is often referred to as the transitivity of division of integers .    If such that divides and divides , then divides .    Once we have proved a few theorems, we should be on the look out to see if we can utilize any of our current results to prove new results. There is no point in reinventing the wheel if we do not have to.    If such that divides and divides , then divides .      If such that is odd, then 8 divides .      Time spent thinking about a problem is always time well spent. Even if you seem to make no progress at all.  Paul Zeitz, mathematician   "
},
{
  "id": "sec_baby_number_theory-3",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "number theory "
},
{
  "id": "sec_baby_number_theory-4",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural numbers "
},
{
  "id": "sec_baby_number_theory-5",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "real numbers "
},
{
  "id": "sec_baby_number_theory-8",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "definition "
},
{
  "id": "sec_baby_number_theory-9",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-9",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": "  An integer is even if for some . An integer is odd if for some .   "
},
{
  "id": "sec_baby_number_theory-11",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "theorem proposition "
},
{
  "id": "thm_n_even_implies_n_2_even",
  "level": "2",
  "url": "sec_baby_number_theory.html#thm_n_even_implies_n_2_even",
  "type": "Theorem",
  "number": "2.2",
  "title": "",
  "body": "  If is an even integer, then is an even integer.   "
},
{
  "id": "thm_two_consecutive_ints",
  "level": "2",
  "url": "sec_baby_number_theory.html#thm_two_consecutive_ints",
  "type": "Theorem",
  "number": "2.3",
  "title": "",
  "body": "  The sum of two consecutive integers is odd.   "
},
{
  "id": "sec_baby_number_theory-15",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "counterexample "
},
{
  "id": "sec_baby_number_theory-16",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-16",
  "type": "Problem",
  "number": "2.4",
  "title": "",
  "body": "  Determine whether each of the following statements is true or false. If a statement is true, prove it. If a statement is false, provide a counterexample.   The product of an odd integer and an even integer is odd.    The product of an odd integer and an odd integer is odd.    The product of an even integer and an even integer is even.    The sum of an even integer and an odd integer is odd.      "
},
{
  "id": "def_divides",
  "level": "2",
  "url": "sec_baby_number_theory.html#def_divides",
  "type": "Definition",
  "number": "2.5",
  "title": "",
  "body": "  Given , we say that divides , written , if there exists such that . If , we may also say that is divisible by or that is a factor of .   "
},
{
  "id": "sec_baby_number_theory-19",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-19",
  "type": "Problem",
  "number": "2.6",
  "title": "",
  "body": "  For , how are the following mathematical expressions similar and how are they different? In particular, is each one a sentence or simply a noun?                    "
},
{
  "id": "thm_sum_of_three_consecutive_integers",
  "level": "2",
  "url": "sec_baby_number_theory.html#thm_sum_of_three_consecutive_integers",
  "type": "Theorem",
  "number": "2.7",
  "title": "",
  "body": "  The sum of any three consecutive integers is always divisible by three.   "
},
{
  "id": "prob_divisibility_examples",
  "level": "2",
  "url": "sec_baby_number_theory.html#prob_divisibility_examples",
  "type": "Problem",
  "number": "2.8",
  "title": "",
  "body": "  Let . Determine whether each of the following statements is true or false. If a statement is true, prove it. If a statement is false, provide a counterexample.   If , then .    If 6 divides , then 2 divides and 3 divides .    If divides , then divides and divides .      "
},
{
  "id": "sec_baby_number_theory-23",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "corollary "
},
{
  "id": "cor_a_divs_n_implies_a_divs_n_2",
  "level": "2",
  "url": "sec_baby_number_theory.html#cor_a_divs_n_implies_a_divs_n_2",
  "type": "Corollary",
  "number": "2.9",
  "title": "",
  "body": "  If such that divides , then divides .   "
},
{
  "id": "thm_divides_negative",
  "level": "2",
  "url": "sec_baby_number_theory.html#thm_divides_negative",
  "type": "Theorem",
  "number": "2.10",
  "title": "",
  "body": "  If such that divides , then divides .   "
},
{
  "id": "thm_divides_sum",
  "level": "2",
  "url": "sec_baby_number_theory.html#thm_divides_sum",
  "type": "Theorem",
  "number": "2.11",
  "title": "",
  "body": "  If such that divides and divides , then divides .   "
},
{
  "id": "sec_baby_number_theory-28",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conditional propositions hypothesis conclusion "
},
{
  "id": "sec_baby_number_theory-29",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "converse "
},
{
  "id": "sec_baby_number_theory-30",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-30",
  "type": "Problem",
  "number": "2.12",
  "title": "",
  "body": "  Determine whether the converse of each of Corollary , Theorem , and Theorem is true. That is, for , determine whether each of the following statements is true or false. If a statement is true, prove it. If a statement is false, provide a counterexample.   If divides , then divides . (Converse of Corollary )    If divides , then divides . (Converse of Theorem )    If divides , then divides and divides . (Converse of Theorem )      "
},
{
  "id": "sec_baby_number_theory-31",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-31",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transitivity of division of integers "
},
{
  "id": "thm_transitivity_of_divides",
  "level": "2",
  "url": "sec_baby_number_theory.html#thm_transitivity_of_divides",
  "type": "Theorem",
  "number": "2.13",
  "title": "",
  "body": "  If such that divides and divides , then divides .   "
},
{
  "id": "sec_baby_number_theory-34",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-34",
  "type": "Theorem",
  "number": "2.14",
  "title": "",
  "body": "  If such that divides and divides , then divides .   "
},
{
  "id": "sec_baby_number_theory-35",
  "level": "2",
  "url": "sec_baby_number_theory.html#sec_baby_number_theory-35",
  "type": "Theorem",
  "number": "2.15",
  "title": "",
  "body": "  If such that is odd, then 8 divides .   "
},
{
  "id": "sec_Intro_to_Logic",
  "level": "1",
  "url": "sec_Intro_to_Logic.html",
  "type": "Section",
  "number": "2.2",
  "title": "Introduction to Logic",
  "body": " Introduction to Logic  In the previous section, we jumped in head first and attempted to prove several theorems in the context of number theory without a formal understanding of what it was we were doing. Likely, many issues bubbled to the surface. What is a proof? What sorts of statements require proof? What should a proof entail? How should a proof be structured? Let's take a step back and do a more careful examination of what it is we are actually doing. In the next two sections, we will introduce the basics of propositional logic also referred to as propositional calculus or sometimes zeroth-order logic .    A proposition is a sentence that is either true or false but never both. The truth value (or logical value ) of a proposition refers to its attribute of being true or false.    For example, the sentence All dogs have four legs is a false proposition. However, the perfectly good sentence is not a proposition all by itself since we do not actually know what is.    Determine whether each of the following is a proposition. Explain your reasoning.  All cars are red.  Every person whose name begins with J has the name Joe.  . There exists a real number such that .  For all real numbers , .  is an irrational number.  is prime.  Is it raining?  It will rain tomorrow.  Led Zeppelin is the best band of all time.      The last two sentences in the previous problem may stir debate. It is not so important that we come to consensus as to whether either of these two sentences is actually a proposition or not. The good news is that in mathematics we do not encounter statements whose truth value is dependent on either the future or opinion.  Given two propositions, we can form more complicated propositions using logical connectives .    Let and be propositions.  The proposition not is true if is false; expressed symbolically as and called the negation of .  The proposition and is true if both and are true; expressed symbolically as and called the conjunction of and .  The proposition or is true if at least one of or is true; expressed symbolically as and called the disjunction of and .  The proposition If , then is true if both and are true, or is false; expressed symbolically as and called a conditional proposition (or implication ). In this case, is called the hypothesis and is called the conclusion . Note that may also be read as implies , only if , if , or whenever .  The proposition if and only if (alternatively, is necessary and sufficient for ) is true if both and have the same truth value; expressed symbolically as and called a biconditional proposition . If is true, we say that and are logically equivalent .    Each of the boxed propositions is called a compound proposition, where and are referred to as the components of the compound proposition.    It is worth pointing out that definitions in mathematics are typically written in the form if (or provided that or whenever ), where contains the term or phrase we are defining and provides the meaning of the concept we are defining. In the case of definitions, we should always interpret if as describing precisely the collection of objects (e.g., numbers, sets, functions, etc.) that should be identified with the term or phrase we are defining. That is, if an object does not meet the condition specified in , then it is never referred to by the term or phrase we are defining. Some authors will write definitions in the form if and only if . However, a definition is not at all the same kind of statement as a usual biconditional since one of the two sides is undefined until the definition is made. A definition is really a statement that the newly defined term or phrase is synonymous with a previously defined concept.  We can form complicated compound propositions with several components by utilizing logical connectives.    Let represent 6 is an even integer and represent 4 divides 6. Express each of the following compound propositions in an ordinary English sentence and then determine its truth value.                                           A truth table for a compound proposition is a table that illustrates all possible combinations of truth values for the components of the compound proposition together with the resulting truth value for each combination.      If and are propositions, then the truth table for the compound proposition is given by the following.          T  T  T    T  F  F    F  T  F    F  F  F     Notice that we have columns for each of and . The rows for these two columns correspond to all possible combinations of truth values for and . The third column yields the truth value of given the possible truth values for and .    Each component of a compound proposition has two possible truth values, namely true or false. Thus, if a compound proposition is built from component propositions, then the truth table will require rows.    Create a truth table for each of the following compound propositions. You should add additional columns to your tables as needed to assist you with intermediate steps. For example, you might need four columns for the third and fourth compound propositions below.            A coach promises her players, If we win tonight, then I will buy you pizza tomorrow. Determine the cases in which the players can rightly claim to have been lied to. If the team lost the game and the coach decided to buy them pizza anyway, was she lying?      Use Definition  to construct a truth table for . Compare your truth table with Problem . The combination you should pay particular attention to is when the hypothesis is false while the conclusion is true.    In accordance with Definition  , a conditional proposition is only false when the hypothesis is true and the conclusion is false. Perhaps you are bothered by the fact that is true when is false no matter what the truth value of is. The thing to keep in mind is that the truth value of relies on a very specific definition and may not always agree with the colloquial use of If , then statements that we encounter in everyday language. For example, if someone says, If you break the rules, then you will be punished , the speaker likely intends the statement to be interpreted as ``You will be punished if and only if you break the rules.\" In logic and mathematics, we aim to remove such ambiguity by explicitly saying exactly what we mean. For our purposes, we should view a conditional proposition as a contract or obligation. If the hypothesis is false and the conclusion is true, the contract is not violated. On the other hand, if the hypothesis is true and the conclusion is false, then the contract is broken.  We can often prove facts concerning logical statements using truth tables. Recall that two propositions and (both of which might be complicated compound propositions) are logically equivalent if is true (see Definition  ). This happens when and have the same truth value. We can verify whether and have the same truth value by constructing a truth table that includes columns for each of the components of and , listing all possible combinations of their truth values, together with columns for and that lists their resulting truth values. If the truth values in the columns for and agree, then and are logically equivalent, and otherwise they are not logically equivalent. When constructing truth tables to verify whether and are logically equivalent, you should add any necessary intermediate columns to aid in your calculations . Use truth tables when attempting to justify the next few problems.    If is a proposition, then is logically equivalent to .    The next theorem, referred to as De Morgan's Law , provides a method for negating a compound proposition involving a conjunction.   De Morgan's Law   If and are propositions, then is logically equivalent to .     De Morgan's Law   Let and be propositions. Conjecture a statement similar to Theorem for the proposition and then prove it. This is also called De Morgan's Law.    We will make use of both versions De Morgan's Law on on a regular basis. Sometimes conjunctions and disjunctions are buried in a mathematical statement, which makes negating statements tricky business. Keep this in mind when approaching the next problem.    Let be your favorite real number. Negate each of the following statements. Note that the statement in Part (b) involves a conjunction.    or .     .         If and are propositions, then is logically equivalent to .      If , , and are propositions, then is logically equivalent to .    We already introduced the following notion in the discussion following Theorem     If and are propositions, then the converse of is .      Provide an example of a true conditional proposition whose converse is false.      If and are propositions, then the inverse of is .      Provide an example of a true conditional proposition whose inverse is false.    Based on Problems and , we can conclude that the converse and inverse of a conditional proposition do not necessarily have the same truth value as the original statement.    If possible, provide an example of a conditional proposition whose converse is true but whose inverse is false. If this is not possible, explain why.    What if we swap the roles of the hypothesis and conclusion of a conditional proposition and negate each?    If and are propositions, then the contrapositive of is .      Let and represent the statements from Problem . Express each of the following in an ordinary English sentence.   The converse of .    The contrapositive of .         Find the converse and the contrapositive of the following statement: ``If Dana lives in Flagstaff, then Dana lives in Arizona.\"    Use a truth table to prove the following theorem.    If and are propositions, then is logically equivalent to its contrapositive.    So far we have discussed how to negate propositions of the form , , and for propositions and . However, we have yet to discuss how to negate propositions of the form . Prove the following result with a truth table.    If and are propositions, then the implication is logically equivalent to the disjunction .    The next result follows quickly from Theorem together with De Morgan's Law. You can also verify this result using a truth table.    If and are propositions, then is logically equivalent to .      Let and be the propositions is an irrational number and Every rectangle is a trapezoid, respectively.   Express as an English sentence involving the disjunction or.     Express as an English sentence involving the conjunction and.          It turns out that the proposition If , then is false. Write its negation as a conjunction.    Recall that a proposition is exclusively either true or false it can never be both.    A compound proposition that is always false is called a contradiction. A compound proposition that is always true is called a tautology.      If is a proposition, then the proposition is a contradiction.      Provide an example of a tautology using arbitrary propositions and any of the logical connectives , , and . Prove that your example is in fact a tautology.      I didn't want to just know names of things. I remember really wanting to know how it all worked.  Elizabeth Blackburn, biologist   "
},
{
  "id": "sec_Intro_to_Logic-2",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "propositional logic propositional calculus zeroth-order logic "
},
{
  "id": "def_proposition",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#def_proposition",
  "type": "Definition",
  "number": "2.16",
  "title": "",
  "body": "  A proposition is a sentence that is either true or false but never both. The truth value (or logical value ) of a proposition refers to its attribute of being true or false.   "
},
{
  "id": "sec_Intro_to_Logic-5",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-5",
  "type": "Problem",
  "number": "2.17",
  "title": "",
  "body": "  Determine whether each of the following is a proposition. Explain your reasoning.  All cars are red.  Every person whose name begins with J has the name Joe.  . There exists a real number such that .  For all real numbers , .  is an irrational number.  is prime.  Is it raining?  It will rain tomorrow.  Led Zeppelin is the best band of all time.     "
},
{
  "id": "sec_Intro_to_Logic-7",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logical connectives "
},
{
  "id": "def_logical_connectives",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#def_logical_connectives",
  "type": "Definition",
  "number": "2.18",
  "title": "",
  "body": "  Let and be propositions.  The proposition not is true if is false; expressed symbolically as and called the negation of .  The proposition and is true if both and are true; expressed symbolically as and called the conjunction of and .  The proposition or is true if at least one of or is true; expressed symbolically as and called the disjunction of and .  The proposition If , then is true if both and are true, or is false; expressed symbolically as and called a conditional proposition (or implication ). In this case, is called the hypothesis and is called the conclusion . Note that may also be read as implies , only if , if , or whenever .  The proposition if and only if (alternatively, is necessary and sufficient for ) is true if both and have the same truth value; expressed symbolically as and called a biconditional proposition . If is true, we say that and are logically equivalent .    Each of the boxed propositions is called a compound proposition, where and are referred to as the components of the compound proposition.   "
},
{
  "id": "prob_translations",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#prob_translations",
  "type": "Problem",
  "number": "2.19",
  "title": "",
  "body": "  Let represent 6 is an even integer and represent 4 divides 6. Express each of the following compound propositions in an ordinary English sentence and then determine its truth value.                                        "
},
{
  "id": "sec_Intro_to_Logic-12",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-12",
  "type": "Definition",
  "number": "2.20",
  "title": "",
  "body": "  A truth table for a compound proposition is a table that illustrates all possible combinations of truth values for the components of the compound proposition together with the resulting truth value for each combination.   "
},
{
  "id": "sec_Intro_to_Logic-13",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-13",
  "type": "Example",
  "number": "2.21",
  "title": "",
  "body": "  If and are propositions, then the truth table for the compound proposition is given by the following.          T  T  T    T  F  F    F  T  F    F  F  F     Notice that we have columns for each of and . The rows for these two columns correspond to all possible combinations of truth values for and . The third column yields the truth value of given the possible truth values for and .   "
},
{
  "id": "prob_truth_tables",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#prob_truth_tables",
  "type": "Problem",
  "number": "2.22",
  "title": "",
  "body": "  Create a truth table for each of the following compound propositions. You should add additional columns to your tables as needed to assist you with intermediate steps. For example, you might need four columns for the third and fourth compound propositions below.         "
},
{
  "id": "prob_coach_lie",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#prob_coach_lie",
  "type": "Problem",
  "number": "2.23",
  "title": "",
  "body": "  A coach promises her players, If we win tonight, then I will buy you pizza tomorrow. Determine the cases in which the players can rightly claim to have been lied to. If the team lost the game and the coach decided to buy them pizza anyway, was she lying?   "
},
{
  "id": "sec_Intro_to_Logic-17",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-17",
  "type": "Problem",
  "number": "2.24",
  "title": "",
  "body": "  Use Definition  to construct a truth table for . Compare your truth table with Problem . The combination you should pay particular attention to is when the hypothesis is false while the conclusion is true.   "
},
{
  "id": "sec_Intro_to_Logic-20",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-20",
  "type": "Theorem",
  "number": "2.25",
  "title": "",
  "body": "  If is a proposition, then is logically equivalent to .   "
},
{
  "id": "sec_Intro_to_Logic-21",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "De Morgan's Law "
},
{
  "id": "thm_De_Morgan",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#thm_De_Morgan",
  "type": "Theorem",
  "number": "2.26",
  "title": "De Morgan’s Law.",
  "body": " De Morgan's Law   If and are propositions, then is logically equivalent to .   "
},
{
  "id": "prob_De_Morgan",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#prob_De_Morgan",
  "type": "Problem",
  "number": "2.27",
  "title": "De Morgan’s Law.",
  "body": " De Morgan's Law   Let and be propositions. Conjecture a statement similar to Theorem for the proposition and then prove it. This is also called De Morgan's Law.   "
},
{
  "id": "prob_negation",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#prob_negation",
  "type": "Problem",
  "number": "2.28",
  "title": "",
  "body": "  Let be your favorite real number. Negate each of the following statements. Note that the statement in Part (b) involves a conjunction.    or .     .      "
},
{
  "id": "thm_logical_form_for_iff",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#thm_logical_form_for_iff",
  "type": "Theorem",
  "number": "2.29",
  "title": "",
  "body": "  If and are propositions, then is logically equivalent to .   "
},
{
  "id": "thm_logical_form_for_cases",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#thm_logical_form_for_cases",
  "type": "Theorem",
  "number": "2.30",
  "title": "",
  "body": "  If , , and are propositions, then is logically equivalent to .   "
},
{
  "id": "def_converse",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#def_converse",
  "type": "Definition",
  "number": "2.31",
  "title": "",
  "body": "  If and are propositions, then the converse of is .   "
},
{
  "id": "prob_converse",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#prob_converse",
  "type": "Problem",
  "number": "2.32",
  "title": "",
  "body": "  Provide an example of a true conditional proposition whose converse is false.   "
},
{
  "id": "def_inverse",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#def_inverse",
  "type": "Definition",
  "number": "2.33",
  "title": "",
  "body": "  If and are propositions, then the inverse of is .   "
},
{
  "id": "prob_inverse",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#prob_inverse",
  "type": "Problem",
  "number": "2.34",
  "title": "",
  "body": "  Provide an example of a true conditional proposition whose inverse is false.   "
},
{
  "id": "prob_converse_and_inverse",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#prob_converse_and_inverse",
  "type": "Problem",
  "number": "2.35",
  "title": "",
  "body": "  If possible, provide an example of a conditional proposition whose converse is true but whose inverse is false. If this is not possible, explain why.   "
},
{
  "id": "sec_Intro_to_Logic-36",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-36",
  "type": "Definition",
  "number": "2.36",
  "title": "",
  "body": "  If and are propositions, then the contrapositive of is .   "
},
{
  "id": "sec_Intro_to_Logic-37",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-37",
  "type": "Problem",
  "number": "2.37",
  "title": "",
  "body": "  Let and represent the statements from Problem . Express each of the following in an ordinary English sentence.   The converse of .    The contrapositive of .      "
},
{
  "id": "sec_Intro_to_Logic-38",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-38",
  "type": "Problem",
  "number": "2.38",
  "title": "",
  "body": "  Find the converse and the contrapositive of the following statement: ``If Dana lives in Flagstaff, then Dana lives in Arizona.\"   "
},
{
  "id": "thm_contrapos",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#thm_contrapos",
  "type": "Theorem",
  "number": "2.39",
  "title": "",
  "body": "  If and are propositions, then is logically equivalent to its contrapositive.   "
},
{
  "id": "thm_ImplicationAsDisjuction",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#thm_ImplicationAsDisjuction",
  "type": "Theorem",
  "number": "2.40",
  "title": "",
  "body": "  If and are propositions, then the implication is logically equivalent to the disjunction .   "
},
{
  "id": "cor_NegateImplication",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#cor_NegateImplication",
  "type": "Corollary",
  "number": "2.41",
  "title": "",
  "body": "  If and are propositions, then is logically equivalent to .   "
},
{
  "id": "prob_Darth_Vader",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#prob_Darth_Vader",
  "type": "Problem",
  "number": "2.42",
  "title": "",
  "body": "  Let and be the propositions is an irrational number and Every rectangle is a trapezoid, respectively.   Express as an English sentence involving the disjunction or.     Express as an English sentence involving the conjunction and.       "
},
{
  "id": "sec_Intro_to_Logic-46",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-46",
  "type": "Problem",
  "number": "2.43",
  "title": "",
  "body": "  It turns out that the proposition If , then is false. Write its negation as a conjunction.   "
},
{
  "id": "sec_Intro_to_Logic-48",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-48",
  "type": "Definition",
  "number": "2.44",
  "title": "",
  "body": "  A compound proposition that is always false is called a contradiction. A compound proposition that is always true is called a tautology.   "
},
{
  "id": "sec_Intro_to_Logic-49",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-49",
  "type": "Theorem",
  "number": "2.45",
  "title": "",
  "body": "  If is a proposition, then the proposition is a contradiction.   "
},
{
  "id": "sec_Intro_to_Logic-50",
  "level": "2",
  "url": "sec_Intro_to_Logic.html#sec_Intro_to_Logic-50",
  "type": "Problem",
  "number": "2.46",
  "title": "",
  "body": "  Provide an example of a tautology using arbitrary propositions and any of the logical connectives , , and . Prove that your example is in fact a tautology.   "
},
{
  "id": "sec_Techniques_for_Proving_Conditional_Propositions",
  "level": "1",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html",
  "type": "Section",
  "number": "2.3",
  "title": "Techniques for Proving Conditional Propositions",
  "body": " Techniques for Proving Conditional Propositions  Each of the theorems that we proved in Section are examples of conditional propositions. However, some of the statements were disguised as such. For example, Theorem states, The sum of two consecutive integers is odd. We can reword this theorem as, If , then is odd.    Reword Theorem so that it explicitly reads as a conditional proposition.    Each of the proofs that you produced in Section had the same format, which we refer to as a direct proof .   Proof of by direct proof   If you want to prove the implication via a direct proof, then the structure of the proof is as follows.   [State any upfront assumptions.] Assume .  [Use definitions and known results to derive ]  Therefore, .     Take a few minutes to review the proofs that you wrote in Section and see if you can witness the structure of Skeleton Proof in your proofs.  The upshot of Theorem is that if you want to prove a conditional proposition, you can prove its contrapositive instead. This approach is called a proof by contraposition .   Proof of by contraposition   If you want to prove the implication by proving its contrapositive instead, then the structure of the proof is as follows.   [State any upfront assumptions.] We will utilize a proof by contraposition. Assume .  [Use definitions and known results to derive ]  Therefore, . We have proved the contrapositive, and hence if , then .     We have introduced the logical symbols , , , , and since it provides a convenient way of discussing the formality of logic. However, when writing mathematical proofs, you should avoid using these symbols.    Consider the following statement: If such that is odd, then is odd. The items below can be assembled to form a proof of this statement, but they are currently out of order. Put them in the proper order.   Assume that is an even integer.    We will utilize a proof by contraposition.    Thus, is twice an integer.    Since , we have that .    Since is an integer, is also an integer.    By the definition of even, there is an integer such that .    We have proved the contrapositive, and hence the desired statement is true.    Assume .    By the definition of even integer, is an even integer.    Notice that .       Prove the next two theorems by proving the contrapositive of the given statement.    If such that is even, then is even.      If such that is even, then is even or is even.    Suppose that we want to prove some proposition (which might be something like or even more complicated). One approach, called proof by contradiction , is to assume and then logically deduce a contradiction of the form , where is some proposition. Since this is absurd, the assumption must have been false, so is true. The tricky part about a proof by contradiction is that it is not usually obvious what the statement should be.   Proof of > by contradiction   Here is what the general structure for a proof by contradiction looks like if we are trying to prove the proposition .   [State any upfront assumptions.] For sake of a contradiction, assume .  [Use definitions and known results to derive some and its negation .]} This is a contradiction. Therefore, .     Proof by contradiction can be useful for proving statements of the form , where is easier to get your hands on, because is logically equivalent to (see Corollary ).   Proof of by contradiction   If you want to prove the implication via a proof by contradiction, then the structure of the proof is as follows.   [State any upfront assumptions.] For sake of a contradiction, assume and .  [Use definitions and known results to derive some and its negation .]} This is a contradiction. Therefore, if , then .       Assume that . Consider the following proposition: If is odd, then 2 does not divide .  Prove the contrapositive of this statement.  Prove the statement using a proof by contradiction.      Prove the following theorem via a proof by contradiction. Afterward, consider the difficulties one might encounter when trying to prove the result more directly. The given statement is not true if we replace with . Do you see why?    Assume that . If divides , then .    Oftentimes a conditional proposition can be proved via a direct proof and by using a proof by contradiction. Most mathematicians view a direct proof to be more elegant than a proof by contradiction. When approaching the proof of a conditional proposition, you should strive for a direct proof. In general, if you are attempting to prove using a proof by contradiction and you end up with and (which yields a contradiction), then this is evidence that a proof by contradiction was unnecessary. On the other hand, if you end up with and , where is not the same as , then a proof by contradiction is a reasonable approach.  In light of Theorem , if we want to prove a biconditional of the form , we need to prove both and . You should always make it clear to the reader when you are proving each implication. One approach is to label each subproof with and (including the parentheses), respectively. Occasionally, you will discover that the proof of one implication is exactly the reverse of the proof of the other implication. If this happens to be the case, you may skip writing two subproofs and simply write a single proof that chains together each step using biconditionals. Such proofs will almost always be shorter, but can be challenging to write in an eloquent way. It is always a safe bet to write a separate subproof for each implication.  When proving each implication of a biconditional, you may choose to utilize a direct proof, a proof by contraposition, or a proof by contradiction. For example, you could prove the first implication using a proof by contradiction and a direct proof for the second implication.  The following theorem provides an opportunity to gain some experience with writing proofs of biconditional statements.    Let . Then is even if and only if 4 divides .      Making learning easy does not necessarily ease learning.  Manu Kapur, learning scientist   "
},
{
  "id": "prob_reword_as_conditional",
  "level": "2",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html#prob_reword_as_conditional",
  "type": "Problem",
  "number": "2.47",
  "title": "",
  "body": "  Reword Theorem so that it explicitly reads as a conditional proposition.   "
},
{
  "id": "sec_Techniques_for_Proving_Conditional_Propositions-4",
  "level": "2",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html#sec_Techniques_for_Proving_Conditional_Propositions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct proof "
},
{
  "id": "skeleton_direct_proof",
  "level": "2",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html#skeleton_direct_proof",
  "type": "Skeleton Proof",
  "number": "2.48",
  "title": "Proof of <span class=\"process-math\">\\(A\\implies B\\)<\/span> by direct proof.",
  "body": " Proof of by direct proof   If you want to prove the implication via a direct proof, then the structure of the proof is as follows.   [State any upfront assumptions.] Assume .  [Use definitions and known results to derive ]  Therefore, .    "
},
{
  "id": "sec_Techniques_for_Proving_Conditional_Propositions-7",
  "level": "2",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html#sec_Techniques_for_Proving_Conditional_Propositions-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proof by contraposition "
},
{
  "id": "skeleton_pf_by_contraposition",
  "level": "2",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html#skeleton_pf_by_contraposition",
  "type": "Skeleton Proof",
  "number": "2.49",
  "title": "Proof of <span class=\"process-math\">\\(A\\implies B\\)<\/span> by contraposition.",
  "body": " Proof of by contraposition   If you want to prove the implication by proving its contrapositive instead, then the structure of the proof is as follows.   [State any upfront assumptions.] We will utilize a proof by contraposition. Assume .  [Use definitions and known results to derive ]  Therefore, . We have proved the contrapositive, and hence if , then .    "
},
{
  "id": "sec_Techniques_for_Proving_Conditional_Propositions-10",
  "level": "2",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html#sec_Techniques_for_Proving_Conditional_Propositions-10",
  "type": "Problem",
  "number": "2.50",
  "title": "",
  "body": "  Consider the following statement: If such that is odd, then is odd. The items below can be assembled to form a proof of this statement, but they are currently out of order. Put them in the proper order.   Assume that is an even integer.    We will utilize a proof by contraposition.    Thus, is twice an integer.    Since , we have that .    Since is an integer, is also an integer.    By the definition of even, there is an integer such that .    We have proved the contrapositive, and hence the desired statement is true.    Assume .    By the definition of even integer, is an even integer.    Notice that .      "
},
{
  "id": "thm_n_2_even_implies_n_even",
  "level": "2",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html#thm_n_2_even_implies_n_even",
  "type": "Theorem",
  "number": "2.51",
  "title": "",
  "body": "  If such that is even, then is even.   "
},
{
  "id": "thm_nm_even_implies_n_or_m_even",
  "level": "2",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html#thm_nm_even_implies_n_or_m_even",
  "type": "Theorem",
  "number": "2.52",
  "title": "",
  "body": "  If such that is even, then is even or is even.   "
},
{
  "id": "skeleton_pf_by_contradiction",
  "level": "2",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html#skeleton_pf_by_contradiction",
  "type": "Skeleton Proof",
  "number": "2.53",
  "title": "Proof of <span class=\"process-math\">\\(O\\)<\/span>&gt; by contradiction.",
  "body": " Proof of > by contradiction   Here is what the general structure for a proof by contradiction looks like if we are trying to prove the proposition .   [State any upfront assumptions.] For sake of a contradiction, assume .  [Use definitions and known results to derive some and its negation .]} This is a contradiction. Therefore, .    "
},
{
  "id": "skeleton_pf_by_contradiction_for_implication",
  "level": "2",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html#skeleton_pf_by_contradiction_for_implication",
  "type": "Skeleton Proof",
  "number": "2.54",
  "title": "Proof of <span class=\"process-math\">\\(A\\implies B\\)<\/span> by contradiction.",
  "body": " Proof of by contradiction   If you want to prove the implication via a proof by contradiction, then the structure of the proof is as follows.   [State any upfront assumptions.] For sake of a contradiction, assume and .  [Use definitions and known results to derive some and its negation .]} This is a contradiction. Therefore, if , then .    "
},
{
  "id": "sec_Techniques_for_Proving_Conditional_Propositions-18",
  "level": "2",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html#sec_Techniques_for_Proving_Conditional_Propositions-18",
  "type": "Problem",
  "number": "2.55",
  "title": "",
  "body": "  Assume that . Consider the following proposition: If is odd, then 2 does not divide .  Prove the contrapositive of this statement.  Prove the statement using a proof by contradiction.     "
},
{
  "id": "thm_natural_divisor_less_than_or_equal_to_natural_dividend",
  "level": "2",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html#thm_natural_divisor_less_than_or_equal_to_natural_dividend",
  "type": "Theorem",
  "number": "2.56",
  "title": "",
  "body": "  Assume that . If divides , then .   "
},
{
  "id": "sec_Techniques_for_Proving_Conditional_Propositions-25",
  "level": "2",
  "url": "sec_Techniques_for_Proving_Conditional_Propositions.html#sec_Techniques_for_Proving_Conditional_Propositions-25",
  "type": "Theorem",
  "number": "2.57",
  "title": "",
  "body": "  Let . Then is even if and only if 4 divides .   "
},
{
  "id": "sec_Introduction_to_Quantification",
  "level": "1",
  "url": "sec_Introduction_to_Quantification.html",
  "type": "Section",
  "number": "2.4",
  "title": "Introduction to Quantification",
  "body": " Introduction to Quantification  In this section and the next, we introduce first-order logic also referred to as predicate logic , quantificational logic , and first-order predicate calculus . The sentence is not itself a proposition because its truth value depends on . In this case, we say that is a free variable . A sentence with at least one free variable is called a predicate (or open sentence ). To turn a predicate into a proposition, we must either substitute values for each free variable or quantify the free variables. We will use notation such as and to represent predicates with free variables and , respectively. The letters and that we used in the previous sentence are not special; we can use any letter or symbol we want. For example, each of the following represents a predicate with the indicated free variables.                      Note that we used quotation marks above to remove some ambiguity. What would mean? It looks like equals 0, but actually we want to represent the whole sentence . Also, notice that the order in which we utilize the free variables might matter. For example, compare with .  One way we can make propositions out of predicates is by assigning specific values to the free variables. That is, if is a predicate and is specific value for , then is now a proposition that is either true or false.    Consider and as defined above. Determine the truth values of , , , and . Is a proposition or a predicate?    Besides substituting specific values for free variables in a predicate, we can also make a claim about which values of the free variables apply to the predicate.    Both of the following sentences are propositions. Decide whether each is true or false. What would it take to justify your answers?   For all , .    There exists such that .          For all is the universal quantifier and there exists such that is the existential quantifier .    In mathematics, the phrases for all , for any , for every , and for each can be used interchangeably (even though they might convey slightly different meanings in colloquial language). We can replace there exists such that with phrases like for some (possibly with some tweaking of the wording of the sentence). It is important to note that the existential quantifier is making a claim about at least one , not  exactly one.   Variables that are quantified with a universal or existential quantifier are said to be bound . To be a proposition, all variables of a predicate must be bound.  We must take care to specify the collection of acceptable values for the free variables. Consider the sentence For all , . Is this sentence true or false? The answer depends on what set the universal quantifier applies to. Certainly, the sentence is false if we apply it for all . However, the sentence is true for all . Context may resolve ambiguities, but otherwise, we must write clearly: For all , or For all , . The collection of intended values for a variable is called the universe of discourse .    Suppose our universe of discourse is the set of integers.   Provide an example of a predicate such that For all , is true.    Provide an example of a predicate such that For all , is false while There exists such that is true.       If a predicate has more than one free variable, then we can build propositions by quantifying each variable. However, the order of the quantifiers is extremely important!     Let be a predicate with free variables and in a universe of discourse . One way to quantify the variables is For all , there exists such that . How else can the variables be quantified?    The next problem illustrates that at least some of the possibilities you discovered in the previous problem are not equivalent to each other.    Suppose the universe of discourse is the set of people and consider the predicate  . We can interpret the formal statement For all , there exists such that as meaning Everybody is married to somebody. Interpret the meaning of each of the following statements in a similar way.   For all , there exists such that .    There exists such that for all , .    For all , for all , .    There exists such that there exists such that .         Suppose the universe of discourse is the set of real numbers and consider the predicate  . Interpret the meaning of each of the following statements.   There exists such that there exists such that .    There exists such that there exists such that .    For all , for all , .       There are a couple of key points to keep in mind about quantification. To be a proposition, all variables must be quantified. This can happen in at least two ways:   The variables are explicitly bound by quantifiers in the same sentence.    The variables are implicitly bound by preceding sentences or by context. Statements of the form Let and Assume bind the variable and remove ambiguity.     Also, the order of the quantification is important. Reversing the order of the quantifiers can substantially change the meaning of a proposition.  Quantification and logical connectives ( and,  or,  If , then , and not ) enable complex mathematical statements. For example, if is a function while and are real numbers, then the formal definition of , which you may have encountered in calculus, is:  For all , there exists such that for all , if , then .  In order to study the abstract nature of complicated mathematical statements, it is useful to adopt some notation.    The universal quantifier for all is denoted , and the existential quantifier there exists such that is denoted .    Using our abbreviations for the logical connectives and quantifiers, we can symbolically represent mathematical propositions. For example, the (true) proposition There exists such that becomes , while the (false) proposition For all , there exists such that becomes .     Convert the following propositions into statements using only logical and mathematical symbols. Assume that the universe of discourse is the set of real numbers.   There exists such that is greater than zero.    There exists a natural number such that .    For every , is greater than or equal to zero.         Express the formal definition of a limit (given above Definition ) in logical and mathematical symbols.    If you look closely, many of the theorems that we have encountered up until this point were of the form , where and are predicates. For example, consider Theorem , which states, If is an even integer, then is an even integer. In this case, is an even integer and is an even integer are both predicates. So, it would be reasonable to assume that the entire theorem statement is a predicate. However, it is standard practice to interpret the sentence to mean (where the universe of discourse for needs to be made clear). We can also retool such statements to hide the implication. In particular, has the same meaning as , where is the collection of items from the universe of discourse that makes true. For example, we could rewrite the statement of Theorem as For every even integer , is even.     Reword Theorem so that it explicitly reads as a universally quantified statement. Compare with Problem .      Find at least two other instances of theorem statements that appeared earlier in the book and are written in the form . Rewrite each in an equivalent way that makes the universal quantifier explicit while possibly suppressing the implication.      Consider the proposition If , then there exists such that . Assume the universe of discourse is the set .   Express the statement in logical and mathematical symbols. Is the statement true?    Reverse the order of the quantifiers to get a new statement. Does the meaning change? If so, how? Is the new statement true?       The symbolic expression can be abbreviated as as long as and are elements of the same universe.    Express the proposition For all with , there exists such that using logical and mathematical symbols.      Rewrite each of the following propositions in words and determine whether the proposition is true or false.                                      Consider the proposition .   Provide an example of a universe of discourse where this proposition is true.    Provide an example of a universe of discourse where this proposition is false.       To whet your appetite for the next section, consider how you might prove a true proposition of the form For all . If a proposition is false, then its negation is true. How would you go about negating a statement involving quantifiers?    Like what you do, and then you will do your best.  Katherine Johnson, mathematician   "
},
{
  "id": "sec_Introduction_to_Quantification-2",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first-order logic predicate logic quantificational logic first-order predicate calculus free variable predicate open sentence "
},
{
  "id": "sec_Introduction_to_Quantification-5",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-5",
  "type": "Problem",
  "number": "2.58",
  "title": "",
  "body": "  Consider and as defined above. Determine the truth values of , , , and . Is a proposition or a predicate?   "
},
{
  "id": "ex_quantified_predicates",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#ex_quantified_predicates",
  "type": "Problem",
  "number": "2.59",
  "title": "",
  "body": "  Both of the following sentences are propositions. Decide whether each is true or false. What would it take to justify your answers?   For all , .    There exists such that .      "
},
{
  "id": "sec_Introduction_to_Quantification-8",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-8",
  "type": "Definition",
  "number": "2.60",
  "title": "",
  "body": "   For all is the universal quantifier and there exists such that is the existential quantifier .   "
},
{
  "id": "sec_Introduction_to_Quantification-10",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bound "
},
{
  "id": "sec_Introduction_to_Quantification-11",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "universe of discourse "
},
{
  "id": "sec_Introduction_to_Quantification-12",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-12",
  "type": "Problem",
  "number": "2.61",
  "title": "",
  "body": "  Suppose our universe of discourse is the set of integers.   Provide an example of a predicate such that For all , is true.    Provide an example of a predicate such that For all , is false while There exists such that is true.      "
},
{
  "id": "prob_ways_to_quantify",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#prob_ways_to_quantify",
  "type": "Problem",
  "number": "2.62",
  "title": "",
  "body": "  Let be a predicate with free variables and in a universe of discourse . One way to quantify the variables is For all , there exists such that . How else can the variables be quantified?   "
},
{
  "id": "sec_Introduction_to_Quantification-16",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-16",
  "type": "Problem",
  "number": "2.63",
  "title": "",
  "body": "  Suppose the universe of discourse is the set of people and consider the predicate  . We can interpret the formal statement For all , there exists such that as meaning Everybody is married to somebody. Interpret the meaning of each of the following statements in a similar way.   For all , there exists such that .    There exists such that for all , .    For all , for all , .    There exists such that there exists such that .      "
},
{
  "id": "sec_Introduction_to_Quantification-17",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-17",
  "type": "Problem",
  "number": "2.64",
  "title": "",
  "body": "  Suppose the universe of discourse is the set of real numbers and consider the predicate  . Interpret the meaning of each of the following statements.   There exists such that there exists such that .    There exists such that there exists such that .    For all , for all , .      "
},
{
  "id": "def_quantifiers",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#def_quantifiers",
  "type": "Definition",
  "number": "2.65",
  "title": "",
  "body": "  The universal quantifier for all is denoted , and the existential quantifier there exists such that is denoted .   "
},
{
  "id": "sec_Introduction_to_Quantification-25",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-25",
  "type": "Problem",
  "number": "2.66",
  "title": "",
  "body": "  Convert the following propositions into statements using only logical and mathematical symbols. Assume that the universe of discourse is the set of real numbers.   There exists such that is greater than zero.    There exists a natural number such that .    For every , is greater than or equal to zero.      "
},
{
  "id": "sec_Introduction_to_Quantification-26",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-26",
  "type": "Problem",
  "number": "2.67",
  "title": "",
  "body": "  Express the formal definition of a limit (given above Definition ) in logical and mathematical symbols.   "
},
{
  "id": "sec_Introduction_to_Quantification-28",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-28",
  "type": "Problem",
  "number": "2.68",
  "title": "",
  "body": "  Reword Theorem so that it explicitly reads as a universally quantified statement. Compare with Problem .   "
},
{
  "id": "sec_Introduction_to_Quantification-29",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-29",
  "type": "Problem",
  "number": "2.69",
  "title": "",
  "body": "  Find at least two other instances of theorem statements that appeared earlier in the book and are written in the form . Rewrite each in an equivalent way that makes the universal quantifier explicit while possibly suppressing the implication.   "
},
{
  "id": "sec_Introduction_to_Quantification-30",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-30",
  "type": "Problem",
  "number": "2.70",
  "title": "",
  "body": "  Consider the proposition If , then there exists such that . Assume the universe of discourse is the set .   Express the statement in logical and mathematical symbols. Is the statement true?    Reverse the order of the quantifiers to get a new statement. Does the meaning change? If so, how? Is the new statement true?      "
},
{
  "id": "sec_Introduction_to_Quantification-32",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-32",
  "type": "Problem",
  "number": "2.71",
  "title": "",
  "body": "  Express the proposition For all with , there exists such that using logical and mathematical symbols.   "
},
{
  "id": "sec_Introduction_to_Quantification-33",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-33",
  "type": "Problem",
  "number": "2.72",
  "title": "",
  "body": "  Rewrite each of the following propositions in words and determine whether the proposition is true or false.                                   "
},
{
  "id": "sec_Introduction_to_Quantification-34",
  "level": "2",
  "url": "sec_Introduction_to_Quantification.html#sec_Introduction_to_Quantification-34",
  "type": "Problem",
  "number": "2.73",
  "title": "",
  "body": "  Consider the proposition .   Provide an example of a universe of discourse where this proposition is true.    Provide an example of a universe of discourse where this proposition is false.      "
},
{
  "id": "sec_More_About_Quantification",
  "level": "1",
  "url": "sec_More_About_Quantification.html",
  "type": "Section",
  "number": "2.5",
  "title": "More About Quantification",
  "body": " More About Quantification  When writing mathematical proofs, we do not explicitly use the symbolic representation of a given statement in terms of quantifiers and logical connectives. Nonetheless, having this notation at our disposal allows us to compartmentalize the abstract nature of mathematical propositions and provides us with a way to talk about the general structure involved in the construction of a proof.    Two quantified propositions are logically equivalent if they have the same truth value in every universe of discourse.      Consider the propositions and , where is some universe of discourse.   Do these propositions have the same truth value if the universe of discourse is the set of real numbers?    Provide an example of a universe of discourse such that the propositions yield different truth values.    What can you conclude about the logical equivalence of these propositions?       It is worth pointing out an important distinction. Consider the propositions All cars are red and All natural numbers are positive . Both of these are instances of the logical form  . It turns out that the first proposition is false and the second is true; however, it does not make sense to attach a truth value to the logical form. A logical form is a blueprint for particular propositions. If we are careful, it makes sense to talk about whether two logical forms are logically equivalent. For example, is logically equivalent to since a conditional proposition is logically equivalent to its contrapositive (see Theorem ). For fixed and , these two forms will always have the same truth value independent of the universe of discourse. If you change and , then the truth value may change, but the two forms will still agree.  The next theorem tells us how to negate logical forms involving quantifiers. Your proof should involve several mini arguments. For example, in Part (a), you will need to proof that if is true, then is also true.    Let be a predicate in some universe of discourse. Then    is logically equivalent to ;     is logically equivalent to .         Negate each of the following sentences. Disregard the truth value and the universe of discourse.             All cars are red.    Every Wookiee is named Chewbacca.    Some hippies are Republican.    Some birds are not angry.    Not every video game will rot your brain.    For all , is prime.    There exists such that .    There is no function such that if is continuous, then is not differentiable.       Using Theorem and our previous results involving quantification, we can negate complex mathematical propositions by working from left to right. For example, if we negate the false proposition , we obtain the proposition , which is logically equivalent to and must be true. For a more complicated example, consider the (false) proposition .  Then its negation is logically equivalent to , which happens to be logically equivalent to .  Can you identify the theorems that were used in the two examples above?    Negate each of the following propositions. Disregard the truth value and the universe of discourse.        For every , there exists such that .    For all , if is not negative, then there exists such that .    For every , there exists such that .    There exists such that for all , .    There exists such that for all , .         There exists a married person such that for all married people , is married to .         Consider the following proposition in some universe of discourse.    For all goofy wobblers , there exists a dinglehopper such that if is not a nugget, then is a doofus.      Find the negation of this proposition so that it includes the phrase is not a doofus.       Consider the following proposition in some universe of discourse.    If and are both snazzy, then is not nifty.      Find the contrapositive of this proposition so that it includes the phrase not snazzy .    At this point, we should be able to use our understanding of quantification to construct counterexamples to complicated false propositions and proofs of complicated true propositions. Here are some general proof structures for various logical forms.   Direct Proof of   Here is the general structure for a direct proof of the proposition . Assume is the universe of discourse.   [State any upfront assumptions.] Let .  [Use definitions and known results.] Therefore, is true. Since was arbitrary, for all , .     Combining Skeleton Proof with Skeleton Proof , we obtain the following skeleton proof.   Proof of   Below is the general structure for a direct proof of the proposition . Assume is the universe of discourse.   [State any upfront assumptions.] Let . Assume .  [Use definitions and known results to derive ]  Therefore, .      Proof of by Contradiction   Here is the general structure for a proof of the proposition via contradiction. Assume is the universe of discourse.   [State any upfront assumptions.] For sake of a contradiction, assume that there exists such that .  [Do something to derive a contradiction.]  This is a contradiction.Therefore, for all , is true.      Direct Proof of   Here is the general structure for a direct proof of the proposition . Assume is the universe of discourse.   [State any upfront assumptions.]    [Use definitions, axioms, and previous results to deduce that an exists for which is true; or if you have an that works, just verify that it does.]  Therefore, there exists such that .      Proof of by Contradiction   Below is the general structure for a proof of the proposition via contradiction. Assume is the universe of discourse.   [State any upfront assumptions.] For sake of a contradiction, assume that for all ,   [Do something to derive a contradiction.]  This is a contradiction. Therefore, there exists such that .     Note that if is a predicate for which is false, then a counterexample to this proposition amounts to showing , which can be proved by following the structure of Skeleton Proof .  It is important to point out that sometimes we will have to combine various proof techniques in a single proof. For example, if you wanted to prove a proposition of the form ) by contradiction, we would start by assuming that there exists in the universe of discourse such that and .    Determine whether each of the following statements is true or false. If the statement is true, prove it. If the statement is false, provide a counterexample.   For all , .    There exists such that .    There exists such that for all , .    For all , .    For all , there exists such that .    There exists integers and such that .    There do not exist integers and such that .    For all , if divides , then either divides or divides .    For all , if is even, then either or is even.         Explain why the following proof is not a valid argument.  Claim. For all , if and are even, then is even.  Proof. Suppose such that and are even. For sake of a contradiction, assume that is odd. Then there exists such that . This implies that . We see that the left side of the equation is even because it is the difference of even numbers. However, the right side is odd. Since an even number cannot equal an odd number, we have a contradiction. Therefore, is even.    Sometimes it is useful to split the universe of discourse into multiple collections to deal with separately. When doing this, it is important to make sure that your cases are exhaustive (i.e., every possible element of the universe of discourse has been accounted for). Ideally, your cases will also be disjoint (i.e., you have not considered the same element more than once). For example, if our universe of discourse is the set of integers, we can separately consider even versus odd integers. If our universe of discourse is the set of real numbers, we might want to consider rational versus irrational numbers, or possibly negative versus zero versus and positive. Attacking a proof in this way, is often referred to as a proof by cases (or proof by exhaustion ). A proof by cases may also be useful when dealing with hypotheses involving or . Note that the use of a proof by cases is justified by Theorem .  If you decide to approach a proof using cases, be sure to inform the reader that you are doing so and organize your proof in a sensible way. Note that doing an analysis of cases should be avoided if possible. For example, while it is valid to separately consider the cases of whether is an even integer versus odd integer in the proof of Theorem , it is completely unnecessary. To prove the next theorem, you might want to consider two cases.    For all , is even.    Prove the following theorem by proving the contrapositive using two cases.    For all , if is odd, then is odd and is odd.    When proving the previous theorem, you likely experienced some dèjá vu. You should have assumed is even or is even at some point in your proof. The first case is is even while the second case is is even. (Note that you do not need to handle the case when both and are even since the two individual cases already yield the desired result.) The proofs for both cases are identical except the roles of and are interchanged. In instances such as this, mathematicians have a shortcut. Instead of writing two essentially identical proofs for each case, you can simply handle one of the cases and indicate that the remaining case follows from a nearly identical proof. The quickest way to do this is to use the phrase, Without loss of generality, assume . For example, here is a proof of Theorem that utilizes this approach.   Proof of Theorem  We will prove the contrapositive. Let and assume is even or is even. Without loss of generality, assume is even. Then there exists such that . We see that .  Since both and are integers, is an integer. This shows that is even. We have proved the contrapositive, and hence for all , if is odd, then is odd and is odd.   Note that it would not be appropriate to utilize the without loss of generality approach to combine the two cases in the proof of Theorem since the proof of the second case is not as simple as swapping the roles of symbols in the proof of the first case.  There are times when a theorem will make a claim about the uniqueness of a particular mathematical object. For example, in Section , you will be asked to prove that both the additive and multiplicative identities (i.e, 0 and 1) are unique (see and ). As another example, the Fundamental Theorem of Arithmetic (see Theorem ) states that every natural number greater than 1 can be expressed uniquely (up to the order in which they appear) as the product of one or more primes. The typical approach to proving uniqueness is to suppose that there are potentially two objects with the desired property and then show that these objects are actually equal. Whether you approach this as a proof by contradiction is a matter of taste. It is common to use as a symbolic abbreviation for there exists a unique such that .   Direct Proof of   Here is the general structure for a direct proof of the proposition . Assume is the universe of discourse.   [State any upfront assumptions.]    [Use definitions, axioms, and previous results to deduce that an exists for which is true; or if you have an that works, just verify that it does.]  Therefore, there exists such that . Now, suppose such that and .  [Prove that .]  This implies that there exists a unique such that .     The next theorem provides an opportunity to practice proving uniqueness.    If such that and , then there exists a unique such that .      With two published novels and a file full of ideas for others, the only thing I know about writing is this: it only happens when you sit down and do it. Studying good writing is important, reading good writing is important, talking to other writers is important, but the only way you can produce good writing is to write.  Jamie Beth Cohen, novelist   "
},
{
  "id": "sec_More_About_Quantification-3",
  "level": "2",
  "url": "sec_More_About_Quantification.html#sec_More_About_Quantification-3",
  "type": "Definition",
  "number": "2.74",
  "title": "",
  "body": "  Two quantified propositions are logically equivalent if they have the same truth value in every universe of discourse.   "
},
{
  "id": "sec_More_About_Quantification-4",
  "level": "2",
  "url": "sec_More_About_Quantification.html#sec_More_About_Quantification-4",
  "type": "Problem",
  "number": "2.75",
  "title": "",
  "body": "  Consider the propositions and , where is some universe of discourse.   Do these propositions have the same truth value if the universe of discourse is the set of real numbers?    Provide an example of a universe of discourse such that the propositions yield different truth values.    What can you conclude about the logical equivalence of these propositions?      "
},
{
  "id": "sec_More_About_Quantification-5",
  "level": "2",
  "url": "sec_More_About_Quantification.html#sec_More_About_Quantification-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logical form "
},
{
  "id": "thm_negation_of_quantifiers",
  "level": "2",
  "url": "sec_More_About_Quantification.html#thm_negation_of_quantifiers",
  "type": "Theorem",
  "number": "2.76",
  "title": "",
  "body": "  Let be a predicate in some universe of discourse. Then    is logically equivalent to ;     is logically equivalent to .      "
},
{
  "id": "sec_More_About_Quantification-8",
  "level": "2",
  "url": "sec_More_About_Quantification.html#sec_More_About_Quantification-8",
  "type": "Problem",
  "number": "2.77",
  "title": "",
  "body": "  Negate each of the following sentences. Disregard the truth value and the universe of discourse.             All cars are red.    Every Wookiee is named Chewbacca.    Some hippies are Republican.    Some birds are not angry.    Not every video game will rot your brain.    For all , is prime.    There exists such that .    There is no function such that if is continuous, then is not differentiable.      "
},
{
  "id": "sec_More_About_Quantification-12",
  "level": "2",
  "url": "sec_More_About_Quantification.html#sec_More_About_Quantification-12",
  "type": "Problem",
  "number": "2.78",
  "title": "",
  "body": "  Negate each of the following propositions. Disregard the truth value and the universe of discourse.        For every , there exists such that .    For all , if is not negative, then there exists such that .    For every , there exists such that .    There exists such that for all , .    There exists such that for all , .         There exists a married person such that for all married people , is married to .      "
},
{
  "id": "sec_More_About_Quantification-13",
  "level": "2",
  "url": "sec_More_About_Quantification.html#sec_More_About_Quantification-13",
  "type": "Problem",
  "number": "2.79",
  "title": "",
  "body": "  Consider the following proposition in some universe of discourse.    For all goofy wobblers , there exists a dinglehopper such that if is not a nugget, then is a doofus.      Find the negation of this proposition so that it includes the phrase is not a doofus.    "
},
{
  "id": "sec_More_About_Quantification-14",
  "level": "2",
  "url": "sec_More_About_Quantification.html#sec_More_About_Quantification-14",
  "type": "Problem",
  "number": "2.80",
  "title": "",
  "body": "  Consider the following proposition in some universe of discourse.    If and are both snazzy, then is not nifty.      Find the contrapositive of this proposition so that it includes the phrase not snazzy .   "
},
{
  "id": "skeleton_for_all",
  "level": "2",
  "url": "sec_More_About_Quantification.html#skeleton_for_all",
  "type": "Skeleton Proof",
  "number": "2.81",
  "title": "Direct Proof of <span class=\"process-math\">\\((\\forall x)P(x)\\)<\/span>.",
  "body": " Direct Proof of   Here is the general structure for a direct proof of the proposition . Assume is the universe of discourse.   [State any upfront assumptions.] Let .  [Use definitions and known results.] Therefore, is true. Since was arbitrary, for all , .    "
},
{
  "id": "skeleton_for_all_direct_proof",
  "level": "2",
  "url": "sec_More_About_Quantification.html#skeleton_for_all_direct_proof",
  "type": "Skeleton Proof",
  "number": "2.82",
  "title": "Proof of <span class=\"process-math\">\\((\\forall x)(A(x)\\implies B(x))\\)<\/span>.",
  "body": " Proof of   Below is the general structure for a direct proof of the proposition . Assume is the universe of discourse.   [State any upfront assumptions.] Let . Assume .  [Use definitions and known results to derive ]  Therefore, .    "
},
{
  "id": "skeleton_for_all_contradiction",
  "level": "2",
  "url": "sec_More_About_Quantification.html#skeleton_for_all_contradiction",
  "type": "Skeleton Proof",
  "number": "2.83",
  "title": "Proof of <span class=\"process-math\">\\((\\forall x)P(x)\\)<\/span> by Contradiction.",
  "body": " Proof of by Contradiction   Here is the general structure for a proof of the proposition via contradiction. Assume is the universe of discourse.   [State any upfront assumptions.] For sake of a contradiction, assume that there exists such that .  [Do something to derive a contradiction.]  This is a contradiction.Therefore, for all , is true.    "
},
{
  "id": "skeleton_exists",
  "level": "2",
  "url": "sec_More_About_Quantification.html#skeleton_exists",
  "type": "Skeleton Proof",
  "number": "2.84",
  "title": "Direct Proof of <span class=\"process-math\">\\((\\exists x)P(x)\\)<\/span>.",
  "body": " Direct Proof of   Here is the general structure for a direct proof of the proposition . Assume is the universe of discourse.   [State any upfront assumptions.]    [Use definitions, axioms, and previous results to deduce that an exists for which is true; or if you have an that works, just verify that it does.]  Therefore, there exists such that .    "
},
{
  "id": "skeleton_exists_contradiction",
  "level": "2",
  "url": "sec_More_About_Quantification.html#skeleton_exists_contradiction",
  "type": "Skeleton Proof",
  "number": "2.85",
  "title": "Proof of <span class=\"process-math\">\\((\\exists x)P(x)\\)<\/span> by Contradiction.",
  "body": " Proof of by Contradiction   Below is the general structure for a proof of the proposition via contradiction. Assume is the universe of discourse.   [State any upfront assumptions.] For sake of a contradiction, assume that for all ,   [Do something to derive a contradiction.]  This is a contradiction. Therefore, there exists such that .    "
},
{
  "id": "sec_More_About_Quantification-24",
  "level": "2",
  "url": "sec_More_About_Quantification.html#sec_More_About_Quantification-24",
  "type": "Problem",
  "number": "2.86",
  "title": "",
  "body": "  Determine whether each of the following statements is true or false. If the statement is true, prove it. If the statement is false, provide a counterexample.   For all , .    There exists such that .    There exists such that for all , .    For all , .    For all , there exists such that .    There exists integers and such that .    There do not exist integers and such that .    For all , if divides , then either divides or divides .    For all , if is even, then either or is even.      "
},
{
  "id": "sec_More_About_Quantification-25",
  "level": "2",
  "url": "sec_More_About_Quantification.html#sec_More_About_Quantification-25",
  "type": "Problem",
  "number": "2.87",
  "title": "",
  "body": "  Explain why the following proof is not a valid argument.  Claim. For all , if and are even, then is even.  Proof. Suppose such that and are even. For sake of a contradiction, assume that is odd. Then there exists such that . This implies that . We see that the left side of the equation is even because it is the difference of even numbers. However, the right side is odd. Since an even number cannot equal an odd number, we have a contradiction. Therefore, is even.   "
},
{
  "id": "sec_More_About_Quantification-26",
  "level": "2",
  "url": "sec_More_About_Quantification.html#sec_More_About_Quantification-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "proof by cases proof by exhaustion "
},
{
  "id": "thm_3n_2_n_14_is_even",
  "level": "2",
  "url": "sec_More_About_Quantification.html#thm_3n_2_n_14_is_even",
  "type": "Theorem",
  "number": "2.88",
  "title": "",
  "body": "  For all , is even.   "
},
{
  "id": "thm_nm_odd_implies_n_or_m_odd",
  "level": "2",
  "url": "sec_More_About_Quantification.html#thm_nm_odd_implies_n_or_m_odd",
  "type": "Theorem",
  "number": "2.89",
  "title": "",
  "body": "  For all , if is odd, then is odd and is odd.   "
},
{
  "id": "sec_More_About_Quantification-32",
  "level": "2",
  "url": "sec_More_About_Quantification.html#sec_More_About_Quantification-32",
  "type": "Proof",
  "number": "2.5.1",
  "title": "Proof of Theorem 2.89.",
  "body": " Proof of Theorem  We will prove the contrapositive. Let and assume is even or is even. Without loss of generality, assume is even. Then there exists such that . We see that .  Since both and are integers, is an integer. This shows that is even. We have proved the contrapositive, and hence for all , if is odd, then is odd and is odd.  "
},
{
  "id": "skeleton_uniqueness",
  "level": "2",
  "url": "sec_More_About_Quantification.html#skeleton_uniqueness",
  "type": "Skeleton Proof",
  "number": "2.90",
  "title": "Direct Proof of <span class=\"process-math\">\\((\\exists! x)P(x)\\)<\/span>.",
  "body": " Direct Proof of   Here is the general structure for a direct proof of the proposition . Assume is the universe of discourse.   [State any upfront assumptions.]    [Use definitions, axioms, and previous results to deduce that an exists for which is true; or if you have an that works, just verify that it does.]  Therefore, there exists such that . Now, suppose such that and .  [Prove that .]  This implies that there exists a unique such that .    "
},
{
  "id": "sec_More_About_Quantification-37",
  "level": "2",
  "url": "sec_More_About_Quantification.html#sec_More_About_Quantification-37",
  "type": "Theorem",
  "number": "2.91",
  "title": "",
  "body": "  If such that and , then there exists a unique such that .   "
},
{
  "id": "sec_Sets",
  "level": "1",
  "url": "sec_Sets.html",
  "type": "Section",
  "number": "3.1",
  "title": "Sets",
  "body": " Sets    A set is a collection of objects called elements . If is a set and is an element of , we write . Otherwise, we write . The set containing no elements is called the empty set , and is denoted by the symbol . Any set that contains at least one element is referred to as a nonempty set .    If we think of a set as a box potentially containing some stuff, then the empty set is a box with nothing in it. One assumption we will make is that for any set , . The language associated to sets is specific. We will often define sets using the following notation, called set-builder notation : , where is some predicate statement involving . The first part denotes what type of is being considered. The predicate to the right of the vertical bar (not to be confused with divides ) determines the condition(s) that each must satisfy in order to be a member of the set. This notation is read as The set of all in such that . As an example, the set describes the collection of even natural numbers that are greater than or equal to 8.  There are a few sets that are commonly discussed in mathematics and have predefined symbols to denote them. We have already encountered the integers, natural numbers, and real numbers. Notice that our definition of the rational numbers uses set-builder notation.    Natural Numbers:  . Some books will include zero in the set of natural numbers, but we do not.     Integers:  .     Rational Numbers:  .     Real Numbers:  denotes the set of real numbers. We are taking for granted that you have some familiarity with this set.     Since the set of natural numbers consists of the positive integers, the natural numbers are sometimes denoted by .    Unpack the meaning of each of the following sets and provide a description of the elements that each set contains.                                 Write each of the following sentences using set-builder notation.   The set of all real numbers less than .    The set of all real numbers greater than and less than or equal to 42.    The set of all even integers.       Parts (a) and (b) of Problem are examples of intervals.    For with , we define the following sets, referred to as intervals .                                  We analogously define , , and . Intervals of the form , , , and are called open intervals while is referred to as a closed interval . A bounded interval is any interval of the form , , , and . For bounded intervals, and are called the endpoints of the interval.    We will always assume that any time we write , or that . We will see where the terminology of open and closed comes from in Section .    Give an example of each of the following.   An interval that is neither an open nor closed interval.    An infinite set that is not an interval.         If and are sets, then we say that is a subset of , written , provided that every element of is an element of .      List all of the subsets of .    Every nonempty set always has two subsets. Notice that if , then Parts (a) and (b) of the next theorem say the same thing.    Let be a set. Then    , and     .       Observe that is equivalent to For all (in the universe of discourse), if , then . Since we know how to deal with for all statements and conditional propositions, we know how to go about proving . If happens to be the empty set, then the statement For all (in the universe of discourse), if , then is vacuously true. This is in agreement with Theorem (b), which states that the empty set is always a subset of every set. In light of this, it is common to omit discussion of the case when is the empty set when proving that is s a subset of .    Suppose and are sets. Describe a skeleton proof for proving that .     Transitivity of Subsets   Suppose that , , and are sets. If and , then .      Two sets and are equal , denoted , if the sets contain the same elements.    Since the next theorem is a biconditional proposition, you need to write two distinct subproofs, one for implies and , and another for and implies . Be sure to make it clear to the reader when you are proving each implication.    Suppose that and are sets. Then if and only if and .    Note that if we want to prove , then we have to do two separate subproofs: one for and one for . Be sure to make it clear to the reader where these subproofs begin and end. One approach is to label each subproof with and (including the parentheses), respectively.    If , then is called a proper subset provided that . In this case, we may write or .    Note that some authors use to mean , so some confusion could arise if you are not reading carefully.    Let and be sets in some universe of discourse .   The union of the sets and is .    The intersection of the sets and is .    The set difference of the sets and is .    The complement of (relative to ) is the set .         If two sets and have the property that , then we say that and are disjoint sets .      Suppose that the universe of discourse is . Let , , and . Find each of the following.                                                          Suppose that the universe of discourse is . Let , , and . Find each of the following.                                                     Suppose that the universe of discourse is . Let and . Find each of the following.                       If and are sets such that , then .      If and are sets, then .    In Chapter , we encountered De Morgan's Law (see Theorem and Problem ), which provided a method for negating compound propositions involving conjunctions and disjunctions. The next theorem provides a method for taking the complement of unions and intersections of sets. This result is also known as De Morgan's Law. Do you see why?   De Morgan's Law   If and are sets, then    , and     .       The next theorem indicates how intersections and unions interact with each other.   Distribution of Union and Intersection   If , , and are sets, then    , and     .         For each of the statements (a) (d) on the left, find an equivalent symbolic proposition chosen from the list (i) (v) on the right. Note that not every statement on the right will get used.       .     .     .     .                                     In mathematics the art of proposing a question must be held of higher value than solving it.  Georg Cantor, mathematician.   "
},
{
  "id": "sec_Sets-2",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-2",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": "  A set is a collection of objects called elements . If is a set and is an element of , we write . Otherwise, we write . The set containing no elements is called the empty set , and is denoted by the symbol . Any set that contains at least one element is referred to as a nonempty set .   "
},
{
  "id": "sec_Sets-3",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set-builder notation "
},
{
  "id": "sec_Sets-4",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Natural Numbers: Integers: Rational Numbers: Real Numbers: "
},
{
  "id": "sec_Sets-6",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-6",
  "type": "Problem",
  "number": "3.2",
  "title": "",
  "body": "  Unpack the meaning of each of the following sets and provide a description of the elements that each set contains.                              "
},
{
  "id": "prob_set-builder_examples",
  "level": "2",
  "url": "sec_Sets.html#prob_set-builder_examples",
  "type": "Problem",
  "number": "3.3",
  "title": "",
  "body": "  Write each of the following sentences using set-builder notation.   The set of all real numbers less than .    The set of all real numbers greater than and less than or equal to 42.    The set of all even integers.      "
},
{
  "id": "def_intervals",
  "level": "2",
  "url": "sec_Sets.html#def_intervals",
  "type": "Definition",
  "number": "3.4",
  "title": "",
  "body": "  For with , we define the following sets, referred to as intervals .                                  We analogously define , , and . Intervals of the form , , , and are called open intervals while is referred to as a closed interval . A bounded interval is any interval of the form , , , and . For bounded intervals, and are called the endpoints of the interval.   "
},
{
  "id": "sec_Sets-11",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-11",
  "type": "Problem",
  "number": "3.5",
  "title": "",
  "body": "  Give an example of each of the following.   An interval that is neither an open nor closed interval.    An infinite set that is not an interval.      "
},
{
  "id": "sec_Sets-12",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-12",
  "type": "Definition",
  "number": "3.6",
  "title": "",
  "body": "  If and are sets, then we say that is a subset of , written , provided that every element of is an element of .   "
},
{
  "id": "sec_Sets-13",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-13",
  "type": "Problem",
  "number": "3.7",
  "title": "",
  "body": "  List all of the subsets of .   "
},
{
  "id": "thm_trivial_subsets",
  "level": "2",
  "url": "sec_Sets.html#thm_trivial_subsets",
  "type": "Theorem",
  "number": "3.8",
  "title": "",
  "body": "  Let be a set. Then    , and     .      "
},
{
  "id": "sec_Sets-17",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-17",
  "type": "Problem",
  "number": "3.9",
  "title": "",
  "body": "  Suppose and are sets. Describe a skeleton proof for proving that .   "
},
{
  "id": "sec_Sets-18",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-18",
  "type": "Theorem",
  "number": "3.10",
  "title": "Transitivity of Subsets.",
  "body": " Transitivity of Subsets   Suppose that , , and are sets. If and , then .   "
},
{
  "id": "sec_Sets-19",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-19",
  "type": "Definition",
  "number": "3.11",
  "title": "",
  "body": "  Two sets and are equal , denoted , if the sets contain the same elements.   "
},
{
  "id": "sec_Sets-21",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-21",
  "type": "Theorem",
  "number": "3.12",
  "title": "",
  "body": "  Suppose that and are sets. Then if and only if and .   "
},
{
  "id": "sec_Sets-23",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-23",
  "type": "Definition",
  "number": "3.13",
  "title": "",
  "body": "  If , then is called a proper subset provided that . In this case, we may write or .   "
},
{
  "id": "sec_Sets-25",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-25",
  "type": "Definition",
  "number": "3.14",
  "title": "",
  "body": "  Let and be sets in some universe of discourse .   The union of the sets and is .    The intersection of the sets and is .    The set difference of the sets and is .    The complement of (relative to ) is the set .      "
},
{
  "id": "sec_Sets-26",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-26",
  "type": "Definition",
  "number": "3.15",
  "title": "",
  "body": "  If two sets and have the property that , then we say that and are disjoint sets .   "
},
{
  "id": "sec_Sets-27",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-27",
  "type": "Problem",
  "number": "3.16",
  "title": "",
  "body": "  Suppose that the universe of discourse is . Let , , and . Find each of the following.                                                       "
},
{
  "id": "sec_Sets-28",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-28",
  "type": "Problem",
  "number": "3.17",
  "title": "",
  "body": "  Suppose that the universe of discourse is . Let , , and . Find each of the following.                                                  "
},
{
  "id": "sec_Sets-29",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-29",
  "type": "Problem",
  "number": "3.18",
  "title": "",
  "body": "  Suppose that the universe of discourse is . Let and . Find each of the following.                    "
},
{
  "id": "sec_Sets-30",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-30",
  "type": "Theorem",
  "number": "3.19",
  "title": "",
  "body": "  If and are sets such that , then .   "
},
{
  "id": "sec_Sets-31",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-31",
  "type": "Theorem",
  "number": "3.20",
  "title": "",
  "body": "  If and are sets, then .   "
},
{
  "id": "sec_Sets-33",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-33",
  "type": "Theorem",
  "number": "3.21",
  "title": "De Morgan’s Law.",
  "body": " De Morgan's Law   If and are sets, then    , and     .      "
},
{
  "id": "sec_Sets-35",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-35",
  "type": "Theorem",
  "number": "3.22",
  "title": "Distribution of Union and Intersection.",
  "body": " Distribution of Union and Intersection   If , , and are sets, then    , and     .      "
},
{
  "id": "sec_Sets-36",
  "level": "2",
  "url": "sec_Sets.html#sec_Sets-36",
  "type": "Problem",
  "number": "3.23",
  "title": "",
  "body": "  For each of the statements (a) (d) on the left, find an equivalent symbolic proposition chosen from the list (i) (v) on the right. Note that not every statement on the right will get used.       .     .     .     .                                  "
},
{
  "id": "sec_RussellsParadox",
  "level": "1",
  "url": "sec_RussellsParadox.html",
  "type": "Section",
  "number": "3.2",
  "title": "Russell’s Paradox",
  "body": " Russell's Paradox  We now turn our attention to the issue of whether there is one mother of all universal sets. Before reading any further, consider this for a moment. That is, is there one largest set that all other sets are a subset of? Or, in other words, is there a set of all sets? To help wrap our heads around this issue, consider the following riddle, known as the Barber of Seville Paradox .  In Seville, there is a barber who shaves all those men, and only those men, who do not shave themselves. Who shaves the barber?    In the Barber of Seville Paradox, does the barber shave himself or not?     Problem is an example of a paradox . A paradox is a statement that can be shown, using a given set of axioms and definitions, to be both true and false. Recall that an axiom is a statement that is assumed to be true without proof. These are the basic building blocks from which all theorems are proved. Paradoxes are often used to show the inconsistencies in a flawed axiomatic theory. The term paradox is also used informally to describe a surprising or counterintuitive result that follows from a given set of rules. Now, suppose that there is a set of all sets and call it . That is, .    Given our definition of , explain why is an element of itself.    If we continue with this line of reasoning, it must be the case that some sets are elements of themselves and some are not. Let be the set of all sets that are elements of themselves and let be the set of all sets that are not elements of themselves.    Does belong to or ? Explain why this is a paradox.    The above paradox is one way of phrasing a paradox referred to as Russell's Paradox , named after British mathematician and philosopher Bertrand Russell (1872 1970). How did we get into this mess in the first place?! By assuming the existence of a set of all sets, we can produce all sorts of paradoxes. The only way to avoid these types of paradoxes is to conclude that there is no set of all sets. That is, the collection of all sets cannot be a set itself.  According to naive set theory (i.e., approaching set theory using natural language as opposed to formal logic), any definable collection is a set. As Russell's Paradox illustrates, this leads to problems. It turns out that any proposition can be proved from a contradiction, and hence the presence of contradictions like Russell's Paradox would appear to be catastrophic for mathematics. Since set theory is often viewed as the basis for axiomatic development in mathematics, Russell's Paradox calls the foundations of mathematics into question. In response to this threat, a great deal of research went into developing consistent axioms (i.e., free of contradictions) for set theory in the early 20th century. In 1908, Ernst Zermelo (1871 1953) proposed a collection of axioms for set theory that avoided the inconsistencies of naive set theory. In the 1920s, adjustments to Zermelo's axioms were made by Abraham Fraenkel (1891 1965), Thoralf Skolem (1887 1963), and Zermelo that resulted in a collection of nine axioms, called ZFC , where ZF stands for Zermelo and Fraenkel and C stands for the Axiom of Choice, which is one of the nine axioms. Loosely speaking, the Axiom of Choice states that given any collection of sets, each containing at least one element, it is possible to make a selection of exactly one object from each set, even if the collection of sets is infinite. There was a period of time in mathematics when the Axiom of Choice was controversial, but nowadays it is generally accepted. There is a fascinating history concerning the Axiom of Choice, including its controversy. The Wikipedia page for the Axiom of Choice is a good place to start if you are interested in learning more. There are several competing axiomatic approaches to set theory, but ZFC is considered the canonical collection of axioms by most mathematicians.   Appendix includes a few more examples of paradoxes, which you are encouraged to ponder.    In times of change, learners inherit the earth, while the learned find themselves beautifully equipped to deal with a world that no longer exists.  Eric Hoffer, moral and social philosopher   "
},
{
  "id": "sec_RussellsParadox-2",
  "level": "2",
  "url": "sec_RussellsParadox.html#sec_RussellsParadox-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Barber of Seville Paradox "
},
{
  "id": "prob_barber",
  "level": "2",
  "url": "sec_RussellsParadox.html#prob_barber",
  "type": "Problem",
  "number": "3.24",
  "title": "",
  "body": "  In the Barber of Seville Paradox, does the barber shave himself or not?   "
},
{
  "id": "sec_RussellsParadox-5",
  "level": "2",
  "url": "sec_RussellsParadox.html#sec_RussellsParadox-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "paradox "
},
{
  "id": "sec_RussellsParadox-6",
  "level": "2",
  "url": "sec_RussellsParadox.html#sec_RussellsParadox-6",
  "type": "Problem",
  "number": "3.25",
  "title": "",
  "body": "  Given our definition of , explain why is an element of itself.   "
},
{
  "id": "prob_russell",
  "level": "2",
  "url": "sec_RussellsParadox.html#prob_russell",
  "type": "Problem",
  "number": "3.26",
  "title": "",
  "body": "  Does belong to or ? Explain why this is a paradox.   "
},
{
  "id": "sec_RussellsParadox-9",
  "level": "2",
  "url": "sec_RussellsParadox.html#sec_RussellsParadox-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Russell's Paradox "
},
{
  "id": "sec_PowerSets",
  "level": "1",
  "url": "sec_PowerSets.html",
  "type": "Section",
  "number": "3.3",
  "title": "Power Sets",
  "body": " Power Sets  We have already seen that using union, intersection, set difference, and complement we can create new sets (in the same universe) from existing sets. In this section, we will describe another way to generate new sets; however, the new sets will not live in the same universe this time. The following set is always a set of subsets. That is, its elements are themselves sets.    If is a set, then the power set of is the set of subsets of . The power set of is denoted .    You can see that a power set of is not composed of elements of , but rather it is composed of subsets of , and none of these subsets are elements of .  For example, if , then . It follows immediately from the definition that if and only if .    For each of the following sets, find the power set.                            How many subsets do you think that a set with elements has? What if ? You do not need to prove your conjecture at this time. We will prove this later using mathematical induction.    It is important to realize that the concepts of element and subset need to be carefully delineated. For example, consider the set . The object is an element of , but the object is both a subset of and an element of . This can get confusing rather quickly. Consider the set from Problem . The set happens to be an element of , a subset of , and an element of . The upshot is that it is important to pay close attention to whether or is the proper symbol to use.  Since the next theorem is a biconditional proposition, you need to write two distinct subproofs, one for implies , and another for implies .    Let and be sets. Then if and only if .      Let and be sets. Determine whether each of the following statements is true or false. If the statement is true, prove it. If the statement is false, provide a counterexample.                          While power sets provide a useful way of generating new sets, they also play a key role in Georg Cantor 's (1845 1918) investigation into the size of sets. Cantor's Theorem (see Theorem ) states that the power set of a set even if the set is infinite is always larger than the original set. One consequence of this is that there are different sizes of infinity and no largest infinity. Mathematics is awesome.    The master has failed more times than the beginner has even tried.  Stephen McCranie, author & illustrator   "
},
{
  "id": "sec_PowerSets-3",
  "level": "2",
  "url": "sec_PowerSets.html#sec_PowerSets-3",
  "type": "Definition",
  "number": "3.27",
  "title": "",
  "body": "  If is a set, then the power set of is the set of subsets of . The power set of is denoted .   "
},
{
  "id": "prob_PowerSets",
  "level": "2",
  "url": "sec_PowerSets.html#prob_PowerSets",
  "type": "Problem",
  "number": "3.28",
  "title": "",
  "body": "  For each of the following sets, find the power set.                         "
},
{
  "id": "conjecture_PowerSets",
  "level": "2",
  "url": "sec_PowerSets.html#conjecture_PowerSets",
  "type": "Problem",
  "number": "3.29",
  "title": "",
  "body": "  How many subsets do you think that a set with elements has? What if ? You do not need to prove your conjecture at this time. We will prove this later using mathematical induction.   "
},
{
  "id": "sec_PowerSets-10",
  "level": "2",
  "url": "sec_PowerSets.html#sec_PowerSets-10",
  "type": "Theorem",
  "number": "3.30",
  "title": "",
  "body": "  Let and be sets. Then if and only if .   "
},
{
  "id": "sec_PowerSets-11",
  "level": "2",
  "url": "sec_PowerSets.html#sec_PowerSets-11",
  "type": "Problem",
  "number": "3.31",
  "title": "",
  "body": "  Let and be sets. Determine whether each of the following statements is true or false. If the statement is true, prove it. If the statement is false, provide a counterexample.                         "
},
{
  "id": "sec_PowerSets-12",
  "level": "2",
  "url": "sec_PowerSets.html#sec_PowerSets-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cantor's Theorem "
},
{
  "id": "sec_Indexing_Sets",
  "level": "1",
  "url": "sec_Indexing_Sets.html",
  "type": "Section",
  "number": "3.4",
  "title": "Indexing Sets",
  "body": " Indexing Sets  Suppose we consider the following collection of open intervals:   This collection has a natural way for us to index the sets:   In this case the sets are indexed by the set . The subscripts are taken from the index set . If we wanted to talk about an arbitrary set from this indexed collection, we could use the notation .  Let's consider another example:   An obvious way to index these sets is as follows:   In this case, the collection of sets is indexed by .  Using indexing sets in mathematics is an extremely useful notational tool, but it is important to keep straight the difference between the sets that are being indexed, the elements in each set being indexed, the indexing set, and the elements of the indexing set.  Any set (finite or infinite) can be used as an indexing set. Often capital Greek letters are used to denote arbitrary indexing sets and small Greek letters to represent elements of these sets. If the indexing set is a subset of , then it is common to use Roman letters as individual indices. Of course, these are merely conventions, not rules.   If is a set and we have a collection of sets indexed by , then we may write to refer to this collection. We read this as the set of -sub-alphas over alpha in Delta.     If a collection of sets is indexed by , then we may write or .    Borrowing from this idea, a collection may be written as .       Let be a collection of sets.   The union of the entire collection is defined via .    The intersection of the entire collection is defined via .       In the special case that , we write and   Similarly, if , then .  Notice the difference between and (respectively, and ).    Let be the collection of open intervals from the beginning of the section. Find each of the following.                  Let be the collection from earlier in the section. Find each of the following.                  Let , where . Find each of the following.                  Let , where . Find each of the following.                  For each (the rational numbers), let be the set containing all real numbers except  . Find each of the following.                  A collection of sets is pairwise disjoint if for .      Provide an example of a collection of sets that is not pairwise disjoint even though .      For each of the following, provide an example of a collection of sets with the stated property.   A collection of three subsets of such that the collection is not pairwise disjoint, the union equals , and the intersection of the collection is empty.    A collection of infinitely many subsets of such that the collection is not pairwise disjoint, the union equals , and the intersection of the collection is empty.    A collection of infinitely many subsets of such that the collection is pairwise disjoint, the union equals , and the intersection of the collection is empty.        Generalized Distribution of Union and Intersection   Let be a collection of sets and let be any set. Then    , and     .        Generalized De Morgan's Law   Let be a collection of sets. Then    , and     .       At the end of Section , we mentioned the Axiom of Choice. Using the language of indexing sets, we can now state this axiom precisely.   Axiom of Choice   For every indexed collection of nonempty sets, there exists an indexed collection of elements such that for each .    Intuitively, the Axiom of Choice guarantees the existence of mathematical objects that are obtained by a sequence of choices. It applies to both the finite and infinite setting. As an analogy, we can think of each as a drawer in a dresser and each as an article of clothing chosen from the drawer identified with . The Axiom of Choice is surprisingly powerful, sometimes leading to unexpected consequences. It often gets used in subtle ways that mathematicians are not always explicit with. We will require the Axiom of Choice when proving and . When proving these theorems, be on the lookout for where you are invoking the Axiom of Choice.    All sorts of things can happen when you're open to new ideas and playing around with things.  Stephanie Kwolek, chemist   "
},
{
  "id": "sec_Indexing_Sets-4",
  "level": "2",
  "url": "sec_Indexing_Sets.html#sec_Indexing_Sets-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indexed index set "
},
{
  "id": "sec_Indexing_Sets-10",
  "level": "2",
  "url": "sec_Indexing_Sets.html#sec_Indexing_Sets-10",
  "type": "Definition",
  "number": "3.32",
  "title": "",
  "body": "  Let be a collection of sets.   The union of the entire collection is defined via .    The intersection of the entire collection is defined via .      "
},
{
  "id": "sec_Indexing_Sets-14",
  "level": "2",
  "url": "sec_Indexing_Sets.html#sec_Indexing_Sets-14",
  "type": "Problem",
  "number": "3.33",
  "title": "",
  "body": "  Let be the collection of open intervals from the beginning of the section. Find each of the following.               "
},
{
  "id": "sec_Indexing_Sets-15",
  "level": "2",
  "url": "sec_Indexing_Sets.html#sec_Indexing_Sets-15",
  "type": "Problem",
  "number": "3.34",
  "title": "",
  "body": "  Let be the collection from earlier in the section. Find each of the following.               "
},
{
  "id": "sec_Indexing_Sets-16",
  "level": "2",
  "url": "sec_Indexing_Sets.html#sec_Indexing_Sets-16",
  "type": "Problem",
  "number": "3.35",
  "title": "",
  "body": "  Let , where . Find each of the following.               "
},
{
  "id": "sec_Indexing_Sets-17",
  "level": "2",
  "url": "sec_Indexing_Sets.html#sec_Indexing_Sets-17",
  "type": "Problem",
  "number": "3.36",
  "title": "",
  "body": "  Let , where . Find each of the following.               "
},
{
  "id": "sec_Indexing_Sets-18",
  "level": "2",
  "url": "sec_Indexing_Sets.html#sec_Indexing_Sets-18",
  "type": "Problem",
  "number": "3.37",
  "title": "",
  "body": "  For each (the rational numbers), let be the set containing all real numbers except  . Find each of the following.               "
},
{
  "id": "sec_Indexing_Sets-19",
  "level": "2",
  "url": "sec_Indexing_Sets.html#sec_Indexing_Sets-19",
  "type": "Definition",
  "number": "3.38",
  "title": "",
  "body": "  A collection of sets is pairwise disjoint if for .   "
},
{
  "id": "sec_Indexing_Sets-20",
  "level": "2",
  "url": "sec_Indexing_Sets.html#sec_Indexing_Sets-20",
  "type": "Problem",
  "number": "3.39",
  "title": "",
  "body": "  Provide an example of a collection of sets that is not pairwise disjoint even though .   "
},
{
  "id": "sec_Indexing_Sets-21",
  "level": "2",
  "url": "sec_Indexing_Sets.html#sec_Indexing_Sets-21",
  "type": "Problem",
  "number": "3.40",
  "title": "",
  "body": "  For each of the following, provide an example of a collection of sets with the stated property.   A collection of three subsets of such that the collection is not pairwise disjoint, the union equals , and the intersection of the collection is empty.    A collection of infinitely many subsets of such that the collection is not pairwise disjoint, the union equals , and the intersection of the collection is empty.    A collection of infinitely many subsets of such that the collection is pairwise disjoint, the union equals , and the intersection of the collection is empty.      "
},
{
  "id": "sec_Indexing_Sets-22",
  "level": "2",
  "url": "sec_Indexing_Sets.html#sec_Indexing_Sets-22",
  "type": "Theorem",
  "number": "3.41",
  "title": "Generalized Distribution of Union and Intersection.",
  "body": " Generalized Distribution of Union and Intersection   Let be a collection of sets and let be any set. Then    , and     .      "
},
{
  "id": "sec_Indexing_Sets-23",
  "level": "2",
  "url": "sec_Indexing_Sets.html#sec_Indexing_Sets-23",
  "type": "Theorem",
  "number": "3.42",
  "title": "Generalized De Morgan’s Law.",
  "body": " Generalized De Morgan's Law   Let be a collection of sets. Then    , and     .      "
},
{
  "id": "sec_Indexing_Sets-25",
  "level": "2",
  "url": "sec_Indexing_Sets.html#sec_Indexing_Sets-25",
  "type": "Axiom",
  "number": "3.43",
  "title": "Axiom of Choice.",
  "body": " Axiom of Choice   For every indexed collection of nonempty sets, there exists an indexed collection of elements such that for each .   "
},
{
  "id": "sec_Cartesian_Products",
  "level": "1",
  "url": "sec_Cartesian_Products.html",
  "type": "Section",
  "number": "3.5",
  "title": "Cartesian Products of Sets",
  "body": " Cartesian Products of Sets  Given a collection of sets, we can form new sets by taking unions, intersections, complements, and set differences. In this section, we introduce a type of product of sets. You have already encountered this concept when you learned to plot points in the plane. You also crossed paths with this notion if you have taken a course in linear algebra.    For each , we define an -tuple to be an ordered list of elements of the form . We refer to as the th component (or coordinate ) of . Two -tuples and are equal if for all . A -tuple is more commonly referred to as an ordered pair while a -tuple is often called an ordered triple .    Occasionally, other symbols are used to surround the components of an -tuple, such as square brackets or angle brackets . In some programming languages, curly braces are used to specify arrays. However, we avoid this convention in mathematics since curly braces are the standard notation for sets. The term tuple can also occur when discussing other mathematical objects, such as vectors.  We can use the notion of -tuples to construct new sets from existing sets.    If and are sets, the Cartesian product (or direct product ) of and , denoted (read as times or cross ), is the set of all ordered pairs where the first component is from and the second component is from . In set-builder notation, we have .  We similarly define the Cartesian product of sets, say , by , where is referred to as the th factor of the Cartesian product. As a special case, the set is often abbreviated as .    Cartesian products are named after French philosopher and mathematician René Descartes (1596 1650). Cartesian products will play a prominent role in Chapter .    If and , then .      The standard two-dimensional plane and standard three space are familiar examples of Cartesian products. In particular, we have and .      Consider the sets and from Example .   Find .    Find .         If and are sets, why do you think that is referred to as a type of product ? Think about the area model for multiplication of natural numbers.      If and are both finite sets, then how many elements will have?      Let , , and . Find .      Let and . Write each of the following using set-builder notation and then describe the set geometrically (e.g., draw a picture).                            If is a set, then what is equal to?      Given sets and , when will be equal to ?      Write using set-builder notation and then describe this set geometrically by interpreting it as a subset of .    We now turn our attention to subsets of Cartesian products.    Let , , , and be sets. If and , then .      Is it true that if , then and ? Do not forget to think about cases involving the empty set.      Is every subset of of the form , where and ? If so, prove it. If not, find a counterexample.      If , , and are nonempty sets, is a subset of ?      Let , , , and . Compute each of the following.                                                Let , , , and be sets. Determine whether each of the following statements is true or false. If a statement is true, prove it. Otherwise, provide a counterexample.                                 If and are sets, conjecture a way to rewrite in a way that involves and and then prove your conjecture.      If there is no struggle, there is no progress.  Frederick Douglass, writer & statesman   "
},
{
  "id": "sec_Cartesian_Products-3",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-3",
  "type": "Definition",
  "number": "3.44",
  "title": "",
  "body": "  For each , we define an -tuple to be an ordered list of elements of the form . We refer to as the th component (or coordinate ) of . Two -tuples and are equal if for all . A -tuple is more commonly referred to as an ordered pair while a -tuple is often called an ordered triple .   "
},
{
  "id": "sec_Cartesian_Products-6",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-6",
  "type": "Definition",
  "number": "3.45",
  "title": "",
  "body": "  If and are sets, the Cartesian product (or direct product ) of and , denoted (read as times or cross ), is the set of all ordered pairs where the first component is from and the second component is from . In set-builder notation, we have .  We similarly define the Cartesian product of sets, say , by , where is referred to as the th factor of the Cartesian product. As a special case, the set is often abbreviated as .   "
},
{
  "id": "ex_CartesianProduct",
  "level": "2",
  "url": "sec_Cartesian_Products.html#ex_CartesianProduct",
  "type": "Example",
  "number": "3.46",
  "title": "",
  "body": "  If and , then .   "
},
{
  "id": "sec_Cartesian_Products-9",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-9",
  "type": "Example",
  "number": "3.47",
  "title": "",
  "body": "  The standard two-dimensional plane and standard three space are familiar examples of Cartesian products. In particular, we have and .   "
},
{
  "id": "sec_Cartesian_Products-10",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-10",
  "type": "Problem",
  "number": "3.48",
  "title": "",
  "body": "  Consider the sets and from Example .   Find .    Find .      "
},
{
  "id": "sec_Cartesian_Products-11",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-11",
  "type": "Problem",
  "number": "3.49",
  "title": "",
  "body": "  If and are sets, why do you think that is referred to as a type of product ? Think about the area model for multiplication of natural numbers.   "
},
{
  "id": "sec_Cartesian_Products-12",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-12",
  "type": "Problem",
  "number": "3.50",
  "title": "",
  "body": "  If and are both finite sets, then how many elements will have?   "
},
{
  "id": "sec_Cartesian_Products-13",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-13",
  "type": "Problem",
  "number": "3.51",
  "title": "",
  "body": "  Let , , and . Find .   "
},
{
  "id": "sec_Cartesian_Products-14",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-14",
  "type": "Problem",
  "number": "3.52",
  "title": "",
  "body": "  Let and . Write each of the following using set-builder notation and then describe the set geometrically (e.g., draw a picture).                         "
},
{
  "id": "sec_Cartesian_Products-15",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-15",
  "type": "Problem",
  "number": "3.53",
  "title": "",
  "body": "  If is a set, then what is equal to?   "
},
{
  "id": "sec_Cartesian_Products-16",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-16",
  "type": "Problem",
  "number": "3.54",
  "title": "",
  "body": "  Given sets and , when will be equal to ?   "
},
{
  "id": "prob_some_lines",
  "level": "2",
  "url": "sec_Cartesian_Products.html#prob_some_lines",
  "type": "Problem",
  "number": "3.55",
  "title": "",
  "body": "  Write using set-builder notation and then describe this set geometrically by interpreting it as a subset of .   "
},
{
  "id": "sec_Cartesian_Products-19",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-19",
  "type": "Theorem",
  "number": "3.56",
  "title": "",
  "body": "  Let , , , and be sets. If and , then .   "
},
{
  "id": "sec_Cartesian_Products-20",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-20",
  "type": "Problem",
  "number": "3.57",
  "title": "",
  "body": "  Is it true that if , then and ? Do not forget to think about cases involving the empty set.   "
},
{
  "id": "sec_Cartesian_Products-21",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-21",
  "type": "Problem",
  "number": "3.58",
  "title": "",
  "body": "  Is every subset of of the form , where and ? If so, prove it. If not, find a counterexample.   "
},
{
  "id": "sec_Cartesian_Products-22",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-22",
  "type": "Problem",
  "number": "3.59",
  "title": "",
  "body": "  If , , and are nonempty sets, is a subset of ?   "
},
{
  "id": "sec_Cartesian_Products-23",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-23",
  "type": "Problem",
  "number": "3.60",
  "title": "",
  "body": "  Let , , , and . Compute each of the following.                                             "
},
{
  "id": "sec_Cartesian_Products-24",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-24",
  "type": "Problem",
  "number": "3.61",
  "title": "",
  "body": "  Let , , , and be sets. Determine whether each of the following statements is true or false. If a statement is true, prove it. Otherwise, provide a counterexample.                              "
},
{
  "id": "sec_Cartesian_Products-25",
  "level": "2",
  "url": "sec_Cartesian_Products.html#sec_Cartesian_Products-25",
  "type": "Problem",
  "number": "3.62",
  "title": "",
  "body": "  If and are sets, conjecture a way to rewrite in a way that involves and and then prove your conjecture.   "
},
{
  "id": "sec_Intro_to_Induction",
  "level": "1",
  "url": "sec_Intro_to_Induction.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction to Induction",
  "body": " Introduction to Induction  Consider the claims:   For all , .    For all , is prime.     Let's take a look at potential proofs.    Proof of (a). If , then . If , then . If , then , and so on.    Proof of (b). If , then , which is prime. If , then , which is prime. If , then , which is prime, and so on.  Are these actual proofs? No! In fact, the second claim is not even true. If , then , which is not prime since it has 41 as a factor. It turns out that the first claim is true, but what we wrote cannot be a proof since the same type of reasoning when applied to the second claim seems to prove something that is not actually true. We need a rigorous way of capturing and so on and a way to verify whether it really is and so on.   Recall that an axiom is a basic mathematical assumption. The following axiom is one of the Peano Axioms, which is a collection of axioms for the natural numbers introduced in the 19th century by Italian mathematician Giuseppe Peano (1858 1932).   Axiom of Induction   Let such that both    , and    if , then .     Then .    We can think of the set as a ladder, where the first hypothesis as saying that we have a first rung of a ladder. The second hypothesis says that if we are on any arbitrary rung of the ladder, then we can always get to the next rung. Taken together, this says that we can get from the first rung to the second, from the second to the third, and in general, from any th rung to the st rung, so that our ladder is actually . Do you agree that the Axiom of Induction is a pretty reasonable assumption?  At the end of Section , we briefly discussed ZFC, which is the standard choice for axiomatic set theory. It turns out that one can prove the Axiom of Induction as a theorem in ZFC. However, that will not be the approach we take. Instead, we are assuming the Axiom of Induction is true. Using this axiom, we can prove the following theorem, known as the Principle of Mathematical Induction . One approach to proving this theorem is to let and use the Axiom of Induction. The set is sometimes called the truth set . Your job is to show that the truth set is all of .   Principle of Mathematical Induction   Let be a sequence of statements, one for each natural number. Assume    is true, and    for all , if is true, then is true.     Then is true for all .    The Principle of Mathematical Induction provides us with a process for proving statements of the form: For all , , where is some predicate involving . Hypothesis (i) above is called the base step (or base case ) while (ii) is called the inductive step .  You should not confuse mathematical induction with inductive reasoning associated with the natural sciences. Inductive reasoning is a scientific method whereby one induces general principles from observations. On the other hand, mathematical induction is a deductive form of reasoning used to establish the validity of a proposition.   Proof of by Induction   Here is the general structure for a proof by induction.   We proceed by induction.  Base step: [Verify that is true. This often, but not always, amounts to plugging into two sides of some claimed equation and verifying that both sides are actually equal.]   Inductive step: [Your goal is to prove For all , if is true, then is true. ] Let and assume that is true. [Do something to derive that is true.] Therefore, is true.    Thus, by induction, is true for all .     Prove the next few theorems using induction. The first result may look familiar from calculus. Recall that , by definition.    For all , .      For all , 3 divides .      For all , 6 divides .      Let be distinct points arranged on a circle. Then the number of line segments joining all pairs of points is .      Consider a grid of squares that is squares wide by squares long, where . One of the squares has been cut out, but you do not know which one! You have a bunch of L-shapes made up of squares. Prove that you can perfectly cover this chessboard with the L-shapes (with no overlap) for any . Figure depicts one possible covering for the case involving and a fixed cut-out square.     One possible covering for the case involving for Problem .        Do not stop thinking of life as an adventure. You have no security unless you can live bravely, excitingly, imaginatively; unless you can choose a challenge instead of competence.  Eleanor Roosevelt, political figure & activist   "
},
{
  "id": "axiom_induction",
  "level": "2",
  "url": "sec_Intro_to_Induction.html#axiom_induction",
  "type": "Axiom",
  "number": "4.1",
  "title": "Axiom of Induction.",
  "body": " Axiom of Induction   Let such that both    , and    if , then .     Then .   "
},
{
  "id": "sec_Intro_to_Induction-10",
  "level": "2",
  "url": "sec_Intro_to_Induction.html#sec_Intro_to_Induction-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Principle of Mathematical Induction truth set "
},
{
  "id": "thm_PMI",
  "level": "2",
  "url": "sec_Intro_to_Induction.html#thm_PMI",
  "type": "Theorem",
  "number": "4.2",
  "title": "Principle of Mathematical Induction.",
  "body": " Principle of Mathematical Induction   Let be a sequence of statements, one for each natural number. Assume    is true, and    for all , if is true, then is true.     Then is true for all .   "
},
{
  "id": "sec_Intro_to_Induction-12",
  "level": "2",
  "url": "sec_Intro_to_Induction.html#sec_Intro_to_Induction-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base step base case inductive step "
},
{
  "id": "skeleton_induction",
  "level": "2",
  "url": "sec_Intro_to_Induction.html#skeleton_induction",
  "type": "Skeleton Proof",
  "number": "4.3",
  "title": "Proof of <span class=\"process-math\">\\((\\forall n\\in\\mathbb{N})P(n)\\)<\/span> by Induction.",
  "body": " Proof of by Induction   Here is the general structure for a proof by induction.   We proceed by induction.  Base step: [Verify that is true. This often, but not always, amounts to plugging into two sides of some claimed equation and verifying that both sides are actually equal.]   Inductive step: [Your goal is to prove For all , if is true, then is true. ] Let and assume that is true. [Do something to derive that is true.] Therefore, is true.    Thus, by induction, is true for all .    "
},
{
  "id": "sec_Intro_to_Induction-16",
  "level": "2",
  "url": "sec_Intro_to_Induction.html#sec_Intro_to_Induction-16",
  "type": "Theorem",
  "number": "4.4",
  "title": "",
  "body": "  For all , .   "
},
{
  "id": "sec_Intro_to_Induction-17",
  "level": "2",
  "url": "sec_Intro_to_Induction.html#sec_Intro_to_Induction-17",
  "type": "Theorem",
  "number": "4.5",
  "title": "",
  "body": "  For all , 3 divides .   "
},
{
  "id": "sec_Intro_to_Induction-18",
  "level": "2",
  "url": "sec_Intro_to_Induction.html#sec_Intro_to_Induction-18",
  "type": "Theorem",
  "number": "4.6",
  "title": "",
  "body": "  For all , 6 divides .   "
},
{
  "id": "sec_Intro_to_Induction-19",
  "level": "2",
  "url": "sec_Intro_to_Induction.html#sec_Intro_to_Induction-19",
  "type": "Theorem",
  "number": "4.7",
  "title": "",
  "body": "  Let be distinct points arranged on a circle. Then the number of line segments joining all pairs of points is .   "
},
{
  "id": "prob_L-shapes",
  "level": "2",
  "url": "sec_Intro_to_Induction.html#prob_L-shapes",
  "type": "Problem",
  "number": "4.8",
  "title": "",
  "body": "  Consider a grid of squares that is squares wide by squares long, where . One of the squares has been cut out, but you do not know which one! You have a bunch of L-shapes made up of squares. Prove that you can perfectly cover this chessboard with the L-shapes (with no overlap) for any . Figure depicts one possible covering for the case involving and a fixed cut-out square.   "
},
{
  "id": "fig_L-shapes",
  "level": "2",
  "url": "sec_Intro_to_Induction.html#fig_L-shapes",
  "type": "Figure",
  "number": "4.1",
  "title": "",
  "body": " One possible covering for the case involving for Problem .     "
},
{
  "id": "sec_More_on_Induction",
  "level": "1",
  "url": "sec_More_on_Induction.html",
  "type": "Section",
  "number": "4.2",
  "title": "More on Induction",
  "body": " More on Induction  In the previous section, we discussed proving statements of the form . Mathematical induction can actually be used to prove a broader family of results; namely, those of the form for any value . Theorem handles the special case when . The ladder analogy from the previous section holds for this more general situation, too. To prove the next theorem, mimic the proof of Theorem , but this time use the set .   Principle of Mathematical Induction   Let be a sequence of statements, one for each integer greater than or equal to . Assume that    is true, and    for all , if is true, then is true.     Then is true for all integers .     Theorem gives a process for proving statements of the form: For all integers , . As before, hypothesis (i) is called the base step , and (ii) is called the inductive step .   Proof of by Induction   Here is the general structure for a proof by induction when the base case does not necessarily involve .   We proceed by induction.  Base step: [Verify that is true. This often, but not always, amounts to plugging into two sides of some claimed equation and verifying that both sides are actually equal.]  Inductive step: [Your goal is to prove For all , if is true, then is true. ] Let be an integer and assume that is true. [Do something to derive that is true.] Therefore, is true.    Thus, by induction, is true for all integers .     We encountered the next theorem back in Section (see Conjecture ), but we did not prove it. When proving this theorem using induction, you will need to argue that if you add one more element to a finite set, then you end up with twice as many subsets. For your base case consider the empty set.    If is a finite set with elements, then is a set with elements.      For all integers , .    One consequence of the previous two theorems is that the power set of a finite set always consists of more elements than the original set.    For all integers , divides .      For all integers , divides .      For all integers , .      For all integers , .      Fix a real number . For all integers , .      For all integers , .      For all integers , .      For all integers , .      For all integers , is divisible by .      For all integers , .      For all integers , is divisible by .    We now consider an induction problem of a different sort, where you have to begin with some experimentation. For Part (c), consider using the results from Parts (a) and (b).    Suppose lines are drawn in the plane so that no two lines are parallel and no three lines intersect at any one point. Such a collection of lines is said to be in general position . Every collection of lines in general position divides the plane into disjoint regions, some of which are polygons with finite area (bounded regions) and some of which are not (unbounded regions).   Let be the number of regions the plane is divided into by lines in general position. Conjecture a formula for and prove that your conjecture is correct.    Let be the number of unbounded regions the plane is divided into by lines in general position. Conjecture a formula for and prove that your conjecture is correct.    Let be the number of bounded regions the plane is divided into by lines in general position. Conjecture a formula for and prove that your conjecture is correct.    Suppose we color each of the regions (bounded and unbounded) so that no two adjacent regions (i.e., share a common edge) have the same color. What is the fewest colors we could use to accomplish this? Prove your assertion.         If you don't learn to fail, you will fail to learn.  Manu Kapur, learning scientist   "
},
{
  "id": "thm_PMI2",
  "level": "2",
  "url": "sec_More_on_Induction.html#thm_PMI2",
  "type": "Theorem",
  "number": "4.9",
  "title": "Principle of Mathematical Induction.",
  "body": " Principle of Mathematical Induction   Let be a sequence of statements, one for each integer greater than or equal to . Assume that    is true, and    for all , if is true, then is true.     Then is true for all integers .   "
},
{
  "id": "sec_More_on_Induction-4",
  "level": "2",
  "url": "sec_More_on_Induction.html#sec_More_on_Induction-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base step inductive step "
},
{
  "id": "skeleton_induction_greater_than_a",
  "level": "2",
  "url": "sec_More_on_Induction.html#skeleton_induction_greater_than_a",
  "type": "Skeleton Proof",
  "number": "4.10",
  "title": "Proof of <span class=\"process-math\">\\((\\forall n \\in \\mathbb{Z})(n \\geq a \\implies P(n))\\)<\/span> by Induction.",
  "body": " Proof of by Induction   Here is the general structure for a proof by induction when the base case does not necessarily involve .   We proceed by induction.  Base step: [Verify that is true. This often, but not always, amounts to plugging into two sides of some claimed equation and verifying that both sides are actually equal.]  Inductive step: [Your goal is to prove For all , if is true, then is true. ] Let be an integer and assume that is true. [Do something to derive that is true.] Therefore, is true.    Thus, by induction, is true for all integers .    "
},
{
  "id": "thm_size_of_power_set_for_finite_sets",
  "level": "2",
  "url": "sec_More_on_Induction.html#thm_size_of_power_set_for_finite_sets",
  "type": "Theorem",
  "number": "4.11",
  "title": "",
  "body": "  If is a finite set with elements, then is a set with elements.   "
},
{
  "id": "thm_n_2_n",
  "level": "2",
  "url": "sec_More_on_Induction.html#thm_n_2_n",
  "type": "Theorem",
  "number": "4.12",
  "title": "",
  "body": "  For all integers , .   "
},
{
  "id": "sec_More_on_Induction-10",
  "level": "2",
  "url": "sec_More_on_Induction.html#sec_More_on_Induction-10",
  "type": "Theorem",
  "number": "4.13",
  "title": "",
  "body": "  For all integers , divides .   "
},
{
  "id": "sec_More_on_Induction-11",
  "level": "2",
  "url": "sec_More_on_Induction.html#sec_More_on_Induction-11",
  "type": "Theorem",
  "number": "4.14",
  "title": "",
  "body": "  For all integers , divides .   "
},
{
  "id": "sec_More_on_Induction-12",
  "level": "2",
  "url": "sec_More_on_Induction.html#sec_More_on_Induction-12",
  "type": "Theorem",
  "number": "4.15",
  "title": "",
  "body": "  For all integers , .   "
},
{
  "id": "sec_More_on_Induction-13",
  "level": "2",
  "url": "sec_More_on_Induction.html#sec_More_on_Induction-13",
  "type": "Theorem",
  "number": "4.16",
  "title": "",
  "body": "  For all integers , .   "
},
{
  "id": "sec_More_on_Induction-14",
  "level": "2",
  "url": "sec_More_on_Induction.html#sec_More_on_Induction-14",
  "type": "Theorem",
  "number": "4.17",
  "title": "",
  "body": "  Fix a real number . For all integers , .   "
},
{
  "id": "sec_More_on_Induction-15",
  "level": "2",
  "url": "sec_More_on_Induction.html#sec_More_on_Induction-15",
  "type": "Theorem",
  "number": "4.18",
  "title": "",
  "body": "  For all integers , .   "
},
{
  "id": "sec_More_on_Induction-16",
  "level": "2",
  "url": "sec_More_on_Induction.html#sec_More_on_Induction-16",
  "type": "Theorem",
  "number": "4.19",
  "title": "",
  "body": "  For all integers , .   "
},
{
  "id": "sec_More_on_Induction-17",
  "level": "2",
  "url": "sec_More_on_Induction.html#sec_More_on_Induction-17",
  "type": "Theorem",
  "number": "4.20",
  "title": "",
  "body": "  For all integers , .   "
},
{
  "id": "thm_div_by_8",
  "level": "2",
  "url": "sec_More_on_Induction.html#thm_div_by_8",
  "type": "Theorem",
  "number": "4.21",
  "title": "",
  "body": "  For all integers , is divisible by .   "
},
{
  "id": "sec_More_on_Induction-19",
  "level": "2",
  "url": "sec_More_on_Induction.html#sec_More_on_Induction-19",
  "type": "Theorem",
  "number": "4.22",
  "title": "",
  "body": "  For all integers , .   "
},
{
  "id": "sec_More_on_Induction-20",
  "level": "2",
  "url": "sec_More_on_Induction.html#sec_More_on_Induction-20",
  "type": "Theorem",
  "number": "4.23",
  "title": "",
  "body": "  For all integers , is divisible by .   "
},
{
  "id": "sec_More_on_Induction-22",
  "level": "2",
  "url": "sec_More_on_Induction.html#sec_More_on_Induction-22",
  "type": "Problem",
  "number": "4.24",
  "title": "",
  "body": "  Suppose lines are drawn in the plane so that no two lines are parallel and no three lines intersect at any one point. Such a collection of lines is said to be in general position . Every collection of lines in general position divides the plane into disjoint regions, some of which are polygons with finite area (bounded regions) and some of which are not (unbounded regions).   Let be the number of regions the plane is divided into by lines in general position. Conjecture a formula for and prove that your conjecture is correct.    Let be the number of unbounded regions the plane is divided into by lines in general position. Conjecture a formula for and prove that your conjecture is correct.    Let be the number of bounded regions the plane is divided into by lines in general position. Conjecture a formula for and prove that your conjecture is correct.    Suppose we color each of the regions (bounded and unbounded) so that no two adjacent regions (i.e., share a common edge) have the same color. What is the fewest colors we could use to accomplish this? Prove your assertion.      "
},
{
  "id": "sec_CompleteInduction",
  "level": "1",
  "url": "sec_CompleteInduction.html",
  "type": "Section",
  "number": "4.3",
  "title": "Complete Induction",
  "body": " Complete Induction  There is another formulation of induction, where the inductive step begins with a set of assumptions rather than one single assumption. This method is sometimes called complete induction or strong induction .   Principle of Complete Mathematical Induction   Let be a sequence of statements, one for each natural number. Assume that    is true for some , and    For all with , if is true for all such that , then is true.     Then is true for all .    Note the difference between ordinary induction ( and ) and complete induction. For the induction step of complete induction, we are not only assuming that is true, but rather that is true for all from to . Despite the name, complete induction is not any stronger or more powerful than ordinary induction. It is worth pointing out that anytime ordinary induction is an appropriate proof technique, so is complete induction. So, when should we use complete induction?  In the inductive step, you need to reach , and you should ask yourself which of the previous cases you need to get there. If all you need is the statement , then ordinary induction is the way to go. If, for example, two preceding cases, and , are necessary to reach , then complete induction is appropriate. In the extreme, if one needs the full range of preceding cases (i.e., all statements ), then again complete induction should be utilized.  Note that in situations where complete induction is appropriate, it might be the case that you need to verify more than one case in the base step. The number of base cases to be checked depends on how far one needs to look back in the induction step.   Proof of by Complete Induction   Here is the general structure for a proof by complete induction.    We proceed by complete induction.  Base step: [Verify that each of the statements are true. The value of depends on the statement.]  Inductive step: [Your goal is to prove For all with , if is true for all such that , then is true. ] Let with and suppose is true for all . [Do something to derive that is true.] Therefore, is true.    Thus, by complete induction, is true for all .     When tackling the problems in this section, think carefully about how many base steps you must verify.    Define a sequence of numbers by , , and for all natural numbers . Then for all .      Define a sequence of numbers by , and for all natural numbers . Then for all .      The Fibonacci sequence is given by , , and for all natural numbers . Prove that for all .    Recall that Theorem generalized Theorem and allowed us to handle situations where the base case was something other than . We can generalize complete induction in the same way, but we will not write this down as a formal theorem.    Prove that every amount of postage that is at least cents can be made from -cent and -cent stamps.      Whoziwhatzits come in boxes of 6, 9, and 20. Prove that for any natural number , it is possible to buy exactly Whoziwhatzits with a combination of these boxes.      Consider a grid of squares that is squares wide and squares long. Using dominoes that are square by squares, there are many ways to perfectly cover this grid with no overlap. How many? Prove your answer.      A binary string of length is an ordered list of digits such that each digit is either 0 or 1. For example and are distinct binary strings of length 6. Here are the rules for Binary Solitaire : At any stage, you are allowed to:   Swap the leftmost digit (i.e., change 0 to 1, or 1 to 0). For example, we can do .    Swap the digit immediately to the right of the leftmost occurrence of 1. For example, we can do .     Prove that for all , you can change any binary string of length to any other binary string of the same length.      Prove that the number of binary strings of length that never have two consecutive 1's is the Fibonacci number . See Problem for the definition of the Fibonacci numbers.      Nothing that's worth anything is ever easy.  Mike Hall, ultra-distance cyclist   "
},
{
  "id": "sec_CompleteInduction-2",
  "level": "2",
  "url": "sec_CompleteInduction.html#sec_CompleteInduction-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complete induction strong induction "
},
{
  "id": "sec_CompleteInduction-3",
  "level": "2",
  "url": "sec_CompleteInduction.html#sec_CompleteInduction-3",
  "type": "Theorem",
  "number": "4.25",
  "title": "Principle of Complete Mathematical Induction.",
  "body": " Principle of Complete Mathematical Induction   Let be a sequence of statements, one for each natural number. Assume that    is true for some , and    For all with , if is true for all such that , then is true.     Then is true for all .   "
},
{
  "id": "skeleton_complete_induction",
  "level": "2",
  "url": "sec_CompleteInduction.html#skeleton_complete_induction",
  "type": "Skeleton Proof",
  "number": "4.26",
  "title": "Proof of <span class=\"process-math\">\\((\\forall n\\in\\mathbb{N})P(n)\\)<\/span> by Complete Induction.",
  "body": " Proof of by Complete Induction   Here is the general structure for a proof by complete induction.    We proceed by complete induction.  Base step: [Verify that each of the statements are true. The value of depends on the statement.]  Inductive step: [Your goal is to prove For all with , if is true for all such that , then is true. ] Let with and suppose is true for all . [Do something to derive that is true.] Therefore, is true.    Thus, by complete induction, is true for all .    "
},
{
  "id": "sec_CompleteInduction-9",
  "level": "2",
  "url": "sec_CompleteInduction.html#sec_CompleteInduction-9",
  "type": "Theorem",
  "number": "4.27",
  "title": "",
  "body": "  Define a sequence of numbers by , , and for all natural numbers . Then for all .   "
},
{
  "id": "sec_CompleteInduction-10",
  "level": "2",
  "url": "sec_CompleteInduction.html#sec_CompleteInduction-10",
  "type": "Theorem",
  "number": "4.28",
  "title": "",
  "body": "  Define a sequence of numbers by , and for all natural numbers . Then for all .   "
},
{
  "id": "prob_Fibonacci",
  "level": "2",
  "url": "sec_CompleteInduction.html#prob_Fibonacci",
  "type": "Problem",
  "number": "4.29",
  "title": "",
  "body": "  The Fibonacci sequence is given by , , and for all natural numbers . Prove that for all .   "
},
{
  "id": "sec_CompleteInduction-13",
  "level": "2",
  "url": "sec_CompleteInduction.html#sec_CompleteInduction-13",
  "type": "Problem",
  "number": "4.30",
  "title": "",
  "body": "  Prove that every amount of postage that is at least cents can be made from -cent and -cent stamps.   "
},
{
  "id": "sec_CompleteInduction-14",
  "level": "2",
  "url": "sec_CompleteInduction.html#sec_CompleteInduction-14",
  "type": "Problem",
  "number": "4.31",
  "title": "",
  "body": "  Whoziwhatzits come in boxes of 6, 9, and 20. Prove that for any natural number , it is possible to buy exactly Whoziwhatzits with a combination of these boxes.   "
},
{
  "id": "sec_CompleteInduction-15",
  "level": "2",
  "url": "sec_CompleteInduction.html#sec_CompleteInduction-15",
  "type": "Problem",
  "number": "4.32",
  "title": "",
  "body": "  Consider a grid of squares that is squares wide and squares long. Using dominoes that are square by squares, there are many ways to perfectly cover this grid with no overlap. How many? Prove your answer.   "
},
{
  "id": "sec_CompleteInduction-16",
  "level": "2",
  "url": "sec_CompleteInduction.html#sec_CompleteInduction-16",
  "type": "Problem",
  "number": "4.33",
  "title": "",
  "body": "  A binary string of length is an ordered list of digits such that each digit is either 0 or 1. For example and are distinct binary strings of length 6. Here are the rules for Binary Solitaire : At any stage, you are allowed to:   Swap the leftmost digit (i.e., change 0 to 1, or 1 to 0). For example, we can do .    Swap the digit immediately to the right of the leftmost occurrence of 1. For example, we can do .     Prove that for all , you can change any binary string of length to any other binary string of the same length.   "
},
{
  "id": "sec_CompleteInduction-17",
  "level": "2",
  "url": "sec_CompleteInduction.html#sec_CompleteInduction-17",
  "type": "Problem",
  "number": "4.34",
  "title": "",
  "body": "  Prove that the number of binary strings of length that never have two consecutive 1's is the Fibonacci number . See Problem for the definition of the Fibonacci numbers.   "
},
{
  "id": "sec_WOP",
  "level": "1",
  "url": "sec_WOP.html",
  "type": "Section",
  "number": "4.4",
  "title": "The Well-Ordering Principle",
  "body": " The Well-Ordering Principle  The penultimate theorem of this chapter is known as the Well-Ordering Principle . As you shall see, this seemingly obvious theorem requires a bit of work to prove. It is worth noting that in some axiomatic systems, the Well-Ordering Principle is sometimes taken as an axiom. However, in our case, the result follows from complete induction. Before stating the Well-Ordering Principle, we need an additional definition.    Let and . Then is called a maximum (or greatest element ) of if for all , we have . Similarly, is called minimum (or least element ) of if for all , we have .    Not surprisingly, maximums and minimums are unique when they exist. It might be helpful to review Skeleton Proof prior to attacking the next result.    If such that the maximum (respectively, minimum) of exists, then the maximum (respectively, minimum) of is unique.    If the maximum of a set exists, then it is denoted by . Similarly, if the minimum of a set exists, then it is denoted by .    Find the maximum and the minimum for each of the following sets when they exist.                                                        To prove the Well-Ordering Principle, consider a proof by contradiction. Suppose is a nonempty subset of that does not have a least element. Define the proposition  is not an element of and then use complete induction to prove the result.   Well-Ordering Principle   Every nonempty subset of the natural numbers has a least element.    It turns out that the Well-Ordering Principle ( Theorem ) and the Axiom of Induction ( Axiom ) are equivalent. In other words, one can prove the Well-Ordering Principle from the Axiom of Induction, as we have done, but one can also prove the Axiom of Induction if the Well-Ordering Principle is assumed.  The final two theorems of this section can be thought of as generalized versions of the Well-Ordering Principle.    If is a nonempty subset of the integers and there exists such that for all , then contains a least element.      If is a nonempty subset of the integers and there exists such that for all , then contains a greatest element.    The element in Theorem is referred to as a lower bound for while the element in Theorem is called an upper bound for . We will study lower and upper bounds in more detail in Section .    Life is like riding a bicycle. To keep your balance you must keep moving.  Albert Einstein, theoretical physicist   "
},
{
  "id": "sec_WOP-2",
  "level": "2",
  "url": "sec_WOP.html#sec_WOP-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Well-Ordering Principle "
},
{
  "id": "sec_WOP-3",
  "level": "2",
  "url": "sec_WOP.html#sec_WOP-3",
  "type": "Definition",
  "number": "4.35",
  "title": "",
  "body": "  Let and . Then is called a maximum (or greatest element ) of if for all , we have . Similarly, is called minimum (or least element ) of if for all , we have .   "
},
{
  "id": "sec_WOP-5",
  "level": "2",
  "url": "sec_WOP.html#sec_WOP-5",
  "type": "Theorem",
  "number": "4.36",
  "title": "",
  "body": "  If such that the maximum (respectively, minimum) of exists, then the maximum (respectively, minimum) of is unique.   "
},
{
  "id": "prob_find_max_and_min",
  "level": "2",
  "url": "sec_WOP.html#prob_find_max_and_min",
  "type": "Problem",
  "number": "4.37",
  "title": "",
  "body": "  Find the maximum and the minimum for each of the following sets when they exist.                                                       "
},
{
  "id": "thm_WOP",
  "level": "2",
  "url": "sec_WOP.html#thm_WOP",
  "type": "Theorem",
  "number": "4.38",
  "title": "Well-Ordering Principle.",
  "body": " Well-Ordering Principle   Every nonempty subset of the natural numbers has a least element.   "
},
{
  "id": "thm_generalized_WOP",
  "level": "2",
  "url": "sec_WOP.html#thm_generalized_WOP",
  "type": "Theorem",
  "number": "4.39",
  "title": "",
  "body": "  If is a nonempty subset of the integers and there exists such that for all , then contains a least element.   "
},
{
  "id": "thm_reverse_WOP",
  "level": "2",
  "url": "sec_WOP.html#thm_reverse_WOP",
  "type": "Theorem",
  "number": "4.40",
  "title": "",
  "body": "  If is a nonempty subset of the integers and there exists such that for all , then contains a greatest element.   "
},
{
  "id": "sec_WOP-14",
  "level": "2",
  "url": "sec_WOP.html#sec_WOP-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "lower bound upper bound "
},
{
  "id": "sec_AxiomsRealNumbers",
  "level": "1",
  "url": "sec_AxiomsRealNumbers.html",
  "type": "Section",
  "number": "5.1",
  "title": "Axioms of the Real Numbers",
  "body": " Axioms of the Real Numbers  Our axioms for the real numbers fall into three categories:  Field Axioms: These axioms provide the essential properties of arithmetic involving addition and multiplication.   Order Axioms: These axioms provide the necessary properties of inequalities.  Completeness Axiom: This axiom ensures that the familiar number line that we use to model the real numbers does not have any holes in it.    We begin with the Field Axioms.     Field Axioms   There exist operations (addition) and (multiplication) on satisfying:  (F1) (Associativity for Addition) For all we have ;  (F2) (Commutativity for Addition) For all , we have ;  (F3) (Additive Identity) There exists such that for all , ;  (F4) (Additive Inverses) For all there exists such that ;  (F5) (Associativity for Multiplication) For all we have ;  (F6) (Commutativity for Multiplication) For all , we have ;  (F7) (Multiplicative Identity) There exists such that and for all , ;  (F8) (Multiplicative Inverses) For all there exists such that .  (F9) (Distributive Property) For all , ;      In the language of abstract algebra, Axioms F1 F4 and F5 F8 make each of and an abelian group under addition and multiplication, respectively. Axiom F9 provides a way for the operations of addition and multiplication to interact. Collectively, Axioms F1 F9 make the real numbers a field . Axioms F3 and F7 state the existence of additive and multiplicative identities, but these axioms do not assume that the elements are the unique elements with the specified properties. However, we can prove that this is the case. That is, and of are the unique additive and multiplicative identities in . To prove the following theorem, suppose and are both additive identities in and then show that . This shows that there can only be one additive identity. It is important to point out that we are not proving that the number introduced in Axiom F3 is unique, but rather there is a unique number with the property specified in Axiom F3.    There exists a unique additive identity of .    To prove the next theorem, mimic the approach you used to prove Theorem .    There exists a unique multiplicative identity of .    Similar to Axioms F3 and F7, Axioms F4 and F8 state the existence of additive and multiplicative inverses, but these axioms do not assume that these elements are the unique elements with the specified properties. However, we can prove that for every , the elements and (as long as ) are the unique additive and multiplicative inverses , respectively.    Every real number has a unique additive inverse.      Every nonzero real number has a unique multiplicative inverse.    In light of the last two theorems, we now know that sticking a minus sign in front of or raising to each correspond to an operation that yields a unique element with the corresponding inverse property. Note that since and additive inverses are unique, it must be the case that .  Since we are taking a formal axiomatic approach to the real numbers, we should make it clear how the natural numbers are embedded in .    We define the natural numbers , denoted by , to be the smallest subset of satisfying:   , and  for all , we have .      Notice the similarity between the definition of the natural numbers presented above and the Axiom of Induction given in Section . Of course, we use the standard numeral system to represent the natural numbers, so that .  Given the natural numbers, Axiom F3\/ Theorem and Axiom F4\/ Theorem together with the operation of addition allow us to define the integers , denoted by , in the obvious way. That is, the integers consist of the natural numbers together with the additive identity and all of the additive inverses of the natural numbers.  We now introduce some common notation that you are likely familiar with. Take a moment to think about why the following is a definition as opposed to an axiom or theorem.    For every and , we define the following:   (for )       The set of rational numbers , denoted by , is defined to be the collection of all real numbers having the form given in Part (b) of Definition with the additional requirement that and be integers. That is, The irrational numbers are defined to be .  Using the Field Axioms, we can prove each of the statements in the following theorem.    For all , we have the following:  if and only if ;  ;  ;  ;  ;  If , then ;  If and , then .  If , then either or .      Carefully prove the next theorem by explicitly citing where you are utilizing the Field Axioms and Theorem .    For all , we have .    We now introduce the Order Axioms of the real numbers.   Order Axioms   For , there is a relation on satisfying:   (O1) (Trichotomy Law) If , then either or but not both;  (O2) (Transitivity) If and , then ;  (O3) If , then ;  (O4) If and , then ;     Given Axioms O1 O4, we say that the real numbers are a linearly ordered field . We call numbers greater than zero positive and those greater than or equal to zero nonnegative . There are similar definitions for negative and nonpositive .  Notice that the Order Axioms are phrased in terms of . We would also like to be able to utilize , , and .    For , we define:  if ;  if or ;  if .      Notice that we took the existence of the inequalities , , , and on the real numbers for granted when we defined intervals of real numbers in Definition .  Using the Order Axioms, we can prove many familiar facts.    For all , if , then ; and if , then .    The next result extends Axiom O3.    For all , if and , then .      For all , if and only if .      If , , , and are positive real numbers such that and , then .      For all , we have the following:  if and only if either or ;  if and only if or .        For all positive real numbers and , if and only if .    Consider using three cases when approaching the proof of the following theorem.    For all , we have .    It might come as a surprise that the following result requires proof.    We have .    The previous theorem together with Theorem implies that as you expect. It also follows from Axiom O3 that for all , we have . We assume that there are no integers between and .    For all , if , then , and if , then .      For all , if , then . Moreover, if with , then .    The last few results allow us to take for granted our usual understanding of which real numbers are positive and which are negative. The next theorem yields a result that extends Theorem .    For all , if and , then .    There is a special function that we can now introduce.    Given , we define the absolute value of , denoted , via       For all , with equality only if .    We can interpret as the distance between and 0 as depicted in Figure .   Visual representation of .                   For all , we have .    Given two points and , , and hence by the previous theorem, is the distance between and as shown in Figure .   Visual representation of .        For all , .    In the next theorem, writing is an abbreviation for and .    For all , if , then .      For all , .      For all , .      For all with nonnegative, if and only if .    The letter was used in the previous theorem because it is the first letter of the word radius . If is positive, we can think of the interval as the interior of a one-dimensional circle with radius centered at 0. Figure provides a visual interpretation of Theorem .   Visual representation of .        For all with nonnegative, if and only if .    Since represents the distance between and , we can interpret as saying that the distance between and is less than or equal to . In other words, is within units of . See Figure .   Visual representation of .      Consider using and when attacking the next result, which is known as the Triangle Inequality . This result can be extremely useful in some contexts.   Triangle Inequality   For all , .    Figure depicts two of the cases for the Triangle Inequality.   Visual representation of two of the cases for the Triangle Inequality.                   Under what conditions do we have equality for the Triangle Inequality?    Where did the Triangle Inequality get its name? Why Triangle ? For any triangle (including degenerate triangles), the sum of the lengths of any two sides must be greater than or equal to the length of the remaining side. That is, if , , and are the lengths of the sides of the triangle, then , where we have equality only in the degenerate case of a triangle with no area. In linear algebra, the Triangle Inequality is a theorem about lengths of vectors. If and are vectors in , then the Triangle Inequality states that . Note that denotes the length of vector . See Figure . The version of the Triangle Inequality that we presented in Theorem is precisely the one-dimensional version of the Triangle Inequality in terms of vectors.   Triangle Inequality in terms of vectors.      The next theorem is sometimes called the Reverse Triangle Inequality .   Reverse Triangle Inequality   For all , .    Before we introduce the Completeness Axiom, we need some additional terminology.    Let . A point is called an upper bound of if for all , . The set is said to be bounded above if it has an upper bound.      The notion of a lower bound and the property of a set being bounded below are defined similarly. Try defining them.      Find all upper bounds and all lower bounds for each of the following sets when they exist.                  A set is bounded if is bounded above and below.    Notice that a set is bounded if and only if it is a subset of some bounded closed interval.    Let . A point is a supremum (or least upper bound ) of if is an upper bound of and for every upper bound of . Analogously, a point is an infimum (or greatest lower bound ) of if is a lower bound of and for every lower bound of .    Our next result tells us that a supremum of a set and an infimum of a set are unique when they exist.    If such that a supremum (respectively, infimum) of exists, then the supremum (respectively, infimum) of is unique.    In light of the previous theorem, if the supremum of exists, it is denoted by . Similarly, if the infimum of exists, it is denoted by .    Find the supremum and the infimum of each of the sets in Problem when they exist.    It is important to recognize that the supremum or infimum of a set may or may not be contained in the set. In particular, we have the following theorem concerning suprema and maximums. The analogous result holds for infima and minimums.    Let . Then has a maximum if and only if has a supremum and , in which case the .    Intuitively, a point is the supremum of a set if and only if no point smaller than the supremum can be an upper bound of . The next result makes this more precise.    Let such that is bounded above and let be an upper bound of . Then is the supremum of if and only if for every , there exists such that .      State and prove the analogous result to Theorem involving infimum.    The following axiom states that every nonempty subset of the real numbers that has an upper bound has a least upper bound.   Completeness Axiom   If is a nonempty subset of that is bounded above, then exists.    Given the Completeness Axiom, we say that the real numbers satisfy the least upper bound property . It is worth mentioning that we do not need the Completeness Axiom to conclude that every nonempty subset of the integers that is bounded above has a supremum, as this follows from Theorem (a generalized version of the Well-Ordering Principle).  Certainly, the real numbers also satisfy the analogous result involving infimum.    If is a nonempty subset of that is bounded below, then exists.    Our next result, called the Archimedean Property , tells us that for every real number, we can always find a natural number that is larger. To prove this theorem, consider a proof by contradiction and then utilize the Completeness Axiom and Theorem .   Archimedean Property   For every , there exists such that .    More generally, we can squeeze every real number between a pair of integers. The next result is sometimes referred to at the Generalized Archimedean Property .   Generalized Archimedean Property   For every , there exists such that .      For any positive real number , there exists such that .    The next theorem strengthens the Generalized Archimedean Property and says that every real number is either an integer or lies between a pair of consecutive integers. To prove this theorem, let and define . Use the Generalized Archimedean Property to conclude that is nonempty and then utilize Theorem .    For every , there exists such that .    To prove the next theorem, let , utilize Theorem on to obtain such that , and then apply Theorem to to conclude that there exists such that . Lastly, argue that is the rational number you seek.    If is an open interval, then there exists a rational number such that .    Recall that the real numbers consist of rational and irrational numbers. Two examples of an irrational number that you are likely familiar with are and . In Section , we will prove that is irrational, but for now we will take this fact for granted. It turns out that . This provides an example of an irrational number occurring between a pair of distinct rational numbers. The following theorem is a good challenge to generalize this.    If is an open interval, then there exists an irrational number such that .    Repeated applications of the previous two theorems implies that every open interval contains infinitely many rational numbers and infinitely many irrational numbers. In light of these two theorems, we say that both the rationals and irrationals are dense in the real numbers.    If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.  John von Neumann, mathematician   "
},
{
  "id": "axiom_field_axioms",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#axiom_field_axioms",
  "type": "Axiom",
  "number": "5.1",
  "title": "Field Axioms.",
  "body": " Field Axioms   There exist operations (addition) and (multiplication) on satisfying:  (F1) (Associativity for Addition) For all we have ;  (F2) (Commutativity for Addition) For all , we have ;  (F3) (Additive Identity) There exists such that for all , ;  (F4) (Additive Inverses) For all there exists such that ;  (F5) (Associativity for Multiplication) For all we have ;  (F6) (Commutativity for Multiplication) For all , we have ;  (F7) (Multiplicative Identity) There exists such that and for all , ;  (F8) (Multiplicative Inverses) For all there exists such that .  (F9) (Distributive Property) For all , ;     "
},
{
  "id": "sec_AxiomsRealNumbers-5",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "field additive multiplicative identities "
},
{
  "id": "thm_unique_additive_identity",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_unique_additive_identity",
  "type": "Theorem",
  "number": "5.2",
  "title": "",
  "body": "  There exists a unique additive identity of .   "
},
{
  "id": "thm_unique_multiplicative_identity",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_unique_multiplicative_identity",
  "type": "Theorem",
  "number": "5.3",
  "title": "",
  "body": "  There exists a unique multiplicative identity of .   "
},
{
  "id": "sec_AxiomsRealNumbers-9",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "additive multiplicative inverses "
},
{
  "id": "thm_unique_additive_inverse",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_unique_additive_inverse",
  "type": "Theorem",
  "number": "5.4",
  "title": "",
  "body": "  Every real number has a unique additive inverse.   "
},
{
  "id": "sec_AxiomsRealNumbers-11",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-11",
  "type": "Theorem",
  "number": "5.5",
  "title": "",
  "body": "  Every nonzero real number has a unique multiplicative inverse.   "
},
{
  "id": "sec_AxiomsRealNumbers-14",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-14",
  "type": "Definition",
  "number": "5.6",
  "title": "",
  "body": "  We define the natural numbers , denoted by , to be the smallest subset of satisfying:   , and  for all , we have .     "
},
{
  "id": "sec_AxiomsRealNumbers-16",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integers "
},
{
  "id": "def_real_number_notation",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#def_real_number_notation",
  "type": "Definition",
  "number": "5.7",
  "title": "",
  "body": "  For every and , we define the following:   (for )      "
},
{
  "id": "sec_AxiomsRealNumbers-19",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "rational numbers irrational numbers "
},
{
  "id": "thm_consequences_of_axioms",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_consequences_of_axioms",
  "type": "Theorem",
  "number": "5.8",
  "title": "",
  "body": "  For all , we have the following:  if and only if ;  ;  ;  ;  ;  If , then ;  If and , then .  If , then either or .     "
},
{
  "id": "sec_AxiomsRealNumbers-23",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-23",
  "type": "Theorem",
  "number": "5.9",
  "title": "",
  "body": "  For all , we have .   "
},
{
  "id": "axiom_order_axioms",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#axiom_order_axioms",
  "type": "Axiom",
  "number": "5.10",
  "title": "Order Axioms.",
  "body": " Order Axioms   For , there is a relation on satisfying:   (O1) (Trichotomy Law) If , then either or but not both;  (O2) (Transitivity) If and , then ;  (O3) If , then ;  (O4) If and , then ;    "
},
{
  "id": "sec_AxiomsRealNumbers-26",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearly ordered field positive nonnegative negative nonpositive "
},
{
  "id": "sec_AxiomsRealNumbers-28",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-28",
  "type": "Definition",
  "number": "5.11",
  "title": "",
  "body": "  For , we define:  if ;  if or ;  if .     "
},
{
  "id": "sec_AxiomsRealNumbers-31",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-31",
  "type": "Theorem",
  "number": "5.12",
  "title": "",
  "body": "  For all , if , then ; and if , then .   "
},
{
  "id": "sec_AxiomsRealNumbers-33",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-33",
  "type": "Theorem",
  "number": "5.13",
  "title": "",
  "body": "  For all , if and , then .   "
},
{
  "id": "thm_additive_inverse_of_a_positive_is_negative",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_additive_inverse_of_a_positive_is_negative",
  "type": "Theorem",
  "number": "5.14",
  "title": "",
  "body": "  For all , if and only if .   "
},
{
  "id": "sec_AxiomsRealNumbers-35",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-35",
  "type": "Theorem",
  "number": "5.15",
  "title": "",
  "body": "  If , , , and are positive real numbers such that and , then .   "
},
{
  "id": "sec_AxiomsRealNumbers-36",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-36",
  "type": "Theorem",
  "number": "5.16",
  "title": "",
  "body": "  For all , we have the following:  if and only if either or ;  if and only if or .     "
},
{
  "id": "sec_AxiomsRealNumbers-37",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-37",
  "type": "Theorem",
  "number": "5.17",
  "title": "",
  "body": "  For all positive real numbers and , if and only if .   "
},
{
  "id": "sec_AxiomsRealNumbers-39",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-39",
  "type": "Theorem",
  "number": "5.18",
  "title": "",
  "body": "  For all , we have .   "
},
{
  "id": "thm_0_1",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_0_1",
  "type": "Theorem",
  "number": "5.19",
  "title": "",
  "body": "  We have .   "
},
{
  "id": "sec_AxiomsRealNumbers-43",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-43",
  "type": "Theorem",
  "number": "5.20",
  "title": "",
  "body": "  For all , if , then , and if , then .   "
},
{
  "id": "thm_switch_inequality_using_negative",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_switch_inequality_using_negative",
  "type": "Theorem",
  "number": "5.21",
  "title": "",
  "body": "  For all , if , then . Moreover, if with , then .   "
},
{
  "id": "sec_AxiomsRealNumbers-46",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-46",
  "type": "Theorem",
  "number": "5.22",
  "title": "",
  "body": "  For all , if and , then .   "
},
{
  "id": "sec_AxiomsRealNumbers-48",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-48",
  "type": "Definition",
  "number": "5.23",
  "title": "",
  "body": "  Given , we define the absolute value of , denoted , via    "
},
{
  "id": "sec_AxiomsRealNumbers-49",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-49",
  "type": "Theorem",
  "number": "5.24",
  "title": "",
  "body": "  For all , with equality only if .   "
},
{
  "id": "fig_abs_value_as_distance",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#fig_abs_value_as_distance",
  "type": "Figure",
  "number": "5.1",
  "title": "",
  "body": " Visual representation of .                "
},
{
  "id": "sec_AxiomsRealNumbers-52",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-52",
  "type": "Theorem",
  "number": "5.25",
  "title": "",
  "body": "  For all , we have .   "
},
{
  "id": "fig_distance_between_a_and_b",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#fig_distance_between_a_and_b",
  "type": "Figure",
  "number": "5.2",
  "title": "",
  "body": " Visual representation of .     "
},
{
  "id": "sec_AxiomsRealNumbers-55",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-55",
  "type": "Theorem",
  "number": "5.26",
  "title": "",
  "body": "  For all , .   "
},
{
  "id": "sec_AxiomsRealNumbers-57",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-57",
  "type": "Theorem",
  "number": "5.27",
  "title": "",
  "body": "  For all , if , then .   "
},
{
  "id": "sec_AxiomsRealNumbers-58",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-58",
  "type": "Theorem",
  "number": "5.28",
  "title": "",
  "body": "  For all , .   "
},
{
  "id": "thm_plus_minus_less_than_or_equal_to_abs_value",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_plus_minus_less_than_or_equal_to_abs_value",
  "type": "Theorem",
  "number": "5.29",
  "title": "",
  "body": "  For all , .   "
},
{
  "id": "thm_abs_value_less_than_or_equal_to_iff_squeezed_by_plus_minus",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_abs_value_less_than_or_equal_to_iff_squeezed_by_plus_minus",
  "type": "Theorem",
  "number": "5.30",
  "title": "",
  "body": "  For all with nonnegative, if and only if .   "
},
{
  "id": "fig_abs_value_less_than_or_equal_to_iff_squeezed_by_plus_minus",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#fig_abs_value_less_than_or_equal_to_iff_squeezed_by_plus_minus",
  "type": "Figure",
  "number": "5.3",
  "title": "",
  "body": " Visual representation of .     "
},
{
  "id": "cor_distance_between_two_points_less_than_or_equal_to",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#cor_distance_between_two_points_less_than_or_equal_to",
  "type": "Corollary",
  "number": "5.31",
  "title": "",
  "body": "  For all with nonnegative, if and only if .   "
},
{
  "id": "fig_visual_of__a-b__r",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#fig_visual_of__a-b__r",
  "type": "Figure",
  "number": "5.4",
  "title": "",
  "body": " Visual representation of .     "
},
{
  "id": "sec_AxiomsRealNumbers-66",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-66",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Triangle Inequality "
},
{
  "id": "thm_triangle_inequality",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_triangle_inequality",
  "type": "Theorem",
  "number": "5.32",
  "title": "Triangle Inequality.",
  "body": " Triangle Inequality   For all , .   "
},
{
  "id": "fig_triangle_inequality",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#fig_triangle_inequality",
  "type": "Figure",
  "number": "5.5",
  "title": "",
  "body": " Visual representation of two of the cases for the Triangle Inequality.                "
},
{
  "id": "sec_AxiomsRealNumbers-70",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-70",
  "type": "Problem",
  "number": "5.33",
  "title": "",
  "body": "  Under what conditions do we have equality for the Triangle Inequality?   "
},
{
  "id": "fig_triangle_inequality_2d",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#fig_triangle_inequality_2d",
  "type": "Figure",
  "number": "5.6",
  "title": "",
  "body": " Triangle Inequality in terms of vectors.     "
},
{
  "id": "sec_AxiomsRealNumbers-73",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-73",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Reverse Triangle Inequality "
},
{
  "id": "sec_AxiomsRealNumbers-74",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-74",
  "type": "Theorem",
  "number": "5.34",
  "title": "Reverse Triangle Inequality.",
  "body": " Reverse Triangle Inequality   For all , .   "
},
{
  "id": "sec_AxiomsRealNumbers-76",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-76",
  "type": "Definition",
  "number": "5.35",
  "title": "",
  "body": "  Let . A point is called an upper bound of if for all , . The set is said to be bounded above if it has an upper bound.   "
},
{
  "id": "sec_AxiomsRealNumbers-77",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-77",
  "type": "Problem",
  "number": "5.36",
  "title": "",
  "body": "  The notion of a lower bound and the property of a set being bounded below are defined similarly. Try defining them.   "
},
{
  "id": "prob_find_upper_bounds",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#prob_find_upper_bounds",
  "type": "Problem",
  "number": "5.37",
  "title": "",
  "body": "  Find all upper bounds and all lower bounds for each of the following sets when they exist.               "
},
{
  "id": "sec_AxiomsRealNumbers-79",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-79",
  "type": "Definition",
  "number": "5.38",
  "title": "",
  "body": "  A set is bounded if is bounded above and below.   "
},
{
  "id": "sec_AxiomsRealNumbers-81",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-81",
  "type": "Definition",
  "number": "5.39",
  "title": "",
  "body": "  Let . A point is a supremum (or least upper bound ) of if is an upper bound of and for every upper bound of . Analogously, a point is an infimum (or greatest lower bound ) of if is a lower bound of and for every lower bound of .   "
},
{
  "id": "sec_AxiomsRealNumbers-83",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-83",
  "type": "Theorem",
  "number": "5.40",
  "title": "",
  "body": "  If such that a supremum (respectively, infimum) of exists, then the supremum (respectively, infimum) of is unique.   "
},
{
  "id": "sec_AxiomsRealNumbers-85",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-85",
  "type": "Problem",
  "number": "5.41",
  "title": "",
  "body": "  Find the supremum and the infimum of each of the sets in Problem when they exist.   "
},
{
  "id": "sec_AxiomsRealNumbers-87",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-87",
  "type": "Theorem",
  "number": "5.42",
  "title": "",
  "body": "  Let . Then has a maximum if and only if has a supremum and , in which case the .   "
},
{
  "id": "thm_scoot_in_characterization_of_sup",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_scoot_in_characterization_of_sup",
  "type": "Theorem",
  "number": "5.43",
  "title": "",
  "body": "  Let such that is bounded above and let be an upper bound of . Then is the supremum of if and only if for every , there exists such that .   "
},
{
  "id": "sec_AxiomsRealNumbers-90",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-90",
  "type": "Problem",
  "number": "5.44",
  "title": "",
  "body": "  State and prove the analogous result to Theorem involving infimum.   "
},
{
  "id": "axiom_completeness",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#axiom_completeness",
  "type": "Axiom",
  "number": "5.45",
  "title": "Completeness Axiom.",
  "body": " Completeness Axiom   If is a nonempty subset of that is bounded above, then exists.   "
},
{
  "id": "sec_AxiomsRealNumbers-93",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-93",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least upper bound property "
},
{
  "id": "sec_AxiomsRealNumbers-95",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-95",
  "type": "Theorem",
  "number": "5.46",
  "title": "",
  "body": "  If is a nonempty subset of that is bounded below, then exists.   "
},
{
  "id": "sec_AxiomsRealNumbers-96",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-96",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Archimedean Property "
},
{
  "id": "sec_AxiomsRealNumbers-97",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-97",
  "type": "Theorem",
  "number": "5.47",
  "title": "Archimedean Property.",
  "body": " Archimedean Property   For every , there exists such that .   "
},
{
  "id": "sec_AxiomsRealNumbers-98",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-98",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Generalized Archimedean Property "
},
{
  "id": "sec_AxiomsRealNumbers-99",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-99",
  "type": "Theorem",
  "number": "5.48",
  "title": "Generalized Archimedean Property.",
  "body": " Generalized Archimedean Property   For every , there exists such that .   "
},
{
  "id": "thm_small_reciprocal",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_small_reciprocal",
  "type": "Theorem",
  "number": "5.49",
  "title": "",
  "body": "  For any positive real number , there exists such that .   "
},
{
  "id": "thm_squeeze_with_consecutive_integers",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_squeeze_with_consecutive_integers",
  "type": "Theorem",
  "number": "5.50",
  "title": "",
  "body": "  For every , there exists such that .   "
},
{
  "id": "thm_rationals_dense",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_rationals_dense",
  "type": "Theorem",
  "number": "5.51",
  "title": "",
  "body": "  If is an open interval, then there exists a rational number such that .   "
},
{
  "id": "thm_irrationals_dense",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#thm_irrationals_dense",
  "type": "Theorem",
  "number": "5.52",
  "title": "",
  "body": "  If is an open interval, then there exists an irrational number such that .   "
},
{
  "id": "sec_AxiomsRealNumbers-107",
  "level": "2",
  "url": "sec_AxiomsRealNumbers.html#sec_AxiomsRealNumbers-107",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dense "
},
{
  "id": "sec_Topology",
  "level": "1",
  "url": "sec_Topology.html",
  "type": "Section",
  "number": "5.2",
  "title": "Standard Topology of the Real Line",
  "body": " Standard Topology of the Real Line  In this section, we will introduce the notions of open, closed, compact, and connected as they pertain to subsets of the real numbers. These properties form the underpinnings of a branch of mathematics called topology (derived from the Greek words tópos , meaning place, location , and ology , meaning study of ). Topology, sometimes called rubber sheet geometry, is concerned with properties of spaces that are invariant under any continuous deformation (e.g., bending, twisting, and stretching like rubber while not allowing tearing apart or gluing together). The fundamental concepts in topology are continuity, compactness, and connectedness, which rely on ideas such as arbitrary close and far apart . These ideas can be made precise using open sets.  Once considered an abstract branch of pure mathematics, topology now has applications in biology, computer science, physics, and robotics. The goal of this section is to introduce you to the basics of the set-theoretic definitions used in topology and to provide you with an opportunity to tinker with open and closed subsets of the real numbers. In Section , we will revisit these concepts and explore continuous functions.  For this entire section, our universe of discourse is the set of real numbers. You may assume all the usual basic algebraic properties of the real numbers (addition, subtraction, multiplication, division, commutative property, distribution, etc.). We will often refer to an element in a subset of real numbers as a point .    A set is called an open set if for every , there exists a bounded open interval containing such that .    It follows immediately from the definition that every open set is a union of bounded open intervals.    Determine whether each of the following sets is open. Justify your assertions.                                                                  As expected, every open interval (i.e., intervals of the form , , , or ) is an open set.    Every open interval is an open set.    However, it is important to point out that open sets can be more complicated than a single open interval.    Provide an example of an open set that is not a single open interval.      If and are open sets, then    is an open set, and     is an open set.       According to the next two theorems, the union of arbitrarily many open sets is open while the intersection of a finite number of open sets is open.    If is a collection of open sets, then is an open set.    Consider using induction to prove the next theorem.    If is a finite collection of open sets for , then is an open set.      Explain why we cannot utilize induction to prove that the intersection of infinitely many open sets indexed by the natural numbers is open.      Give an example of each of the following.   A collection of open sets such that is an open set.    A collection of open sets such that is not an open set.       According to the previous problem, the intersection of infinitely many open sets may or may not be open. So, we know that there is no theorem that states that the intersection of arbitrarily many open sets is open. We only know for certain that the intersection of finitely many open sets is open by Theorem .    Suppose . A point is an accumulation point of if for every bounded open interval containing , there exists a point such that .    Notice that if is an accumulation point of , then may or may not be in . Loosely speaking, is an accumulation point of a set if there are points in arbitrarily close to . That is, if we zoom in on , we should always see points in nearby.    Consider the open interval . Prove each of the following.   The points and are accumulation points of .    If , then is an accumulation point of .    If or , then is not an accumulation point of .         A point is an accumulation point of the intervals , , , and if and only if .      Prove that the point is an accumulation point of . Are there any other accumulation points of ?      Provide an example of a set with exactly two accumulation points.    Consider using and when proving the next result.    If , then is an accumulation point of .      A set is called closed if contains all of its accumulation points.      Determine whether each of the sets in Problem is closed. Justify your assertions.    The upshot of Parts (i) and (l) of Problems and is that and are both open and closed. It turns out that these are the only two subsets of the real numbers with this property. One issue with the terminology that could potentially create confusion is that the open interval is both an open and a closed set.    Provide an example of each of the following. You do not need to prove that your answers are correct.   A set that is open but not closed.    A set that is closed but not open.    A set that neither open nor closed.       Another potentially annoying feature of the terminology illustrated by Problem is that if a set is not open, it may or may not be closed. Similarly, if a set is not closed, it may or may not be open. That is, open and closed are not opposites of each other.  The next result justifies referring to as a closed interval.    Every interval of the form , , , or is a closed set.      Every finite subset of is closed.    Despite the fact that open and closed are not opposites of each other, there is a nice relationship between open and closed sets in terms of complements.    Let . Then is open if and only if is closed.      If and are closed sets, then    is a closed set, and     is a closed set.       The next two theorems are analogous to and .    If is a collection of closed sets, then is a closed set.      If is a finite collection of closed sets for , then is a closed set.      Provide an example of a collection of closed sets such that is not a closed set.      Determine whether each of the following sets is open, closed, both, or neither.             Prove or provide a counterexample: Every non-closed set has at least one accumulation point.    We now introduce three special classes of subsets of : compact, connected, and disconnected.    A set is called compact if is both closed and bounded.    It is important to point out that there is a more general definition of compact in an arbitrary topological space. However, using our notions of open and closed, it is a theorem that a subset of the real line is compact if and only if it is closed and bounded.    Determine whether each of the following sets is compact. Briefly justify your assertions.                                                                    Is every finite set compact? Justify your assertion.    The next theorem says that every nonempty compact set contains its greatest lower bound and its least upper bound. That is, every nonempty compact set attains a minimum and a maximum value.    If is a nonempty compact subset of , then .      A set is disconnected if there exists two disjoint open sets and such that and are nonempty but (equivalently, ). If a set is not disconnected, then we say that it is connected .    In other words, a set is disconnected if it can be partitioned into two nonempty subsets such that each subset does not contain points of the other and does not contain any accumulation points of the other. Showing that a set is disconnected is generally easier than showing a set is connected. To prove that a set is disconnected, you simply need to exhibit two open sets with the necessary properties. However, to prove that a set is connected, you need to prove that no such pair of open sets exists.    Determine whether each of the sets in Problem is is connected or disconnected. Briefly justify your assertions.      If , then is connected.    The proof of the next theorem is harder than you might expect. Consider a proof by contradiction and try to make use of the Completeness Axiom.    Every closed interval is connected.    It turns out that every connected set in is either a singleton or an interval. We have not officially proved this claim, but we do have the tools to do so. Feel free to try your hand at proving this fact.    If you learn how to learn, it's the ultimate meta skill and I believe you can learn how to be healthy, you can learn how to be fit, you can learn how to be happy, you can learn how to have good relationships, you can learn how to be successful. These are all things that can be learned. So if you can learn that is a trump card, it's an ace, it's a joker, it's a wild card. You can trade it for any other skill.  Naval Ravikant, entrepreneur & investor   "
},
{
  "id": "def_open",
  "level": "2",
  "url": "sec_Topology.html#def_open",
  "type": "Definition",
  "number": "5.53",
  "title": "",
  "body": "  A set is called an open set if for every , there exists a bounded open interval containing such that .   "
},
{
  "id": "prob_open_or_not",
  "level": "2",
  "url": "sec_Topology.html#prob_open_or_not",
  "type": "Problem",
  "number": "5.54",
  "title": "",
  "body": "  Determine whether each of the following sets is open. Justify your assertions.                                                                 "
},
{
  "id": "sec_Topology-9",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-9",
  "type": "Theorem",
  "number": "5.55",
  "title": "",
  "body": "  Every open interval is an open set.   "
},
{
  "id": "sec_Topology-11",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-11",
  "type": "Problem",
  "number": "5.56",
  "title": "",
  "body": "  Provide an example of an open set that is not a single open interval.   "
},
{
  "id": "thm_finite_union_and_intersection_of_open_sets",
  "level": "2",
  "url": "sec_Topology.html#thm_finite_union_and_intersection_of_open_sets",
  "type": "Theorem",
  "number": "5.57",
  "title": "",
  "body": "  If and are open sets, then    is an open set, and     is an open set.      "
},
{
  "id": "thm_union_of_open_sets",
  "level": "2",
  "url": "sec_Topology.html#thm_union_of_open_sets",
  "type": "Theorem",
  "number": "5.58",
  "title": "",
  "body": "  If is a collection of open sets, then is an open set.   "
},
{
  "id": "thm_finite_intersection_of_open_sets",
  "level": "2",
  "url": "sec_Topology.html#thm_finite_intersection_of_open_sets",
  "type": "Theorem",
  "number": "5.59",
  "title": "",
  "body": "  If is a finite collection of open sets for , then is an open set.   "
},
{
  "id": "sec_Topology-17",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-17",
  "type": "Problem",
  "number": "5.60",
  "title": "",
  "body": "  Explain why we cannot utilize induction to prove that the intersection of infinitely many open sets indexed by the natural numbers is open.   "
},
{
  "id": "prob_intersection_of_open_sets",
  "level": "2",
  "url": "sec_Topology.html#prob_intersection_of_open_sets",
  "type": "Problem",
  "number": "5.61",
  "title": "",
  "body": "  Give an example of each of the following.   A collection of open sets such that is an open set.    A collection of open sets such that is not an open set.      "
},
{
  "id": "sec_Topology-20",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-20",
  "type": "Definition",
  "number": "5.62",
  "title": "",
  "body": "  Suppose . A point is an accumulation point of if for every bounded open interval containing , there exists a point such that .   "
},
{
  "id": "sec_Topology-22",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-22",
  "type": "Problem",
  "number": "5.63",
  "title": "",
  "body": "  Consider the open interval . Prove each of the following.   The points and are accumulation points of .    If , then is an accumulation point of .    If or , then is not an accumulation point of .      "
},
{
  "id": "sec_Topology-23",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-23",
  "type": "Theorem",
  "number": "5.64",
  "title": "",
  "body": "  A point is an accumulation point of the intervals , , , and if and only if .   "
},
{
  "id": "sec_Topology-24",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-24",
  "type": "Problem",
  "number": "5.65",
  "title": "",
  "body": "  Prove that the point is an accumulation point of . Are there any other accumulation points of ?   "
},
{
  "id": "sec_Topology-25",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-25",
  "type": "Problem",
  "number": "5.66",
  "title": "",
  "body": "  Provide an example of a set with exactly two accumulation points.   "
},
{
  "id": "sec_Topology-27",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-27",
  "type": "Theorem",
  "number": "5.67",
  "title": "",
  "body": "  If , then is an accumulation point of .   "
},
{
  "id": "sec_Topology-28",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-28",
  "type": "Definition",
  "number": "5.68",
  "title": "",
  "body": "  A set is called closed if contains all of its accumulation points.   "
},
{
  "id": "prob_closed_or_not",
  "level": "2",
  "url": "sec_Topology.html#prob_closed_or_not",
  "type": "Problem",
  "number": "5.69",
  "title": "",
  "body": "  Determine whether each of the sets in Problem is closed. Justify your assertions.   "
},
{
  "id": "prob_open_vs_closed",
  "level": "2",
  "url": "sec_Topology.html#prob_open_vs_closed",
  "type": "Problem",
  "number": "5.70",
  "title": "",
  "body": "  Provide an example of each of the following. You do not need to prove that your answers are correct.   A set that is open but not closed.    A set that is closed but not open.    A set that neither open nor closed.      "
},
{
  "id": "sec_Topology-34",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-34",
  "type": "Theorem",
  "number": "5.71",
  "title": "",
  "body": "  Every interval of the form , , , or is a closed set.   "
},
{
  "id": "sec_Topology-35",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-35",
  "type": "Theorem",
  "number": "5.72",
  "title": "",
  "body": "  Every finite subset of is closed.   "
},
{
  "id": "sec_Topology-37",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-37",
  "type": "Theorem",
  "number": "5.73",
  "title": "",
  "body": "  Let . Then is open if and only if is closed.   "
},
{
  "id": "thm_finite_union_and_intersection_of_closed_sets",
  "level": "2",
  "url": "sec_Topology.html#thm_finite_union_and_intersection_of_closed_sets",
  "type": "Theorem",
  "number": "5.74",
  "title": "",
  "body": "  If and are closed sets, then    is a closed set, and     is a closed set.      "
},
{
  "id": "thm_intersection_of_closed_sets",
  "level": "2",
  "url": "sec_Topology.html#thm_intersection_of_closed_sets",
  "type": "Theorem",
  "number": "5.75",
  "title": "",
  "body": "  If is a collection of closed sets, then is a closed set.   "
},
{
  "id": "sec_Topology-41",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-41",
  "type": "Theorem",
  "number": "5.76",
  "title": "",
  "body": "  If is a finite collection of closed sets for , then is a closed set.   "
},
{
  "id": "prob_union_of_closed_sets",
  "level": "2",
  "url": "sec_Topology.html#prob_union_of_closed_sets",
  "type": "Problem",
  "number": "5.77",
  "title": "",
  "body": "  Provide an example of a collection of closed sets such that is not a closed set.   "
},
{
  "id": "prob_open_or_closed",
  "level": "2",
  "url": "sec_Topology.html#prob_open_or_closed",
  "type": "Problem",
  "number": "5.78",
  "title": "",
  "body": "  Determine whether each of the following sets is open, closed, both, or neither.          "
},
{
  "id": "sec_Topology-44",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-44",
  "type": "Problem",
  "number": "5.79",
  "title": "",
  "body": "  Prove or provide a counterexample: Every non-closed set has at least one accumulation point.   "
},
{
  "id": "sec_Topology-46",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-46",
  "type": "Definition",
  "number": "5.80",
  "title": "",
  "body": "  A set is called compact if is both closed and bounded.   "
},
{
  "id": "prob_compact_or_not",
  "level": "2",
  "url": "sec_Topology.html#prob_compact_or_not",
  "type": "Problem",
  "number": "5.81",
  "title": "",
  "body": "  Determine whether each of the following sets is compact. Briefly justify your assertions.                                                                 "
},
{
  "id": "sec_Topology-49",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-49",
  "type": "Problem",
  "number": "5.82",
  "title": "",
  "body": "  Is every finite set compact? Justify your assertion.   "
},
{
  "id": "sec_Topology-51",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-51",
  "type": "Theorem",
  "number": "5.83",
  "title": "",
  "body": "  If is a nonempty compact subset of , then .   "
},
{
  "id": "sec_Topology-52",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-52",
  "type": "Definition",
  "number": "5.84",
  "title": "",
  "body": "  A set is disconnected if there exists two disjoint open sets and such that and are nonempty but (equivalently, ). If a set is not disconnected, then we say that it is connected .   "
},
{
  "id": "sec_Topology-54",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-54",
  "type": "Problem",
  "number": "5.85",
  "title": "",
  "body": "  Determine whether each of the sets in Problem is is connected or disconnected. Briefly justify your assertions.   "
},
{
  "id": "sec_Topology-55",
  "level": "2",
  "url": "sec_Topology.html#sec_Topology-55",
  "type": "Theorem",
  "number": "5.86",
  "title": "",
  "body": "  If , then is connected.   "
},
{
  "id": "thm_closed_interval_connected",
  "level": "2",
  "url": "sec_Topology.html#thm_closed_interval_connected",
  "type": "Theorem",
  "number": "5.87",
  "title": "",
  "body": "  Every closed interval is connected.   "
},
{
  "id": "sec_FTA",
  "level": "1",
  "url": "sec_FTA.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Fundamental Theorem of Arithmetic",
  "body": " The Fundamental Theorem of Arithmetic  The goal of this section is to prove The Fundamental Theorem of Arithmetic. The Fundamental Theorem of Arithmetic (sometimes called the Unique Factorization Theorem) states that every natural number greater than 1 is either prime or is the product of prime numbers, where this product is unique up to the order of the factors. For example, the natural number 12 has prime factorization , where the order in which we write the prime factors (i.e., 2, 2, and 3) is irrelevant. That is, , , and are all the same prime factorization of 12. The requirement that the factors be prime is necessary since factorizations containing composite numbers may not be unique. For example, and , but these factorizations into composite numbers are distinct. We have just thrown around a few fancy terms; we should make sure we understand their precise meaning.    Let .   If such that divides , then we say that is a factor of .    If such that has exactly two distinct positive factors (namely, 1 and itself), then is called prime .    If such that is not prime, then is called composite .         According to our definition, is 1 a prime number or composite number? Explain your answer. You may have heard prime numbers defined as something like, a prime number is a natural number that is only divisible by 1 and itself. Does this definition agree with the one above?    The upshot is that according to our definition, 1 is neither prime nor composite. However, throughout history, this has not always been the case. There were times when and mathematicians for whom the number one was considered prime. Whether 1 is prime or not is a matter of definition, and hence a matter of choice. There are compelling reasons that we will not elaborate on here why 1 is intentionally excluded from being prime. However, if you would like to learn more, check out the excellent article  What is the Smallest Prime? by Chris Caldwell and Yeng Xiong.    List the first 10 prime numbers.      Prove or provide a counterexample: For all , if is prime, then is odd.      Prove or provide a counterexample: For all , is prime.    The next result makes up half of the Fundamental Theorem of Arithmetic. We provide a substantial hint for its proof. Let be the set of natural numbers for which the theorem fails. For sake of a contradiction, assume . By the Well-Ordering Principle ( Theorem ), contains a least element, say . Then cannot be prime since this would satisfy the theorem. So, it must be the case that has a divisor other than 1 and itself. This implies that there exists natural numbers and greater than 1 such that . Since was our smallest counterexample, what can you conclude about both and ? Use this information to derive a contradiction for .    If is a natural number greater than 1, then can be expressed as a product of primes. That is, we can write , where each of is a prime number (not necessarily distinct).     Theorem states that we can write every natural number greater than 1 as a product of primes, but it does not say that the primes and the number of times each prime appears are unique. To prove uniqueness, we will need Euclid's Lemma ( Theorem ). To prove Euclid's Lemma, we will utilize a special case of Bézout's Lemma ( Theorem ), the proof of which relies on the following result, known as the Division Algorithm. We include the proof of the Division Algorithm below, which makes use of the Well-Ordering Principle ( Theorem ).   Division Algorithm   If such that , then there exists unique such that with .     Let such that such that . We have two tasks. First, we need to show that and exist, and then we need to show that both are unique.  If , it is clear that we can take and , so that , as desired. Now, assume that and define .  If we can show that , then we can apply the Well-Ordering Principle ( Theorem ) to conclude that has a least element of S. This least element will be the remainder we are looking for. There are two cases.  First, suppose . If we take , then we get , which shows that .  Now, suppose . In this case, we can take , so that . Since and , . This shows that .  We have shown that , and so contains a least element for some . Then with . For sake of a contradiction, assume . This implies that there exists such that and . But then we see that .  This implies that . Since , we have produced an element of that is smaller than . This contradicts the fact that is the least element of , and so .  It remains to show that and are unique. Suppose such that and and . Without loss of generality, suppose , so that . Since , we see that . But then divides . If , then by Theorem , it must be the case that . However, we know , and so we must have . Therefore, , which in turn implies . We have shown that and are unique.   In the Division Algorithm, we call the dividend , the divisor , the quotient , and the remainder . It is worth pointing out that the Division Algorithm holds more generally where the divisor is not required to be positive. In this case, we must replace with .  Contrary to its name, our statement of the Division Algorithm is not actually an algorithm, but this is the theorem's traditional name. However, there is an algorithm buried in this theorem. If is nonnegative, repeatedly subtract from until we obtain an integer value that lies between 0 (inclusive) and (exclusive). The resulting value is the remainder while the number of times that is subtracted is the quotient . On the other hand, if is negative, repeatedly add to until we obtain an integer value that lies between 0 (inclusive) and (exclusive). Again, the resulting value is . However, in this case, we take to be the number of times that is added, so that (a negative value) is the quotient.    Suppose and . Find the quotient and remainder that are guaranteed to exist by the Division Algorithm. That is, find the unique such that and .    It is a little trickier to determine and when is negative.    Suppose and . Find the quotient and remainder that are guaranteed to exist by the Division Algorithm. That is, find the unique such that and .    It is useful to have some additional terminology.    Let such that at least one of or is nonzero. The greatest common divisor ( gcd ) of and , denoted , is the largest positive integer that divides both and . If , we say that and are relatively prime .      Find .      Provide an example of two natural numbers that are relatively prime.    The next result is a special case of a theorem known as Bézout's Lemma (or Bézout's Identity). Ultimately, we will need this theorem to prove Euclid's Lemma ( Theorem ), which we then use to prove uniqueness for the Fundamental Theorem of Arithmetic ( Theorem ). To prove our special case of Bézout's Lemma, consider the set . First, observe that (choose and ). It follows that is nonempty. By the Well-Ordering Principle ( Theorem ), contains a least element, say . This implies that there exists such that . Our goal is to show that . Now, choose . Then there exists such that . By the definition of , we know . By the Division Algorithm, there exists unique such that with . Now, solve for and then replace and with and , respectively. You should end up with an expression for involving , and . Next, rearrange this expression to obtain as a linear combination of and (i.e., a sum of a multiple of and a multiple of ). What does the minimality of imply about ? You should be able to conclude that is a multiple of . That is, every element of is a multiple of . However, recall that , is prime, and and are relatively prime. What can you conclude about ?   Special Case of Bézout's Lemma   If such that is prime and and are relatively prime, then there exists such that .      Consider the natural numbers 2 and 7, which happen to be relatively prime. Find integers and guaranteed to exist according to Theorem . That is, find such that .    The following theorem is known as Euclid's Lemma. Note that if divides , the conclusion is certainly true. So, assume otherwise. That is, assume that does not divide , so that and are relatively prime. Apply Theorem to and and then multiply the resulting equation by . Try to conclude that divides .   Euclid's Lemma   Assume that is prime. If divides , where , then either divides or divides .    In Euclid's Lemma, it is crucial that is prime as illustrated by the next problem.    Provide an example of integers such that divides yet does not divide and does not divide .    Alright, we are finally ready to tackle the proof of the Fundamental Theorem of Arithmetic. Let be a natural number greater than 1. By Theorem , we know that can be expressed as a product of primes. All that remains is to prove that this product is unique (up to the order in which they appear). For sake of a contradiction, suppose and are both prime factorizations of . Your goal is to prove that and that each is equal to some . Make repeated use of Euclid's Lemma.   Fundamental Theorem of Arithmetic   Every natural number greater than 1 can be expressed uniquely (up to the order in which they appear) as the product of one or more primes.    The Fundamental Theorem of Arithmetic is one of the many reasons why 1 is not considered a prime number. If 1 were prime, prime factorizations would not be unique.    Any creative endeavor is built on the ash heap of failure.  Michael Starbird, mathematician   "
},
{
  "id": "sec_FTA-3",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-3",
  "type": "Definition",
  "number": "6.1",
  "title": "",
  "body": "  Let .   If such that divides , then we say that is a factor of .    If such that has exactly two distinct positive factors (namely, 1 and itself), then is called prime .    If such that is not prime, then is called composite .      "
},
{
  "id": "sec_FTA-4",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-4",
  "type": "Problem",
  "number": "6.2",
  "title": "",
  "body": "  According to our definition, is 1 a prime number or composite number? Explain your answer. You may have heard prime numbers defined as something like, a prime number is a natural number that is only divisible by 1 and itself. Does this definition agree with the one above?   "
},
{
  "id": "sec_FTA-6",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-6",
  "type": "Problem",
  "number": "6.3",
  "title": "",
  "body": "  List the first 10 prime numbers.   "
},
{
  "id": "sec_FTA-7",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-7",
  "type": "Problem",
  "number": "6.4",
  "title": "",
  "body": "  Prove or provide a counterexample: For all , if is prime, then is odd.   "
},
{
  "id": "sec_FTA-8",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-8",
  "type": "Problem",
  "number": "6.5",
  "title": "",
  "body": "  Prove or provide a counterexample: For all , is prime.   "
},
{
  "id": "thm_prodprimes",
  "level": "2",
  "url": "sec_FTA.html#thm_prodprimes",
  "type": "Theorem",
  "number": "6.6",
  "title": "",
  "body": "  If is a natural number greater than 1, then can be expressed as a product of primes. That is, we can write , where each of is a prime number (not necessarily distinct).   "
},
{
  "id": "sec_FTA-11",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euclid's Lemma Bézout's Lemma "
},
{
  "id": "thm_DivisonAlgorthm",
  "level": "2",
  "url": "sec_FTA.html#thm_DivisonAlgorthm",
  "type": "Theorem",
  "number": "6.7",
  "title": "Division Algorithm.",
  "body": " Division Algorithm   If such that , then there exists unique such that with .   "
},
{
  "id": "sec_FTA-13",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-13",
  "type": "Proof",
  "number": "6.1.1",
  "title": "",
  "body": " Let such that such that . We have two tasks. First, we need to show that and exist, and then we need to show that both are unique.  If , it is clear that we can take and , so that , as desired. Now, assume that and define .  If we can show that , then we can apply the Well-Ordering Principle ( Theorem ) to conclude that has a least element of S. This least element will be the remainder we are looking for. There are two cases.  First, suppose . If we take , then we get , which shows that .  Now, suppose . In this case, we can take , so that . Since and , . This shows that .  We have shown that , and so contains a least element for some . Then with . For sake of a contradiction, assume . This implies that there exists such that and . But then we see that .  This implies that . Since , we have produced an element of that is smaller than . This contradicts the fact that is the least element of , and so .  It remains to show that and are unique. Suppose such that and and . Without loss of generality, suppose , so that . Since , we see that . But then divides . If , then by Theorem , it must be the case that . However, we know , and so we must have . Therefore, , which in turn implies . We have shown that and are unique.  "
},
{
  "id": "sec_FTA-14",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dividend divisor quotient remainder "
},
{
  "id": "sec_FTA-16",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-16",
  "type": "Problem",
  "number": "6.8",
  "title": "",
  "body": "  Suppose and . Find the quotient and remainder that are guaranteed to exist by the Division Algorithm. That is, find the unique such that and .   "
},
{
  "id": "sec_FTA-18",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-18",
  "type": "Problem",
  "number": "6.9",
  "title": "",
  "body": "  Suppose and . Find the quotient and remainder that are guaranteed to exist by the Division Algorithm. That is, find the unique such that and .   "
},
{
  "id": "sec_FTA-20",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-20",
  "type": "Definition",
  "number": "6.10",
  "title": "",
  "body": "  Let such that at least one of or is nonzero. The greatest common divisor ( gcd ) of and , denoted , is the largest positive integer that divides both and . If , we say that and are relatively prime .   "
},
{
  "id": "sec_FTA-21",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-21",
  "type": "Problem",
  "number": "6.11",
  "title": "",
  "body": "  Find .   "
},
{
  "id": "sec_FTA-22",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-22",
  "type": "Problem",
  "number": "6.12",
  "title": "",
  "body": "  Provide an example of two natural numbers that are relatively prime.   "
},
{
  "id": "thm_Bezout",
  "level": "2",
  "url": "sec_FTA.html#thm_Bezout",
  "type": "Theorem",
  "number": "6.13",
  "title": "Special Case of Bézout’s Lemma.",
  "body": " Special Case of Bézout's Lemma   If such that is prime and and are relatively prime, then there exists such that .   "
},
{
  "id": "sec_FTA-25",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-25",
  "type": "Problem",
  "number": "6.14",
  "title": "",
  "body": "  Consider the natural numbers 2 and 7, which happen to be relatively prime. Find integers and guaranteed to exist according to Theorem . That is, find such that .   "
},
{
  "id": "thm_Euclid",
  "level": "2",
  "url": "sec_FTA.html#thm_Euclid",
  "type": "Theorem",
  "number": "6.15",
  "title": "Euclid’s Lemma.",
  "body": " Euclid's Lemma   Assume that is prime. If divides , where , then either divides or divides .   "
},
{
  "id": "sec_FTA-29",
  "level": "2",
  "url": "sec_FTA.html#sec_FTA-29",
  "type": "Problem",
  "number": "6.16",
  "title": "",
  "body": "  Provide an example of integers such that divides yet does not divide and does not divide .   "
},
{
  "id": "thm_FTA",
  "level": "2",
  "url": "sec_FTA.html#thm_FTA",
  "type": "Theorem",
  "number": "6.17",
  "title": "Fundamental Theorem of Arithmetic.",
  "body": " Fundamental Theorem of Arithmetic   Every natural number greater than 1 can be expressed uniquely (up to the order in which they appear) as the product of one or more primes.   "
},
{
  "id": "sec_Irrationality_of_Root_2",
  "level": "1",
  "url": "sec_Irrationality_of_Root_2.html",
  "type": "Section",
  "number": "6.2",
  "title": "The Irrationality of <span class=\"process-math\">\\(\\sqrt{2}\\)<\/span>",
  "body": " The Irrationality of  In this section we will prove one of the oldest and most important theorems in mathematics: is irrational (see Theorem ). First, we need to know what this means.    Let .   We say that is rational if , where and .    In contrast, we say that is irrational if it is not rational.       The Pythagoreans were an ancient secret society that followed their spiritual leader: Pythagoras of Samos (c. 570 495 BCE). The Pythagoreans believed that the way to spiritual fulfillment and to an understanding of the universe was through the study of mathematics. They believed that all of mathematics, music, and astronomy could be described via whole numbers and their ratios. In modern mathematical terms they believed that all numbers are rational. Attributed to Pythagoras is the saying, Beatitude is the knowledge of the perfection of the numbers of the soul. And their motto was All is number.   Thus they were stunned when one of their own Hippasus of Metapontum (c. 5th century BCE) discovered that the side and the diagonal of a square are incommensurable. That is, the ratio of the length of the diagonal to the length of the side is irrational. Indeed, if the side of the square has length , then the diagonal will have length ; the ratio is (see Figure ).   The side and diagonal of a square are incommensurable.      In Section , we took for granted that was irrational. We now prove this fact. Consider using a proof by contradiction. Suppose that there exist such that and . Are there an odd or even number of factors of 2 on each side of this equation? Does your conclusion violate the Fundamental Theorem of Arithmetic ( Theorem )?    The real number is irrational.    As one might expect, the Pythagoreans were unhappy with this discovery. Legend says that Hippasus was expelled from the Pythagoreans and was perhaps drowned at sea. Ironically, this result, which angered the Pythagoreans so much, is probably their greatest contribution to mathematics: the discovery of irrational numbers.  See if you can generalize the technique in the proof of Theorem to prove the next two theorems.    Let be a prime number. Then is irrational.      Let and be distinct primes. Then is irrational.      State a generalization of Theorem and briefly describe how its proof would go. Be as general as possible.    It is important to point out that not every positive irrational number is equal to the square root of some natural number. For example, is irrational, but is not equal to the square root of a natural number.    Getting better is not pretty. To get good we have to be down to struggle, seek out challenges, make some mistakes, to train ugly.  Trevor Ragan, thelearnerlab.com   "
},
{
  "id": "sec_Irrationality_of_Root_2-3",
  "level": "2",
  "url": "sec_Irrationality_of_Root_2.html#sec_Irrationality_of_Root_2-3",
  "type": "Definition",
  "number": "6.18",
  "title": "",
  "body": "  Let .   We say that is rational if , where and .    In contrast, we say that is irrational if it is not rational.      "
},
{
  "id": "fig_square",
  "level": "2",
  "url": "sec_Irrationality_of_Root_2.html#fig_square",
  "type": "Figure",
  "number": "6.1",
  "title": "",
  "body": " The side and diagonal of a square are incommensurable.     "
},
{
  "id": "thm_sqrt2",
  "level": "2",
  "url": "sec_Irrationality_of_Root_2.html#thm_sqrt2",
  "type": "Theorem",
  "number": "6.19",
  "title": "",
  "body": "  The real number is irrational.   "
},
{
  "id": "thm_sqrtp",
  "level": "2",
  "url": "sec_Irrationality_of_Root_2.html#thm_sqrtp",
  "type": "Theorem",
  "number": "6.20",
  "title": "",
  "body": "  Let be a prime number. Then is irrational.   "
},
{
  "id": "thm_sqrt_pq_",
  "level": "2",
  "url": "sec_Irrationality_of_Root_2.html#thm_sqrt_pq_",
  "type": "Theorem",
  "number": "6.21",
  "title": "",
  "body": "  Let and be distinct primes. Then is irrational.   "
},
{
  "id": "sec_Irrationality_of_Root_2-13",
  "level": "2",
  "url": "sec_Irrationality_of_Root_2.html#sec_Irrationality_of_Root_2-13",
  "type": "Problem",
  "number": "6.22",
  "title": "",
  "body": "  State a generalization of Theorem and briefly describe how its proof would go. Be as general as possible.   "
},
{
  "id": "sec_Infinitude_of_Primes",
  "level": "1",
  "url": "sec_Infinitude_of_Primes.html",
  "type": "Section",
  "number": "6.3",
  "title": "The Infinitude of Primes",
  "body": " The Infinitude of Primes  The highlight of this section is Theorem , which states that there are infinitely many primes. The first known proof of this theorem is in Euclid's Elements (c. 300 BCE). Euclid stated it as follows:   Proposition IX.20. Prime numbers are more than any assigned multitude of prime numbers.  There are a few interesting observations to make about Euclid's proposition and his proof. First, notice that the statement of the theorem does not contain the word infinity. The Greek's were skittish about the idea of infinity. Thus, he proved that there were more primes than any given finite number. Today we would say that there are infinitely many. In fact, Euclid proved that there are more than three primes and concluded that there were more than any finite number. While such a proof is not considered valid in the modern era, we can forgive Euclid for this less-than-rigorous proof; in fact, it is easy to turn his proof into the general one that you will give below. Lastly, Euclid's proof was geometric. He was viewing his numbers as line segments with integral length. The modern concept of number was not developed yet.  Prior to tackling a proof of Theorem , we need to prove a couple of preliminary results. The proof of the first result is provided for you.    The only natural number that divides is .     Let be a natural number that divides . We know that because 1 is the smallest positive integer. Since divides , there exists such that . Since , we see that . But , and so . Thus, we have , which implies that , as desired.   For the next theorem, try utilizing a proof by contradiction together with Theorem .    Let be a prime number and let . If divides , then does not divide .    We are now ready to prove the following important theorem. Use a proof by contradiction. In particular, assume that there are finitely many primes, say . Consider the product of all of them and then add 1.    There are infinitely many prime numbers.    We conclude this chapter with a fun problem involving prime numbers. This problem comes from David Richeson (Dickinson College).    Start with the first prime numbers, . Divide them into two sets. Let be the product of the primes in one set and let be the product of the primes in the other set. Assume the product is 1 if the set is empty. For example, if , we could have and , and so and . In general, what can we conclude about and ? Form a conjecture and then prove it.      It does not matter how slowly you go as long as you do not stop.  Confucius, philosopher   "
},
{
  "id": "thm_divisorsof1",
  "level": "2",
  "url": "sec_Infinitude_of_Primes.html#thm_divisorsof1",
  "type": "Theorem",
  "number": "6.23",
  "title": "",
  "body": "  The only natural number that divides is .   "
},
{
  "id": "sec_Infinitude_of_Primes-7",
  "level": "2",
  "url": "sec_Infinitude_of_Primes.html#sec_Infinitude_of_Primes-7",
  "type": "Proof",
  "number": "6.3.1",
  "title": "",
  "body": " Let be a natural number that divides . We know that because 1 is the smallest positive integer. Since divides , there exists such that . Since , we see that . But , and so . Thus, we have , which implies that , as desired.  "
},
{
  "id": "thm_plus1",
  "level": "2",
  "url": "sec_Infinitude_of_Primes.html#thm_plus1",
  "type": "Theorem",
  "number": "6.24",
  "title": "",
  "body": "  Let be a prime number and let . If divides , then does not divide .   "
},
{
  "id": "thm_infprimes",
  "level": "2",
  "url": "sec_Infinitude_of_Primes.html#thm_infprimes",
  "type": "Theorem",
  "number": "6.25",
  "title": "",
  "body": "  There are infinitely many prime numbers.   "
},
{
  "id": "sec_Infinitude_of_Primes-13",
  "level": "2",
  "url": "sec_Infinitude_of_Primes.html#sec_Infinitude_of_Primes-13",
  "type": "Problem",
  "number": "6.26",
  "title": "",
  "body": "  Start with the first prime numbers, . Divide them into two sets. Let be the product of the primes in one set and let be the product of the primes in the other set. Assume the product is 1 if the set is empty. For example, if , we could have and , and so and . In general, what can we conclude about and ? Form a conjecture and then prove it.   "
},
{
  "id": "sec_Relations",
  "level": "1",
  "url": "sec_Relations.html",
  "type": "Section",
  "number": "7.1",
  "title": "Relations",
  "body": " Relations  Recall from Section that the Cartesian product of two sets and , written , is the set of all ordered pairs , where and . That is, .    Let and be sets. A relation  from to is a subset of . If is a relation from to and , then we say that is related to  and we may write in place of . If is a relation from to the same set , then we say that is a relation on  .      The set from Problem is an example of a relation on since is a subset of .    It is important to notice that the order in which we write things for relations matters. In particular, if is a relation from to and , then it may or may not be the case that .    If and , then the set of ordered pairs is an example of a relation from to . In this case, we could write or . We could also say that is related to 1, 2, and 4.      As in the previous example, let . One possible relation on is given by .      Consider the set of accounts on the social media platform Twitter. On Twitter, each account has a set of accounts that they follow. We can model this situation mathematically using a relation on . Define on via if follows on Twitter. As a set .      You are already familiar with many relations. For example, , , and are each examples of relations on the real numbers. We could say that is in the relation and the relation since and . However, is not in the relation since . Also, notice that order matters for the relations and yet does not for . For example, is in the relation while is not.      Define the relation from to via if is even and if is odd. That is, is related to all even integers and is related to all odd integers.      Let be any set. Since , the empty set forms a relation on . This relation is called the empty relation on .    Relations can be represented using digraphs. A digraph (short for directed graph ) is a discrete graph that consists of a set of vertices connected by edges, where the edges have a direction associated with them. If is a relation from to , then the elements of and are the vertices of the digraph and there is a directed edge from to if is in the relation (i.e., ). We can visually represent digraphs by using dots to represent the vertices and arrows to represent directed edges. We will not make a distinction between a digraph and its visual representation. Utilizing a digraph to represent a relation may be impractical if there is a large number of vertices or directed edges.    Consider the relation given in Example . The corresponding digraph is depicted in Figure . Notice that we have placed the vertices corresponding to elements of on the left and the elements of on the right. This is standard practice, but what really matters is the edge connections not how the vertices are placed on the page.     Digraph for a relation from to .        Let and and define from to via if is divisible by 2. List the ordered pairs in and draw the corresponding digraph.    If is a relation on (i.e., a relation from to ), then we can simplify the structure of the digraph by only utilizing one copy of for the vertices. In this case, we may have directed edges that point from a vertex to itself. When drawing digraphs for a relation on a set, we will default to this simplified digraph (like the one depicted in Figure ).     Figure represents the relation of Example as a digraph from to while the digraph in Figure provides a streamlined representation of the same relation that uses the elements in only once instead of twice.     Two variations of digraphs for a relation on .                 Let and define on via if divides . List the ordered pairs in and draw the corresponding digraph.      Let and define on via .   Draw the digraph for .    Draw the digraph for the empty relation on .       We can also visually represent a relation by plotting the points in the relation. In particular, if is a relation from to and , we can plot all points that satisfy in two dimensions, where we interpret the set to be the horizontal axis and to be the vertical axis. We will refer to this visual representation of a relation as the graph of the relation.    When we write , we are implicitly defining a relation. In particular, the relation is the set of ordered pairs satisfying , namely . The graph of this relation in is the unit circle centered at the origin in the plane as shown in Figure .     Graph of the relation determined by .        For each of the following, draw a portion of the graph that represents the relation as a subset of .                            Draw a portion of the graph that represents the relation on .    For a relation on a set, it is natural to consider the collection of elements that a given element is related to. For example, a user's Following List on Twitter is the set of accounts on Twitter that the user is following.    Let be a relation on a set . For each , we define the set of relatives of with respect to via .  We also define the collection of the sets of relatives with respect to by .    If is clear from the context, we will usually write in place of . In terms of digraphs, is the collection of vertices that have a directed edge pointing towards them from the vertex labeled by . In graph theory, this collection of vertices is called the out neighborhood of and each such vertex is called an out neighbor . Notice that is a set of sets. In particular, an element in is a subset of equivalently, an element of .    Consider the relation given in Example . By inspecting the ordered pairs in or by looking at the digraph in Figure , we see that , so that .      Consider the relation given in Problem (a). Find by determining for each .      Describe the collection of the sets of relatives with respect to the empty relation from Problem (b).      Let denote the set of all people with accounts on Facebook and define the relation on via if is friends with . Describe , where Maria is the name of a specific Facebook user. What is ?      Define the relation on via if is divisible by 5. Find , , and . How many distinct sets are in ? List the distinct sets in .      Consider the relation on . If , what is ?      Suppose is a relation on such that , , , , and . List the ordered pairs in and draw the corresponding digraph.    We will now examine three important properties that a relation on a set may or may not possess.    Let be a relation on a set .   The relation is reflexive if for all , .    The relation is symmetric if for all , if , then .    The relation is transitive if for all , if and , then .         Here are a few examples that illustrate the concepts in the previous definition.   The relation on is reflexive, symmetric, and transitive.    The relation is reflexive and transitive on , but not symmetric. However, notice that is transitive on , but neither symmetric nor reflexive.    If is a set, then on is reflexive and transitive, but not symmetric.         Determine whether the relations given in each of the following is reflexive, symmetric, or transitive.    Example      Problem          Suppose is a relation on a set .   Explain what it means for to not be reflexive.    Explain what it means for to not be symmetric.    Explain what it means for to not be transitive.         Let .   Define a relation on that is reflexive but not symmetric nor transitive.    Define a relation on that is symmetric but not reflexive nor transitive.    Define a relation on that is transitive but not reflexive nor symmetric.         Given a relation on a finite set , describe what each of reflexive, symmetric, and transitive look like in terms of a digraph. That is, draw pictures that represent each of reflexive, symmetric, and transitive. One thing to keep in mind is that the elements used in the definitions of symmetric and transitive do not have to be distinct. So, you might need to consider multiple cases.    Below, we provide skeleton proofs for proving that a relation is reflexive, symmetric, or transitive. Notice that the skeleton proof for proving that a relation is reflexive is a special case of Skeleton Proof . Similarly, the skeleton proofs involving symmetric and transitive are both special cases of Skeleton Proof . It is important to point out that every relation on the empty set is vacuously reflexive, symmetric, and transitive. In the skeleton proofs below, we are implicitly assuming that the set in question is nonempty. In some circumstances, it may be necessary to mention the possibility of the empty set.   Proof that a relation is reflexive   Here is the general structure for proving that a relation is reflexive.   Assume is a relation on defined by (or satisfying)  [Use the given definition (or describe the given property) of ] . Let .  [Use the definition (or property) of to verify that ]  Therefore, the relation is reflexive on .      Proof that a relation is symmetric   Here is the general structure for proving that a relation is symmetric.   Assume is a relation on defined by (or satisfying)  [Use the given definition (or describe the given property) of ] . Let and suppose .  [Use assumption that with definition (or property) of to verify that ] Therefore, the relation is symmetric on .      Proof that a relation is transitive   Here is the general structure for proving that a relation is transitive.   Assume is a relation on defined by (or satisfying)  [Use the given definition (or describe the given property) of ] . Let and suppose and .  [Use assumption that and with definition (or property) of to verify that ] Therefore, the relation is transitive on .       Determine whether each of the following relations is reflexive, symmetric, or transitive. In each case, you should either provide a specific counterexample or a proof.  Consider the relation described in Example .  Consider the relation described in Problem .  Consider the relation described in Problem .  Let be the set of all people and define via if and have the same height.  Let be the set of all people and define via if is taller than .  Consider the relation divides on .  Let be the set of lines and define via if is parallel to .  Let be the set of continuous functions on . Define if .  Define on via if is even.  Define on via if .  Define on via if . Do you recognize this relation? Think about fractions.  Define on via if .  Define on via if , where is the greatest integer less than or equal to (e.g., , , and ).  Define on via if .        Most of what we believe, we believe because it was told to us by someone we trusted. What I would like to suggest, however, is that if we rely too much on that kind of education, we could find in the end that we have never really learned anything.  Paul Wallace, physicist & theologian   "
},
{
  "id": "sec_Relations-3",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-3",
  "type": "Definition",
  "number": "7.1",
  "title": "",
  "body": "  Let and be sets. A relation  from to is a subset of . If is a relation from to and , then we say that is related to  and we may write in place of . If is a relation from to the same set , then we say that is a relation on  .   "
},
{
  "id": "sec_Relations-4",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-4",
  "type": "Example",
  "number": "7.2",
  "title": "",
  "body": "  The set from Problem is an example of a relation on since is a subset of .   "
},
{
  "id": "ex_relation_finite_to_finite",
  "level": "2",
  "url": "sec_Relations.html#ex_relation_finite_to_finite",
  "type": "Example",
  "number": "7.3",
  "title": "",
  "body": "  If and , then the set of ordered pairs is an example of a relation from to . In this case, we could write or . We could also say that is related to 1, 2, and 4.   "
},
{
  "id": "ex_relation_on_finite",
  "level": "2",
  "url": "sec_Relations.html#ex_relation_on_finite",
  "type": "Example",
  "number": "7.4",
  "title": "",
  "body": "  As in the previous example, let . One possible relation on is given by .   "
},
{
  "id": "ex_Twitter",
  "level": "2",
  "url": "sec_Relations.html#ex_Twitter",
  "type": "Example",
  "number": "7.5",
  "title": "",
  "body": "  Consider the set of accounts on the social media platform Twitter. On Twitter, each account has a set of accounts that they follow. We can model this situation mathematically using a relation on . Define on via if follows on Twitter. As a set .   "
},
{
  "id": "sec_Relations-9",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-9",
  "type": "Example",
  "number": "7.6",
  "title": "",
  "body": "  You are already familiar with many relations. For example, , , and are each examples of relations on the real numbers. We could say that is in the relation and the relation since and . However, is not in the relation since . Also, notice that order matters for the relations and yet does not for . For example, is in the relation while is not.   "
},
{
  "id": "sec_Relations-10",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-10",
  "type": "Example",
  "number": "7.7",
  "title": "",
  "body": "  Define the relation from to via if is even and if is odd. That is, is related to all even integers and is related to all odd integers.   "
},
{
  "id": "sec_Relations-11",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-11",
  "type": "Example",
  "number": "7.8",
  "title": "",
  "body": "  Let be any set. Since , the empty set forms a relation on . This relation is called the empty relation on .   "
},
{
  "id": "sec_Relations-12",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "digraph directed graph "
},
{
  "id": "sec_Relations-13",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-13",
  "type": "Example",
  "number": "7.9",
  "title": "",
  "body": "  Consider the relation given in Example . The corresponding digraph is depicted in Figure . Notice that we have placed the vertices corresponding to elements of on the left and the elements of on the right. This is standard practice, but what really matters is the edge connections not how the vertices are placed on the page.   "
},
{
  "id": "fig_digraph_finite_to_finite",
  "level": "2",
  "url": "sec_Relations.html#fig_digraph_finite_to_finite",
  "type": "Figure",
  "number": "7.1",
  "title": "",
  "body": " Digraph for a relation from to .     "
},
{
  "id": "sec_Relations-15",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-15",
  "type": "Problem",
  "number": "7.10",
  "title": "",
  "body": "  Let and and define from to via if is divisible by 2. List the ordered pairs in and draw the corresponding digraph.   "
},
{
  "id": "ex_digraph",
  "level": "2",
  "url": "sec_Relations.html#ex_digraph",
  "type": "Example",
  "number": "7.11",
  "title": "",
  "body": "   Figure represents the relation of Example as a digraph from to while the digraph in Figure provides a streamlined representation of the same relation that uses the elements in only once instead of twice.   "
},
{
  "id": "fig_digraph_on_finite",
  "level": "2",
  "url": "sec_Relations.html#fig_digraph_on_finite",
  "type": "Figure",
  "number": "7.2",
  "title": "",
  "body": " Two variations of digraphs for a relation on .              "
},
{
  "id": "prob_divides",
  "level": "2",
  "url": "sec_Relations.html#prob_divides",
  "type": "Problem",
  "number": "7.12",
  "title": "",
  "body": "  Let and define on via if divides . List the ordered pairs in and draw the corresponding digraph.   "
},
{
  "id": "prob_another_relation_on_finite",
  "level": "2",
  "url": "sec_Relations.html#prob_another_relation_on_finite",
  "type": "Problem",
  "number": "7.13",
  "title": "",
  "body": "  Let and define on via .   Draw the digraph for .    Draw the digraph for the empty relation on .      "
},
{
  "id": "sec_Relations-21",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-21",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "graph "
},
{
  "id": "ex_circle",
  "level": "2",
  "url": "sec_Relations.html#ex_circle",
  "type": "Example",
  "number": "7.14",
  "title": "",
  "body": "  When we write , we are implicitly defining a relation. In particular, the relation is the set of ordered pairs satisfying , namely . The graph of this relation in is the unit circle centered at the origin in the plane as shown in Figure .   "
},
{
  "id": "fig_unit_circle",
  "level": "2",
  "url": "sec_Relations.html#fig_unit_circle",
  "type": "Figure",
  "number": "7.3",
  "title": "",
  "body": " Graph of the relation determined by .     "
},
{
  "id": "prob_parabola",
  "level": "2",
  "url": "sec_Relations.html#prob_parabola",
  "type": "Problem",
  "number": "7.15",
  "title": "",
  "body": "  For each of the following, draw a portion of the graph that represents the relation as a subset of .                         "
},
{
  "id": "sec_Relations-25",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-25",
  "type": "Problem",
  "number": "7.16",
  "title": "",
  "body": "  Draw a portion of the graph that represents the relation on .   "
},
{
  "id": "def_relatives",
  "level": "2",
  "url": "sec_Relations.html#def_relatives",
  "type": "Definition",
  "number": "7.17",
  "title": "",
  "body": "  Let be a relation on a set . For each , we define the set of relatives of with respect to via .  We also define the collection of the sets of relatives with respect to by .   "
},
{
  "id": "sec_Relations-28",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "out neighborhood out neighbor "
},
{
  "id": "sec_Relations-29",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-29",
  "type": "Example",
  "number": "7.18",
  "title": "",
  "body": "  Consider the relation given in Example . By inspecting the ordered pairs in or by looking at the digraph in Figure , we see that , so that .   "
},
{
  "id": "sec_Relations-30",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-30",
  "type": "Problem",
  "number": "7.19",
  "title": "",
  "body": "  Consider the relation given in Problem (a). Find by determining for each .   "
},
{
  "id": "sec_Relations-31",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-31",
  "type": "Problem",
  "number": "7.20",
  "title": "",
  "body": "  Describe the collection of the sets of relatives with respect to the empty relation from Problem (b).   "
},
{
  "id": "prob_facebook",
  "level": "2",
  "url": "sec_Relations.html#prob_facebook",
  "type": "Problem",
  "number": "7.21",
  "title": "",
  "body": "  Let denote the set of all people with accounts on Facebook and define the relation on via if is friends with . Describe , where Maria is the name of a specific Facebook user. What is ?   "
},
{
  "id": "prob_mod_5",
  "level": "2",
  "url": "sec_Relations.html#prob_mod_5",
  "type": "Problem",
  "number": "7.22",
  "title": "",
  "body": "  Define the relation on via if is divisible by 5. Find , , and . How many distinct sets are in ? List the distinct sets in .   "
},
{
  "id": "sec_Relations-34",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-34",
  "type": "Problem",
  "number": "7.23",
  "title": "",
  "body": "  Consider the relation on . If , what is ?   "
},
{
  "id": "prob_find_sim_from_Rel",
  "level": "2",
  "url": "sec_Relations.html#prob_find_sim_from_Rel",
  "type": "Problem",
  "number": "7.24",
  "title": "",
  "body": "  Suppose is a relation on such that , , , , and . List the ordered pairs in and draw the corresponding digraph.   "
},
{
  "id": "sec_Relations-37",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-37",
  "type": "Definition",
  "number": "7.25",
  "title": "",
  "body": "  Let be a relation on a set .   The relation is reflexive if for all , .    The relation is symmetric if for all , if , then .    The relation is transitive if for all , if and , then .      "
},
{
  "id": "sec_Relations-38",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-38",
  "type": "Example",
  "number": "7.26",
  "title": "",
  "body": "  Here are a few examples that illustrate the concepts in the previous definition.   The relation on is reflexive, symmetric, and transitive.    The relation is reflexive and transitive on , but not symmetric. However, notice that is transitive on , but neither symmetric nor reflexive.    If is a set, then on is reflexive and transitive, but not symmetric.      "
},
{
  "id": "sec_Relations-39",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-39",
  "type": "Problem",
  "number": "7.27",
  "title": "",
  "body": "  Determine whether the relations given in each of the following is reflexive, symmetric, or transitive.    Example      Problem       "
},
{
  "id": "sec_Relations-40",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-40",
  "type": "Problem",
  "number": "7.28",
  "title": "",
  "body": "  Suppose is a relation on a set .   Explain what it means for to not be reflexive.    Explain what it means for to not be symmetric.    Explain what it means for to not be transitive.      "
},
{
  "id": "sec_Relations-41",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-41",
  "type": "Problem",
  "number": "7.29",
  "title": "",
  "body": "  Let .   Define a relation on that is reflexive but not symmetric nor transitive.    Define a relation on that is symmetric but not reflexive nor transitive.    Define a relation on that is transitive but not reflexive nor symmetric.      "
},
{
  "id": "sec_Relations-42",
  "level": "2",
  "url": "sec_Relations.html#sec_Relations-42",
  "type": "Problem",
  "number": "7.30",
  "title": "",
  "body": "  Given a relation on a finite set , describe what each of reflexive, symmetric, and transitive look like in terms of a digraph. That is, draw pictures that represent each of reflexive, symmetric, and transitive. One thing to keep in mind is that the elements used in the definitions of symmetric and transitive do not have to be distinct. So, you might need to consider multiple cases.   "
},
{
  "id": "skeleton_reflexive",
  "level": "2",
  "url": "sec_Relations.html#skeleton_reflexive",
  "type": "Skeleton Proof",
  "number": "7.31",
  "title": "Proof that a relation is reflexive.",
  "body": " Proof that a relation is reflexive   Here is the general structure for proving that a relation is reflexive.   Assume is a relation on defined by (or satisfying)  [Use the given definition (or describe the given property) of ] . Let .  [Use the definition (or property) of to verify that ]  Therefore, the relation is reflexive on .    "
},
{
  "id": "skeleton_symmetric",
  "level": "2",
  "url": "sec_Relations.html#skeleton_symmetric",
  "type": "Skeleton Proof",
  "number": "7.32",
  "title": "Proof that a relation is symmetric.",
  "body": " Proof that a relation is symmetric   Here is the general structure for proving that a relation is symmetric.   Assume is a relation on defined by (or satisfying)  [Use the given definition (or describe the given property) of ] . Let and suppose .  [Use assumption that with definition (or property) of to verify that ] Therefore, the relation is symmetric on .    "
},
{
  "id": "skeleton_transitive",
  "level": "2",
  "url": "sec_Relations.html#skeleton_transitive",
  "type": "Skeleton Proof",
  "number": "7.33",
  "title": "Proof that a relation is transitive.",
  "body": " Proof that a relation is transitive   Here is the general structure for proving that a relation is transitive.   Assume is a relation on defined by (or satisfying)  [Use the given definition (or describe the given property) of ] . Let and suppose and .  [Use assumption that and with definition (or property) of to verify that ] Therefore, the relation is transitive on .    "
},
{
  "id": "prob_lots_of_relations",
  "level": "2",
  "url": "sec_Relations.html#prob_lots_of_relations",
  "type": "Problem",
  "number": "7.34",
  "title": "",
  "body": "  Determine whether each of the following relations is reflexive, symmetric, or transitive. In each case, you should either provide a specific counterexample or a proof.  Consider the relation described in Example .  Consider the relation described in Problem .  Consider the relation described in Problem .  Let be the set of all people and define via if and have the same height.  Let be the set of all people and define via if is taller than .  Consider the relation divides on .  Let be the set of lines and define via if is parallel to .  Let be the set of continuous functions on . Define if .  Define on via if is even.  Define on via if .  Define on via if . Do you recognize this relation? Think about fractions.  Define on via if .  Define on via if , where is the greatest integer less than or equal to (e.g., , , and ).  Define on via if .     "
},
{
  "id": "sec_Equivalence_Relations",
  "level": "1",
  "url": "sec_Equivalence_Relations.html",
  "type": "Section",
  "number": "7.2",
  "title": "Equivalence Relations",
  "body": " Equivalence Relations  As we have seen in the previous section, the notions of reflexive, symmetric, and transitive are independent of each other. That is, a relation may have some combination of these properties, possibly none of them and possibly all of them. However, we have a special name for when a relation satisfies all three properties.    Let be a relation on a set . Then is called an equivalence relation on if is reflexive, symmetric, and transitive.    The symbol is usually pronounced as twiddle or tilde and the phrase could be read as is related to or twiddles .    Let and define .  Using , complete each of the following.   Draw the digraph for .    Determine whether is an equivalence relation on .    Find by determining for each .         Let .   Make up an equivalence relation on by drawing a digraph such that is not related to and is not related to .    Using your digraph, find by determining for each .         Given a finite set and an equivalence relation on , describe what the corresponding digraph would have to look like.      Determine which relations given in Problem are equivalence relations.      Let be the set of all triangles and define on via if is similar to . Determine whether is an equivalence relation on .      If possible, construct an equivalence relation on the empty set. If this is not possible, explain why.      Suppose is an equivalence relation on a set and let . Then if and only if .      Suppose is an equivalence relation on a set . Then    , and    For all , either or .       In light of Theorem , we have the following definition.    If is an equivalence relation on a set , then for each , we refer to as the equivalence class of .    When is an equivalence relation on a set , it is common to write each equivalence class as (or sometimes ). The element inside the square brackets is called the representative of the equivalence class  . Theorem implies that an equivalence class can be represented by any element of the equivalence class. For example, in Problem , we have since 1 and 6 are in the same equivalence class. The collection of equivalence classes is often denoted by , which is read as modulo or mod . The collection is sometimes referred to as the quotient of by .    Let denote the residents of a particular town and define on via if and have the same last name. It is easily seen that this relation is reflexive, symmetric, and transitive, and hence is an equivalence relation on . The equivalence classes correspond to collections of individuals with the same last name. For example, Maria Garcia, Anthony Garcia, and Ariana Garcia all belong to the same equivalence class. Any Garcia can be used as a representative for the corresponding equivalence class, so we can denote it as , for example. The collection consists of the various sets of people with the same last name. In particular, .      The five distinct sets of relatives that you identified in Problem are the equivalence classes for on . These equivalence classes are often called the congruence classes modulo 5 .    The upshot of Theorem is that given an equivalence relation, every element lives in exactly one equivalence class. In the next section, we will see that we can run this in reverse. That is, if we separate out the elements of a set so that every element is an element of exactly one subset, then this determines an equivalence relation.    If is an equivalence relation on a nonempty finite set , describe in terms of the digraph corresponding to .      For each of the equivalence relations you identified in Problem , succinctly describe the corresponding equivalence classes.      Suppose and are both equivalence relations on a set . Is an equivalence relation on ? If so, prove it. Otherwise, provide a counterexample.      Suppose and are both equivalence relations on a set . Is an equivalence relation on ? If so, prove it. Otherwise, provide a counterexample.      Mathematics has beauty and romance. It's not a boring place to be, the mathematical world. It's an extraordinary place; it's worth spending time there.  Marcus du Sautoy, mathematician   "
},
{
  "id": "sec_Equivalence_Relations-3",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#sec_Equivalence_Relations-3",
  "type": "Definition",
  "number": "7.35",
  "title": "",
  "body": "  Let be a relation on a set . Then is called an equivalence relation on if is reflexive, symmetric, and transitive.   "
},
{
  "id": "prob_digraph",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#prob_digraph",
  "type": "Problem",
  "number": "7.36",
  "title": "",
  "body": "  Let and define .  Using , complete each of the following.   Draw the digraph for .    Determine whether is an equivalence relation on .    Find by determining for each .      "
},
{
  "id": "prob_made_up",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#prob_made_up",
  "type": "Problem",
  "number": "7.37",
  "title": "",
  "body": "  Let .   Make up an equivalence relation on by drawing a digraph such that is not related to and is not related to .    Using your digraph, find by determining for each .      "
},
{
  "id": "sec_Equivalence_Relations-7",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#sec_Equivalence_Relations-7",
  "type": "Problem",
  "number": "7.38",
  "title": "",
  "body": "  Given a finite set and an equivalence relation on , describe what the corresponding digraph would have to look like.   "
},
{
  "id": "prob_equiv_from_lots_of_relations",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#prob_equiv_from_lots_of_relations",
  "type": "Problem",
  "number": "7.39",
  "title": "",
  "body": "  Determine which relations given in Problem are equivalence relations.   "
},
{
  "id": "sec_Equivalence_Relations-9",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#sec_Equivalence_Relations-9",
  "type": "Problem",
  "number": "7.40",
  "title": "",
  "body": "  Let be the set of all triangles and define on via if is similar to . Determine whether is an equivalence relation on .   "
},
{
  "id": "sec_Equivalence_Relations-10",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#sec_Equivalence_Relations-10",
  "type": "Problem",
  "number": "7.41",
  "title": "",
  "body": "  If possible, construct an equivalence relation on the empty set. If this is not possible, explain why.   "
},
{
  "id": "thm_related_if_and_only_if_same_class",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#thm_related_if_and_only_if_same_class",
  "type": "Theorem",
  "number": "7.42",
  "title": "",
  "body": "  Suppose is an equivalence relation on a set and let . Then if and only if .   "
},
{
  "id": "thm_equiv_yields_partition",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#thm_equiv_yields_partition",
  "type": "Theorem",
  "number": "7.43",
  "title": "",
  "body": "  Suppose is an equivalence relation on a set . Then    , and    For all , either or .      "
},
{
  "id": "def_equivalence_class",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#def_equivalence_class",
  "type": "Definition",
  "number": "7.44",
  "title": "",
  "body": "  If is an equivalence relation on a set , then for each , we refer to as the equivalence class of .   "
},
{
  "id": "sec_Equivalence_Relations-15",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#sec_Equivalence_Relations-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "representative of the equivalence class quotient of by "
},
{
  "id": "ex_last_name",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#ex_last_name",
  "type": "Example",
  "number": "7.45",
  "title": "",
  "body": "  Let denote the residents of a particular town and define on via if and have the same last name. It is easily seen that this relation is reflexive, symmetric, and transitive, and hence is an equivalence relation on . The equivalence classes correspond to collections of individuals with the same last name. For example, Maria Garcia, Anthony Garcia, and Ariana Garcia all belong to the same equivalence class. Any Garcia can be used as a representative for the corresponding equivalence class, so we can denote it as , for example. The collection consists of the various sets of people with the same last name. In particular, .   "
},
{
  "id": "sec_Equivalence_Relations-17",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#sec_Equivalence_Relations-17",
  "type": "Example",
  "number": "7.46",
  "title": "",
  "body": "  The five distinct sets of relatives that you identified in Problem are the equivalence classes for on . These equivalence classes are often called the congruence classes modulo 5 .   "
},
{
  "id": "sec_Equivalence_Relations-19",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#sec_Equivalence_Relations-19",
  "type": "Problem",
  "number": "7.47",
  "title": "",
  "body": "  If is an equivalence relation on a nonempty finite set , describe in terms of the digraph corresponding to .   "
},
{
  "id": "sec_Equivalence_Relations-20",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#sec_Equivalence_Relations-20",
  "type": "Problem",
  "number": "7.48",
  "title": "",
  "body": "  For each of the equivalence relations you identified in Problem , succinctly describe the corresponding equivalence classes.   "
},
{
  "id": "sec_Equivalence_Relations-21",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#sec_Equivalence_Relations-21",
  "type": "Problem",
  "number": "7.49",
  "title": "",
  "body": "  Suppose and are both equivalence relations on a set . Is an equivalence relation on ? If so, prove it. Otherwise, provide a counterexample.   "
},
{
  "id": "sec_Equivalence_Relations-22",
  "level": "2",
  "url": "sec_Equivalence_Relations.html#sec_Equivalence_Relations-22",
  "type": "Problem",
  "number": "7.50",
  "title": "",
  "body": "  Suppose and are both equivalence relations on a set . Is an equivalence relation on ? If so, prove it. Otherwise, provide a counterexample.   "
},
{
  "id": "sec_Partitions",
  "level": "1",
  "url": "sec_Partitions.html",
  "type": "Section",
  "number": "7.3",
  "title": "Partitions",
  "body": " Partitions   and imply that if is an equivalence relation on a set , then breaks up into pairwise disjoint chunks , where each chunk is some for . As you have probably already noticed, equivalence relations are intimately related to the following concept.    A collection of subsets of a set is said to be a partition of if the elements of satisfy:   Each is nonempty,    For all , when , and     .     That is, the elements of are pairwise disjoint nonempty sets and their union is all of . Each is called a block of the partition.      Consider the equivalence relation on the set described in Example . Recall that the equivalence classes correspond to collections of individuals with the same last name. Since each equivalence class is nonempty and each resident of the town belongs to exactly one equivalence class, the collection of equivalence classes forms a partition of . That is, is a partition of , where the blocks of the partition correspond to sets of residents with the same last name.      Each of the following is an example of a partition of the set given in parentheses.   Democrat, Republican, Independent, Green Party, Libertarian, etc. (set of registered voters)    Freshman, sophomore, junior, senior (set of high school students)    Evens, odds (set of integers)    Rationals, irrationals (set of real numbers)         Let and . Since the elements of are pairwise disjoint nonempty subsets of such that their union is all of , is a partition of consisting of three blocks.      Consider the set from Example .   Find a partition of consisting of four blocks.    Find a collection of subsets of that does not form a partition. See how many ways you can prevent your collection from being a partition.         For each of the following, find a partition of with the given properties.   A partition of that consists of finitely many blocks, where each of the blocks is infinite.    A partition of that consists of infinitely many blocks, where each of the blocks is finite.    A partition of that consists of infinitely many blocks, where each of the blocks is infinite.         For each relation in Problem , determine whether the corresponding collection of the sets of relatives forms a partition of the given set.      Can we partition the empty set? If so, describe a partition. If not, explain why.    The next theorem spells out half of the close connection between partitions and equivalence relations. Theorem yields the other half.    If is an equivalence relation on a set , then forms a partition of .      In the previous theorem, what is if is the empty set?      Consider the equivalence relation on the set . Find $ and verify that it is a partition.    It turns out that we can reverse the situation, as well. That is, given a partition, we can form an equivalence relation such that the equivalence classes correspond to the blocks of the partition. Before proving this, we need a definition.    Let be a set and any collection of subsets of (not necessarily a partition). Define the relation on via if there exists that contains both and . This relation is called the relation on associated to .    In other words, two elements are related exactly when they are in the same subset.    Let and let . List the ordered pairs in and draw the corresponding digraph.      Let and be as in Example . List the ordered pairs in and draw the corresponding digraph.      Consider Problem . Find the relation on associated to and compare with what you obtained for in Problem .      Give an example of a set and a collection from such that the relation is not reflexive.      Let and .   Is a partition of ?    Find by listing ordered pairs or drawing a digraph.    Is an equivalence relation?    Find (i.e., the collection of subsets of determined by ). How are and related?         If is a collection of subsets of a set (not necessarily a partition) such that , then is reflexive.      In the previous theorem, what is if is the empty set?      If is a collection of subsets of a set (not necessarily a partition), then is symmetric.      If is a collection of subsets of a set (not necessarily a partition) such that the elements of are pairwise disjoint, then is transitive.      Let . If possible, find an example of collection of nonempty subsets of such that is an equivalence relation on but . If such an example is impossible, explain why.    Recall that Theorem says that the equivalence classes for a relation on a nonempty set determines a partition of . The following theorem tells us that every partition of a set yields an equivalence relation where the equivalence classes correspond to the blocks of the partition. This result is a consequence of , , and .    If is a partition of a set , then is an equivalence relation.    Together, and tell us that equivalence relations and partitions are two different ways of viewing the same thing. When proving the following result, ask yourself whether the statement is true if we remove the condition for all .     If is a relation on a set such that the collection of the set of relatives with respect to is a partition of and for all , then is an equivalence relation.      Let . Make up a partition on and then draw the digraph corresponding to .      In the broad light of day mathematicians check their equations and their proofs, leaving no stone unturned in their search for rigour. But, at night, under the full moon, they dream, they float among the stars and wonder at the miracle of the heavens. They are inspired. Without dreams there is no art, no mathematics, no life.  Michael Atiyah, mathematician   "
},
{
  "id": "def_partition",
  "level": "2",
  "url": "sec_Partitions.html#def_partition",
  "type": "Definition",
  "number": "7.51",
  "title": "",
  "body": "  A collection of subsets of a set is said to be a partition of if the elements of satisfy:   Each is nonempty,    For all , when , and     .     That is, the elements of are pairwise disjoint nonempty sets and their union is all of . Each is called a block of the partition.   "
},
{
  "id": "ex_last_name_revisited",
  "level": "2",
  "url": "sec_Partitions.html#ex_last_name_revisited",
  "type": "Example",
  "number": "7.52",
  "title": "",
  "body": "  Consider the equivalence relation on the set described in Example . Recall that the equivalence classes correspond to collections of individuals with the same last name. Since each equivalence class is nonempty and each resident of the town belongs to exactly one equivalence class, the collection of equivalence classes forms a partition of . That is, is a partition of , where the blocks of the partition correspond to sets of residents with the same last name.   "
},
{
  "id": "sec_Partitions-5",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-5",
  "type": "Example",
  "number": "7.53",
  "title": "",
  "body": "  Each of the following is an example of a partition of the set given in parentheses.   Democrat, Republican, Independent, Green Party, Libertarian, etc. (set of registered voters)    Freshman, sophomore, junior, senior (set of high school students)    Evens, odds (set of integers)    Rationals, irrationals (set of real numbers)      "
},
{
  "id": "ex_a_partition",
  "level": "2",
  "url": "sec_Partitions.html#ex_a_partition",
  "type": "Example",
  "number": "7.54",
  "title": "",
  "body": "  Let and . Since the elements of are pairwise disjoint nonempty subsets of such that their union is all of , is a partition of consisting of three blocks.   "
},
{
  "id": "sec_Partitions-7",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-7",
  "type": "Problem",
  "number": "7.55",
  "title": "",
  "body": "  Consider the set from Example .   Find a partition of consisting of four blocks.    Find a collection of subsets of that does not form a partition. See how many ways you can prevent your collection from being a partition.      "
},
{
  "id": "sec_Partitions-8",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-8",
  "type": "Problem",
  "number": "7.56",
  "title": "",
  "body": "  For each of the following, find a partition of with the given properties.   A partition of that consists of finitely many blocks, where each of the blocks is infinite.    A partition of that consists of infinitely many blocks, where each of the blocks is finite.    A partition of that consists of infinitely many blocks, where each of the blocks is infinite.      "
},
{
  "id": "sec_Partitions-9",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-9",
  "type": "Problem",
  "number": "7.57",
  "title": "",
  "body": "  For each relation in Problem , determine whether the corresponding collection of the sets of relatives forms a partition of the given set.   "
},
{
  "id": "sec_Partitions-10",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-10",
  "type": "Problem",
  "number": "7.58",
  "title": "",
  "body": "  Can we partition the empty set? If so, describe a partition. If not, explain why.   "
},
{
  "id": "thm_equiv_yields_partition2",
  "level": "2",
  "url": "sec_Partitions.html#thm_equiv_yields_partition2",
  "type": "Theorem",
  "number": "7.59",
  "title": "",
  "body": "  If is an equivalence relation on a set , then forms a partition of .   "
},
{
  "id": "sec_Partitions-13",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-13",
  "type": "Problem",
  "number": "7.60",
  "title": "",
  "body": "  In the previous theorem, what is if is the empty set?   "
},
{
  "id": "sec_Partitions-14",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-14",
  "type": "Problem",
  "number": "7.61",
  "title": "",
  "body": "  Consider the equivalence relation on the set . Find $ and verify that it is a partition.   "
},
{
  "id": "sec_Partitions-16",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-16",
  "type": "Definition",
  "number": "7.62",
  "title": "",
  "body": "  Let be a set and any collection of subsets of (not necessarily a partition). Define the relation on via if there exists that contains both and . This relation is called the relation on associated to .   "
},
{
  "id": "sec_Partitions-18",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-18",
  "type": "Problem",
  "number": "7.63",
  "title": "",
  "body": "  Let and let . List the ordered pairs in and draw the corresponding digraph.   "
},
{
  "id": "sec_Partitions-19",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-19",
  "type": "Problem",
  "number": "7.64",
  "title": "",
  "body": "  Let and be as in Example . List the ordered pairs in and draw the corresponding digraph.   "
},
{
  "id": "sec_Partitions-20",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-20",
  "type": "Problem",
  "number": "7.65",
  "title": "",
  "body": "  Consider Problem . Find the relation on associated to and compare with what you obtained for in Problem .   "
},
{
  "id": "sec_Partitions-21",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-21",
  "type": "Problem",
  "number": "7.66",
  "title": "",
  "body": "  Give an example of a set and a collection from such that the relation is not reflexive.   "
},
{
  "id": "sec_Partitions-22",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-22",
  "type": "Problem",
  "number": "7.67",
  "title": "",
  "body": "  Let and .   Is a partition of ?    Find by listing ordered pairs or drawing a digraph.    Is an equivalence relation?    Find (i.e., the collection of subsets of determined by ). How are and related?      "
},
{
  "id": "thm_union_yields_reflexive",
  "level": "2",
  "url": "sec_Partitions.html#thm_union_yields_reflexive",
  "type": "Theorem",
  "number": "7.68",
  "title": "",
  "body": "  If is a collection of subsets of a set (not necessarily a partition) such that , then is reflexive.   "
},
{
  "id": "sec_Partitions-24",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-24",
  "type": "Problem",
  "number": "7.69",
  "title": "",
  "body": "  In the previous theorem, what is if is the empty set?   "
},
{
  "id": "thm_always_symmetric",
  "level": "2",
  "url": "sec_Partitions.html#thm_always_symmetric",
  "type": "Theorem",
  "number": "7.70",
  "title": "",
  "body": "  If is a collection of subsets of a set (not necessarily a partition), then is symmetric.   "
},
{
  "id": "thm_pairwise_disjoint_yields_transitive",
  "level": "2",
  "url": "sec_Partitions.html#thm_pairwise_disjoint_yields_transitive",
  "type": "Theorem",
  "number": "7.71",
  "title": "",
  "body": "  If is a collection of subsets of a set (not necessarily a partition) such that the elements of are pairwise disjoint, then is transitive.   "
},
{
  "id": "sec_Partitions-27",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-27",
  "type": "Problem",
  "number": "7.72",
  "title": "",
  "body": "  Let . If possible, find an example of collection of nonempty subsets of such that is an equivalence relation on but . If such an example is impossible, explain why.   "
},
{
  "id": "thm_partition_yields_equivalence_relation1",
  "level": "2",
  "url": "sec_Partitions.html#thm_partition_yields_equivalence_relation1",
  "type": "Theorem",
  "number": "7.73",
  "title": "",
  "body": "  If is a partition of a set , then is an equivalence relation.   "
},
{
  "id": "thm_partition_yields_equivalence_relation2",
  "level": "2",
  "url": "sec_Partitions.html#thm_partition_yields_equivalence_relation2",
  "type": "Theorem",
  "number": "7.74",
  "title": "",
  "body": "  If is a relation on a set such that the collection of the set of relatives with respect to is a partition of and for all , then is an equivalence relation.   "
},
{
  "id": "sec_Partitions-32",
  "level": "2",
  "url": "sec_Partitions.html#sec_Partitions-32",
  "type": "Problem",
  "number": "7.75",
  "title": "",
  "body": "  Let . Make up a partition on and then draw the digraph corresponding to .   "
},
{
  "id": "sec_ModularArithmetic",
  "level": "1",
  "url": "sec_ModularArithmetic.html",
  "type": "Section",
  "number": "7.4",
  "title": "Modular Arithmetic",
  "body": " Modular Arithmetic  In this section, we look at a particular family of equivalence relations on the integers and explore the way in which arithmetic interacts with them.    For each , define to be the set of all integers that are divisible by . In set-builder notation, we have .    For example, and is the set of even integers.    Consider the sets , , , and .   List at least five elements in each of the above sets.    Notice that for some . What is ? Describe in a similar way.    Draw a Venn diagram illustrating how the sets , , and intersect.    Draw a Venn diagram illustrating how the sets , , and intersect.         Let . If , then , , and are also in .      For each , define the relation on via if . We read as is congruent to modulo .     Note that if and only if divides , which implies that if and only if divides .    We encountered in Problem and discovered that there were five distinct sets of relatives. In particular, we have .  Notice that this collection forms a partition of . By Theorem , the relation must be an equivalence relation.    The previous example generalizes as expected. You can prove the following theorem by either proving that is reflexive, symmetric, and transitive or by utilizing Theorem .    For , the relation is an equivalence relation on .    We have have special notation and terminology for the equivalence classes that correspond to .    For , let denote the equivalence class of with respect to (see Definitions and ). The equivalence class is called the congruence (or residue) class of modulo . The collection of all equivalence classes determined by is denoted , which is read modulo .      Let's compute . Tracing back through the definitions, we see that .  Since the multiples of are , we can find by adding to each element of to get .      For each of the following congruence classes, find five elements in the set such that at least one is greater than and one is less than .                       Describe , , , , and as lists of elements as in Example . How many distinct congruence classes are in ? Theorem might be helpful.    Consider using Theorem to prove the next theorem.    For and , if and only if divides .      For and , if and only if divides .    The next result provides a useful characterization for when two congruence classes are equal. The Division Algorithm will be useful when proving this theorem.    For and , if and only if and have the same remainder when divided by .    When proving Part (a) of the next theorem, make use of Theorem . For Part (b), note that .    Let and let . If and , then    , and     .       The previous theorem allows us to define addition and multiplication in .    Let . We define the sum and product of congruence classes in via .      By Definition , . By Theorem , , and so . Similarly, .    Addition and multiplication for has many familiar and some not so familiar properties. For example, addition and multiplication of congruence classes are both associative and commutative. However, it is possible for even when and .    If , then addition in is commutative and associative. That is, for all , we have    , and     .         If , then multiplication in is commutative and associative. That is, for all , we have    , and     .       One consequence of and is that parentheses are not needed when adding or multiplying congruence classes. The next theorem follows from Definition together with and and induction on .    Let . For all , if , then    , and     .       The next result is a special case of Theorem (b).    Let . If and , then .      Let's compute . We see that .    For Part (a) in the next problem, use the fact that . For Part (b), use the fact that .    For each of the following, find a number with such that the given quantity is equal to .                       Find and such that but and .      If such that is not prime, then there exists such that while and .      Notice that has no solution in . Show that does have a solution with in . What about ?    Make use of Theorem , Corollary , and Theorem to prove the following theorem.    If such that , where (i.e., are the digits of ), then .    You likely recognize the next result. Its proof follows quickly from Corollary together with the previous theorem.    An integer is divisible by if and only if the sum of its digits is divisible by .    Let's revisit Theorem , which we originally proved by induction.    Use Corollary to prove that for all integers , is divisible by . You will need to handle the case involving separately.    We close this chapter with a fun problem.    Prove or provide a counterexample: No integer exists such that is a perfect square.      Without change something sleeps inside us, and seldom awakens. The sleeper must awaken.  Dune by Frank Herbert   "
},
{
  "id": "sec_ModularArithmetic-3",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-3",
  "type": "Definition",
  "number": "7.76",
  "title": "",
  "body": "  For each , define to be the set of all integers that are divisible by . In set-builder notation, we have .   "
},
{
  "id": "sec_ModularArithmetic-5",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-5",
  "type": "Problem",
  "number": "7.77",
  "title": "",
  "body": "  Consider the sets , , , and .   List at least five elements in each of the above sets.    Notice that for some . What is ? Describe in a similar way.    Draw a Venn diagram illustrating how the sets , , and intersect.    Draw a Venn diagram illustrating how the sets , , and intersect.      "
},
{
  "id": "sec_ModularArithmetic-6",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-6",
  "type": "Theorem",
  "number": "7.78",
  "title": "",
  "body": "  Let . If , then , , and are also in .   "
},
{
  "id": "def_modulo",
  "level": "2",
  "url": "sec_ModularArithmetic.html#def_modulo",
  "type": "Definition",
  "number": "7.79",
  "title": "",
  "body": "  For each , define the relation on via if . We read as is congruent to modulo .    "
},
{
  "id": "sec_ModularArithmetic-9",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-9",
  "type": "Example",
  "number": "7.80",
  "title": "",
  "body": "  We encountered in Problem and discovered that there were five distinct sets of relatives. In particular, we have .  Notice that this collection forms a partition of . By Theorem , the relation must be an equivalence relation.   "
},
{
  "id": "sec_ModularArithmetic-11",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-11",
  "type": "Theorem",
  "number": "7.81",
  "title": "",
  "body": "  For , the relation is an equivalence relation on .   "
},
{
  "id": "def_congruence_class",
  "level": "2",
  "url": "sec_ModularArithmetic.html#def_congruence_class",
  "type": "Definition",
  "number": "7.82",
  "title": "",
  "body": "  For , let denote the equivalence class of with respect to (see Definitions and ). The equivalence class is called the congruence (or residue) class of modulo . The collection of all equivalence classes determined by is denoted , which is read modulo .   "
},
{
  "id": "exam_twomodseven",
  "level": "2",
  "url": "sec_ModularArithmetic.html#exam_twomodseven",
  "type": "Example",
  "number": "7.83",
  "title": "",
  "body": "  Let's compute . Tracing back through the definitions, we see that .  Since the multiples of are , we can find by adding to each element of to get .   "
},
{
  "id": "sec_ModularArithmetic-15",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-15",
  "type": "Problem",
  "number": "7.84",
  "title": "",
  "body": "  For each of the following congruence classes, find five elements in the set such that at least one is greater than and one is less than .                    "
},
{
  "id": "sec_ModularArithmetic-16",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-16",
  "type": "Problem",
  "number": "7.85",
  "title": "",
  "body": "  Describe , , , , and as lists of elements as in Example . How many distinct congruence classes are in ? Theorem might be helpful.   "
},
{
  "id": "thm_cong_classes_equal",
  "level": "2",
  "url": "sec_ModularArithmetic.html#thm_cong_classes_equal",
  "type": "Theorem",
  "number": "7.86",
  "title": "",
  "body": "  For and , if and only if divides .   "
},
{
  "id": "cor_divisible_iff_zero_mod",
  "level": "2",
  "url": "sec_ModularArithmetic.html#cor_divisible_iff_zero_mod",
  "type": "Corollary",
  "number": "7.87",
  "title": "",
  "body": "  For and , if and only if divides .   "
},
{
  "id": "sec_ModularArithmetic-21",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-21",
  "type": "Theorem",
  "number": "7.88",
  "title": "",
  "body": "  For and , if and only if and have the same remainder when divided by .   "
},
{
  "id": "sec_ModularArithmetic-23",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-23",
  "type": "Theorem",
  "number": "7.89",
  "title": "",
  "body": "  Let and let . If and , then    , and     .      "
},
{
  "id": "def_modular_arithmetic",
  "level": "2",
  "url": "sec_ModularArithmetic.html#def_modular_arithmetic",
  "type": "Definition",
  "number": "7.90",
  "title": "",
  "body": "  Let . We define the sum and product of congruence classes in via .   "
},
{
  "id": "sec_ModularArithmetic-26",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-26",
  "type": "Example",
  "number": "7.91",
  "title": "",
  "body": "  By Definition , . By Theorem , , and so . Similarly, .   "
},
{
  "id": "thm_modular_add_comm_assoc",
  "level": "2",
  "url": "sec_ModularArithmetic.html#thm_modular_add_comm_assoc",
  "type": "Theorem",
  "number": "7.92",
  "title": "",
  "body": "  If , then addition in is commutative and associative. That is, for all , we have    , and     .      "
},
{
  "id": "thm_modular_mult_comm_assoc",
  "level": "2",
  "url": "sec_ModularArithmetic.html#thm_modular_mult_comm_assoc",
  "type": "Theorem",
  "number": "7.93",
  "title": "",
  "body": "  If , then multiplication in is commutative and associative. That is, for all , we have    , and     .      "
},
{
  "id": "thm_modular_sums_products",
  "level": "2",
  "url": "sec_ModularArithmetic.html#thm_modular_sums_products",
  "type": "Theorem",
  "number": "7.94",
  "title": "",
  "body": "  Let . For all , if , then    , and     .      "
},
{
  "id": "cor_modular_power",
  "level": "2",
  "url": "sec_ModularArithmetic.html#cor_modular_power",
  "type": "Corollary",
  "number": "7.95",
  "title": "",
  "body": "  Let . If and , then .   "
},
{
  "id": "sec_ModularArithmetic-34",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-34",
  "type": "Example",
  "number": "7.96",
  "title": "",
  "body": "  Let's compute . We see that .   "
},
{
  "id": "sec_ModularArithmetic-36",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-36",
  "type": "Problem",
  "number": "7.97",
  "title": "",
  "body": "  For each of the following, find a number with such that the given quantity is equal to .                    "
},
{
  "id": "sec_ModularArithmetic-37",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-37",
  "type": "Problem",
  "number": "7.98",
  "title": "",
  "body": "  Find and such that but and .   "
},
{
  "id": "sec_ModularArithmetic-38",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-38",
  "type": "Theorem",
  "number": "7.99",
  "title": "",
  "body": "  If such that is not prime, then there exists such that while and .   "
},
{
  "id": "sec_ModularArithmetic-39",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-39",
  "type": "Problem",
  "number": "7.100",
  "title": "",
  "body": "  Notice that has no solution in . Show that does have a solution with in . What about ?   "
},
{
  "id": "sec_ModularArithmetic-41",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-41",
  "type": "Theorem",
  "number": "7.101",
  "title": "",
  "body": "  If such that , where (i.e., are the digits of ), then .   "
},
{
  "id": "sec_ModularArithmetic-43",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-43",
  "type": "Theorem",
  "number": "7.102",
  "title": "",
  "body": "  An integer is divisible by if and only if the sum of its digits is divisible by .   "
},
{
  "id": "sec_ModularArithmetic-45",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-45",
  "type": "Problem",
  "number": "7.103",
  "title": "",
  "body": "  Use Corollary to prove that for all integers , is divisible by . You will need to handle the case involving separately.   "
},
{
  "id": "sec_ModularArithmetic-47",
  "level": "2",
  "url": "sec_ModularArithmetic.html#sec_ModularArithmetic-47",
  "type": "Problem",
  "number": "7.104",
  "title": "",
  "body": "  Prove or provide a counterexample: No integer exists such that is a perfect square.   "
},
{
  "id": "sec_Intro_to_Functions",
  "level": "1",
  "url": "sec_Intro_to_Functions.html",
  "type": "Section",
  "number": "8.1",
  "title": "Introduction to Functions",
  "body": " Introduction to Functions  Up until this point, you may have only encountered functions as an algebraic rule, e.g., , for transforming one real number into another. However, we can study functions in a much broader context. The basic building blocks of a function are a first set and a second set, say and , and a correspondence that assigns every element of to exactly one element of . Let's take a look at the actual definition.    Let and be two nonempty sets. A function  from to is a relation from to such that for every , there exists a unique such that . The set is called the domain of and is denoted by . The set is called the codomain of and is denoted by while the subset of the codomain defined via is called the range of or the image of under .    There is a variety of notation and terminology associated to functions. We will write to indicate that is a function from to . We will make use of statements such as Let be the function defined via or Define via , where is understood to be a function in the second statement. Sometimes the word mapping (or map ) is used in place of the word function. If for a function , we often write and say that maps to or of equals . In this case, may be called an input of and is the preimage of under while is called an output of and is the image of under . Note that the domain of a function is the set of inputs while the range is the set of outputs for the function.  According to our definition, if is a function, then every element of the domain is utilized exactly once. However, there are no restrictions on whether an element of the codomain ever appears in the second coordinate of an ordered pair in the relation. Yet if an element of is in the range of , it may appear in more than one ordered pair in the relation.  It follows immediately from the definition of function that two functions are equal if and only if they have the same domain, same codomain, and the same set of ordered pairs in the relation. That is, functions and are equal if and only if , , and for all .  Since functions are special types of relations, we can represent them using digraphs and graphs when practical. Digraphs for functions are often called function (or mapping ) diagrams . When drawing function diagrams, it is standard practice to put the vertices for the domain on the left and the vertices for the codomain on the right, so that all directed edges point from left to right. We may also draw an additional arrow labeled by the name of the function from the domain to the codomain.    Let to and define the relation from to via .  Since each element appears exactly once as a first coordinate, is a function with domain and codomain (i.e., ). In this case, we see that . Moreover, we can write things like and , and say things like maps to 4 and the image of is 1. The function diagram for is depicted in Figure .     Function diagram for a function from to .        Determine whether each of the relations defined in the following examples and problems is a function.    Example (see Figure )     Example (see Figure )     Problem      Problem          Let and . For each of the following relations, draw the corresponding digraph and determine whether the relation represents a function from to , to , to , or does not represent a function. If the relation is a function, determine the domain, codomain, and range.                                      Define the relation from to via for all .            The last two parts of the previous problem make it clear that functions may have names consisting of more than one letter. The function names , , , and are instances of this that you have likely encountered in your previous experience in mathematics. One thing that you may have never noticed is the type of font that we use for function names. It is common to italicize generic function names like but not common function names like . However, we always italicize the variables used to represent the input and output for a function. For example, consider the font types used in the expressions and .    What properties does the digraph for a relation from to need to have in order for it to represent a function?      In high school you may have been told that a graph represents a function if it passes the vertical line test . Carefully state what the vertical line test says and then explain why it works.    Sometimes we can define a function using a formula. For example, we can write to mean that each in the domain of maps to in the codomain. However, notice that providing only a formula is ambiguous! A function is determined by its domain, codomain, and the correspondence between these two sets. If we only provide a description for the correspondence, it is not clear what the domain and codomain are. Two functions that are defined by the same formula, but have different domains or codomains are not equal.    The function defined via is not equal to the function defined by since the two functions do not have the same domain.    Sometimes we rely on context to interpret the domain and codomain. For example, in a calculus class, when we describe a function in terms of a formula, we are implicitly assuming that the domain is the largest allowable subset of sometimes called the default domain that makes sense for the given formula while the codomain is .    If we write , , and without mentioning the domains, we would typically interpret these as the functions , , and that are determined by their respective formulas.      Provide an example of each of the following. You may draw a function diagram, write down a list of ordered pairs, or write a formula as long as the domain and codomain are clear.   A function from a set with 4 elements to a set with 3 elements such that .    A function from a set with 4 elements to a set with 3 elements such that is strictly smaller than .         Let be a function and suppose that and are finite sets with and elements, respectively, such that . Is it possible for ? If so, provide an example. If this is not possible, explain why.    There are a few special functions that we should know the names of.    If and are nonempty sets such that , then the function defined via is called the inclusion map from into .    Note that is the Greek letter iota .    Let and . Draw the function diagram of the inclusion map from into .    If the domain and codomain are equal, the inclusion map has a special name.    If is a nonempty set, then the function defined via is called the identity map (or identity function) on .      The relation defined in Problem  is the identity map on .      Draw a portion of the graph of the identity map on as a subset of .      Let be a nonempty set.   Suppose is an equivalence relation on . What conditions on must hold in order for to be a function from to ?    Suppose is a function. Under what conditions is an equivalence relation on ?         Any function defined via for a fixed is called a constant function .      The function defined in Problem  is an example of a constant function. Notice that we can succinctly describe this function using the formula .      A piecewise-defined function (or piecewise function ) is a function defined by specifying its output on a partition of the domain.    Note that piecewise is a way of expressing the function, rather than a property of the function itself.    We can express the function in Problem  as a piecewise function using the formula       The function defined via is an example of a piecewise-defined function.      Define via . Express as a piecewise function.    It is important to point out that not every function can be described using a formula! Despite your prior experience, functions that can be represented succinctly using a formula are rare.  The next problem illustrates that some care must be taken when attempting to define a function.    For each of the following, explain why the given description does not define a function.   Define via .    Define via .    Let and . Define via     Define via .       In mathematics, we say that an expression is well defined (or unambiguous ) if its definition yields a unique interpretation. Otherwise, we say that the expression is not well defined (or is ambiguous ). For example, if , then the expression is well defined since it does not matter if we interpret this as or since the real numbers are associative under multiplication. This issue was lurking behind the scenes in the statement of Theorem . In particular, the expressions and are well defined in in light of  and  .  When we attempt to define a function, it may not be clear without doing some work that our definition really does yield a function. If there is some potential ambiguity in the definition of a function that ends up not causing any issues, we say that the function is well defined. However, this phrase is a bit of misnomer since all functions are well defined. The issue of whether a description for a proposed function is well defined often arises when defining things in terms of representatives of equivalence classes, or more generally in terms of how an element of the domain is written. For example, the descriptions given in Parts (c) and (d) of Problem are not well defined. To show that a potentially ambiguous description for a function is well defined prove that if and are two representations for the same element in , then .    For each of the following, determine whether the description determines a well-defined function.   Define via     Define via     Define via .    Define via .    Define via .    Define via .         Let and . Under what conditions will given by be a well-defined function? Prove your claim.      Don't let anyone rob you of your imagination, your creativity, or your curiosity. It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.  Mae Jemison, NASA astronaut   "
},
{
  "id": "def_function",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#def_function",
  "type": "Definition",
  "number": "8.1",
  "title": "",
  "body": "  Let and be two nonempty sets. A function  from to is a relation from to such that for every , there exists a unique such that . The set is called the domain of and is denoted by . The set is called the codomain of and is denoted by while the subset of the codomain defined via is called the range of or the image of under .   "
},
{
  "id": "sec_Intro_to_Functions-4",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mapping map input preimage output image "
},
{
  "id": "sec_Intro_to_Functions-7",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "function mapping diagrams "
},
{
  "id": "ex_function",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#ex_function",
  "type": "Example",
  "number": "8.2",
  "title": "",
  "body": "  Let to and define the relation from to via .  Since each element appears exactly once as a first coordinate, is a function with domain and codomain (i.e., ). In this case, we see that . Moreover, we can write things like and , and say things like maps to 4 and the image of is 1. The function diagram for is depicted in Figure .   "
},
{
  "id": "fig_function_diagram",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#fig_function_diagram",
  "type": "Figure",
  "number": "8.1",
  "title": "",
  "body": " Function diagram for a function from to .     "
},
{
  "id": "sec_Intro_to_Functions-10",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-10",
  "type": "Problem",
  "number": "8.3",
  "title": "",
  "body": "  Determine whether each of the relations defined in the following examples and problems is a function.    Example (see Figure )     Example (see Figure )     Problem      Problem       "
},
{
  "id": "prob_lots_of_potential_functions",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#prob_lots_of_potential_functions",
  "type": "Problem",
  "number": "8.4",
  "title": "",
  "body": "  Let and . For each of the following relations, draw the corresponding digraph and determine whether the relation represents a function from to , to , to , or does not represent a function. If the relation is a function, determine the domain, codomain, and range.                                      Define the relation from to via for all .           "
},
{
  "id": "sec_Intro_to_Functions-13",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-13",
  "type": "Problem",
  "number": "8.5",
  "title": "",
  "body": "  What properties does the digraph for a relation from to need to have in order for it to represent a function?   "
},
{
  "id": "sec_Intro_to_Functions-14",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-14",
  "type": "Problem",
  "number": "8.6",
  "title": "",
  "body": "  In high school you may have been told that a graph represents a function if it passes the vertical line test . Carefully state what the vertical line test says and then explain why it works.   "
},
{
  "id": "sec_Intro_to_Functions-16",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-16",
  "type": "Example",
  "number": "8.7",
  "title": "",
  "body": "  The function defined via is not equal to the function defined by since the two functions do not have the same domain.   "
},
{
  "id": "sec_Intro_to_Functions-17",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "default domain "
},
{
  "id": "sec_Intro_to_Functions-18",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-18",
  "type": "Example",
  "number": "8.8",
  "title": "",
  "body": "  If we write , , and without mentioning the domains, we would typically interpret these as the functions , , and that are determined by their respective formulas.   "
},
{
  "id": "sec_Intro_to_Functions-19",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-19",
  "type": "Problem",
  "number": "8.9",
  "title": "",
  "body": "  Provide an example of each of the following. You may draw a function diagram, write down a list of ordered pairs, or write a formula as long as the domain and codomain are clear.   A function from a set with 4 elements to a set with 3 elements such that .    A function from a set with 4 elements to a set with 3 elements such that is strictly smaller than .      "
},
{
  "id": "sec_Intro_to_Functions-20",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-20",
  "type": "Problem",
  "number": "8.10",
  "title": "",
  "body": "  Let be a function and suppose that and are finite sets with and elements, respectively, such that . Is it possible for ? If so, provide an example. If this is not possible, explain why.   "
},
{
  "id": "sec_Intro_to_Functions-22",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-22",
  "type": "Definition",
  "number": "8.11",
  "title": "",
  "body": "  If and are nonempty sets such that , then the function defined via is called the inclusion map from into .   "
},
{
  "id": "sec_Intro_to_Functions-24",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-24",
  "type": "Problem",
  "number": "8.12",
  "title": "",
  "body": "  Let and . Draw the function diagram of the inclusion map from into .   "
},
{
  "id": "sec_Intro_to_Functions-26",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-26",
  "type": "Definition",
  "number": "8.13",
  "title": "",
  "body": "  If is a nonempty set, then the function defined via is called the identity map (or identity function) on .   "
},
{
  "id": "sec_Intro_to_Functions-27",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-27",
  "type": "Example",
  "number": "8.14",
  "title": "",
  "body": "  The relation defined in Problem  is the identity map on .   "
},
{
  "id": "sec_Intro_to_Functions-28",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-28",
  "type": "Problem",
  "number": "8.15",
  "title": "",
  "body": "  Draw a portion of the graph of the identity map on as a subset of .   "
},
{
  "id": "sec_Intro_to_Functions-29",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-29",
  "type": "Problem",
  "number": "8.16",
  "title": "",
  "body": "  Let be a nonempty set.   Suppose is an equivalence relation on . What conditions on must hold in order for to be a function from to ?    Suppose is a function. Under what conditions is an equivalence relation on ?      "
},
{
  "id": "sec_Intro_to_Functions-30",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-30",
  "type": "Definition",
  "number": "8.17",
  "title": "",
  "body": "  Any function defined via for a fixed is called a constant function .   "
},
{
  "id": "sec_Intro_to_Functions-31",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-31",
  "type": "Example",
  "number": "8.18",
  "title": "",
  "body": "  The function defined in Problem  is an example of a constant function. Notice that we can succinctly describe this function using the formula .   "
},
{
  "id": "sec_Intro_to_Functions-32",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-32",
  "type": "Definition",
  "number": "8.19",
  "title": "",
  "body": "  A piecewise-defined function (or piecewise function ) is a function defined by specifying its output on a partition of the domain.   "
},
{
  "id": "sec_Intro_to_Functions-34",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-34",
  "type": "Example",
  "number": "8.20",
  "title": "",
  "body": "  We can express the function in Problem  as a piecewise function using the formula    "
},
{
  "id": "sec_Intro_to_Functions-35",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-35",
  "type": "Example",
  "number": "8.21",
  "title": "",
  "body": "  The function defined via is an example of a piecewise-defined function.   "
},
{
  "id": "sec_Intro_to_Functions-36",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-36",
  "type": "Problem",
  "number": "8.22",
  "title": "",
  "body": "  Define via . Express as a piecewise function.   "
},
{
  "id": "prob_not_well_defined",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#prob_not_well_defined",
  "type": "Problem",
  "number": "8.23",
  "title": "",
  "body": "  For each of the following, explain why the given description does not define a function.   Define via .    Define via .    Let and . Define via     Define via .      "
},
{
  "id": "sec_Intro_to_Functions-40",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-40",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "well defined unambiguous ambiguous "
},
{
  "id": "prob_well_defined",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#prob_well_defined",
  "type": "Problem",
  "number": "8.24",
  "title": "",
  "body": "  For each of the following, determine whether the description determines a well-defined function.   Define via     Define via     Define via .    Define via .    Define via .    Define via .      "
},
{
  "id": "sec_Intro_to_Functions-43",
  "level": "2",
  "url": "sec_Intro_to_Functions.html#sec_Intro_to_Functions-43",
  "type": "Problem",
  "number": "8.25",
  "title": "",
  "body": "  Let and . Under what conditions will given by be a well-defined function? Prove your claim.   "
},
{
  "id": "sec_Injective_and_Surjective_Functions",
  "level": "1",
  "url": "sec_Injective_and_Surjective_Functions.html",
  "type": "Section",
  "number": "8.2",
  "title": "Injective and Surjective Functions",
  "body": " Injective and Surjective Functions  We now turn our attention to some important properties that a function may or may not possess. Recall that if is a function, then every element in its domain is mapped to a unique element in the range. However, there are no restrictions on whether more than one element of the domain is mapped to the same element in the range. If each element in the range has a unique element in the domain mapping to it, then we say that the function is injective. Moreover, the range of a function is not required to be all of the codomain. If every element of the codomain has at least one element in the domain that maps to it, then we say that the function is surjective. Let's make these definitions a bit more precise.    Let be a function.   The function is said to be injective (or one-to-one ) if for all , there is a unique such that .    The function is said to be surjective (or onto ) if for all , there exists such that .    If is both injective and surjective, we say that is bijective .         Compare and contrast the following statements. Do they mean the same thing?   For all , there exists a unique such that .    For all , there is a unique such that .         Assume that and are finite sets. Provide an example of each of the following. You may draw a function diagram, write down a list of ordered pairs, or write a formula as long as the domain and codomain are clear.   A function that is injective but not surjective.    A function that is surjective but not injective.    A function that is a bijection.    A function that is neither injective nor surjective.         Provide an example of each of the following. You may either draw a graph or write down a formula. Make sure you have the correct domain.   A function that is injective but not surjective.    A function that is surjective but not injective.    A function that is a bijection.    A function that is neither injective nor surjective.    A function that is injective.         Suppose and is a function. Fill in the blank with the appropriate word.  The function is           if and only if every horizontal line hits the graph of  at most once .  This statement is often called the horizontal line test . Explain why the horizontal line test is true.      Suppose and is a function. Fill in the blank with the appropriate word.  The function is           if and only if every horizontal line hits the graph of  at least once .  Explain why this statement is true.      Suppose and is a function. Fill in the blank with the appropriate word.  The function is           if and only if every horizontal line hits the graph of  exactly once .  Explain why this statement is true.    How do we prove that a function is injective? We would need to show that every element in the range has a unique element from the domain that maps to it. First, notice that each element in the range can be written as for at least one in the domain. To argue that each such element in domain is unique, we can suppose for arbitrary and in the domain and then work to show that . It is important to point out that when we suppose for some and , we are not assuming that and are different. In general, when we write Let , we are leaving open the possibility that and are actually the same element. One could approach proving that a function is injective by utilizing a proof by contradiction, but this is not usually necessary.   Proof that a function is injective   Here is the general structure for proving that a function is injective..   Assume is a function defined by (or satisfying)  [Use the given definition (or describe the given property) of ] . Let and suppose .  [Use the definition (or property) of to verify that ]  Therefore, the function is injective.     How do we prove that a function is surjective? We would need to argue that every element in the codomain is also in the range. Sometimes, the proof that a particular function is surjective is extremely short, so do not second guess yourself if you find yourself in this situation.   Proof that a function is surjective   Here is the general structure for proving that a function is surjective.   Assume is a function defined by (or satisfying) [Use the given definition (or describe the given property) of ] . Let .  [Use the definition (or property) to find some such that ]  Therefore, the function is surjective.       Determine whether each of the following functions is injective, surjective, both, or neither. In each case, you should provide a proof or a counterexample as appropriate. Note: You are probably not in a position to write a careful argument for surjectivity for Part .  Define via   Define via   Define via   Define via   Define via   Define via    Define via   Define via   The function defined in Problem  .  The function defined in Problem  .  The function defined in Problem  .        Suppose and are nonempty sets with and elements, respectively, where . How many injections are there from to ?      Compare and contrast the definition of function with the definition of injective function . Consider the vertical line test and horizontal line test in your discussion. Moreover, attempt to capture what it means for a relation to not be a function and for a function to not be an injection by drawing portions of a digraph.    The next two theorems should not come as as surprise.    The inclusion map for is an injection.      The identity function is a bijection.      Let and be nonempty sets and let be a nonempty subset of . Define and via and . We call and the projections of onto and , respectively.   Provide examples to show that does not need to be injective nor surjective.    Suppose that is also a function. Is injective? Is surjective? How about ?       The next theorem says that if we have an equivalence relation on a nonempty set, the mapping that assigns each element to its respective equivalence class is a surjective function.    If is an equivalence relation on a nonempty set , then the function defined via is a surjection.    The function from the previous theorem is sometimes called the canonical projection map induced by .    Under what circumstances would the function from the previous theorem also be injective?    Let's explore whether we can weaken the hypotheses of Theorem .    Let be a relation on a nonempty set .   What conditions on must hold in order for defined via to be a function?    What additional conditions, if any, must hold on in order for to be a surjective function?       Given any function, we can define an equivalence relation on its domain, where the equivalence classes correspond to the elements that map to the same element of the range.    Let be a function and define on via if . Then is an equivalence relation on .    It follows immediately from Theorem that the equivalence classes induced by the equivalence relation in Theorem partition the domain of a function.    For each of the following, identify the equivalence classes induced by the relation from Theorem for the given function.   The function defined in Example .    The function defined in Problem  . Can you describe the equivalence classes geometrically?       If is a function, the equivalence relation in Theorem allows us to construct a bijective function whose domain is the set of equivalence classes and whose codomain coincides with the range of . This is an important idea that manifests itself in many areas of mathematics. One such instance is the First Isomorphism Theorem for Groups, which is a fundamental theorem in a branch of mathematics called group theory. When proving the following theorem, the first thing you should do is verify that the description for is well defined.    Let be a function and define on as in Theorem . Then the function defined via is a bijection.    Here is an analogy for helping understand the content of Theorem . Suppose we have a collection airplanes filled with passengers and a collection of potential destination cities such that at most one airplane may land at each city. The function indicates which city each passenger lands at while the function indicates which city each airplane lands at. Moreover, the codomain for the function consists only of the cities that an airplane lands at.    Let and and define via .  The function diagram for is given in Figure , where we have highlighted the elements of the domain that map to the same element in the range by enclosing them in additional boxes. We see that . The function diagram for the induced map that is depicted in Figure makes it clear that is a bijection. Note that since and , it must be the case that and according to Theorem . Thus, the vertices labeled as and in Figure could have also been labeled as and or , respectively. In terms of our passengers and airplanes analogy, is the set of passengers, is the set of potential destination cities, is the set of airplanes, and is the set of cities that airplanes land at. The equivalence class is the airplane containing the passenger , and since and are on the same plane, is also the plane containing the passenger .     Example of a visual representation of Theorem .                   Consider the equivalence classes you identified in Parts (a) and (b) of Problem .   Draw the function diagram for the function as defined in Theorem , where is the function defined in Example .    Geometrically describe the function as defined in Theorem , where is the function defined in Problem  .       While perhaps not surprising, Problem  tells us that there is a one-to-one correspondence between circles centered at the origin and real numbers.    Let and define the function such that equals the unique remainder obtained after dividing by 4. For example, since according to the Division Algorithm ( Theorem ). This function is sometimes written as , where it is understood that we restrict the output to . It is clear that is surjective since 0, 1, 2, and 3 are mapped to 0, 1, 2, and 3, respectively. Figure depicts a portion of the function diagram for , where we have drawn the diagram from the top down instead of left to right.   Describe the equivalence classes induced by the relation given in Theorem .    What familiar set is equal to?    Draw the function diagram for the function as defined in Theorem .    The function diagram in Figure is a bit hard to interpret due to the ordering of the elements in the domain. Can you find a better way to lay out the vertices in the domain that makes the function easier to interpret?        Function diagram for the function described in Problem .        Consider the function defined in Problem  .   Draw the function diagram for .    Identify the equivalence classes induced by the relation given in Theorem .    Draw the function diagram for the function as defined in Theorem .         It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.  Theodore Roosevelt, statesman & conservationist   "
},
{
  "id": "sec_Injective_and_Surjective_Functions-3",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-3",
  "type": "Definition",
  "number": "8.26",
  "title": "",
  "body": "  Let be a function.   The function is said to be injective (or one-to-one ) if for all , there is a unique such that .    The function is said to be surjective (or onto ) if for all , there exists such that .    If is both injective and surjective, we say that is bijective .      "
},
{
  "id": "sec_Injective_and_Surjective_Functions-4",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-4",
  "type": "Problem",
  "number": "8.27",
  "title": "",
  "body": "  Compare and contrast the following statements. Do they mean the same thing?   For all , there exists a unique such that .    For all , there is a unique such that .      "
},
{
  "id": "sec_Injective_and_Surjective_Functions-5",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-5",
  "type": "Problem",
  "number": "8.28",
  "title": "",
  "body": "  Assume that and are finite sets. Provide an example of each of the following. You may draw a function diagram, write down a list of ordered pairs, or write a formula as long as the domain and codomain are clear.   A function that is injective but not surjective.    A function that is surjective but not injective.    A function that is a bijection.    A function that is neither injective nor surjective.      "
},
{
  "id": "sec_Injective_and_Surjective_Functions-6",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-6",
  "type": "Problem",
  "number": "8.29",
  "title": "",
  "body": "  Provide an example of each of the following. You may either draw a graph or write down a formula. Make sure you have the correct domain.   A function that is injective but not surjective.    A function that is surjective but not injective.    A function that is a bijection.    A function that is neither injective nor surjective.    A function that is injective.      "
},
{
  "id": "sec_Injective_and_Surjective_Functions-7",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-7",
  "type": "Problem",
  "number": "8.30",
  "title": "",
  "body": "  Suppose and is a function. Fill in the blank with the appropriate word.  The function is           if and only if every horizontal line hits the graph of  at most once .  This statement is often called the horizontal line test . Explain why the horizontal line test is true.   "
},
{
  "id": "sec_Injective_and_Surjective_Functions-8",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-8",
  "type": "Problem",
  "number": "8.31",
  "title": "",
  "body": "  Suppose and is a function. Fill in the blank with the appropriate word.  The function is           if and only if every horizontal line hits the graph of  at least once .  Explain why this statement is true.   "
},
{
  "id": "sec_Injective_and_Surjective_Functions-9",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-9",
  "type": "Problem",
  "number": "8.32",
  "title": "",
  "body": "  Suppose and is a function. Fill in the blank with the appropriate word.  The function is           if and only if every horizontal line hits the graph of  exactly once .  Explain why this statement is true.   "
},
{
  "id": "skeleton_injective",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#skeleton_injective",
  "type": "Skeleton Proof",
  "number": "8.33",
  "title": "Proof that a function is injective.",
  "body": " Proof that a function is injective   Here is the general structure for proving that a function is injective..   Assume is a function defined by (or satisfying)  [Use the given definition (or describe the given property) of ] . Let and suppose .  [Use the definition (or property) of to verify that ]  Therefore, the function is injective.    "
},
{
  "id": "skeleton_surjective",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#skeleton_surjective",
  "type": "Skeleton Proof",
  "number": "8.34",
  "title": "Proof that a function is surjective.",
  "body": " Proof that a function is surjective   Here is the general structure for proving that a function is surjective.   Assume is a function defined by (or satisfying) [Use the given definition (or describe the given property) of ] . Let .  [Use the definition (or property) to find some such that ]  Therefore, the function is surjective.    "
},
{
  "id": "prob_injective_surjective_functions",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#prob_injective_surjective_functions",
  "type": "Problem",
  "number": "8.35",
  "title": "",
  "body": "  Determine whether each of the following functions is injective, surjective, both, or neither. In each case, you should provide a proof or a counterexample as appropriate. Note: You are probably not in a position to write a careful argument for surjectivity for Part .  Define via   Define via   Define via   Define via   Define via   Define via    Define via   Define via   The function defined in Problem  .  The function defined in Problem  .  The function defined in Problem  .     "
},
{
  "id": "sec_Injective_and_Surjective_Functions-15",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-15",
  "type": "Problem",
  "number": "8.36",
  "title": "",
  "body": "  Suppose and are nonempty sets with and elements, respectively, where . How many injections are there from to ?   "
},
{
  "id": "sec_Injective_and_Surjective_Functions-16",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-16",
  "type": "Problem",
  "number": "8.37",
  "title": "",
  "body": "  Compare and contrast the definition of function with the definition of injective function . Consider the vertical line test and horizontal line test in your discussion. Moreover, attempt to capture what it means for a relation to not be a function and for a function to not be an injection by drawing portions of a digraph.   "
},
{
  "id": "sec_Injective_and_Surjective_Functions-18",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-18",
  "type": "Theorem",
  "number": "8.38",
  "title": "",
  "body": "  The inclusion map for is an injection.   "
},
{
  "id": "sec_Injective_and_Surjective_Functions-19",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-19",
  "type": "Theorem",
  "number": "8.39",
  "title": "",
  "body": "  The identity function is a bijection.   "
},
{
  "id": "sec_Injective_and_Surjective_Functions-20",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-20",
  "type": "Problem",
  "number": "8.40",
  "title": "",
  "body": "  Let and be nonempty sets and let be a nonempty subset of . Define and via and . We call and the projections of onto and , respectively.   Provide examples to show that does not need to be injective nor surjective.    Suppose that is also a function. Is injective? Is surjective? How about ?      "
},
{
  "id": "thm_canonical_projection",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#thm_canonical_projection",
  "type": "Theorem",
  "number": "8.41",
  "title": "",
  "body": "  If is an equivalence relation on a nonempty set , then the function defined via is a surjection.   "
},
{
  "id": "sec_Injective_and_Surjective_Functions-23",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "canonical projection map "
},
{
  "id": "sec_Injective_and_Surjective_Functions-24",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-24",
  "type": "Problem",
  "number": "8.42",
  "title": "",
  "body": "  Under what circumstances would the function from the previous theorem also be injective?   "
},
{
  "id": "sec_Injective_and_Surjective_Functions-26",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-26",
  "type": "Problem",
  "number": "8.43",
  "title": "",
  "body": "  Let be a relation on a nonempty set .   What conditions on must hold in order for defined via to be a function?    What additional conditions, if any, must hold on in order for to be a surjective function?      "
},
{
  "id": "thm_equiv_relation_from_preimages",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#thm_equiv_relation_from_preimages",
  "type": "Theorem",
  "number": "8.44",
  "title": "",
  "body": "  Let be a function and define on via if . Then is an equivalence relation on .   "
},
{
  "id": "prob_equiv_classes_from_preimages",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#prob_equiv_classes_from_preimages",
  "type": "Problem",
  "number": "8.45",
  "title": "",
  "body": "  For each of the following, identify the equivalence classes induced by the relation from Theorem for the given function.   The function defined in Example .    The function defined in Problem  . Can you describe the equivalence classes geometrically?      "
},
{
  "id": "thm_iso_theorem_for_sets",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#thm_iso_theorem_for_sets",
  "type": "Theorem",
  "number": "8.46",
  "title": "",
  "body": "  Let be a function and define on as in Theorem . Then the function defined via is a bijection.   "
},
{
  "id": "sec_Injective_and_Surjective_Functions-34",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-34",
  "type": "Example",
  "number": "8.47",
  "title": "",
  "body": "  Let and and define via .  The function diagram for is given in Figure , where we have highlighted the elements of the domain that map to the same element in the range by enclosing them in additional boxes. We see that . The function diagram for the induced map that is depicted in Figure makes it clear that is a bijection. Note that since and , it must be the case that and according to Theorem . Thus, the vertices labeled as and in Figure could have also been labeled as and or , respectively. In terms of our passengers and airplanes analogy, is the set of passengers, is the set of potential destination cities, is the set of airplanes, and is the set of cities that airplanes land at. The equivalence class is the airplane containing the passenger , and since and are on the same plane, is also the plane containing the passenger .   "
},
{
  "id": "fig_passengers_and_airplanes",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#fig_passengers_and_airplanes",
  "type": "Figure",
  "number": "8.2",
  "title": "",
  "body": " Example of a visual representation of Theorem .                "
},
{
  "id": "prob_iso_theorem_for_sets",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#prob_iso_theorem_for_sets",
  "type": "Problem",
  "number": "8.48",
  "title": "",
  "body": "  Consider the equivalence classes you identified in Parts (a) and (b) of Problem .   Draw the function diagram for the function as defined in Theorem , where is the function defined in Example .    Geometrically describe the function as defined in Theorem , where is the function defined in Problem  .      "
},
{
  "id": "prob_Z_to_Z_mod_4",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#prob_Z_to_Z_mod_4",
  "type": "Problem",
  "number": "8.49",
  "title": "",
  "body": "  Let and define the function such that equals the unique remainder obtained after dividing by 4. For example, since according to the Division Algorithm ( Theorem ). This function is sometimes written as , where it is understood that we restrict the output to . It is clear that is surjective since 0, 1, 2, and 3 are mapped to 0, 1, 2, and 3, respectively. Figure depicts a portion of the function diagram for , where we have drawn the diagram from the top down instead of left to right.   Describe the equivalence classes induced by the relation given in Theorem .    What familiar set is equal to?    Draw the function diagram for the function as defined in Theorem .    The function diagram in Figure is a bit hard to interpret due to the ordering of the elements in the domain. Can you find a better way to lay out the vertices in the domain that makes the function easier to interpret?      "
},
{
  "id": "fig_Z_to_Z_mod_4",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#fig_Z_to_Z_mod_4",
  "type": "Figure",
  "number": "8.3",
  "title": "",
  "body": " Function diagram for the function described in Problem .     "
},
{
  "id": "sec_Injective_and_Surjective_Functions-40",
  "level": "2",
  "url": "sec_Injective_and_Surjective_Functions.html#sec_Injective_and_Surjective_Functions-40",
  "type": "Problem",
  "number": "8.50",
  "title": "",
  "body": "  Consider the function defined in Problem  .   Draw the function diagram for .    Identify the equivalence classes induced by the relation given in Theorem .    Draw the function diagram for the function as defined in Theorem .      "
},
{
  "id": "sec_Compositions_and_Inverse_Functions",
  "level": "1",
  "url": "sec_Compositions_and_Inverse_Functions.html",
  "type": "Section",
  "number": "8.3",
  "title": "Compositions and Inverse Functions",
  "body": " Compositions and Inverse Functions  We begin this section with a method for combining two functions together that have compatible domains and codomains.    If and are functions, we define via . The function is called the composition of and .    It is important to notice that the function on the right is the one that goes first. Moreover, we cannot compose any two random functions since the codomain of the first function must agree with the domain of the second function. In particular, may not be a sensible function even when exists. Figure provides a visual representation of function composition in terms of function diagrams.   Visual representation of function composition.        Let and define and via and .  For each of the following functions, draw the corresponding function diagram in the spirit of Figure and identify the range.                The previous problem illustrates that and need not be equal even when both composite functions exist.    Consider the inclusion map such that is a proper subset of and suppose is a function. Then the composite function is given by for all . Notice that is simply the function but with a smaller domain. In this case, we say that is the restriction of to , which is often denoted by .      Define and via and , respectively. Determine formulas for the composite functions and .      Define and via and , respectively. Find a formula for the composite function .      Define and via and , respectively. Find a formula for the composite function .    The following result provides some insight into where the identity map got its name.    If is a function, then , where and are the identity maps on and , respectively.    The next theorem tells us that function composition is associative.    If , , and are functions, then .      In each case, give examples of finite sets , , and , and functions and that satisfy the given conditions. Drawing a function diagram is sufficient.    is surjective, but is not surjective.     is surjective, but is not surjective.     is injective, but is not injective.     is injective, but is not injective.         If and are both surjective functions, then is also surjective.      If and are both injective functions, then is also injective.      If and are both bijections, then is also a bijection.      Assume that and are both functions. Determine whether each of the following statements is true or false. If a statement is true, prove it. Otherwise, provide a counterexample.   If is injective, then is injective.    If is injective, then is injective.    If is surjective, then is surjective.    If is surjective, then is surjective.         Let be a function. Then is injective if and only if there exists a function such that , where is the identity map on .    The function in the previous theorem is often called a left inverse of .    Let be a function. Then is surjective if and only if there exists a function such that , where is the identity map on .    The function in the previous theorem is often called a right inverse of .    Complete each of the following. Consider using finite sets and drawing a function diagram to define your functions.   Provide an example of a function that has a left inverse but does not have a right inverse. Find the left inverse of your proposed function.    Provide an example of a function that has a right inverse but does not have a left inverse. Find the right inverse of your proposed function.         Define via . Explain why does not have a left inverse nor a right inverse.      Define via and via .   Explain why does not have a left inverse.    Verify that is the right inverse of by computing .         If and are functions satisfying and , then is a bijection.    In the previous result, the functions and  cancel each other out. In this case, we say that is a two-sided inverse of .    Let be a function. The relation from to , called  inverse , is defined via .    Notice that we called a relation and not a function. In some circumstances will be a function and sometimes it will not be. Given a function , the inverse relation is simply the set of ordered pairs that results from reversing the ordered pairs in . It is worth pointing out that we have only defined inverse relations for functions. However, one can easily adapt our definition to handle arbitrary relations.    Consider the function given in Example (see Figure ). List the ordered pairs in the relation and draw the corresponding digraph. Is a function?      Provide an example of a function such that is a function. Drawing a function diagram is sufficient.      Suppose and is a function. What is the relationship between the graph of the function and the graph of the inverse relation ?      Let be a function. Then is a function if and only if is a bijection.      Suppose is a function. Fill in the blank with the appropriate phrase.  The relation is a function if and only if every horizontal line hits the graph of                  .  Explain why this statement is true.      If is a bijection, then    , and     .         If is a bijection, then is also a bijection.      If and are functions such that and , then is a function and .    The upshot of and is that if is a function, then it is the only one satisfying the two-sided inverse property exhibited in Corollary and Theorem . That is, inverse functions are unique when they exist. When the relation is a function, we call it the inverse function of .    Let and suppose is a function. Explain the difference between and . When does each exist?      Let and define via and via . Identify the largest possible choices for and so that and are inverses of each other.      If is a bijection, then .    In the previous theorem, we restricted our attention to bijections so that would be a function, thus making a sensible inverse relation in light of Definition . If we had defined inverses for arbitrary relations, then we would not have needed to require the function in Theorem to be a bijection. In fact, we do not even need to require the relation to be a function. That is, if is a relation from to , then , as expected. Similarly, the next result generalizes to arbitrary relations.    If and are both bijections, then .    The previous theorem is sometimes referred to as the socks and shoes theorem . Do you see how it got this name?    The most difficult thing is the decision to act. The rest is merely tenacity.  Amelia Earhart, aviation pioneer   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-3",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-3",
  "type": "Definition",
  "number": "8.51",
  "title": "",
  "body": "  If and are functions, we define via . The function is called the composition of and .   "
},
{
  "id": "fig_function_composition",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#fig_function_composition",
  "type": "Figure",
  "number": "8.4",
  "title": "",
  "body": " Visual representation of function composition.     "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-6",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-6",
  "type": "Problem",
  "number": "8.52",
  "title": "",
  "body": "  Let and define and via and .  For each of the following functions, draw the corresponding function diagram in the spirit of Figure and identify the range.               "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-8",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-8",
  "type": "Example",
  "number": "8.53",
  "title": "",
  "body": "  Consider the inclusion map such that is a proper subset of and suppose is a function. Then the composite function is given by for all . Notice that is simply the function but with a smaller domain. In this case, we say that is the restriction of to , which is often denoted by .   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-9",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-9",
  "type": "Problem",
  "number": "8.54",
  "title": "",
  "body": "  Define and via and , respectively. Determine formulas for the composite functions and .   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-10",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-10",
  "type": "Problem",
  "number": "8.55",
  "title": "",
  "body": "  Define and via and , respectively. Find a formula for the composite function .   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-11",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-11",
  "type": "Problem",
  "number": "8.56",
  "title": "",
  "body": "  Define and via and , respectively. Find a formula for the composite function .   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-13",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-13",
  "type": "Theorem",
  "number": "8.57",
  "title": "",
  "body": "  If is a function, then , where and are the identity maps on and , respectively.   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-15",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-15",
  "type": "Theorem",
  "number": "8.58",
  "title": "",
  "body": "  If , , and are functions, then .   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-16",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-16",
  "type": "Problem",
  "number": "8.59",
  "title": "",
  "body": "  In each case, give examples of finite sets , , and , and functions and that satisfy the given conditions. Drawing a function diagram is sufficient.    is surjective, but is not surjective.     is surjective, but is not surjective.     is injective, but is not injective.     is injective, but is not injective.      "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-17",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-17",
  "type": "Theorem",
  "number": "8.60",
  "title": "",
  "body": "  If and are both surjective functions, then is also surjective.   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-18",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-18",
  "type": "Theorem",
  "number": "8.61",
  "title": "",
  "body": "  If and are both injective functions, then is also injective.   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-19",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-19",
  "type": "Corollary",
  "number": "8.62",
  "title": "",
  "body": "  If and are both bijections, then is also a bijection.   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-20",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-20",
  "type": "Problem",
  "number": "8.63",
  "title": "",
  "body": "  Assume that and are both functions. Determine whether each of the following statements is true or false. If a statement is true, prove it. Otherwise, provide a counterexample.   If is injective, then is injective.    If is injective, then is injective.    If is surjective, then is surjective.    If is surjective, then is surjective.      "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-21",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-21",
  "type": "Theorem",
  "number": "8.64",
  "title": "",
  "body": "  Let be a function. Then is injective if and only if there exists a function such that , where is the identity map on .   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-22",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-22",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "left inverse "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-23",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-23",
  "type": "Theorem",
  "number": "8.65",
  "title": "",
  "body": "  Let be a function. Then is surjective if and only if there exists a function such that , where is the identity map on .   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-24",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right inverse "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-25",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-25",
  "type": "Problem",
  "number": "8.66",
  "title": "",
  "body": "  Complete each of the following. Consider using finite sets and drawing a function diagram to define your functions.   Provide an example of a function that has a left inverse but does not have a right inverse. Find the left inverse of your proposed function.    Provide an example of a function that has a right inverse but does not have a left inverse. Find the right inverse of your proposed function.      "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-26",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-26",
  "type": "Problem",
  "number": "8.67",
  "title": "",
  "body": "  Define via . Explain why does not have a left inverse nor a right inverse.   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-27",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-27",
  "type": "Problem",
  "number": "8.68",
  "title": "",
  "body": "  Define via and via .   Explain why does not have a left inverse.    Verify that is the right inverse of by computing .      "
},
{
  "id": "cor_two-sided_inverse",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#cor_two-sided_inverse",
  "type": "Corollary",
  "number": "8.69",
  "title": "",
  "body": "  If and are functions satisfying and , then is a bijection.   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-29",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "two-sided inverse "
},
{
  "id": "def_inverse_of_a_function",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#def_inverse_of_a_function",
  "type": "Definition",
  "number": "8.70",
  "title": "",
  "body": "  Let be a function. The relation from to , called  inverse , is defined via .   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-32",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-32",
  "type": "Problem",
  "number": "8.71",
  "title": "",
  "body": "  Consider the function given in Example (see Figure ). List the ordered pairs in the relation and draw the corresponding digraph. Is a function?   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-33",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-33",
  "type": "Problem",
  "number": "8.72",
  "title": "",
  "body": "  Provide an example of a function such that is a function. Drawing a function diagram is sufficient.   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-34",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-34",
  "type": "Problem",
  "number": "8.73",
  "title": "",
  "body": "  Suppose and is a function. What is the relationship between the graph of the function and the graph of the inverse relation ?   "
},
{
  "id": "thm_inverse_function_iff_bijection",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#thm_inverse_function_iff_bijection",
  "type": "Theorem",
  "number": "8.74",
  "title": "",
  "body": "  Let be a function. Then is a function if and only if is a bijection.   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-36",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-36",
  "type": "Problem",
  "number": "8.75",
  "title": "",
  "body": "  Suppose is a function. Fill in the blank with the appropriate phrase.  The relation is a function if and only if every horizontal line hits the graph of                  .  Explain why this statement is true.   "
},
{
  "id": "thm_comp_of_inverses",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#thm_comp_of_inverses",
  "type": "Theorem",
  "number": "8.76",
  "title": "",
  "body": "  If is a bijection, then    , and     .      "
},
{
  "id": "thm_f_inverse_bijection",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#thm_f_inverse_bijection",
  "type": "Theorem",
  "number": "8.77",
  "title": "",
  "body": "  If is a bijection, then is also a bijection.   "
},
{
  "id": "thm_unique_inverse",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#thm_unique_inverse",
  "type": "Theorem",
  "number": "8.78",
  "title": "",
  "body": "  If and are functions such that and , then is a function and .   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-40",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-40",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse function "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-41",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-41",
  "type": "Problem",
  "number": "8.79",
  "title": "",
  "body": "  Let and suppose is a function. Explain the difference between and . When does each exist?   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-42",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-42",
  "type": "Problem",
  "number": "8.80",
  "title": "",
  "body": "  Let and define via and via . Identify the largest possible choices for and so that and are inverses of each other.   "
},
{
  "id": "thm_inverse_of_inverse",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#thm_inverse_of_inverse",
  "type": "Theorem",
  "number": "8.81",
  "title": "",
  "body": "  If is a bijection, then .   "
},
{
  "id": "sec_Compositions_and_Inverse_Functions-45",
  "level": "2",
  "url": "sec_Compositions_and_Inverse_Functions.html#sec_Compositions_and_Inverse_Functions-45",
  "type": "Theorem",
  "number": "8.82",
  "title": "",
  "body": "  If and are both bijections, then .   "
},
{
  "id": "sec_Images_and_Preimages",
  "level": "1",
  "url": "sec_Images_and_Preimages.html",
  "type": "Section",
  "number": "8.4",
  "title": "Images and Preimages of Functions",
  "body": " Images and Preimages of Functions  There are two important types of sets related to functions.    Let be a function.  If , the image of under is defined via .   If , the preimage (or inverse image ) of under is defined via .      The image of a subset of the domain is simply the subset of the codomain we obtain by mapping the elements of . It is important to emphasize that the function maps elements of to elements of , but we can apply to a subset of to yield a subset of . That is, if , then . Note that the image of the domain is the same as the range of the function. That is, .  When it comes to preimages, there is a real opportunity for confusion. In Section , we introduced the inverse relation of a function (see Definition ) and proved that this relation is a function exactly when is a bijection (see Theorem ). If is a function, then it is sensible to write for . Notice that we defined the preimage of a subset of the codomain regardless of whether is a function or not. In particular, for , is the set of elements in the domain that map to elements in . As a special case, is the set of elements in the domain that map to . If , then . Notice that if , is always a sensible thing to write while only makes sense if is a function. Also, note that the preimage of the codomain is the domain. That is, .    Define via . List elements in each of the following sets.                  Define via . Find each of the following sets.                                                          Define via .   Find two nonempty subsets and of such that but .    Find two nonempty subsets and of such that but .         Suppose is an injection and and are disjoint subsets of . Are and necessarily disjoint subsets of ? If so, prove it. Otherwise, provide a counterexample.      Find examples of functions and together with sets and such that and .      Let be a function and suppose and . Determine whether each of the following statements is true or false. If a statement is true, prove it. Otherwise, provide a counterexample.   If , then .    If , then .     .     .     .     .     .     .     .     .     .     .     .     .         For each of the statements in the previous problem that were false, determine conditions, if any, on the corresponding sets that would make the statement true.    We can generalize the results above to handle arbitrary collections of sets.    Let be a function and suppose is a collection of subsets of .    .     .         Let be a function and suppose is a collection of subsets of .    .     .         Consider the equivalence relation given in Theorem . Explain why each equivalence class is equal to .      Suppose that is a function satisfying for all .   Prove that .    Prove that for all .    Prove that is injective if and only if .    Certainly every function given by for satisfies the initial hypothesis. Can you provide an example of a function that satisfies that is not of the form ?         The obstacle is the path.  Zen saying, Author Unknown   "
},
{
  "id": "sec_Images_and_Preimages-3",
  "level": "2",
  "url": "sec_Images_and_Preimages.html#sec_Images_and_Preimages-3",
  "type": "Definition",
  "number": "8.83",
  "title": "",
  "body": "  Let be a function.  If , the image of under is defined via .   If , the preimage (or inverse image ) of under is defined via .     "
},
{
  "id": "sec_Images_and_Preimages-6",
  "level": "2",
  "url": "sec_Images_and_Preimages.html#sec_Images_and_Preimages-6",
  "type": "Problem",
  "number": "8.84",
  "title": "",
  "body": "  Define via . List elements in each of the following sets.               "
},
{
  "id": "sec_Images_and_Preimages-7",
  "level": "2",
  "url": "sec_Images_and_Preimages.html#sec_Images_and_Preimages-7",
  "type": "Problem",
  "number": "8.85",
  "title": "",
  "body": "  Define via . Find each of the following sets.                                                       "
},
{
  "id": "sec_Images_and_Preimages-8",
  "level": "2",
  "url": "sec_Images_and_Preimages.html#sec_Images_and_Preimages-8",
  "type": "Problem",
  "number": "8.86",
  "title": "",
  "body": "  Define via .   Find two nonempty subsets and of such that but .    Find two nonempty subsets and of such that but .      "
},
{
  "id": "sec_Images_and_Preimages-9",
  "level": "2",
  "url": "sec_Images_and_Preimages.html#sec_Images_and_Preimages-9",
  "type": "Problem",
  "number": "8.87",
  "title": "",
  "body": "  Suppose is an injection and and are disjoint subsets of . Are and necessarily disjoint subsets of ? If so, prove it. Otherwise, provide a counterexample.   "
},
{
  "id": "sec_Images_and_Preimages-10",
  "level": "2",
  "url": "sec_Images_and_Preimages.html#sec_Images_and_Preimages-10",
  "type": "Problem",
  "number": "8.88",
  "title": "",
  "body": "  Find examples of functions and together with sets and such that and .   "
},
{
  "id": "sec_Images_and_Preimages-11",
  "level": "2",
  "url": "sec_Images_and_Preimages.html#sec_Images_and_Preimages-11",
  "type": "Problem",
  "number": "8.89",
  "title": "",
  "body": "  Let be a function and suppose and . Determine whether each of the following statements is true or false. If a statement is true, prove it. Otherwise, provide a counterexample.   If , then .    If , then .     .     .     .     .     .     .     .     .     .     .     .     .      "
},
{
  "id": "sec_Images_and_Preimages-12",
  "level": "2",
  "url": "sec_Images_and_Preimages.html#sec_Images_and_Preimages-12",
  "type": "Problem",
  "number": "8.90",
  "title": "",
  "body": "  For each of the statements in the previous problem that were false, determine conditions, if any, on the corresponding sets that would make the statement true.   "
},
{
  "id": "thm_unions_and_intersections_of_images",
  "level": "2",
  "url": "sec_Images_and_Preimages.html#thm_unions_and_intersections_of_images",
  "type": "Theorem",
  "number": "8.91",
  "title": "",
  "body": "  Let be a function and suppose is a collection of subsets of .    .     .      "
},
{
  "id": "thm_unions_and_intersections_of_preimages",
  "level": "2",
  "url": "sec_Images_and_Preimages.html#thm_unions_and_intersections_of_preimages",
  "type": "Theorem",
  "number": "8.92",
  "title": "",
  "body": "  Let be a function and suppose is a collection of subsets of .    .     .      "
},
{
  "id": "sec_Images_and_Preimages-16",
  "level": "2",
  "url": "sec_Images_and_Preimages.html#sec_Images_and_Preimages-16",
  "type": "Problem",
  "number": "8.93",
  "title": "",
  "body": "  Consider the equivalence relation given in Theorem . Explain why each equivalence class is equal to .   "
},
{
  "id": "sec_Images_and_Preimages-17",
  "level": "2",
  "url": "sec_Images_and_Preimages.html#sec_Images_and_Preimages-17",
  "type": "Problem",
  "number": "8.94",
  "title": "",
  "body": "  Suppose that is a function satisfying for all .   Prove that .    Prove that for all .    Prove that is injective if and only if .    Certainly every function given by for satisfies the initial hypothesis. Can you provide an example of a function that satisfies that is not of the form ?      "
},
{
  "id": "sec_Continuity",
  "level": "1",
  "url": "sec_Continuity.html",
  "type": "Section",
  "number": "8.5",
  "title": "Continuous Real Functions",
  "body": " Continuous Real Functions  In this section, we will explore the concept of continuity, which you likely encountered in high school.    A real function is any function such that is a nonempty subset of .    There are several equivalent definitions of continuity for real functions. The following characterization is typically referred to as the epsilon-delta definition of continuity . Our definition mimics the definition of continuity used in metric spaces, which equipped with absolute value happens to be an example of. Recall that means that the distance between and is less than (see discussion below Corollary ).    Suppose is a real function such that . We say that is continuous at if for every , there exists such that if and , then . If is continuous at every point in , then we say that is continuous on . If is continuous on its entire domain, we simply say that is continuous .    Loosely speaking, a real function is continuous at the point if we can get arbitrarily close to by considering all sufficiently close to . The value is indicating how close to we need to be while the value is providing the window around needed to guarantee that all points in the window (and in the domain) yield outputs within of . Figure illustrates our definition of continuity. Note that in the figure, the point is fixed while we need to consider all such that . The dashed box in the figure has dimensions by and is centered at the point . Intuitively, the function is continuous at since given , we could find so that the graph of the function never exits the top or bottom of the dashed box.   Visual representation of continuity of at .      Perhaps you have encountered the phrase a function is continuous if you can draw its graph without lifting your pencil. While this description provides some intuition about what continuity of a function means, it is neither accurate nor precise enough to capture the meaning of continuity.  When proving that a function is continuous at a point, the choice of depends on both the point in question and the value of . An example should be helpful.    Define via . Let's prove that is continuous (at every point in the domain). Let and let . Choose . We will see in a moment why this is a good choice for . Suppose such that . We see that .  We have shown that is continuous at , and since was arbitrary, is continuous.      Prove that each of the following real functions is continuous using Definition .    defined via .     defined via .     defined via .       The next result tells us that every linear real function is continuous. Do not forget to handle the case when in your proof. Note that the case when proves that every constant function is continuous.    If is defined via for , then is continuous.    The second part of the next problem is much harder than you might expect.    Define via .   Prove that is continuous at 0.    Prove that is continuous at 1.         Define via . Prove that is continuous at 0.      Suppose is a real function. Write a precise statement for what it means for to not be continuous at .      Define via   Determine where is continuous and justify your assertion.      Define via   Determine where is continuous and justify your assertion.    After completing the next problem, reflect on the statement a function is continuous if you can draw its graph without lifting your pencil.     Define via . Notice the domain! Determine where is continuous and justify your assertion.      Suppose is a real function. Then is continuous if and only if the preimage of every open set is an open set intersected with the domain of .    The previous characterization of continuity is often referred to as the open set definition of continuity, although for us it is a theorem instead of a definition. This is the definition used in topology. Another notion of continuity, called sequential continuity , makes use of convergent sequences. All of these characterizations of continuity are equivalent for the real numbers (using the standard definition of an open set). However, there are contexts in mathematics where the epsilon-delta definition of continuity is undefined (because there is not a notion of distance in either the domain or codomain) and others where continuity and sequential continuity are not equivalent.  Since every open set is the union of bounded open intervals ( Definition ), the union of open sets is open ( Theorem ), and preimages respect unions ( Theorem ), we can strengthen Theorem into a slightly more useful result.    Suppose is a real function. Then is continuous if and only if the preimage of every bounded open interval is an open set intersected with the domain of .    Now that we have two methods for verifying continuity ( Definition and Theorem \/ ), you can use either one when approaching the remaining problems in this section. Sometimes it does not matter which approach you take and other times one method might be better suited to the task.    Define via . Prove that is continuous.      Define via . Determine where is continuous and justify your assertion.    The previous problems once again calls into question the phrase a function is continuous if you can draw its graph without lifting your pencil.     Find a continuous real function and an open interval such that the preimage is not an open interval.    For the next few problems, if you attempt to construct counterexamples, you may rely on your previous knowledge about various functions that you encountered in high school and calculus.    Suppose is a continuous real function. If is an open set contained in , is the image always open? If so, prove it. Otherwise, provide a counterexample.      Suppose is a continuous real function. If is a closed set, is the preimage always a closed set? If so, prove it. Otherwise, provide a counterexample.      Suppose is a continuous real function. If is a closed interval contained in , is the image always a closed interval? If so, prove it. Otherwise, provide a counterexample.      Suppose is a continuous real function. If is a closed set contained in , is the image always a closed set? If so, prove it. Otherwise, provide a counterexample.      Suppose is a continuous real function. If is bounded set contained in , is the image always a bounded set? If so, prove it. Otherwise, provide a counterexample.      Suppose is a continuous real function. If is a bounded set, is the preimage always a bounded set? If so, prove it. Otherwise, provide a counterexample.      Suppose is a continuous real function. If is a compact set, is the preimage always a compact set? If so, prove it. Otherwise, provide a counterexample.      Suppose is a continuous real function. If is a connected set contained in , is the image always connected? If so, prove it. Otherwise, provide a counterexample.      Suppose is a continuous real function. If is a connected set, is the preimage always a connected set? If so, prove it. Otherwise, provide a counterexample.    Perhaps you noticed the absence of one natural question in the previous sequence of problems. If is a continuous real function and is a subset of the domain of , is the image a compact set? It turns out that the answer is yes , but proving this fact is beyond the scope of this book. This theorem is often proved in a real analysis course and is then used to prove the Extreme Value Theorem, which you may have encountered in your calculus course.  The next result is a special case of the well-known Intermediate Value Theorem , which states that if is a continuous real function whose domain contains the interval , then attains every value between and at some point within the interval . To prove the special case, utilize Theorem and Problem together with a proof by contradiction.    Suppose is a real function. If is continuous on such that or , then there exists such that .    If we generalize the previous result, we obtain the Intermediate Value Theorem.   Intermediate Value Theorem   Suppose is a real function. If is continuous on such that or for some , then there exists such that .      Is the converse of the Intermediate Value Theorem true? If so, prove it. Otherwise, provide a counterexample.      The miracle of the appropriateness of the language of mathematics for the formulation of the laws of physics is a wonderful gift which we neither understand nor deserve. We should be grateful for it and hope that it will remain valid in future research and that it will extend, for better or for worse, to our pleasure, even though perhaps also to our bafflement, to wide branches of learning.  Eugene Paul Wigner, theoretical physicist   "
},
{
  "id": "sec_Continuity-3",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-3",
  "type": "Definition",
  "number": "8.95",
  "title": "",
  "body": "  A real function is any function such that is a nonempty subset of .   "
},
{
  "id": "sec_Continuity-4",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "epsilon-delta definition of continuity "
},
{
  "id": "def_continuity",
  "level": "2",
  "url": "sec_Continuity.html#def_continuity",
  "type": "Definition",
  "number": "8.96",
  "title": "",
  "body": "  Suppose is a real function such that . We say that is continuous at if for every , there exists such that if and , then . If is continuous at every point in , then we say that is continuous on . If is continuous on its entire domain, we simply say that is continuous .   "
},
{
  "id": "fig_continuity",
  "level": "2",
  "url": "sec_Continuity.html#fig_continuity",
  "type": "Figure",
  "number": "8.5",
  "title": "",
  "body": " Visual representation of continuity of at .     "
},
{
  "id": "sec_Continuity-10",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-10",
  "type": "Example",
  "number": "8.97",
  "title": "",
  "body": "  Define via . Let's prove that is continuous (at every point in the domain). Let and let . Choose . We will see in a moment why this is a good choice for . Suppose such that . We see that .  We have shown that is continuous at , and since was arbitrary, is continuous.   "
},
{
  "id": "sec_Continuity-11",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-11",
  "type": "Problem",
  "number": "8.98",
  "title": "",
  "body": "  Prove that each of the following real functions is continuous using Definition .    defined via .     defined via .     defined via .      "
},
{
  "id": "sec_Continuity-13",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-13",
  "type": "Theorem",
  "number": "8.99",
  "title": "",
  "body": "  If is defined via for , then is continuous.   "
},
{
  "id": "sec_Continuity-15",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-15",
  "type": "Problem",
  "number": "8.100",
  "title": "",
  "body": "  Define via .   Prove that is continuous at 0.    Prove that is continuous at 1.      "
},
{
  "id": "sec_Continuity-16",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-16",
  "type": "Problem",
  "number": "8.101",
  "title": "",
  "body": "  Define via . Prove that is continuous at 0.   "
},
{
  "id": "sec_Continuity-17",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-17",
  "type": "Problem",
  "number": "8.102",
  "title": "",
  "body": "  Suppose is a real function. Write a precise statement for what it means for to not be continuous at .   "
},
{
  "id": "sec_Continuity-18",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-18",
  "type": "Problem",
  "number": "8.103",
  "title": "",
  "body": "  Define via   Determine where is continuous and justify your assertion.   "
},
{
  "id": "sec_Continuity-19",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-19",
  "type": "Problem",
  "number": "8.104",
  "title": "",
  "body": "  Define via   Determine where is continuous and justify your assertion.   "
},
{
  "id": "sec_Continuity-21",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-21",
  "type": "Problem",
  "number": "8.105",
  "title": "",
  "body": "  Define via . Notice the domain! Determine where is continuous and justify your assertion.   "
},
{
  "id": "thm_preimages_open_sets",
  "level": "2",
  "url": "sec_Continuity.html#thm_preimages_open_sets",
  "type": "Theorem",
  "number": "8.106",
  "title": "",
  "body": "  Suppose is a real function. Then is continuous if and only if the preimage of every open set is an open set intersected with the domain of .   "
},
{
  "id": "thm_preimages_basic_open_sets",
  "level": "2",
  "url": "sec_Continuity.html#thm_preimages_basic_open_sets",
  "type": "Theorem",
  "number": "8.107",
  "title": "",
  "body": "  Suppose is a real function. Then is continuous if and only if the preimage of every bounded open interval is an open set intersected with the domain of .   "
},
{
  "id": "sec_Continuity-27",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-27",
  "type": "Problem",
  "number": "8.108",
  "title": "",
  "body": "  Define via . Prove that is continuous.   "
},
{
  "id": "sec_Continuity-28",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-28",
  "type": "Problem",
  "number": "8.109",
  "title": "",
  "body": "  Define via . Determine where is continuous and justify your assertion.   "
},
{
  "id": "sec_Continuity-30",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-30",
  "type": "Problem",
  "number": "8.110",
  "title": "",
  "body": "  Find a continuous real function and an open interval such that the preimage is not an open interval.   "
},
{
  "id": "sec_Continuity-32",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-32",
  "type": "Problem",
  "number": "8.111",
  "title": "",
  "body": "  Suppose is a continuous real function. If is an open set contained in , is the image always open? If so, prove it. Otherwise, provide a counterexample.   "
},
{
  "id": "sec_Continuity-33",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-33",
  "type": "Problem",
  "number": "8.112",
  "title": "",
  "body": "  Suppose is a continuous real function. If is a closed set, is the preimage always a closed set? If so, prove it. Otherwise, provide a counterexample.   "
},
{
  "id": "sec_Continuity-34",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-34",
  "type": "Problem",
  "number": "8.113",
  "title": "",
  "body": "  Suppose is a continuous real function. If is a closed interval contained in , is the image always a closed interval? If so, prove it. Otherwise, provide a counterexample.   "
},
{
  "id": "sec_Continuity-35",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-35",
  "type": "Problem",
  "number": "8.114",
  "title": "",
  "body": "  Suppose is a continuous real function. If is a closed set contained in , is the image always a closed set? If so, prove it. Otherwise, provide a counterexample.   "
},
{
  "id": "sec_Continuity-36",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-36",
  "type": "Problem",
  "number": "8.115",
  "title": "",
  "body": "  Suppose is a continuous real function. If is bounded set contained in , is the image always a bounded set? If so, prove it. Otherwise, provide a counterexample.   "
},
{
  "id": "sec_Continuity-37",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-37",
  "type": "Problem",
  "number": "8.116",
  "title": "",
  "body": "  Suppose is a continuous real function. If is a bounded set, is the preimage always a bounded set? If so, prove it. Otherwise, provide a counterexample.   "
},
{
  "id": "sec_Continuity-38",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-38",
  "type": "Problem",
  "number": "8.117",
  "title": "",
  "body": "  Suppose is a continuous real function. If is a compact set, is the preimage always a compact set? If so, prove it. Otherwise, provide a counterexample.   "
},
{
  "id": "prob_continuous_image_of_connected_set",
  "level": "2",
  "url": "sec_Continuity.html#prob_continuous_image_of_connected_set",
  "type": "Problem",
  "number": "8.118",
  "title": "",
  "body": "  Suppose is a continuous real function. If is a connected set contained in , is the image always connected? If so, prove it. Otherwise, provide a counterexample.   "
},
{
  "id": "sec_Continuity-40",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-40",
  "type": "Problem",
  "number": "8.119",
  "title": "",
  "body": "  Suppose is a continuous real function. If is a connected set, is the preimage always a connected set? If so, prove it. Otherwise, provide a counterexample.   "
},
{
  "id": "sec_Continuity-42",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-42",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Intermediate Value Theorem "
},
{
  "id": "sec_Continuity-43",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-43",
  "type": "Theorem",
  "number": "8.120",
  "title": "",
  "body": "  Suppose is a real function. If is continuous on such that or , then there exists such that .   "
},
{
  "id": "sec_Continuity-45",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-45",
  "type": "Theorem",
  "number": "8.121",
  "title": "Intermediate Value Theorem.",
  "body": " Intermediate Value Theorem   Suppose is a real function. If is continuous on such that or for some , then there exists such that .   "
},
{
  "id": "sec_Continuity-46",
  "level": "2",
  "url": "sec_Continuity.html#sec_Continuity-46",
  "type": "Problem",
  "number": "8.122",
  "title": "",
  "body": "  Is the converse of the Intermediate Value Theorem true? If so, prove it. Otherwise, provide a counterexample.   "
},
{
  "id": "sec_Intro_to_Cardinality",
  "level": "1",
  "url": "sec_Intro_to_Cardinality.html",
  "type": "Section",
  "number": "9.1",
  "title": "Introduction to Cardinality",
  "body": " Introduction to Cardinality  What does it mean for two sets to have the same size ? If the sets are finite, this is easy: just count how many elements are in each set. Another approach would be to pair up the elements in each set and see if there are any left over. In other words, check to see if there is a one-to-one correspondence (i.e., bijection) between the two sets.  But what if the sets are infinite? For example, consider the set of natural numbers and the set of even natural numbers . Clearly, is a proper subset of . Moreover, both sets are infinite. In this case, you might be thinking that is larger than  . However, it turns out that there is a one-to-one correspondence between these two sets. In particular, consider the function defined via . It is easily verified that is both injective and surjective. In this case, mathematics has determined that the right viewpoint is that and do have the same size . However, it is clear that size is a bit too imprecise when it comes to infinite sets. We need something more rigorous.    Let and be sets. We say that and have the same cardinality if there exists a bijection between and . In this case, we write .    Note that we have not defined by itself. Doing so would not be too difficult for finite sets, but making such a notation precise in general is tricky business. When we write (and later and ), we are asserting the existence of a certain type of function from to .  If is a bijection from to , then by Theorem , is a bijection from to . Either one of these functions can be utilized to prove that . This idea is worth keeping in mind as you tackle problems in this chapter. In particular, you might have an easier time creating a bijection between two sets in one direction over the other. This is often a limitation of the human mind as to opposed to some fundamental mathematical difficulty.    Let and . The function given by is a bijection from to , and hence . Note that this is not the only bijection from to . In fact, there are bijections from to , one of which is the function we defined above. The inverse of each bijection from to is a bijection from to . We could also use any of of these bijections to verify that .      Define via . It is easily verified that is both injective and surjective, and hence . We could also utilize the inverse function given by to show that and have the same cardinality.      Let denote the set of positive real numbers and define via . As you are likely familiar with, this exponential function is a bijection, and so . Similar to the previous example, we could also use the inverse function given by to show that these two sets have the same cardinality.    The previous two examples illustrate an important distinction between finite sets and infinite sets, namely infinite sets can be in bijection with proper subsets of themselves! and will make this idea explicit.    Let . A North-East lattice path from to is path in the plane from to consisting only steps either one unit North or one unit East. Note that every lattice path from to consists of a total of steps. Figure shows a North-East lattice path from to . Let denote the set of North-East paths from to . For example, the North-East lattice path given in Figure is an element of . A binary string of length is an ordered list of consisting of entries where each entry is either 0 or 1. For example, and are two different binary strings of length 7. Let denote the set of binary strings of length . For example, . We claim that there is a bijection between and . One such bijection is given by mapping a lattice path to the string that results by assigning each East step to 0 and each North step to 1 as we travel the path from to . Using this construction, the lattice path in Figure would get mapped to the binary string . Since no two lattice paths will map to the same string, our mapping is injective. Given a string in , it is easy to find the lattice path in that maps to it, and so our function is also surjective. Thus, our mapping is a bijection between and . We have shown that .     A North-East lattice path from to .      When approaching Part (d) of the next problem, try creating a linear function . Drawing a picture should help.    Prove each of the following. In each case, you should create a bijection between the two sets. Briefly justify that your functions are in fact bijections.                   (where and are intervals)              If is a set, do and have the same cardinality? Justify your answer.      Let denote the collection of North-East lattice paths from to that never drop below the line . These types of lattice paths are often called Dyck paths after the German mathematician Walther Franz Anton von Dyck (1856 1934). A sequence of parentheses is balanced if it can be parsed syntactically. In other words, there should be the same number of open parentheses ( and closed parentheses ) , and when reading from left to right there should never be more closed parentheses than open. For example, and are balanced parenthesizations consisting of three pairs of parentheses while and are not balanced. Let denote the collection of balanced parenthesizations consisting of pairs of parentheses. For example, .   Find all Dyck paths in .    Prove that .       For Part (b) of the next problem, start by defining so that yields a subset of determined by when outputs a 1.    Let denote the set of functions from to .   Describe at least three functions in .    Prove that and have the same cardinality.       Our first theorem concerning cardinality will likely not come as a surprise.    Let , , and be sets.    .    If , then .    If and , then .       In light of the previous theorem, the next result should not be surprising.    If is a set, then has the same cardinality as is an equivalence relation on .      Let , , , and be sets such that and .   If and are disjoint and and are disjoint, then .     .       Given two finite sets, it makes sense to say that one set is larger than another provided one set contains more elements than the other. We would like to generalize this idea to handle both finite and infinite sets.    Let and be sets. If there is an injective function from to , then we say that the cardinality of is less than or equal to the cardinality of . In this case, we write .      Let , , and be sets.   If , then .    If and , then .    If while , then .       It might be tempting to think that the existence of injective function from a set to a set that is not surjective would verify that and . While this is true for finite sets, it is not true for infinite sets as the next problem asks you to verify.    Provide an example of sets and such that despite the fact that there exists an injective function from to that is not surjective.      Let and be sets. We write if and .    As a reminder, the statements and are symbolic ways of asserting the existence of certain types of functions from to . When we write , we are saying something much stronger than There exists a function that is injective but not surjective. The statement is asserting that every injective function from to is not surjective. In general, it is difficult to prove statements like or .    You will become clever through your mistakes.  German Proverb   "
},
{
  "id": "sec_Intro_to_Cardinality-4",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-4",
  "type": "Definition",
  "number": "9.1",
  "title": "",
  "body": "  Let and be sets. We say that and have the same cardinality if there exists a bijection between and . In this case, we write .   "
},
{
  "id": "sec_Intro_to_Cardinality-7",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-7",
  "type": "Example",
  "number": "9.2",
  "title": "",
  "body": "  Let and . The function given by is a bijection from to , and hence . Note that this is not the only bijection from to . In fact, there are bijections from to , one of which is the function we defined above. The inverse of each bijection from to is a bijection from to . We could also use any of of these bijections to verify that .   "
},
{
  "id": "sec_Intro_to_Cardinality-8",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-8",
  "type": "Example",
  "number": "9.3",
  "title": "",
  "body": "  Define via . It is easily verified that is both injective and surjective, and hence . We could also utilize the inverse function given by to show that and have the same cardinality.   "
},
{
  "id": "sec_Intro_to_Cardinality-9",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-9",
  "type": "Example",
  "number": "9.4",
  "title": "",
  "body": "  Let denote the set of positive real numbers and define via . As you are likely familiar with, this exponential function is a bijection, and so . Similar to the previous example, we could also use the inverse function given by to show that these two sets have the same cardinality.   "
},
{
  "id": "sec_Intro_to_Cardinality-11",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-11",
  "type": "Example",
  "number": "9.5",
  "title": "",
  "body": "  Let . A North-East lattice path from to is path in the plane from to consisting only steps either one unit North or one unit East. Note that every lattice path from to consists of a total of steps. Figure shows a North-East lattice path from to . Let denote the set of North-East paths from to . For example, the North-East lattice path given in Figure is an element of . A binary string of length is an ordered list of consisting of entries where each entry is either 0 or 1. For example, and are two different binary strings of length 7. Let denote the set of binary strings of length . For example, . We claim that there is a bijection between and . One such bijection is given by mapping a lattice path to the string that results by assigning each East step to 0 and each North step to 1 as we travel the path from to . Using this construction, the lattice path in Figure would get mapped to the binary string . Since no two lattice paths will map to the same string, our mapping is injective. Given a string in , it is easy to find the lattice path in that maps to it, and so our function is also surjective. Thus, our mapping is a bijection between and . We have shown that .   "
},
{
  "id": "fig_lattice_path",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#fig_lattice_path",
  "type": "Figure",
  "number": "9.1",
  "title": "",
  "body": " A North-East lattice path from to .     "
},
{
  "id": "prob_cardinalityPractice",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#prob_cardinalityPractice",
  "type": "Problem",
  "number": "9.6",
  "title": "",
  "body": "  Prove each of the following. In each case, you should create a bijection between the two sets. Briefly justify that your functions are in fact bijections.                   (where and are intervals)           "
},
{
  "id": "sec_Intro_to_Cardinality-15",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-15",
  "type": "Problem",
  "number": "9.7",
  "title": "",
  "body": "  If is a set, do and have the same cardinality? Justify your answer.   "
},
{
  "id": "sec_Intro_to_Cardinality-16",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-16",
  "type": "Problem",
  "number": "9.8",
  "title": "",
  "body": "  Let denote the collection of North-East lattice paths from to that never drop below the line . These types of lattice paths are often called Dyck paths after the German mathematician Walther Franz Anton von Dyck (1856 1934). A sequence of parentheses is balanced if it can be parsed syntactically. In other words, there should be the same number of open parentheses ( and closed parentheses ) , and when reading from left to right there should never be more closed parentheses than open. For example, and are balanced parenthesizations consisting of three pairs of parentheses while and are not balanced. Let denote the collection of balanced parenthesizations consisting of pairs of parentheses. For example, .   Find all Dyck paths in .    Prove that .      "
},
{
  "id": "sec_Intro_to_Cardinality-18",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-18",
  "type": "Problem",
  "number": "9.9",
  "title": "",
  "body": "  Let denote the set of functions from to .   Describe at least three functions in .    Prove that and have the same cardinality.      "
},
{
  "id": "sec_Intro_to_Cardinality-20",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-20",
  "type": "Theorem",
  "number": "9.10",
  "title": "",
  "body": "  Let , , and be sets.    .    If , then .    If and , then .      "
},
{
  "id": "sec_Intro_to_Cardinality-22",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-22",
  "type": "Corollary",
  "number": "9.11",
  "title": "",
  "body": "  If is a set, then has the same cardinality as is an equivalence relation on .   "
},
{
  "id": "sec_Intro_to_Cardinality-23",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-23",
  "type": "Theorem",
  "number": "9.12",
  "title": "",
  "body": "  Let , , , and be sets such that and .   If and are disjoint and and are disjoint, then .     .      "
},
{
  "id": "sec_Intro_to_Cardinality-25",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-25",
  "type": "Definition",
  "number": "9.13",
  "title": "",
  "body": "  Let and be sets. If there is an injective function from to , then we say that the cardinality of is less than or equal to the cardinality of . In this case, we write .   "
},
{
  "id": "sec_Intro_to_Cardinality-26",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-26",
  "type": "Theorem",
  "number": "9.14",
  "title": "",
  "body": "  Let , , and be sets.   If , then .    If and , then .    If while , then .      "
},
{
  "id": "sec_Intro_to_Cardinality-28",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-28",
  "type": "Problem",
  "number": "9.15",
  "title": "",
  "body": "  Provide an example of sets and such that despite the fact that there exists an injective function from to that is not surjective.   "
},
{
  "id": "sec_Intro_to_Cardinality-29",
  "level": "2",
  "url": "sec_Intro_to_Cardinality.html#sec_Intro_to_Cardinality-29",
  "type": "Definition",
  "number": "9.16",
  "title": "",
  "body": "  Let and be sets. We write if and .   "
},
{
  "id": "sec_Finite_Sets",
  "level": "1",
  "url": "sec_Finite_Sets.html",
  "type": "Section",
  "number": "9.2",
  "title": "Finite Sets",
  "body": " Finite Sets  In the previous section, we used the phrase finite set without formally defining it. Let's be a bit more precise. The following shorthand comes in handy.    For each , define .    For example, . Notice that our notation looks just like the notation we used for equivalence classes. However, despite the similar notation, these concepts are unrelated. We will have to rely on context to keep them straight.  The next definition should coincide with your intuition about what it means for a set to be finite.    A set is finite if or for some . If , then we say that has cardinality and if , then we say that has cardinality .    Let's prove a few results about finite sets. When proving the following theorems, do not forget to consider the empty set.    If is finite and , then is finite.      If has cardinality and , then is finite and has cardinality .    Consider using induction when proving the next theorem.    For every , every subset of is finite.     Theorem shows that adding a single element to a finite set increases the cardinality by 1. As you would expect, removing one element from a finite set decreases the cardinality by 1.    If has cardinality , then for all , is finite and has cardinality .    The next result tells us that the cardinality of a proper subset of a finite set is never the same as the cardinality of the original set. It turns out that this theorem does not hold for infinite sets.    Every subset of a finite set is finite. In particular, if is a finite set, then for all proper subsets of .    Induction is a sensible approach to proving the next two theorems.    If is a finite collection of finite sets, then is finite.    The next theorem, called the Pigeonhole Principle , is surprisingly useful. It puts restrictions on when we may have an injective function. The name of the theorem is inspired by the following idea: If pigeons wish to roost in a house with pigeonholes and , then it must be the case that at least one hole contains more than one pigeon. Note that 2 is the smallest value of that makes sense in the hypothesis below.   Pigeonhole Principle   If and with , then is not injective.      God created infinity, and man, unable to understand infinity, had to invent finite sets.  Gian-Carlo Rota, mathematician & philosopher   "
},
{
  "id": "sec_Finite_Sets-3",
  "level": "2",
  "url": "sec_Finite_Sets.html#sec_Finite_Sets-3",
  "type": "Definition",
  "number": "9.17",
  "title": "",
  "body": "  For each , define .   "
},
{
  "id": "sec_Finite_Sets-6",
  "level": "2",
  "url": "sec_Finite_Sets.html#sec_Finite_Sets-6",
  "type": "Definition",
  "number": "9.18",
  "title": "",
  "body": "  A set is finite if or for some . If , then we say that has cardinality and if , then we say that has cardinality .   "
},
{
  "id": "thm_finiteSetsSameCardinality",
  "level": "2",
  "url": "sec_Finite_Sets.html#thm_finiteSetsSameCardinality",
  "type": "Theorem",
  "number": "9.19",
  "title": "",
  "body": "  If is finite and , then is finite.   "
},
{
  "id": "thm_increaseCardinality",
  "level": "2",
  "url": "sec_Finite_Sets.html#thm_increaseCardinality",
  "type": "Theorem",
  "number": "9.20",
  "title": "",
  "body": "  If has cardinality and , then is finite and has cardinality .   "
},
{
  "id": "thm_subsetsFiniteSets",
  "level": "2",
  "url": "sec_Finite_Sets.html#thm_subsetsFiniteSets",
  "type": "Theorem",
  "number": "9.21",
  "title": "",
  "body": "  For every , every subset of is finite.   "
},
{
  "id": "thm_decreaseCardinality",
  "level": "2",
  "url": "sec_Finite_Sets.html#thm_decreaseCardinality",
  "type": "Theorem",
  "number": "9.22",
  "title": "",
  "body": "  If has cardinality , then for all , is finite and has cardinality .   "
},
{
  "id": "thm_cardinalityProperSubsetsFinite",
  "level": "2",
  "url": "sec_Finite_Sets.html#thm_cardinalityProperSubsetsFinite",
  "type": "Theorem",
  "number": "9.23",
  "title": "",
  "body": "  Every subset of a finite set is finite. In particular, if is a finite set, then for all proper subsets of .   "
},
{
  "id": "sec_Finite_Sets-17",
  "level": "2",
  "url": "sec_Finite_Sets.html#sec_Finite_Sets-17",
  "type": "Theorem",
  "number": "9.24",
  "title": "",
  "body": "  If is a finite collection of finite sets, then is finite.   "
},
{
  "id": "sec_Finite_Sets-18",
  "level": "2",
  "url": "sec_Finite_Sets.html#sec_Finite_Sets-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pigeonhole Principle "
},
{
  "id": "sec_Finite_Sets-19",
  "level": "2",
  "url": "sec_Finite_Sets.html#sec_Finite_Sets-19",
  "type": "Theorem",
  "number": "9.25",
  "title": "Pigeonhole Principle.",
  "body": " Pigeonhole Principle   If and with , then is not injective.   "
},
{
  "id": "sec_Infinite_Sets",
  "level": "1",
  "url": "sec_Infinite_Sets.html",
  "type": "Section",
  "number": "9.3",
  "title": "Infinite Sets",
  "body": " Infinite Sets  In the previous section, we explored finite sets. Now, let's tinker with infinite sets.    A set is infinite if is not finite.    Let's see if we can utilize this definition to prove that the set of natural numbers is infinite. For sake of a contradiction, assume otherwise. Then there exists such that , which implies that there exists a bijection . What can you say about the number ?    The set of natural numbers is infinite.    The next theorem is analogous to Theorem , but for infinite sets. To prove this theorem, try a proof by contradiction. You should end up composing two bijections, say and for some . As we shall see later, the converse of this theorem is not true in general.    If is infinite and , then is infinite.      Quickly verify that the following sets are infinite by appealing to Theorem , Theorem , or Problem .   The set of odd natural numbers    The set of even natural numbers                      Notice that Definition tells us what infinite sets are not, but it doesn't really tell us what they are. In light of Theorem , one way of thinking about infinite sets is as follows. Suppose is some nonempty set. Let's select a random element from and set it aside. We will call this element the first element. Then we select one of the remaining elements and set is aside, as well. This is the second element. Imagine we continue this way, choosing a third element, and fourth element, etc. If the set is infinite, we should never run out of elements to select. Otherwise, we would create a bijection with for some .  The next problem, sometimes referred to as the Hilbert Hotel, named after the German mathematician David Hilbert (1862 1942), illustrates another way of thinking about infinite sets.    The Infinite Hotel has rooms numbered . Every room in the Infinite Hotel is currently occupied.   Is it possible to make room for one more guest (assuming they want a room all to themselves)?    An infinite number of new guests, say , show up in the lobby and each demands a room. Is it possible to make room for all the new guests even if the hotel is already full?       The previous problem verifies that there exists a proper subset of the natural numbers that is in bijection with the natural numbers themselves. We also witnessed this in Parts (a) and (b) of Problem . Notice that Theorem forbids this type of behavior for finite sets. It turns out that this phenomenon is true for all infinite sets. The next theorem verifies that that the two viewpoints of infinite sets discussed above are valid. To prove this theorem, we need to prove that the three statements are equivalent. One possible approach is to prove (i) if and only if (ii) and (ii) if and only if (iii). For (i) implies (ii), construct recursively. For (ii) implies (i), try a proof by contradiction. For (ii) implies (iii), let and show that can be put in bijection with . Lastly, for (iii) implies (ii), suppose is a bijection for some proper subset of . Let . Define via , where means compose with itself times.    The following statements are equivalent.   The set is infinite.    There exists an injective function .    The set can be put in bijection with a proper subset of (i.e., there exists a proper subset of such that ).       It is worth mentioning that for the previous theorem, (iii) implies (i) follows immediately from the contrapositive of Theorem . When proving (i) implies (ii) in the previous theorem, did you apply the Axiom of Choice? If so, where?    A set is infinite if and only if it has an infinite subset.      If is an infinite set, then .      Find a new proof of Theorem that uses (iii) implies (i) from Theorem .      Quickly verify that the following sets are infinite by appealing to either Theorem (use (ii) implies (i)) or Corollary .   Set of odd natural numbers    Set of even natural numbers                        Set of perfect squares in                    An ounce of practice is worth more than tons of preaching.  Mahatma Gandhi, political activist   "
},
{
  "id": "def_infiniteSet",
  "level": "2",
  "url": "sec_Infinite_Sets.html#def_infiniteSet",
  "type": "Definition",
  "number": "9.26",
  "title": "",
  "body": "  A set is infinite if is not finite.   "
},
{
  "id": "thm_naturalNumbersInfinite",
  "level": "2",
  "url": "sec_Infinite_Sets.html#thm_naturalNumbersInfinite",
  "type": "Theorem",
  "number": "9.27",
  "title": "",
  "body": "  The set of natural numbers is infinite.   "
},
{
  "id": "thm_infiniteSetsSameCardinality",
  "level": "2",
  "url": "sec_Infinite_Sets.html#thm_infiniteSetsSameCardinality",
  "type": "Theorem",
  "number": "9.28",
  "title": "",
  "body": "  If is infinite and , then is infinite.   "
},
{
  "id": "prob_someInfiniteSets",
  "level": "2",
  "url": "sec_Infinite_Sets.html#prob_someInfiniteSets",
  "type": "Problem",
  "number": "9.29",
  "title": "",
  "body": "  Quickly verify that the following sets are infinite by appealing to Theorem , Theorem , or Problem .   The set of odd natural numbers    The set of even natural numbers                     "
},
{
  "id": "sec_Infinite_Sets-11",
  "level": "2",
  "url": "sec_Infinite_Sets.html#sec_Infinite_Sets-11",
  "type": "Problem",
  "number": "9.30",
  "title": "",
  "body": "  The Infinite Hotel has rooms numbered . Every room in the Infinite Hotel is currently occupied.   Is it possible to make room for one more guest (assuming they want a room all to themselves)?    An infinite number of new guests, say , show up in the lobby and each demands a room. Is it possible to make room for all the new guests even if the hotel is already full?      "
},
{
  "id": "thm_infiniteSetTFAE",
  "level": "2",
  "url": "sec_Infinite_Sets.html#thm_infiniteSetTFAE",
  "type": "Theorem",
  "number": "9.31",
  "title": "",
  "body": "  The following statements are equivalent.   The set is infinite.    There exists an injective function .    The set can be put in bijection with a proper subset of (i.e., there exists a proper subset of such that ).      "
},
{
  "id": "cor_infiniteSetInfiniteSubset",
  "level": "2",
  "url": "sec_Infinite_Sets.html#cor_infiniteSetInfiniteSubset",
  "type": "Corollary",
  "number": "9.32",
  "title": "",
  "body": "  A set is infinite if and only if it has an infinite subset.   "
},
{
  "id": "cor_card_N__less_than_or_equal_to_infinite_set",
  "level": "2",
  "url": "sec_Infinite_Sets.html#cor_card_N__less_than_or_equal_to_infinite_set",
  "type": "Corollary",
  "number": "9.33",
  "title": "",
  "body": "  If is an infinite set, then .   "
},
{
  "id": "sec_Infinite_Sets-17",
  "level": "2",
  "url": "sec_Infinite_Sets.html#sec_Infinite_Sets-17",
  "type": "Problem",
  "number": "9.34",
  "title": "",
  "body": "  Find a new proof of Theorem that uses (iii) implies (i) from Theorem .   "
},
{
  "id": "prob_moreInfiniteSets",
  "level": "2",
  "url": "sec_Infinite_Sets.html#prob_moreInfiniteSets",
  "type": "Problem",
  "number": "9.35",
  "title": "",
  "body": "  Quickly verify that the following sets are infinite by appealing to either Theorem (use (ii) implies (i)) or Corollary .   Set of odd natural numbers    Set of even natural numbers                        Set of perfect squares in                 "
},
{
  "id": "sec_Countable_Sets",
  "level": "1",
  "url": "sec_Countable_Sets.html",
  "type": "Section",
  "number": "9.4",
  "title": "Countable Sets",
  "body": " Countable Sets  Recall that if , then we say that has cardinality 0. Also, if for , then we say that has cardinality . We have a special way of describing sets that are in bijection with the natural numbers.    If is a set such that , then we say that is denumerable and has cardinality (read aleph naught ).    Notice if a set has cardinality , or , we can label the elements in as first , second , and so on. That is, we can count the elements in these situations. Certainly, if a set has cardinality 0, counting is not an issue. This idea leads to the following definition.    A set is called countable if is finite or denumerable. A set is called uncountable if it is not countable.      Quickly justify that each of the following sets is countable. Feel free to appeal to previous problems. Which sets are denumerable?        Set of odd natural numbers    Set of even natural numbers         Set of perfect squares in                  Utilize Theorem or Corollary when proving the next result.    Every infinite set contains a denumerable subset.      Let and be sets such that is countable. If is a bijection, then is countable.    For the next proof, consider the cases when is finite versus infinite. The contrapositive of Corollary should be useful for the case when is finite.    Every subset of a countable set is countable.      A set is countable if and only if it has the same cardinality of some subset of the natural numbers.      If is a surjective function, then is countable.    Loosely speaking, the next theorem tells us that we can arrange all of the rational numbers then count them first , second , third , etc. Given the fact that between any two distinct rational numbers on the number line, there are an infinite number of other rational numbers (justified by taking repeated midpoints), this may seem counterintuitive.  Here is one possible approach for proving the next theorem. Make a table with column headings and row headings . If a column has heading and a row has heading , then the entry in the table corresponds to the fraction . Find a way to zig-zag through the table making sure to hit every entry in the table (not including column and row headings) exactly once. This justifies that there is a bijection between and the entries in the table. Do you see why? But now notice that every rational number appears an infinite number of times in the table. Resolve this by appealing to Theorem .    The set of rational numbers is countable.      If and are countable sets, then is countable.    We would like to prove a stronger result than the previous theorem. To do so, we need an intermediate result.    Let be a collection of sets. Define and for each natural number , define .  Then we we have the following:   The collection is pairwise disjoint.     .       The next theorem states that the union of a countable collection of countable sets is countable. To prove this, consider two cases:   The collection of sets is finite.    The collection of sets is infinite.     To handle the first case, use induction together with Theorem . The second case is substantially more challenging. First, use Theorem to construct a collection of pairwise disjoint sets whose union is equal to the union of the original collection. Since each is a subset of one of the sets in the original collection and each of these sets is countable, each is also countable by Theorem . This implies that for each , we can write , where the set may be finite or infinite. From here, we outline two different approaches for continuing. One approach is to construct a bijection from to using Figure as inspiration. One thing you will need to address is what to do when a set in the collection is finite. For the second approach, define via , verify that this function is injective, and then appeal to Theorem . Try using both of these approaches when tackling the proof of the following theorem.   Inspiration for one possible approach to proving Theorem .        Let be equal to either or for some . If is a countable collection of sets such that each is countable, then is countable.    Did you use the Axiom of Choice when proving the previous theorem? If so, where?    If and are countable sets, then is countable.      The set of all finite sequences of 0's and 1's (e.g., is a finite sequence consisting of 0's and 1') is countable.      The collection of all finite subsets of a countable set is countable.      Vulnerability is not winning or losing; it's having the courage to show up and be seen when we have no control over the outcome.  Brené Brown, storyteller & author   "
},
{
  "id": "sec_Countable_Sets-3",
  "level": "2",
  "url": "sec_Countable_Sets.html#sec_Countable_Sets-3",
  "type": "Definition",
  "number": "9.36",
  "title": "",
  "body": "  If is a set such that , then we say that is denumerable and has cardinality (read aleph naught ).   "
},
{
  "id": "def_countable",
  "level": "2",
  "url": "sec_Countable_Sets.html#def_countable",
  "type": "Definition",
  "number": "9.37",
  "title": "",
  "body": "  A set is called countable if is finite or denumerable. A set is called uncountable if it is not countable.   "
},
{
  "id": "sec_Countable_Sets-6",
  "level": "2",
  "url": "sec_Countable_Sets.html#sec_Countable_Sets-6",
  "type": "Problem",
  "number": "9.38",
  "title": "",
  "body": "  Quickly justify that each of the following sets is countable. Feel free to appeal to previous problems. Which sets are denumerable?        Set of odd natural numbers    Set of even natural numbers         Set of perfect squares in                 "
},
{
  "id": "sec_Countable_Sets-8",
  "level": "2",
  "url": "sec_Countable_Sets.html#sec_Countable_Sets-8",
  "type": "Theorem",
  "number": "9.39",
  "title": "",
  "body": "  Every infinite set contains a denumerable subset.   "
},
{
  "id": "sec_Countable_Sets-9",
  "level": "2",
  "url": "sec_Countable_Sets.html#sec_Countable_Sets-9",
  "type": "Theorem",
  "number": "9.40",
  "title": "",
  "body": "  Let and be sets such that is countable. If is a bijection, then is countable.   "
},
{
  "id": "thm_subsetsCountableSets",
  "level": "2",
  "url": "sec_Countable_Sets.html#thm_subsetsCountableSets",
  "type": "Theorem",
  "number": "9.41",
  "title": "",
  "body": "  Every subset of a countable set is countable.   "
},
{
  "id": "sec_Countable_Sets-12",
  "level": "2",
  "url": "sec_Countable_Sets.html#sec_Countable_Sets-12",
  "type": "Theorem",
  "number": "9.42",
  "title": "",
  "body": "  A set is countable if and only if it has the same cardinality of some subset of the natural numbers.   "
},
{
  "id": "sec_Countable_Sets-13",
  "level": "2",
  "url": "sec_Countable_Sets.html#sec_Countable_Sets-13",
  "type": "Theorem",
  "number": "9.43",
  "title": "",
  "body": "  If is a surjective function, then is countable.   "
},
{
  "id": "sec_Countable_Sets-16",
  "level": "2",
  "url": "sec_Countable_Sets.html#sec_Countable_Sets-16",
  "type": "Theorem",
  "number": "9.44",
  "title": "",
  "body": "  The set of rational numbers is countable.   "
},
{
  "id": "thm_union_of_countable_sets",
  "level": "2",
  "url": "sec_Countable_Sets.html#thm_union_of_countable_sets",
  "type": "Theorem",
  "number": "9.45",
  "title": "",
  "body": "  If and are countable sets, then is countable.   "
},
{
  "id": "thm_retool_infinite_collection",
  "level": "2",
  "url": "sec_Countable_Sets.html#thm_retool_infinite_collection",
  "type": "Theorem",
  "number": "9.46",
  "title": "",
  "body": "  Let be a collection of sets. Define and for each natural number , define .  Then we we have the following:   The collection is pairwise disjoint.     .      "
},
{
  "id": "fig_zig_zag",
  "level": "2",
  "url": "sec_Countable_Sets.html#fig_zig_zag",
  "type": "Figure",
  "number": "9.2",
  "title": "",
  "body": " Inspiration for one possible approach to proving Theorem .     "
},
{
  "id": "thm_countable_union_of_countable_sets",
  "level": "2",
  "url": "sec_Countable_Sets.html#thm_countable_union_of_countable_sets",
  "type": "Theorem",
  "number": "9.47",
  "title": "",
  "body": "  Let be equal to either or for some . If is a countable collection of sets such that each is countable, then is countable.   "
},
{
  "id": "sec_Countable_Sets-25",
  "level": "2",
  "url": "sec_Countable_Sets.html#sec_Countable_Sets-25",
  "type": "Theorem",
  "number": "9.48",
  "title": "",
  "body": "  If and are countable sets, then is countable.   "
},
{
  "id": "sec_Countable_Sets-26",
  "level": "2",
  "url": "sec_Countable_Sets.html#sec_Countable_Sets-26",
  "type": "Theorem",
  "number": "9.49",
  "title": "",
  "body": "  The set of all finite sequences of 0's and 1's (e.g., is a finite sequence consisting of 0's and 1') is countable.   "
},
{
  "id": "sec_Countable_Sets-27",
  "level": "2",
  "url": "sec_Countable_Sets.html#sec_Countable_Sets-27",
  "type": "Theorem",
  "number": "9.50",
  "title": "",
  "body": "  The collection of all finite subsets of a countable set is countable.   "
},
{
  "id": "sec_Uncountable_Sets",
  "level": "1",
  "url": "sec_Uncountable_Sets.html",
  "type": "Section",
  "number": "9.5",
  "title": "Uncountable Sets",
  "body": " Uncountable Sets  Recall from Definition that a set is uncountable if is not countable. Since all finite sets are countable, the only way a set could be uncountable is if it is infinite. It follows that a set is uncountable if and only if there is never a bijection between and . It is not clear that uncountable sets even exist! It turns out that uncountable sets do exist and in this section, we will discover a few of them.  Our first task is to prove that the interval is uncountable. By Problem (h), we know that is an infinite set, so it is at least plausible that is uncountable. The following problem outlines the proof of Theorem . Our approach is often referred to as Cantor's Diagonalization Argument , named after German mathematician Georg Cantor (1845 1918).  Before we get started, recall that every number in can be written in decimal form. However, there may be more than one way to write a given number in decimal form. For example, equals . A number in is said to be in standard decimal form if there is no such that for all , . That is, a number is in standard decimal form if and only if its decimal expansion does not end with a repeating sequence of 9's. For example, is in standard decimal form while is not, even though both represent the same number. It turns out that every real number can be expressed uniquely in standard decimal form. We will take this fact for granted.    For sake of a contradiction, assume the interval is countable. Then there exists a bijection . For each , its image under is some number in . Write , where is the first digit in the standard decimal form for the image of , is the second digit, and so on. If terminates after digits, then our convention will be to continue the decimal expansion with 0's. Now, define , where    Prove that the decimal expansion that defines above is in standard decimal form.    Prove that for all , .    Explain why cannot be surjective and why this is a contradiction.     You just proved that the interval cannot be countable!    The previous problem proves following theorem.    The open interval is uncountable.    Loosely speaking, what Theorem says is that the open interval is bigger in terms of the number of elements it contains than the natural numbers and even the rational numbers. This shows that there are infinite sets of different sizes! We now know there is at least one uncountable set, namely the interval . The next three results are useful for finding other uncountable sets. For the first theorem, try a proof by contradiction and take a look at Theorem .    If and are sets such that and is uncountable, then is uncountable.      If and are sets such that is uncountable and is countable, then is uncountable.      If is an injective function and is uncountable, then is uncountable.    Since the interval is uncountable and , it follows immediately from Theorem that is also uncountable. The next theorem tells us that and actually have the same cardinality! To prove this, consider the function defined via .    The set of real numbers is uncountable. In particular, .    The continuum hypothesis originally proposed by Cantor in 1878 states that there is no set whose cardinality is strictly between that of the natural numbers and the real numbers. Cantor unsuccessfully attempted to prove the continuum hypothesis for several years. It follows from the work of Paul Cohen (1934 2007) and Kurt Gödel (1906 1978) that the continuum hypothesis and its negation are independent of the Zermelo-Fraenkel axioms of set theory (briefly discussed at the end of Section ). That is, either the continuum hypothesis or its negation can be added as an axiom to ZFC set theory, with the resulting theory being consistent if and only if ZFC is consistent (i.e., no contradictions are produced). Nowadays, most set theorists believe that the continuum hypothesis should be false.    If with , then , , , and are all uncountable.      The set of irrational numbers is uncountable.      The set of complex numbers is uncountable.      Determine whether each of the following statements is true or false. If a statement is true, prove it. Otherwise, provide a counterexample.   If and are sets such that is uncountable, then is uncountable.    If and are sets such that is uncountable, then is uncountable.    If and are sets such that is uncountable, then is uncountable.    If and are sets such that is uncountable, then is uncountable.       An approach similar to Cantor's Diagonalization Argument will be helpful when approaching the next problem.    Let be the set of infinite sequences of 0's and 1's. Determine whether is countable or uncountable and prove that your answer is correct.      If is the set from Problem , then .      The power set of the natural numbers is uncountable.    Notice that is countable while is uncountable. That is, the power set of the natural numbers has cardinality strictly larger than the natural numbers. We generalize this phenomenon in the next theorem.  According to Theorem and Corollary , and are both uncountable. In fact, , which we state without proof. However, it turns out that the two uncountable sets may or may not have the same cardinality. Perhaps surprisingly, there are sets that are even bigger than the set of real numbers. The next theorem is named after Georg Cantor, who first stated and proved it at the end of the 19th century. The theorem states that given any set, we can always increase the cardinality by considering its power set. That is, if is a set, has strictly greater cardinality than itself. For finite sets, Cantor's theorem follows from and (both of which we proved via induction). Perhaps much more surprising is that Cantor discovered an elegant argument that is applicable to any set, whether finite or infinite. To prove Cantor's Theorem, first exhibit an injective function from to . This proves that . To show that , try a proof by contradiction. That is, assume there exists a bijective function . Derive a contradiction by considering the set .   Cantor's Theorem   If is a set, then .    Recall that cardinality provides a way for talking about how big a set is. The fact that the natural numbers and the real numbers have different cardinality (one countable, the other uncountable), tells us that there are at least two different sizes of infinity . By iteratively taking the power set of an infinite set and applying Cantor's Theorem we obtain an endless hierarchy of cardinalities, each strictly larger than the one before it. Colloquially, this implies that there are infinitely many sizes of infinity and there is no largest infinity .    If you want to sharpen a sword, you have to remove a little metal.  Author Unknown   "
},
{
  "id": "sec_Uncountable_Sets-3",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#sec_Uncountable_Sets-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cantor's Diagonalization Argument "
},
{
  "id": "sec_Uncountable_Sets-4",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#sec_Uncountable_Sets-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard decimal form "
},
{
  "id": "sec_Uncountable_Sets-5",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#sec_Uncountable_Sets-5",
  "type": "Problem",
  "number": "9.51",
  "title": "",
  "body": "  For sake of a contradiction, assume the interval is countable. Then there exists a bijection . For each , its image under is some number in . Write , where is the first digit in the standard decimal form for the image of , is the second digit, and so on. If terminates after digits, then our convention will be to continue the decimal expansion with 0's. Now, define , where    Prove that the decimal expansion that defines above is in standard decimal form.    Prove that for all , .    Explain why cannot be surjective and why this is a contradiction.     You just proved that the interval cannot be countable!   "
},
{
  "id": "thm__0_1_uncountable",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#thm__0_1_uncountable",
  "type": "Theorem",
  "number": "9.52",
  "title": "",
  "body": "  The open interval is uncountable.   "
},
{
  "id": "thm_containsUncountableSubset",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#thm_containsUncountableSubset",
  "type": "Theorem",
  "number": "9.53",
  "title": "",
  "body": "  If and are sets such that and is uncountable, then is uncountable.   "
},
{
  "id": "sec_Uncountable_Sets-10",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#sec_Uncountable_Sets-10",
  "type": "Corollary",
  "number": "9.54",
  "title": "",
  "body": "  If and are sets such that is uncountable and is countable, then is uncountable.   "
},
{
  "id": "sec_Uncountable_Sets-11",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#sec_Uncountable_Sets-11",
  "type": "Theorem",
  "number": "9.55",
  "title": "",
  "body": "  If is an injective function and is uncountable, then is uncountable.   "
},
{
  "id": "thm_R_uncountable",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#thm_R_uncountable",
  "type": "Theorem",
  "number": "9.56",
  "title": "",
  "body": "  The set of real numbers is uncountable. In particular, .   "
},
{
  "id": "sec_Uncountable_Sets-14",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#sec_Uncountable_Sets-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuum hypothesis "
},
{
  "id": "sec_Uncountable_Sets-15",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#sec_Uncountable_Sets-15",
  "type": "Theorem",
  "number": "9.57",
  "title": "",
  "body": "  If with , then , , , and are all uncountable.   "
},
{
  "id": "sec_Uncountable_Sets-16",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#sec_Uncountable_Sets-16",
  "type": "Theorem",
  "number": "9.58",
  "title": "",
  "body": "  The set of irrational numbers is uncountable.   "
},
{
  "id": "sec_Uncountable_Sets-17",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#sec_Uncountable_Sets-17",
  "type": "Theorem",
  "number": "9.59",
  "title": "",
  "body": "  The set of complex numbers is uncountable.   "
},
{
  "id": "sec_Uncountable_Sets-18",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#sec_Uncountable_Sets-18",
  "type": "Problem",
  "number": "9.60",
  "title": "",
  "body": "  Determine whether each of the following statements is true or false. If a statement is true, prove it. Otherwise, provide a counterexample.   If and are sets such that is uncountable, then is uncountable.    If and are sets such that is uncountable, then is uncountable.    If and are sets such that is uncountable, then is uncountable.    If and are sets such that is uncountable, then is uncountable.      "
},
{
  "id": "prob_sequence01",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#prob_sequence01",
  "type": "Problem",
  "number": "9.61",
  "title": "",
  "body": "  Let be the set of infinite sequences of 0's and 1's. Determine whether is countable or uncountable and prove that your answer is correct.   "
},
{
  "id": "sec_Uncountable_Sets-21",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#sec_Uncountable_Sets-21",
  "type": "Theorem",
  "number": "9.62",
  "title": "",
  "body": "  If is the set from Problem , then .   "
},
{
  "id": "cor_power_set_of_N_uncountable",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#cor_power_set_of_N_uncountable",
  "type": "Corollary",
  "number": "9.63",
  "title": "",
  "body": "  The power set of the natural numbers is uncountable.   "
},
{
  "id": "thm_Cantors_Theorem",
  "level": "2",
  "url": "sec_Uncountable_Sets.html#thm_Cantors_Theorem",
  "type": "Theorem",
  "number": "9.64",
  "title": "Cantor’s Theorem.",
  "body": " Cantor's Theorem   If is a set, then .   "
},
{
  "id": "appendix_elements_of_style",
  "level": "1",
  "url": "appendix_elements_of_style.html",
  "type": "Appendix",
  "number": "A",
  "title": "Elements of Style for Proofs",
  "body": " Elements of Style for Proofs  Mathematics is about discovering proofs and writing them clearly and compellingly. The following guidelines apply whenever you write a proof. Keep these guidelines handy so that you may refer to them as you write your proofs.    The burden of communication lies on you, not on your reader. It is your job to explain your thoughts; it is not your reader's job to guess them from a few hints. You are trying to convince a skeptical reader who does not believe you, so you need to argue with airtight logic in crystal clear language; otherwise the reader will continue to doubt. If you did not write something on the paper, then (a) you did not communicate it,(b) the reader did not learn it, and (c) the grader has to assume you did not know it in the first place.     Tell the reader what you are proving or citing. The reader does not necessarily know or remember what Theorem 2.13 is. Even a professor grading a stack of papers might lose track from time to time. Therefore, the statement you are proving should be on the same page as the beginning of your proof. In most proofs you will want to refer to an earlier definition, problem, theorem, or corollary. In this case, you should reference the statement by number, but it is also helpful to the reader to summarize the statement you are citing. For example, you might write something like, ``By Theorem 2.3, the sum of two consecutive integers is odd, and so .\"     Use English words. Although there will usually be equations or mathematical statements in your proofs, use English sentences to connect them and display their logical relationships. If you look at proofs in textbooks and research papers, you will see that they consist mostly of English words.     Use complete sentences. If you wrote a history essay in sentence fragments, the reader would not understand what you meant; likewise in mathematics you must use complete sentences, with verbs, to convey your logical train of thought. Some complete sentences can be written purely in mathematical symbols, such as equations (e.g., ), inequalities (e.g., ), and other relations (like or ). These statements usually express a relationship between two mathematical objects , like numbers or sets. However, it is considered bad style to begin a sentence with symbols. A common phrase to use to avoid starting a sentence with mathematical symbols is We see that... .     Show the logical connections among your sentences. Use phrases like Therefore , Thus , Hence , Then , since , because , if , then , or if and only if to connect your sentences.     Know the difference between statements and objects. A mathematical object is a thing , a noun, such as a set, an element, a number, an ordered pair, a vector space, etc. Objects either exist or do not exist. Statements, on the other hand, are mathematical sentences : they are either true or false. When you see or write a cluster of math symbols, be sure you know whether it is an object (e.g., ) or a statement (e.g., ). One way to tell is that every mathematical statement includes a verb, such as , , , divides , etc.     The symbol means equals . Do not write unless you mean that actually equals . This guideline seems obvious, but there is a great temptation to be sloppy. In calculus, for example, some people might write (which is false), when they really mean that if , then .      Do not interchange and . The equals sign connects two objects , as in ; the symbol is an abbreviation for implies and connects two statements , as in . You should avoid using in formal write-ups of proofs.     Avoid logical symbols in your proofs. Similar to , you should avoid using the logical symbols , and in your formal write-ups. These symbols are useful for abbreviating in your scratch work.     Say exactly what you mean. Just as is sometimes abused, so too people sometimes write when they mean , or write when they mean that is an entry in matrix . Mathematics is a very precise language, and there is a way to say exactly what you mean; find it and use it.     Do not utilize anything unproven. Every statement in your proof should be something you know to be true. The reader expects your proof to be a series of statements, each proven by the statements that came before it. If you ever need to write something you do not yet know is true, you must preface it with words like assume,  suppose, or if if you are temporarily assuming it, or with words like we need to show that or we claim that if it is your goal. Otherwise, the reader will think they have missed part of your proof.     Write strings of equalities (or inequalities) in the proper order. When your reader sees something like , they expect to understand easily why , why , and why , and they expect the point of the entire line to be the more complicated fact that . For example, if you were computing the distance of the point from the origin, you could write . In this string of equalities, the first equals sign is true by the Pythagorean theorem, the second is just arithmetic, and the conclusion is that the first item equals the last item: . A common error is to write strings of equations in the wrong order. For example, if you were to write , your reader would understand the first equals sign, would be baffled as to how we know , and would be utterly perplexed as to why you wanted or needed to go through to prove that .     Avoid circularity. Be sure that no step in your proof makes use of the conclusion!     Do not write the proof backwards. Beginning students often attempt to write proofs like the following, which attempts to prove that : Notice what has happened here: the student started with the conclusion, and deduced the true statement . In other words, they have proved If , then , which is true but highly uninteresting. Now this is not a bad way of finding a proof. Working backwards from your goal often is a good strategy on your scratch paper , but when it is time to write your proof, you have to start with the hypotheses and work to the conclusion. Here is an example of a suitable proof for the desired result, where each expression follows from the one immediately proceeding it: .     Be concise. Many beginning proof writers err by writing their proofs too short, so that the reader cannot understand their logic. It is nevertheless quite possible to be too wordy, and if you find yourself writing a full-page essay, it is possible that you do not really have a proof, but just some intuition. When you find a way to turn that intuition into a formal proof, it will be much shorter.     Introduce every symbol you use. If you use the letter , the reader should know exactly what is. Good phrases for introducing symbols include Let ,  Let be the least integer such that ,  For every real number , and Suppose .     Use appropriate quantifiers (once). When you introduce a variable , it must be clear to your reader whether you mean for all or just for some . If you just say something like where , the word where does not indicate whether you mean for all or some . Phrases indicating the quantifier for all include Let ; for all ; for every ; for each ; etc. Phrases indicating the quantifier some or there exists include for some ; there exists an ; for a suitable choice of ; etc. Once you have said Let , the letter has its meaning defined. You do not need to say for all again, and you definitely should not say let again.     Use a symbol to mean only one thing. Once you use the letter once, its meaning is fixed for the duration of your proof. You cannot use to mean anything else. There is an exception to this guideline. Sometimes a proof will include multiple subproofs that are distinct from each other. In this case, you can reuse a variable or symbol as long as it is clear to the reader that you have concluded with the previous subproof and have moved onto a new subproof.     Do not prove by example.  Most problems ask you to prove that something is true for all  You cannot prove this by giving a single example, or even a hundred. Your proof will need to be a logical argument that holds for every example there possibly could be . On the other hand, if the claim that you are trying to prove involves the existence of a mathematical object with a particular property, then providing a specific example is sufficient.     Write Let , not Let .  When you have an existing expression, say , and you want to give it a new, simpler name like , you should write Let , which means, Let the new symbol mean . This convention makes it clear to the reader that is the brand-new symbol and is the old expression he\/she already understands. If you were to write it backwards, saying Let , then your startled reader would ask, What if ?      Make your counterexamples concrete and specific. Proofs need to be entirely general, but counterexamples should be concrete. When you provide an example or counterexample, make it as specific as possible. For a set, for example, you must specify its elements, and for a function you must specify the corresponding relation (possibly an algebraic rule) and its domain and codomain. Do not say things like could be one-to-one but not onto ; instead, provide an actual function that is one-to-one but not onto.     Do not include examples in proofs. Including an example very rarely adds anything to your proof. If your logic is sound, then it does not need an example to back it up. If your logic is bad, a dozen examples will not help it (see Guideline ). There are only two valid reasons to include an example in a proof: if it is a counterexample disproving something, or if you are performing complicated manipulations in a general setting and the example is just to help the reader understand what you are saying.     Use scratch paper. Finding your proof will be a long, potentially messy process, full of false starts and dead ends. Do all that on scratch paper until you find a real proof, and only then break out your clean paper to write your final proof carefully. Only sentences that actually contribute to your proof should be part of the proof. Do not just perform a brain dump, throwing everything you know onto the paper before showing the logical steps that prove the conclusion. That is what scratch paper is for.      "
},
{
  "id": "appendix_fancy_math_terms",
  "level": "1",
  "url": "appendix_fancy_math_terms.html",
  "type": "Appendix",
  "number": "B",
  "title": "Fancy Mathematical Terms",
  "body": " Fancy Mathematical Terms  Here are some important mathematical terms that you will encounter throughout mathematics.    Definition a precise and unambiguous description of the meaning of a mathematical term. It characterizes the meaning of a word by giving all the properties and only those properties that must be true.     Theorem a mathematical statement that is proved using rigorous mathematical reasoning. In a mathematical paper, the term theorem is often reserved for the most important results.     Proposition a proved and often interesting result, but generally less important than a theorem. Alternatively, a proposition may refer to a sentence that is either true or false but never both (see Definition ).     Lemma a minor result whose sole purpose is to help in proving a theorem. It is a stepping stone on the path to proving a theorem. Occasionally lemmas can take on a life of their own (Zorn's Lemma, Urysohn's Lemma, Burnside's Lemma, Sperner's Lemma).     Corollary a result in which the (usually short) proof relies heavily on a given theorem (we often say that this is a corollary of Theorem A ).     Conjecture a statement that is unproved, but is believed to be true (Collatz Conjecture, Goldbach Conjecture, Twin prime Conjecture).     Claim an assertion that is then proved. It is often used like an informal lemma.     Counterexample a specific example showing that a statement is false.     Axiom\/Postulate a statement that is assumed to be true without proof. These are the basic building blocks from which all theorems are proved (Euclid's five postulates, axioms of ZFC, Peano axioms).     Identity a mathematical expression giving the equality of two (often variable) quantities (trigonometric identities, Euler's identity).     Paradox a statement that can be shown, using a given set of axioms and definitions, to be both true and false. Paradoxes are often used to show the inconsistencies in a flawed axiomatic theory (e.g., Russell's Paradox). The term paradox is also used informally to describe a surprising or counterintuitive result that follows from a given set of rules (Banach-Tarski Paradox, Alabama Paradox, Gabriel's Horn).     "
},
{
  "id": "appendix_fancy_math_terms-2",
  "level": "2",
  "url": "appendix_fancy_math_terms.html#appendix_fancy_math_terms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition Theorem Proposition proposition Lemma Corollary Conjecture Claim Counterexample Axiom\/Postulate Identity Paradox "
},
{
  "id": "appendix_paradoxes",
  "level": "1",
  "url": "appendix_paradoxes.html",
  "type": "Appendix",
  "number": "C",
  "title": "Paradoxes",
  "body": " Paradoxes  A paradox is a statement that can be shown, using a given set of axioms and definitions, to be both true and false. Recall that an axiom is a statement that is assumed to be true without proof. These are the basic building blocks from which all theorems are proved. Paradoxes are often used to show the inconsistencies in a flawed axiomatic theory. The term paradox is also used informally to describe a surprising or counterintuitive result that follows from a given set of rules. In Section , we encountered two paradoxes:   The Barber of Seville ( Problem )    Russell's Paradox ( Problem )     Below are several additional paradoxes that are worth exploring.    Librarian's Paradox. A librarian is given the unenviable task of creating two new books for the library. Book A contains the names of all books in the library that reference themselves and Book B contains the names of all books in the library that do not reference themselves. But the librarian just created two new books for the library, so their titles must be in either Book A or Book B. Clearly Book A can be listed in Book B, but where should the librarian list Book B?     Liar's Paradox. Consider the statement: this sentence is false. Is it true or false?     Berry Paradox. Consider the claim: every natural number can be unambiguously described in fourteen words or less. It seems clear that this statement is false, but if that is so, then there is some smallest natural number which cannot be unambiguously described in fourteen words or less. Let's call it . But now is the smallest natural number that cannot be unambiguously described in fourteen words or less. This is a complete and unambiguous description of in fourteen words, contradicting the fact that was supposed not to have such a description. Therefore, all natural numbers can be unambiguously described in fourteen words or less!     The Naming Numbers Paradox. Consider the claim: every natural number can be unambiguously described using no more than 50 characters (where a character is a z, 0 9, and a space ). For example, we can describe 9 as 9 or nine or the square of the second prime number. There are only 37 characters, so we can describe at most numbers, which is very large, but not infinite. So the statement is false. However, here is a proof that it is true. Let be the set of natural numbers that can be unambiguously described using no more than 50 characters. For the sake of contradiction, suppose it is not all of . Then there is a smallest number . We can describe as: the smallest natural number not in . Thus can be described using no more than 50 characters. So , a contradiction.     Euathlus and Protagoras. Euathlus wanted to become a lawyer but could not pay Protagoras. Protagoras agreed to teach him under the condition that if Euathlus won his first case, he would pay Protagoras, otherwise not. Euathlus finished his course of study and did nothing. Protagoras sued for his fee. He argued: If Euathlus loses this case, then he must pay (by the judgment of the court). If Euathlus wins this case, then he must pay (by the terms of the contract). He must either win or lose this case. Therefore Euathlus must pay me. But Euathlus had learned well the art of rhetoric. He responded: If I win this case, I do not have to pay (by the judgment of the court). If I lose this case, I do not have to pay (by the contract). I must either win or lose the case. Therefore, I do not have to pay Protagoras.     "
},
{
  "id": "appendix_definitions",
  "level": "1",
  "url": "appendix_definitions.html",
  "type": "Appendix",
  "number": "D",
  "title": "Definitions in Mathematics",
  "body": " Definitions in Mathematics  It is difficult to overstate the importance of definitions in mathematics. Definitions play a different role in mathematics than they do in everyday life.  Suppose you give your friend a piece of paper containing the definition of the rarely-used word rodomontade . According to the Oxford English Dictionary http:\/\/www.oed.com\/view\/Entry\/166837 (OED) it is:  A vainglorious brag or boast; an extravagantly boastful, arrogant, or bombastic speech or piece of writing; an arrogant act.  Give your friend some time to study the definition. Then take away the paper. Ten minutes later ask her to define rodomontade. Most likely she will be able to give a reasonably accurate definition. Maybe she'd say something like, It is a speech or act or piece of writing created by a pompous or egotistical person who wants to show off how great they are. It is unlikely that she will have quoted the OED word-for-word. In everyday English that is fine you would probably agree that your friend knows the meaning of the rodomontade. This is because most definitions are descriptive . They describe the common usage of a word.  Let us take a mathematical example. The OED http:\/\/www.oed.com\/view\/Entry\/40280 gives this definition of continuous .  Characterized by continuity; extending in space without interruption of substance; having no interstices or breaks; having its parts in immediate connection; connected, unbroken.  Likewise, we often hear calculus students speak of a continuous function as one whose graph can be drawn without picking up the pencil. This definition is descriptive. However, as we learned in calculus, the picking-up-the-pencil description is not a perfect description of continuous functions. This is not a mathematical definition.  Mathematical definitions are prescriptive . The definition must prescribe the exact and correct meaning of a word. Contrast the OED's descriptive definition of continuous with the definition of continuous found in a real analysis textbook.  A function is continuous at a point  if, for all , there exists such that whenever (and ) it follows that . If is continuous at every point in the domain , then we say that is continuous on  . This definition is taken from page 109 of Stephen Abbott's Understanding Analysis , but the definition would be essentially the same in any modern real analysis textbook.  In mathematics there is very little freedom in definitions. Mathematics is a deductive theory; it is impossible to state and prove theorems without clear definitions of the mathematical terms. The definition of a term must completely, accurately, and unambiguously describe the term. Each word is chosen very carefully and the order of the words is critical. In the definition of continuity changing there exists to for all, changing the orders of quantifiers, changing to or , or changing to would completely change the meaning of the definition.  What does this mean for you, the student? Our recommendation is that at this stage you memorize the definitions word-for-word. It is the safest way to guarantee that you have it correct. As you gain confidence and familiarity with the subject you may be ready to modify the wording. You may want to change for all to given any or you may want to change to or to the distance between and is less than .   Of course, memorization is not enough; you must have a conceptual understanding of the term, you must see how the formal definition matches up with your conceptual understanding, and you must know how to work with the definition. It is perhaps with the first of these that descriptive definitions are useful. They are useful for building intuition and for painting the big picture. Only after days (weeks, months, years?) of experience does one get an intuitive feel for the epsilon-delta definition of continuity; most mathematicians have the picking-up-the-pencil definitions in their head. This is fine as long as we know that it is imperfect, and that when we prove theorems about continuous functions in mathematics we use the mathematical definition.  We end this discussion with an amusing real-life example in which a descriptive definition was not sufficient. In 2003 the German version of the game show Who wants to be a millionaire? contained the following question: Every rectangle is: (a) a rhombus, (b) a trapezoid, (c) a square, (d) a parallelogram.   The confused contestant decided to skip the question and left with \\euro 4000. Afterward the show received letters from irate viewers. Why were the contestant and the viewers upset with this problem? Clearly a rectangle is a parallelogram, so (d) is the answer. But what about (b)? Is a rectangle a trapezoid? We would describe a trapezoid as a quadrilateral with a pair of parallel sides. But this leaves open the question: can a trapezoid have two pairs of parallel sides or must there only be one pair? The viewers said two pairs is allowed, the producers of the television show said it is not. This is a case in which a clear, precise, mathematical definition is required.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
