# CoconutButt

## Development

Install the `npm` libraries `webpack`. For any other extra js libraries
add the package name to `package.json` and `require` the package in the
`background.js`.

When testing, after saving changes run:
```
npm install
npm run build
```
before reloading in the browser


## IDEAS

- [X] color common words
- [ ] Do similar frequency analysis and shading for N-grams (N>1)
- [X] extend to Hungarian/English/...
  - should program target specific languages OR treat all text equally? (i.e. could throw out words not recognized in target language to avoid confusing the analysis)
- [ ] Shaded color based on word frequency (darker more frequent)
- [X] how to find main text on a page not wikipedia (white-list of common main text div/classes, ask user for div/id tag on given page, maybe based on selection,..)
- [ ] Part-Of-Tag tag coloring
- [ ] Ability to change between coloring schemes (freq, POS,)
- [ ] Bokeh pop-up graphs
- [ ] double-click on word shows it's definition in pop-up (dictionary API)
- [ ] add storage to save vocabulary (save word + context, urla of the word)
- [X] color scheme: frequency color according to some larger corpus (subtlex-it corpus maybe)
- [ ] color scheme: frequency color according to saved vocabulary frequency
- [ ] color scheme: N-grams collocations frequency
- [ ] user interface for change vocabulary or history

