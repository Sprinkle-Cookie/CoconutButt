import nltk
raw = open('ita_hp.txt').read()
tokens = nltk.word_tokenize()
tokens = nltk.word_tokenize(raw)
clean_tokens = [ w.lower() for w in tokens if w.isalnum()]
clean_tokens.head()
clean_tokens[:10]
from collections import Counter
cc = Counter(clean_tokens)
num_appear = Counter()
for w, num in cc.items():
    num_appear[num] += 1
num_appear.most_common()
num_appear.most_common(10)
num_appear.most_common?
num_appear.items()
data = list(num_appear.items())
data
data = sorted(data, lambda x: return x[0])
data = sorted(data, lambda x: x[0])
data = sorted(data, key=lambda x: x[0])
data
import bokeh
from bokeh import plotting
from bokeh.plotting import figure, show
fig = figure()
fig.line?
data
x, y = zip(data)
x, y = zip(*data)
x
y
fig.line(x, y)
show(fig)
fig = figure?
fig = figure(y_axis_type='log')
fig.line(x, y)
show(fig)
fig = figure(y_axis_type='log', x_axis_type='log')
fig.line(x, y)
show(fig)
%notebook first_analysis.ipynb
%history
history = open("first_anal.txt", "w")
history.write(%history)
t = %history
t
_
%history
%hist
t = %hist
t
%history -o h
h
rest = %history -o
rest
%%capture
%%capture
%history
%history -f history_anal.py
!ls
!cat first_anal.txt
!cat history_anal.py
data[0]
len(clean_tokens)
len(cc)
len(clean_tokens)
chapters = list()
for chp in range(10):
    chapters[chp] = clean_tokens[chp*(10000): (chp+1)*(10000)]
chapters
clean_tokens[10000000:]
for chp in range(10):
    chapters.append(clean_tokens[chp*(10000): (chp+1)*(10000)])
chapters
len(chapters)
len(chapters[0])
len(chapters[1])
c1 = chapters[0]
c1
a = set(c1)
a
len(a)
c2 = set(chapters[1])
c2
len(c2)
a
c2
type(c2)
c2_new_words = c2 - a
len(c2_new_words)
a += c2_new_words
a.union(c2_new_words)
a
len(a)
a
a.union(c2_new_words)
a.union(c2_new_words)
a = a.union(c2_new_words)
a
len(a)
c3 = set(chapters[2])
new3 = c3 - a
len(new3)
a = a.union(c3)
len(a)
a
mem = []
mem = set()
def count_new(chapter):
    c = set(chapter)
    r = c - mem
    mem = mem.union(r)
    return len(r)
count_list = map(count_new, chapters)
count_list
list(count_list)
def count_new(chapter):
    global mem
    c = set(chapter)
    r = c - mem
    mem = mem.union(r)
    return len(r)
count_list = map(count_new, chapters)
mem = set()
def count_new(chapter):
    global mem
    c = set(chapter)
    r = c - mem
    mem = mem.union(r)
    return len(r)
 count_list = map(count_new, chapters)
list(count_list)
fracts = zip(count_list, [len(c) for c in chapters])
fracts
list(fracts)
total_words_chap = [len(c) for c in chapters]
total_words_chap
count_list = list(count_list)
fracts = zip(count_list, total_words_chap)
list(fracts)
count_list
 count_list = map(count_new, chapters)
list(count_list)
mem = set()
def count_new(chapter):
    global mem
    c = set(chapter)
    r = c - mem
    mem = mem.union(r)
    return len(r)
 count_list = map(count_new, chapters)
list(count_list)
c = _
c
zip(c, total_words_chap)
v = _
list(v)
listo = _
for (k, v) in listo:
     
    
new_list = []
map(lambda x: x[0]/x[1], listo[:-1])
l = _
list(l)
%history -f history_anal_2.py
