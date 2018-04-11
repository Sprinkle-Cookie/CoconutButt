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
- [X] select + key-combo to save off word in page (word, url, context)
- [X] highlight words from history in green
- [ ] Do similar frequency analysis and shading for N-grams (N>1)
- [ ] How many words to highlight (not hardcode 100)
- [X] extend to Hungarian/English/...
  - should program target specific languages OR treat all text equally? (i.e. could throw out words not recognized in target language to avoid confusing the analysis)
- [ ] Shaded color based on word frequency (darker more frequent)
- [X] how to find main text on a page not wikipedia (white-list of common main text div/classes, ask user for div/id tag on given page, maybe based on selection,..)
- [ ] Part-Of-Tag tag coloring
- [ ] Ability to change between coloring schemes (freq, POS,)
- [ ] Bokeh pop-up graphs
- [X] hover word popup
    - [ ] rank out of all words on page
    - [X] number of occurences
- [X] add storage to save vocabulary (save word + context, urla of the word)
- [X] color scheme: frequency color according to some larger corpus (subtlex-it corpus maybe)
- [ ] color scheme: frequency color according to saved vocabulary frequency
- [ ] color scheme: N-grams collocations frequency
- [ ] user interface for change vocabulary or history

# Resources for Development

 - Eloquent Javascript book
 - [Mozilla Webextension reference](https://developer.mozilla.org/en-US/Add-ons/WebExtensions)
 - [Chrome extension reference](https://developer.chrome.com/extensions/devguide)
 - [Awesome-Webextensions repo](https://github.com/bfred-it/Awesome-WebExtensions#libraries-and-frameworks)
 - [General web extensions tutorial](https://blog.codeship.com/webextensions-101/)
 - [Javascript and Browser lessons](http://xahlee.info/js/js_dom_live_object.html)
