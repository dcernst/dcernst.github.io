from pathlib import Path
import re
root=Path(__file__).resolve().parent
s=(root/'figures.tex').read_text()
def group(pos):
 assert s[pos]=='{'
 start=pos+1;depth=1;i=start
 while depth:
  if s[i]=='%':
   i=s.index('\n',i);continue
  if s[i]=='\\' and i+1<len(s) and s[i+1] in '{}%':
   i+=2;continue
  if s[i]=='{':depth+=1
  elif s[i]=='}':depth-=1
  i+=1
 return s[start:i-1],i
figs=[]
for m in re.finditer(r'^\\figurecell\{',s,re.M):
 title,j=group(m.end()-1);body,j=group(j);figs.append((title,body))
variants=[
('A: Eight, core selection',[0,1,2,5,9,10,8,11]),
('B: Eight, tilings and graphs',[0,1,4,5,9,10,16,8]),
('C: Eight, including the maybes',[1,2,3,7,6,10,8,11]),
('D: Six, core selection',[0,1,2,9,10,8]),
('E: Six, tilings and graphs',[4,1,5,10,16,11]),
('F: Five, more space',[0,1,9,10,8]),
('G: Ten, requested selection',[1,2,15,5,7,11,9,10,4,16]),
]
preamble=s[:s.index(r'\begin{document}')]
preamble=re.sub(r'\\usepackage\[[^\]]*\]\{geometry\}',r'\\usepackage[paperwidth=16in,paperheight=4.5in,margin=.45in]{geometry}',preamble)
preamble+=r'''
\pagestyle{empty}
\newsavebox{\bannerbox}
\newcommand{\banneritem}[1]{%
\sbox{\bannerbox}{\csname bannerfigure#1\endcsname}%
\resizebox*{!}{3cm}{\usebox{\bannerbox}}%
}
'''
for i,(title,body) in enumerate(figs):
 if any(i in ids for _,ids in variants):
  preamble+='\\expandafter\\newcommand\\csname bannerfigure'+str(i)+'\\endcsname{%\n'+body.replace('#','##')+'\n}\n'
text=preamble+'\n\\begin{document}\n'
for n,(title,ids) in enumerate(variants):
 if n:text+='\\newpage\n'
 text+='\\begin{center}\n{\\Large '+title+'}\\par\n\\vspace{12mm}\n'
 text+='\\makebox[\\textwidth][c]{%\n'+'\\hspace{7mm}%\n'.join('\\banneritem{'+str(i)+'}%'+'\n' for i in ids)+'}\n'
 text+='\\par\\vspace{12mm}\n{\\small Left to right: '+ '; '.join(figs[i][0] for i in ids)+'.}\\par\n\\end{center}\n'
text+='\\end{document}\n'
(root/'banner-previews.tex').write_text(text)
print('Created variants:',[(title,len(ids)) for title,ids in variants])
