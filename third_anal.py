import nltk
import bokeh
from bokeh import plotting
from bokeh.plotting import figure, show
from collections import Counter
import pandas as pd
import matplotlib.pyplot as plt
raw = open('ita_hp.txt').read()
tokens = nltk.word_tokenize(raw)
clean_tokens = [ w.lower() for w in tokens if w.isalnum()]
cc = Counter(clean_tokens)
num_appear = Counter()
for w, num in cc.items():
    num_appear[num] += 1
data = list(num_appear.items())
data = sorted(data, key=lambda x: x[0])
fig = figure()
x, y = zip(*data)
fig = figure(y_axis_type='log', x_axis_type='log')
fig.line(x, y)
# show(fig)
chapters = list()
for chp in range(10):
    chapters.append(clean_tokens[chp*(10000): (chp+1)*(10000)])
total_words_chap = [len(chp) for chp in chapters]
# mem = set()
# def count_new(chapter):
    # global mem
    # c = set(chapter)
    # r = c - mem
    # mem = mem.union(r)
    # return len(r)
# count_list = map(count_new, chapters)
# c = list(count_list)
# v = zip(c, total_words_chap)
# listo = list(v)
# y = list(map(lambda x: x[0]/x[1], listo[:-1]))
# fig2 = figure()
# fig2.line(range(9), y)
# show(fig2)
cc_filt = list(filter(lambda x: x[1] >= 3, list(cc.items())))
filter_set = set([a for (a, b) in cc_filt])
mem = set()
def count_new(chapter):
    global mem
    c = set(chapter)
    r = c.intersection(filter_set) - mem
    mem = mem.union(r)
    return len(r)
count_list = map(count_new, chapters)
c = list(count_list)
v = zip(c, total_words_chap)
listo = list(v)
y = list(map(lambda x: x[0]/x[1], listo[:-1]))
fig3 = figure()
fig3.line(range(9), y)
show(fig3)
twice = [k for k, v in cc.items() if v == 2]
distances = []
for tword in twice:
    first = clean_tokens.index(tword)
    second = clean_tokens.index(tword, first+1)
    distances.append(second-first)
pages = [d/300 for d in distances]


ps = pd.Series(pages)
ps.hist(bins=20)
plt.show()

from nltk.corpus import stopwords
st = set(stopwords.words('italian'))
lst = [cc[s] for s in st]
spl = pd.Series(lst)
spl.hist(bins=20)
plt.show()
s = spl[spl <= 100]
s.hist(bins=20)
plt.show()


vocab = filter_set - st
vocablist = list(vocab)
vocablist.sort(key=lambda x: cc[x], reverse=True)
# Of the 3000 words, we got about three fourths
