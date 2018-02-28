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
